import {
  users,
  categories,
  articles,
  type User,
  type UpsertUser,
  type Category,
  type InsertCategory,
  type Article,
  type InsertArticle,
  type ArticleWithDetails,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations
  // (IMPORTANT) these user operations are mandatory for Replit Auth.
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(id: number): Promise<Category | undefined>;
  getCategoryByName(name: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  // Articles
  getArticles(limit?: number, offset?: number): Promise<ArticleWithDetails[]>;
  getFeaturedArticles(): Promise<ArticleWithDetails[]>;
  getRecentArticles(limit?: number): Promise<ArticleWithDetails[]>;
  getArticlesByCategory(categoryId: number, limit?: number): Promise<ArticleWithDetails[]>;
  getArticle(id: number): Promise<ArticleWithDetails | undefined>;
  searchArticles(query: string): Promise<ArticleWithDetails[]>;
  createArticle(article: InsertArticle): Promise<Article>;
  incrementViews(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  // (IMPORTANT) these user operations are mandatory for Replit Auth.

  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async getCategories(): Promise<Category[]> {
    return await db.select().from(categories);
  }

  async getCategory(id: number): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.id, id));
    return category;
  }

  async getCategoryByName(name: string): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.name, name));
    return category;
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const [category] = await db
      .insert(categories)
      .values(insertCategory)
      .returning();
    return category;
  }

  async getArticles(limit = 20, offset = 0): Promise<ArticleWithDetails[]> {
    const result = await db
      .select({
        article: articles,
        category: categories,
        author: users,
      })
      .from(articles)
      .leftJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(users, eq(articles.authorId, users.id))
      .where(eq(articles.published, true))
      .orderBy(articles.publishedAt)
      .limit(limit)
      .offset(offset);

    return result.map(row => ({
      ...row.article,
      category: row.category!,
      author: row.author!,
    }));
  }

  async getFeaturedArticles(): Promise<ArticleWithDetails[]> {
    const result = await db
      .select({
        article: articles,
        category: categories,
        author: users,
      })
      .from(articles)
      .leftJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(users, eq(articles.authorId, users.id))
      .where(eq(articles.featured, true))
      .orderBy(articles.publishedAt);

    return result.map(row => ({
      ...row.article,
      category: row.category!,
      author: row.author!,
    }));
  }

  async getRecentArticles(limit = 10): Promise<ArticleWithDetails[]> {
    const result = await db
      .select({
        article: articles,
        category: categories,
        author: users,
      })
      .from(articles)
      .leftJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(users, eq(articles.authorId, users.id))
      .where(eq(articles.published, true))
      .orderBy(articles.publishedAt)
      .limit(limit);

    return result.map(row => ({
      ...row.article,
      category: row.category!,
      author: row.author!,
    }));
  }

  async getArticlesByCategory(categoryId: number, limit = 20): Promise<ArticleWithDetails[]> {
    const result = await db
      .select({
        article: articles,
        category: categories,
        author: users,
      })
      .from(articles)
      .leftJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(users, eq(articles.authorId, users.id))
      .where(eq(articles.categoryId, categoryId))
      .orderBy(articles.publishedAt)
      .limit(limit);

    return result.map(row => ({
      ...row.article,
      category: row.category!,
      author: row.author!,
    }));
  }

  async getArticle(id: number): Promise<ArticleWithDetails | undefined> {
    const result = await db
      .select({
        article: articles,
        category: categories,
        author: users,
      })
      .from(articles)
      .leftJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(users, eq(articles.authorId, users.id))
      .where(eq(articles.id, id));

    if (result.length === 0) return undefined;

    const row = result[0];
    return {
      ...row.article,
      category: row.category!,
      author: row.author!,
    };
  }

  async searchArticles(query: string): Promise<ArticleWithDetails[]> {
    // For now, we'll do a simple text search. In production, you might want to use full-text search
    const result = await db
      .select({
        article: articles,
        category: categories,
        author: users,
      })
      .from(articles)
      .leftJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(users, eq(articles.authorId, users.id))
      .where(eq(articles.published, true));

    const filtered = result.filter(row => 
      row.article.title.toLowerCase().includes(query.toLowerCase()) ||
      row.article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      row.article.content.toLowerCase().includes(query.toLowerCase())
    );

    return filtered.map(row => ({
      ...row.article,
      category: row.category!,
      author: row.author!,
    }));
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const [article] = await db
      .insert(articles)
      .values({
        ...insertArticle,
        publishedAt: insertArticle.published ? new Date() : null,
      })
      .returning();
    return article;
  }

  async incrementViews(id: number): Promise<void> {
    await db
      .update(articles)
      .set({ views: db.query.articles.findFirst({ where: eq(articles.id, id) })?.views + 1 })
      .where(eq(articles.id, id));
  }
}

export const storage = new DatabaseStorage();

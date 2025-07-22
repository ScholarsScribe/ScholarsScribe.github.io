import type { Handler } from "@netlify/functions";
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from '../../shared/schema';
import { eq, desc, or, like } from 'drizzle-orm';

// Configure Neon for serverless
neonConfig.webSocketConstructor = undefined;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool, schema });

export const handler: Handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    const path = event.path.replace('/.netlify/functions/articles', '');
    
    if (event.httpMethod === 'GET') {
      if (path === '/featured') {
        // Get featured articles
        const articles = await db
          .select()
          .from(schema.articles)
          .where(eq(schema.articles.featured, true))
          .limit(6);
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(articles),
        };
      } else if (path === '/recent') {
        // Get recent articles
        const articles = await db
          .select()
          .from(schema.articles)
          .orderBy(desc(schema.articles.publishedAt))
          .limit(10);
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(articles),
        };
      } else if (path.startsWith('/')) {
        // Get article by ID
        const id = parseInt(path.substring(1));
        const [article] = await db
          .select()
          .from(schema.articles)
          .where(eq(schema.articles.id, id));
        
        if (!article) {
          return {
            statusCode: 404,
            headers,
            body: JSON.stringify({ message: 'Article not found' }),
          };
        }
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(article),
        };
      } else {
        // Get all articles with search/filter
        const { search, category } = event.queryStringParameters || {};
        
        let query = db.select().from(schema.articles);
        
        if (search) {
          query = query.where(
            or(
              like(schema.articles.title, `%${search}%`),
              like(schema.articles.content, `%${search}%`)
            )
          );
        }
        
        if (category) {
          const categoryId = parseInt(category);
          if (!isNaN(categoryId)) {
            query = query.where(eq(schema.articles.categoryId, categoryId));
          }
        }
        
        const articles = await query.orderBy(desc(schema.articles.publishedAt));
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(articles),
        };
      }
    }
    
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
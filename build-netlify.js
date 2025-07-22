#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building Scholars Scribe for Netlify...');

try {
  // Build the frontend
  console.log('Building frontend...');
  execSync('npm run build', { stdio: 'inherit' });

  // Create netlify functions directory in dist
  const functionsDir = path.join(__dirname, 'dist', '.netlify', 'functions');
  fs.mkdirSync(functionsDir, { recursive: true });

  // Build serverless functions
  console.log('Building serverless functions...');
  execSync(`npx esbuild netlify/functions/*.ts --platform=node --packages=external --bundle --format=esm --outdir=${functionsDir}`, { stdio: 'inherit' });

  // Copy necessary files
  console.log('Copying configuration files...');
  
  // Copy shared schema to dist for functions
  const sharedDir = path.join(__dirname, 'dist', 'shared');
  fs.mkdirSync(sharedDir, { recursive: true });
  fs.copyFileSync(
    path.join(__dirname, 'shared', 'schema.ts'),
    path.join(sharedDir, 'schema.ts')
  );

  console.log('✅ Netlify build completed successfully!');
  console.log('📁 Files ready in: dist/');
  console.log('🚀 Deploy with: netlify deploy --prod --dir=dist');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
#!/usr/bin/env node

/**
 * Generate icon imports/exports automatically
 * 
 * Usage: node scripts/generate-icon-exports.js
 * 
 * This script:
 * 1. Scans assets/ folder for SVG files
 * 2. Generates import statements
 * 3. Updates assets/index.tsx with all icons
 */

const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../assets');
const indexFile = path.join(assetsDir, 'index.tsx');

// Get all SVG files from assets folder
const svgFiles = fs.readdirSync(assetsDir)
  .filter(file => file.endsWith('.svg'))
  .sort();

if (svgFiles.length === 0) {
  console.log('No SVG files found in assets/ folder');
  process.exit(0);
}

// Generate import statements
const imports = svgFiles.map(file => {
  const iconName = file.replace('.svg', '');
  
  // Convert kebab-case to PascalCase
  const PascalCaseName = iconName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  // Remove "Icon" suffix if already present to avoid duplication
  const exportName = PascalCaseName.endsWith('Icon') 
    ? PascalCaseName 
    : PascalCaseName + 'Icon';
  
  return {
    import: `import ${exportName} from './${file}';`,
    export: exportName,
    originalName: iconName
  };
});

// Generate the index.tsx content
const content = imports.map(i => i.import).join('\n') + '\n\n' +
  'export {\n' +
  imports.map(i => `\t${i.export},`).join('\n') + '\n' +
  '};\n';

// Write to file
fs.writeFileSync(indexFile, content, 'utf8');

console.log(`✅ Generated ${svgFiles.length} icon imports/exports in assets/index.tsx`);
console.log('\nIcons exported:');
imports.forEach(i => console.log(`  - ${i.export} (from ${i.originalName}.svg)`));


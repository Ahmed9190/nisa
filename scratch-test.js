import fs from 'fs';

const fileContent = fs.readFileSync('c:/Users/HP/Desktop/nisa-website/src/data/products.json', 'utf8');
const data = JSON.parse(fileContent);
const products = data.products || [];

const velora = products.find(p => p.id === 'summer-velora');
console.log(JSON.stringify(velora, null, 2));

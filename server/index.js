// express.js

const process = require('process');
const express = require('express');
const productController = require('./controllers/products');
const app = express();

const PORT = 3000;

console.log(process.cwd())
app
.use('/', express.static(path.join(_dirname, '../client/dist/')))
.use(express.json())
.use('/products', productController)




console.log('1: Trying to start server...');

app.listen(PORT, () => {
    console.log(`2: Server is running at http://localhost:${PORT}`);
});

console.log('3: End of file, waiting for requests...');
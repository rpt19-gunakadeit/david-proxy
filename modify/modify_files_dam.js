const fs = require('fs');

console.log('MODIFYING DAMIEN\'S FILES');

var dam_server_index_js_path = '../damien-styles-and-inventory/server/index.js';
fs.unlinkSync(dam_server_index_js_path);
fs.writeFileSync(dam_server_index_js_path, `const express = require('express')
const app = express()
const port = 4000
const query = require('./../db/queries.js');

app.use(express.static('./client/dist'));

// GET PRODUCT/STYLE INFO
// Sample call: http://localhost:4000/api/products/88
app.get('/api/products/:productId', ( req, res) => {
    console.log(req.params)
    var { productId } = req.params;
    query.getProductInfo(productId)
    .then(productInfo => {
      res.status(200).send(JSON.stringify(productInfo));
    })
});


app.listen(port, () => console.log(\`Nike app listening on port ` + "${port}" + `!\`))`);


var dam_db_queries_js_path = '../damien-styles-and-inventory/db/queries.js';
fs.unlinkSync(dam_db_queries_js_path);
fs.writeFileSync(dam_db_queries_js_path, `const db = require('./index.js');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));

var getProductInfo = (productId) => {
    var productInfo = {};

    return db.queryAsync(\`SELECT * FROM products where id = ` + "${productId}" + `\`)
    .then(product => {
        productInfo.name = product[0].name;
        productInfo.type = "Shoe";
        return db.queryAsync(\`SELECT id, name, code, price_retail, price_sale FROM styles where product_id = ` + "${productId}" + `\`);
    })
    .then(styles => {
        productInfo.styles = styles;
        var inventoriesPerStyle = [];
        styles.forEach(style => {
            inventoriesPerStyle.push(db.queryAsync(\`SELECT size, stock FROM inventory where style_id = ` + "${style.id}" + `\`));
        })
        return Promise.all(inventoriesPerStyle);
    })
    .then(inventoriesPerStyle => {
        productInfo.styles.forEach((style, idx) => {
            style.stock = inventoriesPerStyle[idx]
        })
        console.log('about to request from abe\'s db');
        return request.getAsync(\`http://ec2-54-241-130-11.us-west-1.compute.amazonaws.com:3000/t/` + "${productId}" + `\`);
        
    }).then(results => {
        smallImgsUrls = JSON.parse(results.body);

        productInfo.styles.forEach((style, idx) => {
            style.thumb = smallImgsUrls[idx].smallUrl;
        })
        
        return productInfo;
    })
    
}

module.exports = { getProductInfo };`);


var dam_db_index_js_path = '../damien-styles-and-inventory/db/index.js';
fs.unlinkSync(dam_db_index_js_path);
fs.writeFileSync(dam_db_index_js_path, `const mysql = require('mysql');
const Promise = require('bluebird');

var db = mysql.createConnection({
    user: 'root',
    password: 'pw',
    database: 'nike_inventory'
})

db =  Promise.promisifyAll(db);

db.connectAsync().
then(() => {
    console.log('connected to mySQL');
})

module.exports = db;`);
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


var dam_package_json_path = '../damien-styles-and-inventory/package.json';
fs.unlinkSync(dam_package_json_path);
fs.writeFileSync(dam_package_json_path, `{
    "name": "fec",
    "version": "",
    "description": "",
    "author": "",
    "license": "",
    "engines": {
      "node": ">=6.13.0"
    },
    "scripts": {
      "start": "nodemon server",
      "startpm2": "pm2 start server",
      "seedDB": "mysql -u root -p < db/schema.sql",
      "startDB": "mysql -u root -p",
      "build": "webpack -d --watch",
      "test": "jest"
    },
    "dependencies": {
      "bluebird": "^3.7.2",
      "css-loader": "^3.4.2",
      "express": "^4.17.1",
      "lodash": "^4.17.15",
      "mysql": "^2.18.1",
      "react": "^16.13.0",
      "react-dom": "^16.13.0",
      "style-loader": "^1.1.3",
      "webpack": "^4.42.0"
    },
    "devDependencies": {
      "@babel/core": "^7.8.7",
      "@babel/preset-env": "^7.9.0",
      "@babel/preset-react": "^7.8.3",
      "babel-jest": "^25.1.0",
      "babel-loader": "^8.0.6",
      "enzyme": "^3.11.0",
      "enzyme-adapter-react-16": "^1.15.2",
      "eslint-config-hackreactor": "git://github.com/reactorcore/eslint-config-hackreactor",
      "identity-obj-proxy": "^3.0.0",
      "jest": "^25.1.0",
      "react-test-renderer": "^16.13.1",
      "webpack-cli": "^3.3.11"
    },
    "jest": {
      "moduleNameMapper": {
        "\\.(css|less)$": "identity-obj-proxy"
      }
    }
  }
  `);
const fs = require('fs');

console.log('MODIFYING ABRAHAM\'S FILES');
//................................................................................................................................
var abe_package_json_path = '../abraham-productDisplay/package.json';
var abe_package_json = fs.readFileSync(abe_package_json_path, 'utf-8');
abe_package_json = abe_package_json.replace('"server"', '"start"');
fs.writeFileSync(abe_package_json_path, abe_package_json);
//................................................................................................................................
var abe_webpackConfig_js_path = '../abraham-productDisplay/webpack.config.js';
var abe_webpackConfig_js = fs.readFileSync(abe_webpackConfig_js_path, 'utf-8');
abe_webpackConfig_js = abe_webpackConfig_js.replace("'bundle.js'", "'productImagesBundle.js'");
abe_webpackConfig_js = abe_webpackConfig_js.replace("watch: true,", "");
fs.writeFileSync(abe_webpackConfig_js_path, abe_webpackConfig_js);
//................................................................................................................................
var abe_database_js_path = '../abraham-productDisplay/database/index.js';
var abe_database_js = fs.readFileSync(abe_database_js_path, 'utf-8');
abe_database_js = abe_database_js.replace("'password'", "'pw'");
fs.writeFileSync(abe_database_js_path, abe_database_js);
//................................................................................................................................
var abe_ProductImages_jsx_path = '../abraham-productDisplay/client/src/components/ProductImages.jsx';
var abe_ProductImages_jsx = fs.readFileSync(abe_ProductImages_jsx_path, 'utf-8');
abe_ProductImages_jsx = abe_ProductImages_jsx.replace("let params = new URL(window.location.href)", "");
abe_ProductImages_jsx = abe_ProductImages_jsx.replace("let styleId = params.searchParams.get('');", "");
abe_ProductImages_jsx = abe_ProductImages_jsx.replace(/url: .*\n/, "url: `http://ec2-54-241-130-11.us-west-1.compute.amazonaws.com:3000/:${this.props.productId}/`,\n");
abe_ProductImages_jsx+= '\nwindow.ProductImages = ProductImages;'
fs.writeFileSync(abe_ProductImages_jsx_path, abe_ProductImages_jsx);
//................................................................................................................................
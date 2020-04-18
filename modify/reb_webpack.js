const fs = require('fs');



var reb_webpackConfig = fs.readFileSync('./../Rebekah-Reviews-service/webpack.config.js', 'utf-8')
console.log(reb_webpackConfig);
console.log(reb_webpackConfig.match(/reviews: .*\n/));
// console.log(reb_webpackConfig.match(/shippingReturns: .*\r\n/))

reb_webpackConfig = reb_webpackConfig.replace(/reviews: .*\n/, "reviews: path.join(__dirname, './client/components/reviews.jsx'),\n");
reb_webpackConfig = reb_webpackConfig.replace(/shippingReturns: .*\n/, "shippingReturns: path.join(__dirname, './client/components/shippingReturns.jsx')\n");
fs.writeFileSync('./../Rebekah-Reviews-service/webpack.config.js', reb_webpackConfig);
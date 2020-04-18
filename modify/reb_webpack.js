const fs = require('fs');

var reb_webpackConfig = fs.readFileSync('./../Rebekah-Reviews-service/webpack.config.js', 'utf-8')

reb_webpackConfig = reb_webpackConfig.replace(/reviews: .*\n/, "reviews: path.join(__dirname, './client/components/reviews.jsx'),\n");
reb_webpackConfig = reb_webpackConfig.replace(/shippingReturns: .*\n/, "shippingReturns: path.join(__dirname, './client/components/shippingReturns.jsx')\n");
fs.writeFileSync('./../Rebekah-Reviews-service/webpack.config.js', reb_webpackConfig);
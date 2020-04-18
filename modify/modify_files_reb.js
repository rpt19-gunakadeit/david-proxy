const fs = require('fs');

console.log('MODIFYING REBEKAH\'S FILES');
//................................................................................................................................
var reb_webpack_config_path = './../Rebekah-Reviews-service/webpack.config.js';
var reb_webpack_config = fs.readFileSync(reb_webpack_config_path, 'utf-8')
reb_webpack_config = reb_webpack_config.replace(/reviews: .*\n/, "reviews: path.join(__dirname, './client/components/reviews.jsx'),\n");
reb_webpack_config = reb_webpack_config.replace(/shippingReturns: .*\n/, "shippingReturns: path.join(__dirname, './client/components/shippingReturns.jsx')\n");
fs.writeFileSync(reb_webpack_config_path, reb_webpack_config);
//................................................................................................................................
var reb_database_js_path = '../Rebekah-Reviews-service/database/database.js';
var reb_database_js = fs.readFileSync(reb_database_js_path, 'utf-8');
reb_database_js = reb_database_js.replace("const dbCredentials = require('../config.js');", "");
reb_database_js = reb_database_js.replace("dbCredentials.user", "'root'");
reb_database_js = reb_database_js.replace("dbCredentials.pswd", "'pw'");
fs.writeFileSync(reb_database_js_path, reb_database_js);
//................................................................................................................................
var reb_reviews_jsx_path = '../Rebekah-Reviews-service/client/components/reviews.jsx';
var reb_reviews_jsx = fs.readFileSync(reb_reviews_jsx_path, 'utf-8');
reb_reviews_jsx = reb_reviews_jsx.replace("const parsedUrl = new URL(window.location.href);", "");
reb_reviews_jsx = reb_reviews_jsx.replace("const productId = parsedUrl.searchParams.get('');", "console.log(this.props.productId, props.productId)");
reb_reviews_jsx = reb_reviews_jsx.replace(/url: .*\n/, "url: 'http://ec2-54-241-130-11.us-west-1.compute.amazonaws.com:2000/reviews/' + this.props.productId + '/date',\n");
reb_reviews_jsx = reb_reviews_jsx.replace("<FullReviews showAllReviews={this.showAllReviews.bind(this)} numStars={this.state.avgStars} reviews={this.state.reviews} product={this.props.productDetails}/>", "<FullReviews showAllReviews={this.showAllReviews.bind(this)} numStars={this.state.avgStars} reviews={this.state.reviews} product={this.props.productDetails} productId={this.props.productId}/>");
fs.writeFileSync(reb_reviews_jsx_path, reb_reviews_jsx);
//................................................................................................................................
var reb_fullReviews_jsx_path = '../Rebekah-Reviews-service/client/components/fullReviews.jsx';
var reb_fullReviews_jsx = fs.readFileSync(reb_fullReviews_jsx_path, 'utf-8');
reb_fullReviews_jsx = reb_fullReviews_jsx.replace("const parsedUrl = new URL(window.location.href);", "");
reb_fullReviews_jsx = reb_fullReviews_jsx.replace("const productId = parsedUrl.searchParams.get('');", "");
reb_fullReviews_jsx = reb_fullReviews_jsx.replace(/url: .*\n/, "url: 'http://ec2-54-241-130-11.us-west-1.compute.amazonaws.com:2000/reviews/' + this.props.productId + '/' + filter,\n");
fs.writeFileSync(reb_fullReviews_jsx_path, reb_fullReviews_jsx);
//................................................................................................................................


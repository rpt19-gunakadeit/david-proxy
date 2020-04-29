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
reb_reviews_jsx = 'import \'./../../public/dist/app.css\';\n' + reb_reviews_jsx;
reb_reviews_jsx = reb_reviews_jsx.replace("import React from 'react';", "");
reb_reviews_jsx = reb_reviews_jsx.replace("import ReactDOM from 'react-dom';", "");
reb_reviews_jsx = reb_reviews_jsx.replace("import $ from 'jquery';", "");
reb_reviews_jsx = reb_reviews_jsx.replace("const parsedUrl = new URL(window.location.href);", "");
reb_reviews_jsx = reb_reviews_jsx.replace("const productId = parsedUrl.searchParams.get('');", "");
reb_reviews_jsx = reb_reviews_jsx.replace(/url: .*\n/, "url: 'http://18.144.38.149:2000/reviews/' + this.props.productId + '/date',\n");
reb_reviews_jsx = reb_reviews_jsx.replace("<FullReviews showAllReviews={this.showAllReviews.bind(this)} numStars={this.state.avgStars} reviews={this.state.reviews} product={this.props.productDetails}/>", "<FullReviews showAllReviews={this.showAllReviews.bind(this)} numStars={this.state.avgStars} reviews={this.state.reviews} product={this.props.productDetails} productId={this.props.productId}/>");
reb_reviews_jsx = reb_reviews_jsx.replace("componentDidMount() {", "componentDidMount() {console.log('test', this.props.productId);");
fs.writeFileSync(reb_reviews_jsx_path, reb_reviews_jsx);
//................................................................................................................................
var reb_fullReviews_jsx_path = '../Rebekah-Reviews-service/client/components/fullReviews.jsx';
var reb_fullReviews_jsx = fs.readFileSync(reb_fullReviews_jsx_path, 'utf-8');
reb_fullReviews_jsx = reb_fullReviews_jsx.replace("import React from 'react';", "");
reb_fullReviews_jsx = reb_fullReviews_jsx.replace("import $ from 'jquery';", "");
reb_fullReviews_jsx = reb_fullReviews_jsx.replace("const parsedUrl = new URL(window.location.href);", "");
reb_fullReviews_jsx = reb_fullReviews_jsx.replace("const productId = parsedUrl.searchParams.get('');", "");
reb_fullReviews_jsx = reb_fullReviews_jsx.replace(/url: .*\n/, "url: 'http://18.144.38.149:2000/reviews/' + this.props.productId + '/' + filter,\n");
fs.writeFileSync(reb_fullReviews_jsx_path, reb_fullReviews_jsx);
//................................................................................................................................
var reb_longReview_jsx_path = '../Rebekah-Reviews-service/client/components/longReview.jsx';
var reb_longReview_jsx = fs.readFileSync(reb_longReview_jsx_path, 'utf-8');
reb_longReview_jsx = reb_longReview_jsx.replace("import React from 'react';", "");
reb_longReview_jsx = reb_longReview_jsx.replace("import moment from 'moment';", "");
fs.writeFileSync(reb_longReview_jsx_path, reb_longReview_jsx);
//................................................................................................................................
var reb_shortReview_jsx_path = '../Rebekah-Reviews-service/client/components/shortReview.jsx';
var reb_shortReview_jsx = fs.readFileSync(reb_shortReview_jsx_path, 'utf-8');
reb_shortReview_jsx = reb_shortReview_jsx.replace("import React from 'react';", "");
reb_shortReview_jsx = reb_shortReview_jsx.replace("import moment from 'moment';", "");
fs.writeFileSync(reb_shortReview_jsx_path, reb_shortReview_jsx);
//................................................................................................................................
var reb_summaryReviews_jsx_path = '../Rebekah-Reviews-service/client/components/summaryReviews.jsx';
var reb_summaryReviews_jsx = fs.readFileSync(reb_summaryReviews_jsx_path, 'utf-8');
reb_summaryReviews_jsx = reb_summaryReviews_jsx.replace("import React from 'react';", "");
fs.writeFileSync(reb_summaryReviews_jsx_path, reb_summaryReviews_jsx);
//................................................................................................................................
var reb_stars_jsx_path = '../Rebekah-Reviews-service/client/components/stars.jsx';
var reb_stars_jsx = fs.readFileSync(reb_stars_jsx_path, 'utf-8');
reb_stars_jsx = reb_stars_jsx.replace("import React from 'react';", "");
fs.writeFileSync(reb_stars_jsx_path, reb_stars_jsx);
//................................................................................................................................
var reb_fittingRange_jsx_path = '../Rebekah-Reviews-service/client/components/fittingRange.jsx';
var reb_fittingRange_jsx = fs.readFileSync(reb_fittingRange_jsx_path, 'utf-8');
reb_fittingRange_jsx = reb_fittingRange_jsx.replace("import React from 'react';", "");
fs.writeFileSync(reb_fittingRange_jsx_path, reb_fittingRange_jsx);
//................................................................................................................................
var reb_shippingReturns_jsx_path = '../Rebekah-Reviews-service/client/components/shippingReturns.jsx';
var reb_shippingReturns_jsx = fs.readFileSync(reb_shippingReturns_jsx_path, 'utf-8');
reb_shippingReturns_jsx = reb_shippingReturns_jsx.replace("import React from 'react';", "");
fs.writeFileSync(reb_shippingReturns_jsx_path, reb_shippingReturns_jsx);


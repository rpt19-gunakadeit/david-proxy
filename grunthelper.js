var modifyFiles = (grunt) => {

        var reb_database_js_path = '../Rebekah-Reviews-service/database/database.js';

        var reb_database_js = grunt.file.read(reb_database_js_path);

        reb_database_js = reb_database_js.replace("const dbCredentials = require('../config.js');", "");

        reb_database_js = reb_database_js.replace("dbCredentials.user", "'root'");

        reb_database_js = reb_database_js.replace("dbCredentials.pswd", "'pw'");

        grunt.file.write(reb_database_js_path, reb_database_js);
        //.....................................................
        var reb_reviews_jsx_path = '../Rebekah-Reviews-service/client/components/reviews.jsx';
        
        var reb_reviews_jsx = grunt.file.read(reb_reviews_jsx_path);

        reb_reviews_jsx = reb_reviews_jsx.replace("const parsedUrl = new URL(window.location.href);", "");

        reb_reviews_jsx = reb_reviews_jsx.replace("const productId = parsedUrl.searchParams.get('');", "");

        reb_reviews_jsx = reb_reviews_jsx.replace("productId", "this.props.productId");

        reb_reviews_jsx = reb_reviews_jsx.replace("<FullReviews showAllReviews={this.showAllReviews.bind(this)} numStars={this.state.avgStars} reviews={this.state.reviews} product={this.props.productDetails}/>", "<FullReviews showAllReviews={this.showAllReviews.bind(this)} numStars={this.state.avgStars} reviews={this.state.reviews} product={this.props.productDetails} productId={this.props.productId}/>");

        grunt.file.write(reb_reviews_jsx_path, reb_reviews_jsx);

        //.....................................................
        var reb_fullReviews_jsx_path = '../Rebekah-Reviews-service/client/components/fullReviews.jsx';
        
        var reb_fullReviews_jsx = grunt.file.read(reb_fullReviews_jsx_path);

        reb_fullReviews_jsx = reb_fullReviews_jsx.replace("const parsedUrl = new URL(window.location.href);", "");

        reb_fullReviews_jsx = reb_fullReviews_jsx.replace("const productId = parsedUrl.searchParams.get('');", "");

        reb_fullReviews_jsx = reb_fullReviews_jsx.replace("productId", "this.props.productId");
        
        grunt.file.write(reb_fullReviews_jsx_path, reb_fullReviews_jsx);

        //.....................................................
        var reb_webpack_path = '../Rebekah-Reviews-service/webpack.config.js';
        
        var reb_webpack = grunt.file.read(reb_webpack_path);

        reb_webpack = reb_webpack.replace("'./client/components/reviews.jsx'", "path.join(__dirname, './client/components/reviews.jsx')");

        reb_webpack = reb_webpack.replace("'./client/components/shippingReturns.jsx'", "path.join(__dirname, '.client/components/shippingReturns.jsx')");

        grunt.file.write(reb_webpack_path, reb_webpack);
}

module.exports = modifyFiles;
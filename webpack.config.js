const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
    mode: "production",
    //devtool: 'none', 
    entry: `${SRC_DIR}/index.js`,
    output: {
        filename: 'bdle.js',
        path: DIST_DIR,
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                        presets: ['@babel/preset-react', 
                                  '@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }


}
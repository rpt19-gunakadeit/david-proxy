const proxy_webpackConfig = require('./webpack.config');
const david_webpackConfig = require('./../david-service/webpack.config');
const rebekah_webpackConfig = require('./../Rebekah-Reviews-service/webpack.config');
const gruntTest = require('./test');

module.exports = function(grunt) {
    grunt.initConfig({
        aws: grunt.file.readJSON('aws-keys.json'),

        aws_s3: {
            options: {
                accessKeyId: '<%= aws.AWSAccessKeyId %>',
                secretAccessKey: '<%= aws.AWSSecretKey %>',
                region: 'us-west-1',
                uploadConcurrency: 5
            },
            upload : {
                options: {
                    bucket: 'fec-nike-bundles',
                    differential: true
                },
                files: [
                    {expand: true, cwd: 'public/dist', src: 'proxyBundle.js', dest: '/'},
                    {expand: true, cwd: '../david-service/public/dist', src: 'descriptionBundle.js', dest: '/'},
                    {expand: true, cwd: '../david-service/public/dist', src: 'carouselBundle.js', dest: '/'},
                    {expand: true, cwd: '../Rebekah-Reviews-service/public/dist', src: 'reviews.bundle.js', dest: '/'},
                    {expand: true, cwd: '../Rebekah-Reviews-service/public/dist', src: 'shippingReturns.bundle.js', dest: '/'}
                ]
            }
        },

        webpack: {
            proxy: proxy_webpackConfig,
            david: david_webpackConfig,
            rebekah: rebekah_webpackConfig
        }
    })

    grunt.loadNpmTasks('grunt-aws-s3');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', 'running exp', function() {
        grunt.log.writeln('currently running exp');
        var code = grunt.file.read('code.js');
        grunt.log.writeln(code);
        code += 5678;
        grunt.file.write('code.js', code);

        grunt.task.run(['webpack','aws_s3'])
    })
   
}


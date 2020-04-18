const fs = require('fs');
const proxy_webpackConfig = require('./webpack.config');
const david_webpackConfig = require('./../david-service/webpack.config');
const rebekah_webpackConfig = require('./../Rebekah-Reviews-service/webpack.config');
const modifyFiles = require('./grunthelper');

module.exports = function(grunt) {
    grunt.initConfig({
        aws: grunt.file.readJSON('./../aws-keys.json'),

        aws_s3: {
            options: {
                accessKeyId: '<%= aws.AWSAccessKeyId %>',
                secretAccessKey: '<%= aws.AWSSecretKey %>',
                region: 'us-west-1',
                uploadConcurrency: 5
            },
            upload_david : {
                options: {
                    bucket: 'fec-nike-bundles',
                    differential: true
                },
                files: [
                    {expand: true, cwd: 'public/dist', src: 'proxyBundle.js', dest: '/'},
                    {expand: true, cwd: '../david-service/public/dist', src: 'descriptionBundle.js', dest: '/'},
                    {expand: true, cwd: '../david-service/public/dist', src: 'carouselBundle.js', dest: '/'}
                ]
            },
            upload_rebekah : {
                options: {
                    bucket: 'fec-nike-bundles',
                    differential: true
                },
                files: [
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

    grunt.registerTask('rebekah', 'modify,bundle,upload', function() {
        //MODIFY THE FILES
        modifyFiles(grunt);

        grunt.task.run(['webpack:rebekah','aws_s3:upload_rebekah'])
    })
   
}


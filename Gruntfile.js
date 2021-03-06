const fs = require('fs');

const proxy_webpackConfig = require('./webpack.config');
const david_webpackConfig = require('./../david-service/webpack.config');
const rebekah_webpackConfig = require('./../Rebekah-Reviews-service/webpack.config');
const abraham_webpackConfig = require('./../abraham-productDisplay/webpack.config');

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
            upload_proxy : {
                options: {
                    bucket: 'fec-nike-bundles',
                    differential: true
                },
                files: [
                    {expand: true, cwd: 'public/dist', src: 'proxyBundle.js', dest: '/'}
                ]
            },
            upload_david : {
                options: {
                    bucket: 'fec-nike-bundles',
                    differential: true
                },
                files: [
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
            },
            upload_abraham : {
                options: {
                    bucket: 'fec-nike-bundles',
                    differential: true
                },
                files: [
                    {expand: true, cwd: '../abraham-productDisplay/client/dist', src: 'productImagesBundle.js', dest: '/'}
                ]
            }
        },

        webpack: {
            proxy: proxy_webpackConfig,
            david: david_webpackConfig,
            rebekah: rebekah_webpackConfig,
            abraham: abraham_webpackConfig
        }
    })

    grunt.loadNpmTasks('grunt-aws-s3');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('proxy', 'modify,bundle,upload', function() {
        //BUNDLE and UPLOAD to S3
        grunt.task.run(['webpack:proxy','aws_s3:upload_proxy'])
    })

    grunt.registerTask('david', 'modify,bundle,upload', function() {
        //BUNDLE and UPLOAD to S3
        grunt.task.run(['webpack:david','aws_s3:upload_david'])
    })

    grunt.registerTask('rebekah', 'modify,bundle,upload', function() {
        //BUNDLE and UPLOAD to S3
        grunt.task.run(['webpack:rebekah','aws_s3:upload_rebekah'])
    })

    grunt.registerTask('abraham', 'modify,bundle,upload', function() {
        //BUNDLE and UPLOAD to S3
        grunt.task.run(['webpack:abraham','aws_s3:upload_abraham'])
    })
   
}


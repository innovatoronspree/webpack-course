const path = require('path');

//ES module syntax does not work, common JS works
//absolute paths are required here
module.exports = {
    //entrypoint
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    // rule for how webpack should import a file
    module: {
        rules: [
            // {
            //     test: /\.(ttf)$/,
            //     type: 'asset/resource'
            // },
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3*1024 //3kb
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            }
        ]
    }
}

//asset/resource, drawback is seperate http call for each image
//makes sense only if image size is large
//for small images, make use of asset/inline

//make use of asset (general), here webpack will make the decision on its own based on the size of each file
// < 8kb => inline
// > 8kb => resource
//this 8kb number is configurable
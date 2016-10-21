module.exports = {
    entry:'./src/app.js',
    output:{
        path:'./build',
        filename:'bundle.js',
    },
    devServer:{
        inline:true,
        port:3333,
        contentBase:'./build'
        //proxy: {
        //'/':{
        //    target:'http://localhost:5000'
        //    },
        //'/index':{
        //    target:'http://localhost:5000'
        //    }
        //}
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\.png$/, loader:"file"},
        ]
    }
}

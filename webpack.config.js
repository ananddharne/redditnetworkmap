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
        ]
    }
}

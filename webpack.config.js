var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
	      test: /\.(gif|png|jpe?g|svg)$/i,
	      use: ['file-loader',
	      		{
				loader: 'image-webpack-loader',
				options: { 
					   bypassOnDebug: true, // webpack@1.x
		         		   disable: true, // webpack@2.x and newer
					 }
	      		},
	    	   ],
  	}
    ]

  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
   devServer : {
   host : '130.147.175.222',
   port : 8090
}
};
/*
module: {
  rules: [
    {
      test:
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    }
  ]
}
*/

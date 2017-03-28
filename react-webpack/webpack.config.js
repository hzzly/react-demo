module.exports = {
	entry:{
		index:'./src/index.js'
	},
	output:{
		filename:'./dist/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
			        presets: ['env']
			    }
			},
			{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	}
}
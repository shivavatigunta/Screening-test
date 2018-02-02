const express = require("express");
const app = express();

//Make current dir as static
app.use(express.static(__dirname));

//Init development webpack
if (process.env.NODE_ENV !== "production") {
	const webpack = require("webpack");
	const webpackDevMiddleware = require("webpack-dev-middleware");
	const webpackHotMiddleware = require("webpack-hot-middleware");
	const config = require("./webpack.config.js");
	const compiler = webpack(config);

	app.use(webpackHotMiddleware(compiler));
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	}));
}

//Init with index.html
app.get("*", function(req, res) {
	res.sendFile(__dirname + "/index.html");  
});

//Bind port
app.set("port", process.env.PORT || 4040);

//Listen
app.listen(app.get("port"), () => {
	process.stdout.write(`The server is up and running on port:${app.get("port")}\n`);  
});

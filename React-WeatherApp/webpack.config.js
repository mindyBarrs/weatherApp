import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" },
				],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
		fallback: {
			util: require.resolve("util"),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new webpack.ProvidePlugin({
			TextEncoder: ["util", "TextEncoder"],
			TextDecoder: ["util", "TextDecoder"],
		}),
	],
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false,
	},
	devServer: {
		port: 8080,
		hot: true,
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, "dist"),
		},
		hot: true,
		open: true,
	},
};

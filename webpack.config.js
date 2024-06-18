const path = require("path");

module.exports = {
	// Webpack을 통해 번들링하고자하는 파일인 index.js의 상대 경로를 입력해 줍니다.
	entry: "./src/index.js",
	output: {
		// 번들링이 완료된 JavaScript 파일을 어떤 폴더에 생성할지, 어떤 이름으로 생성할지 작성해 줍니다.
		// dist라는 이름의 폴더에 생성하고 bundle.js라는 이름을 갖도록 설정해 주겠습니다.
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [{ test: /\.js$/, use: "babel-loader" }],
	},
};

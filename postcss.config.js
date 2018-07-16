const cssnext = require("postcss-cssnext");
// ref http://cssnext.io/usage/

module.exports = {
  plugins: [
  	cssnext({
  		features:{
  			customProperties:{
  				//全局csss属性，使用方法 例：color:var(--subjectColor);
	  			variables:{
	  				subjectColor: "#E91E63",
	  			},
  			},
  			autoprefixer: {
	          	browsers: [
	            	"last 3 versions",
	            	"ie >= 9",
	            	"ff >= 30",
	            	"chrome >= 34",
	            	"safari >= 6",
	            	"opera >= 12",
	          	],
	        },	
  		},
  	})
  ]
};
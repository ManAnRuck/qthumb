var qthumb = require('./');

var options = {
	width: 260
//	height: 253
//	scale: 0.3
}
qthumb('nodejs-2560x1440.png', 'nodejs-300x170.png', options, function(err) {
	if(err) console.log(err);
	console.log("test finish");
});

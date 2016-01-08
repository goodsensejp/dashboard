let Root: any;

if(ENV === 'production') {
	Root = require('./Root.prod');
} else {
	Root = require('./Root.dev');
}

export default Root;

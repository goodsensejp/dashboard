import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";

if(ENV === 'production') {
	module.exports = require('configureStore.prod');
} else {
	module.exports = require('configureStore.dev');
}

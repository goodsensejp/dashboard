var normalizr_1 = require('normalizr');
var isomorphic_fetch_1 = require('../../typings/isomorphic-fetch');
exports.GOODSENSE_API_ROOT = 'http://api.github.com/';
exports.userSchema = new normalizr_1.Schema('users', {
    idAttribute: 'login'
});
var GoodsenseApi = (function () {
    function GoodsenseApi() {
    }
    GoodsenseApi.prototype.call = function (endpoint, schema) {
        var fullUrl = (endpoint.indexOf(exports.GOODSENSE_API_ROOT) === -1) ?
            exports.GOODSENSE_API_ROOT + endpoint : endpoint;
        console.log(fullUrl);
        return isomorphic_fetch_1.default(fullUrl)
            .then(function (response) {
            return response.json().then(function (json) { return ({ json: json, response: response }); });
        }).then(function (_a) {
            var json = _a.json, response = _a.response;
            console.log(json, response);
        });
    };
    return GoodsenseApi;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GoodsenseApi;

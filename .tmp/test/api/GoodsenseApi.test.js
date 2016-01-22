var GoodsenseApi_1 = require("../../src/api/GoodsenseApi");
describe('goodsenseApi', function () {
    it('should fetch data from server', function (done) {
        this.timeout(20000);
        var api = new GoodsenseApi_1.default();
        api.call("users/kareem3d", GoodsenseApi_1.userSchema).then(done);
    });
});

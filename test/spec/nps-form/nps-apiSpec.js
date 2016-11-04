describe('$npsapi', function () {
    var $service,
        $rootScope,
        result;

    beforeEach(module('angular-nps'));

    /* jshint ignore:start */
    beforeEach(inject(function (_$npsapi_, _$rootScope_) {
        $service = _$npsapi_;
        $rootScope = _$rootScope_;
    }));
    /* jshint ignore:end */

    it("should have a test function that returns hello world", function () {
        expect($service.test()).toEqual("Hello World!");
    });

    it("should return an error when submitting a score of 11.", function (done) {
        $service.saveScore({
                score: 11,
                UserName: "Test"
            })
            .then(function (data) {
                expect(data.Value).toBe("Score cannot be greater than 10.");
            });

        $rootScope.$digest();
        done();
    });


    it("should return an error when submitting a score of -1", function (done) {
        $service.saveScore({
            score: -1,
            UserName: "Test"
        }).then(function (data) {
            expect(data.Value).toEqual("Score cannot be less than 0.");
        });

        $rootScope.$digest();
        done();
    });


    it("should return success when submitting a valid score.", function (done) {
        $service.saveScore({
            score: 5,
            UserName: "Test"
        }).then(function (data) {
            expect(data.Value).toEqual("Success!");
        });

        $rootScope.$digest();
        done();
    });

});
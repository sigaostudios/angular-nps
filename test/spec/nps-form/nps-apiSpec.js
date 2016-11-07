describe('$npsapi', function () {
    var $httpBackend,
        $service,
        $rootScope,
        scoreRequestHandler,
        result;

    beforeEach(module('angular-nps'));

    beforeEach(inject(function (_$npsapi_, _$rootScope_, _$httpBackend_) {
        $service = _$npsapi_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;

        testRequestHandler = $httpBackend.when('GET', '/sigaoapi/nps')
            .respond('Hello World!');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should have a test function that returns hello world", function (done) {
        console.log("running test");

        $service.test()
            .then(function (data) {
                expect(data).toBe("Hello World!");
            });
        $httpBackend.flush();
        done();
    });

    it("should return an error when submitting a score of 11.", function (done) {
        scoreRequestHandler = $httpBackend.when('POST', '/sigaoapi/nps')
            .respond(500, 'Score cannot be greater than 10.');

        $service.saveScore({
                score: 11,
                UserName: "Test"
            })
            .then(function (data) {
                expect(data).toBe("Score cannot be greater than 10.");
            });

        $httpBackend.flush();
        done();
    });


    it("should return an error when submitting a score of -1", function (done) {
        scoreRequestHandler = $httpBackend.when('POST', '/sigaoapi/nps')
            .respond(500, 'Score cannot be less than 0.');

        $service.saveScore({
            score: -1,
            UserName: "Test"
        }).then(function (data) {
            expect(data).toEqual("Score cannot be less than 0.");
        });

        $httpBackend.flush();
        done();
    });


    it("should return success when submitting a valid score.", function (done) {
        scoreRequestHandler = $httpBackend.when('POST', '/sigaoapi/nps')
            .respond(202, 'Success!');
        $service.saveScore({
            score: 5,
            UserName: "Test"
        }).then(function (data) {
            expect(data).toEqual("Success!");
        });

        $httpBackend.flush();
        done();
    });

});
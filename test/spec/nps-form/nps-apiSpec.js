describe('$npsapi', function () {
    var $httpBackend,
        $service,
        $rootScope,
        gaSpy,
        sinonAsert,
        scoreRequestHandler,
        result;

    beforeEach(module('angular-nps'));

    beforeEach(inject(function (_$npsapi_, _$rootScope_, _$httpBackend_) {
        $service = _$npsapi_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        window.ga = sinon.spy();        
         
        sinonAssert = sinon.assert;

        testRequestHandler = $httpBackend.when('GET', '/sigaoapi/nps')
            .respond('Hello World!');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
        
    });

    it("should have a test function that returns hello world", function (done) {
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

    it("should have a function to save to Google Analytics.", function () {
        $service.saveScoreToGA({
            score: 5,
            UserName: "Test"            
        });

        sinonAssert.called(window.ga);
        expect(window.ga.args[0][0]).toBe('send');
        expect(window.ga.args[0][1]).toBe('user');
        expect(window.ga.args[0][2]['NPS SigaoStudios']).toBe(5);
    });

});
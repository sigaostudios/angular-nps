describe('Unit testing nps form', function() {
    var $compile,
        $rootScope;

    beforeEach(module('angular-nps'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Contains the Net Promoter Score question', function() {
        var element = $compile("<nps-form></nps-form>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("How likely are you to recommend us to a friend or colleague?");
    });

    it('Contains the Net Promote Score form', function(){
        var element = $compile("<nps-form></nps-form>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain(' <div name="rating" class="flex-radio">');        
    });

    it('Contains a submit button', function() {
        var element = $compile("<nps-form></nps-form>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("Submit");
    });

    it('has a dummy spec to test 2+2', function() {
        expect(2+2).toEqual(4);
    });
});
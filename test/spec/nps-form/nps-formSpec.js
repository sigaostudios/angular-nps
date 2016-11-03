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
        expect(element.html()).toContain('<input type="radio" name="nps" value="0">0<input type="radio" name="nps" value="1">1<input type="radio" name="nps" value="2">2<input type="radio" name="nps" value="3">3<input type="radio" name="nps" value="4">4<input type="radio" name="nps" value="5">5<input type="radio" name="nps" value="6">6<input type="radio" name="nps" value="7">7<input type="radio" name="nps" value="8">8<input type="radio" name="nps" value="9">9<input type="radio" name="nps" value="10">10');        
    });

    it('Contains a submit button', function() {
        var element = $compile("<nps-form></nps-form>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("Submit Score");
    });

    it('has a dummy spec to test 2+2', function() {
        expect(2+2).toEqual(4);
    });
});
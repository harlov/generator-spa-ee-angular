describe('Test <%= name %> with url <%= route %>', function() {
    it('should see content of <%= name %>', function() {
        browser.get('#<%= route %>');

        /* some examples */
        //element(by.model('<%= controllerAs %>.someModel')).sendKeys('write a protractor test');
        //element(by.css('.selector')).click();
        //var list = element.all(by.repeater('item in items'));
        //expect(list.count()).toEqual(3);
    });
});

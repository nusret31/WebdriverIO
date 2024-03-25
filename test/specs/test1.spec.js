describe('Demo Tests', function () {

    it('My First Test', function () {
        browser.url('https://google.com');
        $('[name="q"]').setValue('Alex Pogonici');
        //$('[name="btnK"]').click();
        browser.keys("Enter");
        browser.pause(3000);
    })

})
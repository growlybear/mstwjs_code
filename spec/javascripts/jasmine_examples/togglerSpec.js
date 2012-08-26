describe('Trip detail toggler', function () {

    beforeEach(function () {
        loadFixtures('one_index_trip.html');

        var toggler = new Toggle();
        toggler.init();

        $('.detail_toggle').click();
    });

    describe('Clicking the show link', function () {
        it('shows the trip description', function () {
            expect($('.detail')).not.toHaveClass('hidden');   // NO, this is WRONG WRONG WRONG!!!!
        });

        it('changes the link action to "Hide"', function () {
            expect($('.detail_toggle')).toHaveText('Hide Details');
        });
    });

    describe('Clicking the show link again', function () {
        beforeEach(function () {
            $('.detail_toggle').click();
        });

        it('hides the description', function () {
            expect($('.detail')).toBeHidden();
        });

        it('changes the link action back to "Show"', function () {
            expect($('.detail_toggle')).toHaveText('Show Details');
        });
    });
});

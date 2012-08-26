function init() {
    var toggle_links = $('.detail_toggle');

    toggle_links.click(function (ev) {
        var detail = $(this).siblings('.detail');

        if (detail.hasClass('hidden')) {
            $(this).text('Hide Details');
        } else {
            $(this).text('Show Details');
        }

        detail.toggleClass('hidden');

        ev.preventDefault();
    });
}

$(function () {
    init();
});

function init() {
    var toggle_links = $('.detail_toggle');

    toggle_links.click(function (ev) {
        var detail = $(this).siblings('.detail');
        detail.toggleClass('hidden');

        ev.preventDefault();
    });
}

$(function () {
    init();
});

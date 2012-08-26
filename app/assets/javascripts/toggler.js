var Toggler = function () {

    var self = {
        link          : undefined,
        linkSelector  : '.detail_toggle',
        detailSelector: '.detail',
        hiddenClass   : 'hidden',
        hideText      : 'Hide Details',
        showText      : 'Show Details'
    };

    self.init = function () {
        $(self.linkSelector).on('click', function (ev) {
            toggleOnClick(ev);
        });
    };

    var toggleOnClick = function (ev) {
        ev.preventDefault();

        self.link = $(ev.target);
        self.link.text(
            isDetailHidden() ? self.hideText: self.showText
        );
        detailElement().toggleClass(self.hiddenClass);
    };

    var detailElement = function () {
        return self.link.parent().find(self.detailSelector);
    };

    var isDetailHidden = function () {
        return detailElement().hasClass(self.hiddenClass);
    };

    self.init();
    return self;
};


$(function () {
    var toggler = Toggler();
});

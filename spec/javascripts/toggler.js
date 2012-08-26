var togglePrototype = {
    linkSelector  : '.detail_toggle',
    detailSelector: '.detail',
    hiddenClass   : 'hidden',
    hideText      : 'Hide Details',
    showText      : 'Show Details',

    init: function () {
        var self = this;
        $(this.linkSelector).on('click', function (ev) {
            self.toggleOnClick(ev);
        });
    },

    toggleOnClick: function (ev) {
        var self = this;
        ev.preventDefault();

        this.link = $(ev.target);
        this.link.text(
            this.isDetailHidden() ? this.hideText: this.showText
        );
        this.detailElement().toggleClass(self.hiddenClass);
    },

    detailElement: function () {
        return this.link.parent().find(this.detailSelector);
    },

    isDetailHidden: function () {
        return this.detailElement().hasClass(this.hiddenClass);
    }
};

$(function () {
    var toggler = Object.create(togglePrototype);
    toggler.init();
});

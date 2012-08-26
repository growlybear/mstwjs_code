function Toggle() {
    this.linkSelector  = '.detail_toggle';
    this.detailSelector= '.detail';
    this.hiddenClass   = 'hidden';
    this.hideText      = 'Hide Details';
    this.showText      = 'Show Details';
}

Toggle.prototype = {
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
    var toggler = new Toggle();
    toggler.init();
});

var initializeTextInput = function (opts) {
    var parent = $(opts.parentSelector),
        field = opts.field,
        id = field.replace('][', '_').replace('[', '').replace(']', ''),
        input = $('<input type="text"/>').attr({
            'id': id + '_autocomplete',
            'name': field + '[autocomplete]'
        }),
        add_button = $('<a href="#"/>').attr('id', id + '_add_button').html('Add').addClass('selector_add_button');

    parent.append(input);
    parent.append(add_button);
}

var initializeHiddenField = function (opts) {
    var parent = $(opts.parentSelector),
        field = opts.field,
        id = field.replace('][', '_').replace('[', '').replace(']', ''),
        input = $('<input type="hidden"/>').attr({
            'id': id,
            'name': field
        }).val(opts.initialValue || '');

    parent.append(input);
};

var initializeAutocompleteSelector = function (opts) {
    initializeHiddenField(opts);
    initializeTextInput(opts);
};


var activityData = {
    1: 'Hiking',
    2: 'Changing History',
    3: 'Baseball',
    4: 'Programming'
};

$(function () {
    initializeAutocompleteSelector({
        parentSelector: '#autodiv',
        field: '[user][activity_ids]',
        dataUniverse: activityData
    });
})

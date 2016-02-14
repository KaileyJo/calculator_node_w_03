$(document).ready(function(){
    $('#add').on('click', addition);
    $('#subtract').on('click', subtraction);
    $('#multiply').on('click', multiplication);
    $('#divide').on('click', division);
});

function math(operation) {
    //console.log('clicked');
    event.preventDefault();
    var values = {};
    $.each($('#mathFom').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    $('#mathFom').find('input[type=text]').val('');
    $.ajax({
        type: 'POST',
        url: '/' + operation,
        data: values,
        success: function(data) {
            console.log('From server: ' + data);
            $('#results').append('<p>The result is: ' + data + '</p>');
        }
    });
}

function addition() {
    math('add');
}

function subtraction() {
    math('subtract');
}

function multiplication() {
    math('multiply');
}

function division() {
    math('divide');
}
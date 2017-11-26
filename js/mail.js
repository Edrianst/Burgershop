var submitForm = function (ev) {
    ev.preventDefault();

    var form = $(ev.target);
        
    var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            $.fancybox.open('<div id="hidden-form"><div class="modal__text">Заявка была успешно отправлена</div><a href="#" data-fancybox-close class="order-btn">Закрыть</a></div>');
        } else{
            $.fancybox.open('<div id="hidden-form"><div class="modal__text">К сожалению, письмо не было отправлено, попробуйте позже или свяжитесь с нами по телефону!</div><a href="#" data-fancybox-close class="order-btn">Закрыть</a></div>');
        };
        $('#order-form')[0].reset();form.reset();
    });

    request.fail(function(jqXHR, textStatus) {
        // alert("Request failed: " + textStatus);
        $.fancybox.open('<div id="hidden-form"><div class="modal__text">К сожалению, письмо не было отправлено, попробуйте позже или свяжитесь с нами по телефону!</div><a href="#" data-fancybox-close class="order-btn">Закрыть</a></div>');
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}

$('#order-form').on('submit', submitForm);
    const form = $('#order-form');

    form.on('submit', e => {
        e.preventDefault();

        });
        const request = $.ajax({
            url: form.attr('action'),
            method: "POST",
            data: {
                id: form
            },
            dataType: "json"
        });
        request.fail(function (jqHR, textStatus) {
            $.fancybox.open('<div id="hidden-form"><div class="modal__text">Сообщение отправлено</div><a href="#" class="order-btn">Закрыть</a></div>');
        })
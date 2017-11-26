
<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $corp = $_POST['corp'];
    $flat = $_POST['flat'];
    $floor = $_POST['floor'];
    $cashchange = $_POST['cashchange'];
    $card = $_POST['card'];
    $message = $_POST['message'];
    $callback = $_POST['callback']; // 1 или null 
    $callback = isset($callback) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Email: ' . $email . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $house . '</li>
                <li>Корпус: ' . $corp . '</li>
                <li>Квартира: ' . $flat . '</li>
                <li>Этаж: ' . $floor . '</li>
                <li>Сдача: ' . $cashchange . '</li>
                <li>Способ оплаты: ' . $card . '</li>
                <li>Комментарии к заказу: ' . $message . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
            </ul>
        </body>
    </html>    
    ';

    $headers = "From: Администратор сайта <mr.burger@burgers.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('excite90@mail.ru', 'Заказ', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $phone = htmlspecialchars(trim($_POST['phone']));

    // Валидация
    if (!empty($phone)) {
        // Настройки для отправки письма
        $to = "tppackru@yandex.ru"; // Замените на ваш email
        $subject = "Запрос обратного звонка";
        $headers = "From: no-reply@example.com\r\n";
        $fullMessage = "Пользователь оставил номер телефона: $phone";

        // Отправка письма
        if (mail($to, $subject, $fullMessage, $headers)) {
            echo "Номер успешно отправлен!";
        } else {
            echo "Не удалось отправить номер. Пожалуйста, попробуйте снова.";
        }
    } else {
        echo "Поле с телефоном обязательно для заполнения!";
    }
} else {
    echo "Неправильный метод запроса!";
}
?>
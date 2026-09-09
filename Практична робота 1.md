# I22_Vladyslav-Nazaruk
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Реєстрація на навчальний курс</title>
</head>
<body>
    <h1>Реєстрація на навчальний курс</h1>
    <form>
        <label for="name">Ім'я та прізвище</label>
        <input
            type="text"
            id="name"
            name="name"
            placeholder="Введіть ім'я та прізвище"
            required
        >
     <br><br>
        <label for="email">Електронна пошта</label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="Введіть email"
            required
        >

   <br><br>

   <label for="phone">Номер телефону</label>
        <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Введіть номер телефону"
        >

   <br><br>
    <label for="age">Вік</label>
        <input
            type="number"
            id="age"
            name="age"
            min="14"
            max="70"
        >

   <br><br>

  <label for="date">Дата народження</label>
        <input
            type="date"
            id="date"
            name="date"
        >

   <br><br>

   <label for="password">Пароль</label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Введіть пароль"
            minlength="8"
            required
        >

  <br><br>

  <label for="password2">Повторіть пароль</label>
        <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Повторіть пароль"
            minlength="8"
            required
        >

  <br><br>

  <p>Рівень підготовки:</p>

   <input type="radio" name="level" value="beginner" required>
        Початковий

   <input type="radio" name="level" value="middle">
        Середній

   <input type="radio" name="level" value="high">
        Високий

  <br><br>

  <p>Теми, які вас цікавлять:</p>

   <input type="checkbox" name="html" value="HTML">
        HTML

  <input type="checkbox" name="css" value="CSS">
        CSS

   <input type="checkbox" name="javascript" value="JavaScript">
        JavaScript

   <input type="checkbox" name="angular" value="Angular">
        Angular

  <br><br>

  <label for="format">Формат навчання</label>

   <select name="format" id="format">
            <option value="online">Онлайн</option>
            <option value="offline">Очно</option>
            <option value="mixed">Змішаний формат</option>
        </select>

  <br><br>

   <label for="message">Чому ви хочете пройти цей курс?</label>

   <br>

   <textarea
            name="message"
            id="message"
            cols="50"
            rows="10"
            maxlength="300"
            placeholder="Введіть повідомлення"
        ></textarea>

  <br><br>

  <button type="submit">Відправити</button>
        <button type="reset">Очистити</button>


</form>

</body>
</html>

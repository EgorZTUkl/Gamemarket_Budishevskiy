// Отримуємо кнопку за ідентифікатором
    const button = document.getElementById('myButton');

    // Змінна для лічильника
    let counter = 0;

    // Додаємо обробник події для кнопки
    button.addEventListener('click', () => {
        // Збільшуємо лічильник на одиницю при натисканні на кнопку
        counter++;

        // Виводимо значення лічильника у консоль
        console.log(counter);
    });

console.log('Перевірка підключеного файлу скриптів market.js')

let itemsDiv = document.getElementById("items");
if (itemsDiv) {
    console.log(itemsDiv)

    console.log('Поле classList: ', itemsDiv.classList)
    console.log('Поле id: ', itemsDiv.id)
    console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    itemsDiv.innerText = '1 Програмно доданий текст'
    itemsDiv.innerText = '2 Програмно доданий текст'

    itemsDiv.innerHTML = '<div class="item"></div>'
    itemsDiv.innerHTML += '<div class="item"></div>'
    itemsDiv.innerHTML += '<div class="item"></div>'
    itemsDiv.innerHTML += '<div class="item"></div>'
} else {
    console.log('Блок товару не знайдено')
}
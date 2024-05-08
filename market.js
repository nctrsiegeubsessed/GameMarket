//console.log('Перевірка підключеного файлу скриптів market.js')


let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акамуляторний оприскувач 12 N',
    
]
let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    itemsArray.forEach((item) => {
       itemsDiv.innerHTML += `<div class = "item">${item}</div>`
    })
} else {
    console.log('Блок товару не знайдено')
}


// itemsArray = itemsArray.sort()

//console.log(itemsArray)

//for (let i = 0; i < itemsArray.length; i++) {
//    console.log(i + '-й елемент: ', itemsArray[i])
//}
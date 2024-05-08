console.log('Перевірка підключеного файлу скриптів market.js')

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    
} else {
    console.log('Блок товару не знайдено')
}
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акамуляторний оприскувач 12 N',
    'Газонокосарка 430',
    'Електричний тример 130',
    'Електрична газонокосарка 320',
    'Акумуляторний оприскувач 12 E',
]
itemsArray.sort().forEach((item) => {
    console.log( item)
})

// itemsArray = itemsArray.sort()

//console.log(itemsArray)

//for (let i = 0; i < itemsArray.length; i++) {
//    console.log(i + '-й елемент: ', itemsArray[i])
//}
//console.log('Перевірка підключеного файлу скриптів market.js')


let itemsArray = [
    {
        firstName: "Віталій",
        lastName: "Шатківський",
        age: 43,
        subject: "Інформатика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    },
    {
        firstName: "Наталія",
        lastName: "Венцель",
        age: 18,
        subject: "Адміністратор",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
    },
    {
        firstName: "Наталія",
        lastName: "Кучер",
        age: 18,
        subject: "Фізика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
    },
    {
        firstName: "Олена",
        lastName: "Геча",
        age: 18,
        subject: "Історія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
    },
    {
        firstName: "Марія",
        lastName: "Медведєва",
        age: 18,
        subject: "Географія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/medvedyeva-mariya-vasylivna/",
    },
    {
        firstName: "Марія",
        lastName: "Гетманська",
        age: 18,
        subject: "Психолог",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/hetmanska-m-o/",
    },
    {
        firstName: "Вікторія",
        lastName: "Нелипович",
        age: 18,
        subject: "Математика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
    },
    {
        firstName: "Лариса",
        lastName: "Забелло",
        age: 18,
        subject: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/zabello-l-o/",
    },
    {
        firstName: "Анжела",
        lastName: "Лознюк",
        age: 18,
        subject: "Українська література",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
    },
    {
        firstName: "Наталія",
        lastName: "Зинюк",
        age: 18,
        subject: "Хімія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    },
    {
        firstName: "Ірина",
        lastName: "Глібко",
        age: 18,
        subject: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
    },
    {
        firstName: "Ірина",
        lastName: "Карандюк",
        age: 18,
        subject: "Українська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
        sell: 300,
        url: "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
    },
    

    
    
]
let itemsDiv = document.getElementById("items");

if (itemsDiv) {

    itemsArray
        .sort((a, b) => a.lastName.localeCompare(b.lastName))

        .forEach((item, index) => {
       itemsDiv.innerHTML += 
       `
       <div class = "item">
            <h2>Вчитель № ${index + 1} з ${itemsArray.length}</h2>
            <p class="title-tich">${item.lastName} ${item.firstName}</p>
            <p>Вік: ${item.age}</p>
            <p><img src = "${item.photo}" class="item-image"> </p>
            <p class="sell-tich">Ціна навчання: ${item.sell} грн</p>
            <p><a href = "${item.url}" targer="_blank" class="a-tich">Профіль</p>
       </div>`
    })
} else {
    console.log('Блок товару не знайдено')
}


// itemsArray = itemsArray.sort()

//console.log(itemsArray)

//for (let i = 0; i < itemsArray.length; i++) {
//    console.log(i + '-й елемент: ', itemsArray[i])
//}
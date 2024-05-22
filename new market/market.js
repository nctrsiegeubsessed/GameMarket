//console.log('Перевірка підключеного файлу скриптів market.js')


let itemsArray = [
    {
        title: "Carpathians",
        author: "Присяжнюк Богдана",
        author_photo: "",
        image: "",
        email: "23a_pbv@liceum.ztu.edu.ua",
        group: "10-A 2",
        game_github: "",
        game_pages: "",
        dosc: "", 
        forms: "",
        gamemarket_github: "",
        gamemarket_pages: "",
        market_pages: "",
        stars: 5,
    },
    

    //,{
        //firstName: "Наталія",
      //  lastName: "Венцель",
      //  age: 18,
      //  subject: "Адміністратор",
      //  photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna.jpg",
       // sell: 300,
       // url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
  //  },
  //  {
    //    firstName: "Наталія",
     //   lastName: "Кучер",
 //       age: 18,
 //       subject: "Фізика",
   //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna.jpg",
   //     sell: 300,
     //   url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
  //  },
 //   {
       // firstName: "Олена",
       // lastName: "Геча",
      //  age: 18,
       // subject: "Історія",
      //  photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
     // //  sell: 300,
     //   url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
  //  },
  //  {
 //       firstName: "Марія",
 //       lastName: "Медведєва",
      //  age: 18,
      //  subject: "Географія",
      //  photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna.jpg",
      //  sell: 300,
    //    url: "https://lyceum.ztu.edu.ua/team/medvedyeva-mariya-vasylivna/",
   // },
 //   {
 //       firstName: "Марія",
  //      lastName: "Гетманська",
     //   age: 18,
    //    subject: "Психолог",
    //    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna.jpg",
      //  sell: 300,
      //  url: "https://lyceum.ztu.edu.ua/team/hetmanska-m-o/",
  // },
  // {
   //     firstName: "Вікторія",
   //     lastName: "Нелипович",
   //     age: 18,
    //    subject: "Математика",
      //  photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
     //   sell: 300,
      //  url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
  //  },
  //  {
    //    firstName: "Лариса",
    //    lastName: "Забелло",
    //    age: 18,
    //    subject: "Англійська мова",
   //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
   //     sell: 300,
 //  //     url: "https://lyceum.ztu.edu.ua/team/zabello-l-o/",
 // // // },
 // // {
   ///     firstName: "Анжела",
   //     lastName: "Лознюк",
  //      age: 18,
   //     subject: "Українська література",
   ///     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1.jpg",
   //     sell: 300,
   //     url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
   // },
   // {
   //     firstName: "Наталія",
   //     lastName: "Зинюк",
   //     age: 18,
   //     subject: "Хімія",
   //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
   //     sell: 300,
   //     url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
   // },
   // {
   //     firstName: "Ірина",
   //     lastName: "Глібко",
   //     age: 18,
   //     subject: "Англійська мова",
   //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
   //     sell: 300,
   //     url: "https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
   // },
   // {
      //  firstName: "Ірина",
      //  lastName: "Карандюк",
      //  age: 18,
      //  subject: "Українська мова",
      //  photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
      //  sell: 300,
      //  url: "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
//    },
    

    
    
]
let itemsDiv = document.getElementById("items");

if (itemsDiv) {

    itemsArray
        .sort((a, b) => a.lastName.localeCompare(b.lastName))

        .forEach((item, index) => {
       itemsDiv.innerHTML += 
       `
       <div class = "item">
       <div class="item-title">${item.title}</div>
       <div class="item-author">${item.author}</div>
            <div class="item-image">
            <img src="${item.image}" class = "item-image">
            </div>

            <div class="parts-pay">
                <div><img src="" alt="">${item.mono}</div>
                <div><img src="" alt="">${item.pb}</div>
       </div>

       <div class="prise">
            <div><span>${item.prise_standart} </span><sup>грн</sup></div>
            <div><span>${item.prise_discount} </span><sup>грн</sup></div>
       </div>

       <div  class="prise bonus">
            <div>ціна за купоном</div>
            <div><span>${item.prise_coupon} </span><sup>грн</sup></div>
            </div>
            </div>
       
       
       `
    })
} else {
    console.log('Блок товару не знайдено')
}


// itemsArray = itemsArray.sort()

//console.log(itemsArray)

//for (let i = 0; i < itemsArray.length; i++) {
//    console.log(i + '-й елемент: ', itemsArray[i])
//}
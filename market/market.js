console.log("пфсm.js")
let itemsArray = [
    {
        title: "мотокоса 43",
        image: "https://tatragarden.ua/image/cache/catalog/product/tatra-garden/tatra-garden-bcu-45/tatra-garden-bcu-45_01-800x800.webp",
        lapka: "6",
        pb: "8",
        prise_normal: 5499,
        prise_discoun: 4497,
        price_coupon: 4395,
    },
    {
        title: "Електричний тример 110",
        image: "https://static.dnipro-m.ua/cache/products/6566/order_history_315131.jpg",
        lapka: "6",
        pb: "8",
        prise_normal: 4497,
        prise_discoun: 3498,
        price_coupon: 3396,
    },
    {
        title: "Електрична газонокосарка 32",
        image: "https://static.dnipro-m.ua/cache/products/6567/order_history_300685.jpg",
        lapka: "6",
        pb: "8",
        prise_normal: 4497,
        prise_discoun: 3297,
        price_coupon: 3195,
    },

    {
        title: "Акумуляторний обрискувач 12N",
        image: "https://static.dnipro-m.ua/cache/products/8964/order_history_314479.jpg",
        lapka: "6",
        pb: "8",
        prise_normal: 2190,
        prise_discoun: 1698,
        price_coupon: 1596,
    }
]
let itemsDiv = document.getElementById("items")

if (itemsDiv) {

    itemsArray.forEach((item, index) => {
        //console.log(item)
        //itemsDiv.innerText += item
        itemsDiv.innerHTML +=
            `
    <div class="item">
    <div class="item-title"> ${item.title} </div>
  
      <p> <img src = "${item.image}" class = "item-image"></p>
      
  
      <div class="parts-pay">
        <div><img src="https://onlysolar.in.ua/wp-content/uploads/2023/07/mono-lapka.png" >${item.lapka}</div>
        <div><img src="img\Без имени.png" alt="">${item.pb}</div>
      </div>
  
      <div class="prise">
        <div>звичайна ціна <span>${item.prise_normal} </span><sup>грн</sup></div>
        <div>ціна зі знижкою<span>${item.prise_discoun} </span><sup>грн</sup></div>
      </div>
  
      <div class="prise bonus">
        <div> ціна за купоном</div>
        <div><span>${item.price_coupon}</span><sup>грн</sup></div>
      </div>
    `
    })

} else {
    console.log('Блок товарів не знайдено')
}


// itemsArray.sort().forEach((item,index) =>{
//     console.log(index +'-й елемент: ' ,item)
// })

//  itemsArray = itemsArray.sort()

//consel.log(itemsArray)
// for (let i=0;i < itemsArray.length;i ++){
//     console.log(i + '-й елемент: ', itemsArray[i])
// }

//console.log(itemsDiv)

// console.log('поле classList: ', itemsDiv.classList)
// console.log('поле id: ', itemsDiv.id)
// console.log('поле clientWidth: ', itemsDiv.clientWidth)
// console.log('поле innerHTML: ', itemsDiv.innerHTML)

// itemsDiv.innerText = 'програмно доданий текст'

// itemsDiv.innerText = 'Перший програмно доданий текст'
// itemsDiv.innerText += 'другий програмно доданий текст'

// itemsDiv.innerHTML += '<h1> Відформатований HTML</h1> '
// itemsDiv.innerHTML += '<div class = item></div>'
// itemsDiv.innerHTML += '<div class = item></div>'
// itemsDiv.innerHTML += '<div class = item></div>'
// itemsDiv.innerHTML += '<div class = item></div>'

// {
//     firstName:"Віталій",
//     LastNAme:"Шатківський",
//     age:43,
//     subject:"CS",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
//     prise: "350$/hour",
// },
// {
//     firstName:"Іван",
//     LastNAme:"Григорович",
//     age:43,
//     subject:"Захист України",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/sevruk-i-h/",
//     prise: "150 грн/hour",
// },
// {
//     firstName:"Василь ",
//     LastNAme:"Дмитрович",
//     age:43,
//     subject:"Фізична культура",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
//     prise: "270 євро/hour",
//     url:"https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
// },
// {
//     firstName:"Тарас ",
//     LastNAme:"Євгенович",
//     age:43,
//     subject:"Англ мова",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
//     prise: "200 франків/hour",
// },
// {
//     firstName:"Рикардо ",
//     LastNAme:"Милос",
//     age:23,
//     subject:"Біологія",
//     photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUsdm3qOeu7KCczCy55IT_Lj_MLzJqHT_gYmoiVeU4w&s",
//     url:"https://drebedenboi.fandom.com/ru/wiki/%D0%A0%D0%B8%D0%BA%D0%B0%D1%80%D0%B4%D0%BE_%D0%9C%D0%B8%D0%BB%D0%BE%D1%81_(FlexAir)",
//     prise: "400$/hour",
// },
// {
//     firstName:"Олена",
//     LastNAme:"Анатоліївна",
//     age:23,
//     subject:"Історія",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/hecha-o-a/",
//     prise: "200 грн/hour",
// },
// {
//     firstName:"Наталія",
//     LastNAme:"Вікторівна",
//     age:23,
//     subject:"Фізика",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/kucher-n-v/",
//     prise: "200 грн/hour",
// },
// {
//     firstName:"Тарас ",
//     LastNAme:"Євгенович",
//     age:43,
//     subject:"Англ мова",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
//     prise: "200 франків/hour",
// },
// {
// firstName:"Вікторія",
//     LastNAme:"Віталіївна",
//     age:23,
//     subject:"Математика",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
//     prise: "200 грн/hour",
// },
// {
//     irstName:"Іван",
//     LastNAme:"Григорович",
//     age:43,
//     subject:"Захист України",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/sevruk-i-h/",
//     prise: "150 грн/hour",
//     },
//     {
//         firstName:"Вікторія",
//             LastNAme:"Віталіївна",
//             age:23,
//             subject:"Математика",
//             photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
//             url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
//             prise: "200 грн/hour",
//         },
//         {
//             firstName:"Вікторія",
//                 LastNAme:"Віталіївна",
//                 age:23,
//                 subject:"Математика",
//                 photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
//                 url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
//                 prise: "200 грн/hour",
//             },
// 'Газонокосарка 43',
// 'Електричний тример 110',
// 'Електрична газонокосарка 32',
// 'Акамулятор 12',
// 'Газонокосарка 430',
// 'Електричний тример 130',
//  'Електрична газонокосарка 320',
//  'Акамулятор 120',
//  'Газонокосарка 430',
// 'Електричний тример 130',
//  'Електрична газонокосарка 320',
//  'Акамулятор 120',
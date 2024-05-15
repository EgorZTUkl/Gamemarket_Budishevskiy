console.log("пфсm.js")
let itemsArray= [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акамулятор 12',
    'Газонокосарка 430',
    'Електричний тример 130',
     'Електрична газонокосарка 320',
     'Акамулятор 120',
     'Газонокосарка 430',
    'Електричний тример 130',
     'Електрична газонокосарка 320',
     'Акамулятор 120',
]
let itemsDiv = document.getElementById("items")

if (itemsDiv) {

itemsArray.forEach((item,index)=>{
    //console.log(item)
//itemsDiv.innerText += item
itemsDiv.innerHTML += 
    `
    <div class = "item">
    <h2>Товар №${index + 1 + ' з 12'}</h2>
    <p>${item}</p>
    </div>
    `
})
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
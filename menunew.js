
const menuItems = [
    {
        image: './images/menu/Rectangle 9.png', title: 'Smashed Avo', path: 'cart.html', 
        price: 20,
        id: 1,
        quantity: 1,
    },
    { image: './images/menu/Rectangle 10.png', title: 'Yin&Yang', path: 'cart.html',price: 10,
        id: 2,
        quantity: 1, },
    { image: './images/menu/Rectangle 11.png', title: 'Pancake', path: 'cart.js',price: 20,
        id: 3,
        quantity: 1, },
    { image: './images/menu/Rectangle 12.png', title: 'Huevos Rancheros', path: 'cart.html',price: 20,
        id: 4,
        quantity: 1, },
    { image: './images/menu/Rectangle 13.png', title: 'Rancheros (Tofu)', path: 'cart.html' ,price: 20,
        id: 5,
        quantity: 1,},
    { image: './images/menu/Rectangle 14.png', title: 'Breakkie Roll', path: 'cart.html', price: 20,
        id: 6,
        quantity: 1, },
    { image: './images/menu/Rectangle 15.png', title: 'Breakkie Roll', path: 'cart.html', price: 20,
        id: 7,
        quantity: 1,},
    { image: './images/menu/Rectangle 16.png', title: 'Burrito',price: 20,
        id: 8,
        quantity: 1, }
];
const menucon = document.querySelector('.menuItems');
menuItems.map((object) => {
    const menu = `<div class="card-item">
        <a href="${object.path}" ><img src="${object.image}" class="menu-image"></a>
        <p>${object.title}</p>
      </div>    `
    let div = document.createElement('div');
    div.innerHTML = menu;
    menucon.appendChild(div);
    div.addEventListener('click', ()=> {
        selectMenu(object);
    })
})


const menulock = () => {
    window.location.href = "home-page.html"
}
const selectMenu = (menu) => {
    const menuItems = [];
    const previousMenu = localStorage.getItem("itemSelection")

    if(previousMenu) {
        menuItems = JSON.parse(previousMenu)
    }

    menuItems.push(menu)

    localStorage.setItem("itemSelection", JSON.stringify(menuItems));
}
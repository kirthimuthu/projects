
const menuItems = [
    {image: './images/menu/Rectangle 9.png', title: 'Smashed Avo', path: 'home-page.html'},
    {image: './images/menu/Rectangle 10.png', title: 'Yin&Yang', path: 'home-page.html'},
    {image: './images/menu/Rectangle 11.png', title: 'Pancake', path: 'home-page.html'},
    {image: './images/menu/Rectangle 12.png', title: 'Huevos Rancheros', path: 'home-page.html'},
    {image: './images/menu/Rectangle 13.png', title: 'Rancheros (Tofu)', path: 'home-page.html'},
    {image: './images/menu/Rectangle 14.png', title: 'Breakkie Roll', path: 'home-page.html'},
    {image: './images/menu/Rectangle 15.png', title: 'Breakkie Roll', path: 'home-page.html'},
    {image: './images/menu/Rectangle 16.png', title: 'Burrito'}   
];
const menucon = document.querySelector('.menuItems');
menuItems.map((object) => {
    console.log(object.title);
    const menu=`<div class="card-item">
        <a href="${object.path}" ><img src="${object.image}" class="menu-image"></a>
        <p>${object.title}</p>
      </div>    `
      let div = document.createElement('div');
      div.innerHTML = menu;
      console.log(menu);
      menucon.appendChild(div);
})


const menulock = () => {
    window.location.href = "home-page.html"
}
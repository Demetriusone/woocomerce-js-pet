const mockData = [{
        id: 1,
        name: 'NIKE AIR BLACK LEATHER ',
        category: "For Walking",
        description: "Ці кросівки мають м’яку проміжну підошву для додаткової амортизації, формовану задню частину для екстра підтримки і гумову підошву для витривалості.",
        price: 150,
        discount: 0.2,
        image: "./img/p1.jpg"
},
    {
        id: 2,
        name: 'NIKE AIR RED LEATHER  ',
        category: "For Running",
        description: "Ці кросівки мають м’яку проміжну підошву для додаткової амортизації, формовану задню частину для екстра підтримки і гумову підошву для витривалості.",
        price: 300,
        discount: 0.3,
        image: "./img/p2.jpg"
    },
    {   id: 3,
        name: 'PUMA RS-X POP ',
        category: "For Running",
        description: "Ці кросівки мають м’яку проміжну підошву для додаткової амортизації, формовану задню частину для екстра підтримки і гумову підошву для витривалості.",
        price: 320,
        discount: 0.4,
        image: "./img/p3.jpg"
    },
    {
        id: 4,
        name: 'PUMA X-RAY  ',
        description: "Ці кросівки мають м’яку проміжну підошву для додаткової амортизації, формовану задню частину для екстра підтримки і гумову підошву для витривалості.",
        category: "For Walking",
        price: 400,
        discount: 0.5,
        image: "./img/p4.jpg"
    },
    {
        id: 5,
        name: 'NEW BALANCE MODEL 574',
        description: "Ці кросівки мають м’яку проміжну підошву для додаткової амортизації, формовану задню частину для екстра підтримки і гумову підошву для витривалості.",
        category: "Universal",
        price: 400,
        discount: 0.6,
        image: "./img/p5.jpg"
    },
    {
        id: 6,
        name: 'NEW BALANCE MODEL 530 ',
        category: "For Running",
        description: "Ці кросівки мають м’яку проміжну підошву для додаткової амортизації, формовану задню частину для екстра підтримки і гумову підошву для витривалості.",
        price: 320,
        discount: 0.2,
        image: "./img/p6.jpg"
    },
    {
        id: 7,
        name: 'REEBOK RUN 2020',
        category: "For Dancing",
        description: "Ці кросівки мають м’яку проміжну підошву для додаткової амортизації, формовану задню частину для екстра підтримки і гумову підошву для витривалості.",
        price: 599,
        discount: 0.4,
        image: "./img/p7.jpg"
    },
    {
        id: 8,
        name: 'REEBOOK CLASSIC ',
        category: "Universal",
        description: "Ці кросівки мають м’яку проміжну підошву для додаткової амортизації, формовану задню частину для екстра підтримки і гумову підошву для витривалості.",
        price: 700,
        discount: 0.35,
        image: "./img/p8.jpg"
    }
];
    const data = [...mockData];
    const renderList = (container) => {
        const html =`<div class="product-container"` + data.reduce((html, product) => {
            return html + `
            <div class="product-wrapper">
                <img src="${product.image}" alt="${product.image}" class="product-image"/>
                <div class="product-name">${product.name} </div>
                <div class="product-price-wrapper">
                <div class="product-price-discount"></div>
                    ${product.price * product.discount}
                </div>
                <div class="product-price-main">${product.price}</div>
                
    </div>
            `
        },'') + `</div>`;
        container.innerHTML = html;
    };

    const renderFilters = () => {

    };

    const container = document.querySelector(".container");
    renderList(container);
























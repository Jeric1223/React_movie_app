import React from 'react';

const foodILike = [
    {
        id: 1,
        name: 'Kimchi',
        image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.B4QMCfh6O7edtNrJUUs4mQHaE8%26pid%3DApi&f=1',
    },
    {
        id: 2,
        name: 'Bibimbap',
        image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F44%2FDolsot-bibimbap.jpg%2F1200px-Dolsot-bibimbap.jpg&f=1&nofb=1',
    },
    {
        id: 3,
        name: 'Cake',
        image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.seriouseats.com%2Fimages%2F2014%2F11%2FBakedOccasions_BirthdayCake.jpg&f=1&nofb=1',
    },
    {
        id: 4,
        name: 'Kimbap',
        image:
            'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg',
    },
];

function Food({ name, pictrue }) {
    return (
        <div>
            <h2>I Like {name}</h2>
            <img src={pictrue} alt={name} />
        </div>
    );
}

function renderFood(dish) {
    return <Food key={dish.id} name={dish.name} pictrue={dish.image} />;
}

function App() {
    return <div>{foodILike.map(renderFood)}</div>;
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
    {
        id: 1,
        name: 'Kimchi',
        image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.B4QMCfh6O7edtNrJUUs4mQHaE8%26pid%3DApi&f=1',
        rating: 5,
    },
    {
        id: 2,
        name: 'Bibimbap',
        image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F44%2FDolsot-bibimbap.jpg%2F1200px-Dolsot-bibimbap.jpg&f=1&nofb=1',
        rating: 4.9,
    },
    {
        id: 3,
        name: 'Cake',
        image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.seriouseats.com%2Fimages%2F2014%2F11%2FBakedOccasions_BirthdayCake.jpg&f=1&nofb=1',
        rating: 4.6,
    },
    {
        id: 4,
        name: 'Kimbap',
        image:
            'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg',
        rating: 3.7,
    },
];

function Food({ name, pictrue, rating }) {
    return (
        <div>
            <h2>I Like {name}!</h2>
            <h4>{rating}/5.0</h4>
            <img src={pictrue} alt={name} />
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    pictrue: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

function renderFood(dish) {
    return (
        <Food
            key={dish.id}
            name={dish.name}
            pictrue={dish.image}
            rating={dish.rating}
        />
    );
}

function App() {
    return <div>{foodILike.map(renderFood)}</div>;
}

export default App;

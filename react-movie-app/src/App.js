import React from 'react';

function Nav() {
    return (
        <nav>
            <div></div>
        </nav>
    );
}

function Food({ fav }) {
    return <h3>I like {fav}!</h3>;
}

const foodILike = [
    {
        name: 'Kimchi',
        image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.B4QMCfh6O7edtNrJUUs4mQHaE8%26pid%3DApi&f=1',
    },
    {
        name: 'Bibimbap',
        image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F44%2FDolsot-bibimbap.jpg%2F1200px-Dolsot-bibimbap.jpg&f=1&nofb=1',
    },
    {
        name: 'Cake',
        image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.seriouseats.com%2Fimages%2F2014%2F11%2FBakedOccasions_BirthdayCake.jpg&f=1&nofb=1',
    },
];

function App() {
    return (
        <div>
            <Nav />
            <h1>Hello</h1>
            <Food fav="JERIC1" />
        </div>
    );
}

export default App;

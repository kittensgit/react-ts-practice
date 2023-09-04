import React from 'react';
import './App.css';

// type Order = {
//     title: string;
//     quantity?: number;
// };

// interface MyOrder {
//     title: string;
//     quantity?: number;
// }

type X = {
    a: string;
    b: number;
};

type Y = X & {
    c: string;
    d: number;
};

let y: Y = {
    a: 'meow',
    c: 'joke',
    b: 8,
    d: 22,
};

interface Auto {
    country: string;
}

interface BMW extends Auto {
    year: number;
}

let bmw: BMW = {
    country: 'germany',
    year: 2023,
};

function App() {
    return <div className="App">app</div>;
}

export default App;

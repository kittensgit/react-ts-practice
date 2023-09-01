import React from 'react';
import './App.css';

type Order = {
    title: string;
    quantity: number;
};

const order: Order = {
    title: 'margarita',
    quantity: 10,
};

const orders: Order[] = [
    {
        title: 'margarita',
        quantity: 10,
    },
    {
        title: 'margarita',
        quantity: 10,
    },
];

let variable: null | number = null;
variable = 22;

function App() {
    return <div className="App">app</div>;
}

export default App;

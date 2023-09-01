import React from 'react';
import './App.css';

type PrintTitle = (title: string) => string;

const printTitle: PrintTitle = (title) => {
    return title;
};

console.log(printTitle('cheese'));

const test: unknown = 'test';

function App() {
    return <div className="App">app</div>;
}

export default App;

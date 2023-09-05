import React, { FC, useState } from 'react';
import Pizza from './models/Pizza';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm';
import DisplayPizzas from './components/DisplayPizzas';

const App: FC = () => {
    const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

    const addPizza = (newPizza: Pizza) => {
        setPizzasList([...pizzasList, newPizza]);
    };

    const updatePizza = (newPizza: Pizza) => {
        setPizzasList(
            pizzasList.map((pizza) =>
                pizza.id === newPizza.id ? newPizza : pizza
            )
        );
    };

    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">Our pizzeria</span>
                <AddPizzaForm addPizza={addPizza} />
                <DisplayPizzas
                    pizzaList={pizzasList}
                    updatePizza={updatePizza}
                />
            </div>
        </div>
    );
};

export default App;

import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from './SinglePizza';

interface DisplayPizzasProps {
    pizzaList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzaList, updatePizza }) => {
    return (
        <div className="container">
            {pizzaList.map((pizza) => {
                return (
                    <SinglePizza
                        key={pizza.id}
                        pizza={pizza}
                        updatePizza={updatePizza}
                    />
                );
            })}
        </div>
    );
};

export default DisplayPizzas;

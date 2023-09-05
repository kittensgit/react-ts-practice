import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from './SinglePizza';

interface DisplayPizzasProps {
    pizzaList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (idPizza: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
    pizzaList,
    updatePizza,
    deletePizza,
}) => {
    return (
        <div className="container">
            {pizzaList.map((pizza) => {
                return (
                    <SinglePizza
                        key={pizza.id}
                        pizza={pizza}
                        updatePizza={updatePizza}
                        deletePizza={deletePizza}
                    />
                );
            })}
        </div>
    );
};

export default DisplayPizzas;

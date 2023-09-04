import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from './SinglePizza';

interface DisplayPizzasProps {
    pizzaList: Pizza[];
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzaList }) => {
    return (
        <div className="container">
            {pizzaList.map((pizza) => {
                return <SinglePizza key={pizza.id} pizza={pizza} />;
            })}
        </div>
    );
};

export default DisplayPizzas;

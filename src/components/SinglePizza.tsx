import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

interface SinglePizzaProps {
    pizza: Pizza;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza }) => {
    return (
        <div className="pizza">
            <img src={`/img/${pizza.img}`} alt="image" />
            <h2>{pizza.title}</h2>
            <span>{pizza.price}$</span>
            <div className="pizza-controls">
                <AiFillEdit />
                <AiFillDelete />
            </div>
        </div>
    );
};

export default SinglePizza;

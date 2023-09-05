import React, { FC, useState } from 'react';
import Pizza from '../models/Pizza';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditPizzaForm from './EditPizzaForm';

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (idPizza: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({
    pizza,
    updatePizza,
    deletePizza,
}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    };

    return (
        <div className="pizza">
            <img src={`/img/${pizza.img}`} alt="image" />
            <h2>{pizza.title}</h2>
            <span>{pizza.price}$</span>
            <div className="pizza-controls">
                <AiFillEdit onClick={handleToggleEdit} />
                <AiFillDelete onClick={() => deletePizza(pizza.id)} />
            </div>
            {edit ? (
                <EditPizzaForm
                    data={pizza}
                    updatePizza={updatePizza}
                    handleToggleEdit={handleToggleEdit}
                />
            ) : null}
        </div>
    );
};

export default SinglePizza;

import React, { FC, useState } from 'react';
import './styles.css';
import Pizza from '../models/Pizza';

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

const initState = {
    title: '',
    price: '',
    img: '',
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = useState<{
        title: string;
        price: string;
        img: string;
    }>(initState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewPizza({
            ...newPizza,
            [name]: value,
        });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, price, img } = newPizza;
        if (title && price && img) {
            addPizza({
                title,
                img,
                price: Number(price),
                id: Date.now(),
            });
            setNewPizza(initState);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="name"
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                type="text"
                name="price"
                placeholder="price"
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                type="text"
                name="img"
                placeholder="image"
                onChange={handleChange}
                value={newPizza.img}
            />
            <button type="submit">+ Add to menu</button>
        </form>
    );
};

export default AddPizzaForm;

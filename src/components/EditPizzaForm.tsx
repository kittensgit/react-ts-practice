import React, { FC, useState } from 'react';
import Pizza from '../models/Pizza';

interface EditPizzaFormProps {
    data: Pizza;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data }) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditPizza({
            ...editPizza,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, price, img } = editPizza;
        if (title && price && img) {
        }
    };

    return (
        <form onSubmit={handleSubmit} className="edit-form">
            <input
                type="text"
                name="title"
                placeholder="name"
                onChange={handleChange}
                value={editPizza.title}
            />
            <input
                type="text"
                name="price"
                placeholder="price"
                onChange={handleChange}
                value={editPizza.price}
            />
            <input
                type="text"
                name="img"
                placeholder="image"
                onChange={handleChange}
                value={editPizza.img}
            />
            <button type="submit">save</button>
        </form>
    );
};

export default EditPizzaForm;

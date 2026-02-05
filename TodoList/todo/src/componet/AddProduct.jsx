import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../features/productSlice";
import Dashboard from "./Dashboard";


export default function AddProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const add = () => {
        if (!title || !price) {
            alert("Please fill all fields");
            return;
        }

        dispatch(
            addProduct({
                id: Date.now(),
                title,
                price,
                category
            })
        );

        navigate("/products");
    };

    return (
        <div className="mt-4 text-center">
            <Dashboard />
            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className="ms-5"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <input
            className="ms-5"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button className="ms-5 btn btn-success" onClick={add}>Add</button>
        </div>
    );
}
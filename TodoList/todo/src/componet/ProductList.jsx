import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchProducts,
    deleteProduct,
    updateProduct,
} from "../features/productSlice";
import AddProduct from "./AddProduct";

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.list);

    const [editId, setEditId] = useState(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    
    const startEdit = (product) => {
        setEditId(product.id);
        setTitle(product.title);
        setCategory(product.category)
        setPrice(product.price);
    };

    
    const update = () => {
        dispatch(
            updateProduct({
                id: editId,
                title,
                category,
                price,
            })
        );
        setEditId(null); 
    };

    return (
        <div>
            <AddProduct />
            <div className="container">
                <table class="table">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((data, index) => (
                                <>
                                    <tr key={index} className="text-center">
                                        <td>{data.id}</td>
                                        <td>{data.title}</td>
                                        <td>{data.category}</td>
                                        <td>{data.price}</td>
                                        <td>
                                            <button className='btn btn-success mx-1' onClick={() => startEdit(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => dispatch(deleteProduct(data.id))} >Delete</button>
                                        </td>
                                    </tr>
                            {editId === data.id && (
                                <tr className="text-center">
                                    <td>{data.id}</td>
                                    <td>
                                        <input
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </td>
                                     <td>
                                        <input
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={update} className='btn btn-success '>Update</button>
                                        <button onClick={() => setEditId(null)} className='btn btn-info ms-2'>Cancel</button>
                                    </td>
                                </tr>
                            )}
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>

          
        </div>
    );
}
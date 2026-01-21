import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header";

export default function Add() {
    const redirect = useNavigate()
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "cards"), {
      name,
      type,
      price: Number(price),
      img,
      createdAt: serverTimestamp(),
    });

    setName("");
    setType("");
    setPrice("");
    setImg("");
    redirect("/view")
  };
  const styles = {
  form: {
    width: "380px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#0d6efd",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};


  return (
    <div>
      
    <Header />
    <form onSubmit={handleSubmit} style={styles.form}>
  <h2 style={styles.title}>Add New Card</h2>

  <input
    placeholder="Card Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    style={styles.input}
  />

  <input
    placeholder="Type"
    value={type}
    onChange={(e) => setType(e.target.value)}
    style={styles.input}
  />

  <input
    type="text"
    placeholder="Price"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    style={styles.input}
  />

  <input
    placeholder="Image URL"
    value={img}
    onChange={(e) => setImg(e.target.value)}
    style={styles.input}
  />

  <button type="submit" style={styles.button}>
    Add Card
  </button>
</form>
</div>
  );
}

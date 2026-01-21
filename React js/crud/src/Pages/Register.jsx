import React, { useState } from "react";
import { db } from "../Firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "users-name"), {
        name,
        email,
        password,
        createdAt: new Date()
      });

      alert("User registered successfully!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      alert("Registration failed!");
    }
  };

  return (
     <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#1D4ED8" }}>
        Register
      </h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "100%",
            marginBottom: "15px",
            padding: "12px 15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
            fontSize: "14px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            marginBottom: "15px",
            padding: "12px 15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
            fontSize: "14px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            marginBottom: "20px",
            padding: "12px 15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
            fontSize: "14px",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "500",
            fontSize: "16px",
            color: "#fff",
            background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px", color: "#555" }}>
        Already have an account? <Link to="/" style={{ color: "#2575fc" }}>Login</Link>
      </p>
    </div>
  );
};

export default Register;

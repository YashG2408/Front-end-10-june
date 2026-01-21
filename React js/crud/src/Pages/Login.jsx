import React, { useState } from "react";
import { db } from "../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields ❌");
      return;
    }

    try {
      setLoading(true);

      // Fetch all users from Firestore
      const querySnapshot = await getDocs(collection(db, "users-name"));

      // Debug: log all users
      querySnapshot.docs.forEach(doc => {
        console.log("Firestore User:", doc.id, doc.data());
      });

      // Find user with matching email & password
      const userDoc = querySnapshot.docs.find((doc) => {
        const data = doc.data();
        return (
          data.email?.trim().toLowerCase() === email.trim().toLowerCase() &&
          data.password === password
        );
      });

      if (!userDoc) {
        alert("Invalid email or password ❌");
        setLoading(false);
        return false;
      }

      // Save user in localStorage
      const user = { id: userDoc.id, ...userDoc.data() };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");

      alert(`Welcome ${user.name} ✅`);
      navigate("/home");

    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
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
        Login
      </h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            margin: "10px 0",
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
            margin: "10px 0",
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
            marginTop: "15px",
            borderRadius: "8px",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "500",
            fontSize: "16px",
            color: "#fff",
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
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
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px", color: "#555" }}>
        Don't have an account? <a href="/register" style={{ color: "#2575fc" }}>Sign Up</a>
      </p>
    </div>
  );
};

export default Login;

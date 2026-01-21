import React, { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [docId, setDocId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔹 Load user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) return;

    setDocId(storedUser.id);
    setName(storedUser.name || "");
    setEmail(storedUser.email || "");
  }, []);

  // 🔹 Update user profile
  const handleUpdate = async () => {
    if (!docId) {
      alert("User ID missing");
      return;
    }

    try {
      await updateDoc(doc(db, "users-name", docId), {
        name,
        email,
        password,
      });

      // ✅ Update localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ id: docId, name, email })
      );

      // 🔥 Tell app data changed
      window.dispatchEvent(new Event("storageUpdate"));

      alert("Profile updated successfully ✅");

      // ✅ Navigate AFTER update
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Update failed ❌");
    }
  };

  return (
    <div
  style={{
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  }}
>
  <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#1D4ED8" }}>
    User Dashboard
  </h2>

  <input
    type="text"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
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
    onClick={handleUpdate}
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontWeight: "500",
      fontSize: "16px",
      color: "#fff",
      background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "transform 0.2s, box-shadow 0.2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.03)";
      e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    }}
  >
    Update Profile
  </button>
</div>

  );
}

export default Dashboard;

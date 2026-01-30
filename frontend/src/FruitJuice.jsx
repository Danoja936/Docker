import { useState } from "react";
import { useNavigate } from "react-router-dom";

import apple from "./assets/fruits/apple.jpg";
import pineapple from "./assets/fruits/pineapple.jpg";
import mango from "./assets/fruits/mango.png";
import grapes from "./assets/fruits/grapes.jpg";
import dragon from "./assets/fruits/dragon.jpg";
import guava from "./assets/fruits/guava.jpg";

function FruitJuice() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const juices = [
    { id: 1, name: "Fresh Apple Juice", price: 150, img: apple, desc: "100% Organic Apples" },
    { id: 2, name: "Pineapple Blast", price: 180, img: pineapple, desc: "Sweet & Tangy" },
    { id: 3, name: "Mango Delight", price: 200, img: mango, desc: "King of Fruits" },
    { id: 4, name: "Grape Sparkle", price: 160, img: grapes, desc: "Rich in Antioxidants" },
    { id: 5, name: "Dragon Punch", price: 250, img: dragon, desc: "Exotic & Refreshing" },
    { id: 6, name: "Guava Nectar", price: 140, img: guava, desc: "Vitamin C Boost" },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ display: "flex", height: "calc(100vh - 80px)", overflow: "hidden" }}>
      {/* Left Side: Juice Grid */}
      <div style={{ flex: 1, padding: "40px", overflowY: "auto", backgroundColor: "var(--bg-color)" }}>
        <h1 style={{ textAlign: "center", marginBottom: "10px", fontSize: "2.5rem" }}>🍹 Fresh Juice Menu</h1>
        <p style={{ textAlign: "center", color: "var(--text-light)", marginBottom: "40px", fontSize: "1.1rem" }}>Hand-picked fruits squeezed to perfection.</p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "30px",
          paddingBottom: "40px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {juices.map((juice) => (
            <div key={juice.id} className="card-hover" style={{
              backgroundColor: "var(--white)",
              borderRadius: "var(--radius)",
              overflow: "hidden",
              boxShadow: "var(--shadow)",
              border: "1px solid rgba(0,0,0,0.05)"
            }}>
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img src={juice.img} alt={juice.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ margin: "0 0 10px 0", fontSize: "1.3rem" }}>{juice.name}</h3>
                <p style={{ color: "var(--text-light)", fontSize: "0.9rem", height: "40px" }}>{juice.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
                  <span style={{ fontSize: "1.4rem", fontWeight: "bold", color: "var(--secondary)" }}>Rs. {juice.price}</span>
                  <button
                    onClick={() => addToCart(juice)}
                    className="btn btn-primary"
                    style={{ borderRadius: "20px", padding: "8px 20px" }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={{ padding: "10px 20px", cursor: "pointer", border: "1px solid #ccc", background: "white", borderRadius: "8px" }}
            onClick={() => navigate("/dashboard")}
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>

      {/* Right Side: Bill Section */}
      <div style={{
        width: "400px",
        backgroundColor: "var(--white)",
        borderLeft: "1px solid rgba(0,0,0,0.05)",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "-5px 0 20px rgba(0,0,0,0.02)",
        zIndex: 10
      }}>
        <h2 style={{ borderBottom: "2px solid var(--bg-color)", paddingBottom: "20px", marginTop: 0 }}>🧾 Juice Bill</h2>

        <div style={{ flex: 1, overflowY: "auto", margin: "20px 0" }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: "100px", color: "var(--text-light)", opacity: 0.6 }}>
              <p style={{ fontSize: "4rem", margin: 0 }}>🍹</p>
              <p>Your juice cart is empty.</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "10px",
                backgroundColor: "var(--bg-color)",
                transition: "var(--transition)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "8px",
                    backgroundColor: "#ffeeba", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem"
                  }}>🍹</div>
                  <div>
                    <div style={{ fontWeight: "600" }}>{item.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>Rs. {item.price}</div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#dc3545",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    lineHeight: 1,
                    padding: "0 5px"
                  }}
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>

        <div style={{ borderTop: "2px solid var(--bg-color)", paddingTop: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <span style={{ color: "var(--text-light)" }}>Total Amount</span>
            <span style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--text-dark)" }}>Rs. {totalPrice}</span>
          </div>

          <button
            className="btn btn-primary"
            style={{
              width: "100%",
              padding: "18px",
              fontSize: "1.1rem",
              opacity: cart.length > 0 ? 1 : 0.5,
              pointerEvents: cart.length > 0 ? "auto" : "none",
            }}
            onClick={() => alert(`Juice Order Placed! Total: Rs. ${totalPrice}`)}
          >
            Checkout & Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default FruitJuice;

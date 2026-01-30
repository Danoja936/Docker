import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import fruit images
import apple from "./assets/fruits/apple.jpg";
import banana from "./assets/fruits/banana.png";
import mango from "./assets/fruits/mango.png";
import avocado from "./assets/fruits/avocado.jpg";
import grapes from "./assets/fruits/grapes.jpg";
import pineapple from "./assets/fruits/pineapple.jpg";

function Dashboard() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Fruit Data
  const fruits = [
    { id: 1, name: "Apple", price: 100, img: apple, desc: "Fresh Red Apples" },
    { id: 2, name: "Banana", price: 50, img: banana, desc: "Organic Bananas" },
    { id: 3, name: "Mango", price: 150, img: mango, desc: "Juicy Alphonso" },
    { id: 4, name: "Avocado", price: 200, img: avocado, desc: "Creamy & Healthy" },
    { id: 5, name: "Grapes", price: 120, img: grapes, desc: "Sweet Black Grapes" },
    { id: 6, name: "Pineapple", price: 90, img: pineapple, desc: "Tropical Delight" },
  ];

  const addToCart = (fruit) => {
    setCart([...cart, fruit]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ display: "flex", height: "calc(100vh - 80px)", overflow: "hidden" }}>
      {/* LEFT PANEL */}
      <div style={{ flex: 1, padding: "40px", overflowY: "auto", backgroundColor: "var(--bg-color)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <div>
            <h1 style={{ fontSize: "2.5rem", color: "var(--text-dark)" }}>Welcome Back, Danoja! 👋</h1>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>Pick your favorite fruits today.</p>
          </div>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/profile")}
          >
            View Profile
          </button>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "30px",
          paddingBottom: "40px"
        }}>
          {fruits.map((fruit) => (
            <div key={fruit.id} className="card-hover" style={{
              backgroundColor: "var(--white)",
              borderRadius: "var(--radius)",
              overflow: "hidden",
              boxShadow: "var(--shadow)",
              border: "1px solid rgba(0,0,0,0.05)"
            }}>
              <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                <img src={fruit.img} alt={fruit.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "rgba(255,255,255,0.9)", padding: "4px 10px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "bold" }}>
                  Fresh
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "10px" }}>
                  <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{fruit.name}</h3>
                  <span style={{ fontSize: "1.1rem", fontWeight: "bold", color: "var(--secondary)" }}>Rs. {fruit.price}</span>
                </div>
                <p style={{ color: "var(--text-light)", fontSize: "0.9rem", marginBottom: "20px" }}>{fruit.desc}</p>

                <button
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={() => addToCart(fruit)}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL (BILL) */}
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
        <h2 style={{ borderBottom: "2px solid var(--bg-color)", paddingBottom: "20px", marginTop: 0 }}>Current Order</h2>

        <div style={{ flex: 1, overflowY: "auto", margin: "20px 0" }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: "100px", opacity: 0.5 }}>
              <span style={{ fontSize: "4rem" }}>🛒</span>
              <p style={{ fontSize: "1.1rem", marginTop: "10px" }}>Your cart is empty</p>
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
                  <img src={item.img} alt="" style={{ width: "40px", height: "40px", borderRadius: "8px", objectFit: "cover" }} />
                  <div>
                    <div style={{ fontWeight: "600" }}>{item.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>Unit Price: Rs. {item.price}</div>
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
            <span style={{ color: "var(--text-light)" }}>Subtotal</span>
            <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>Rs. {totalPrice}</span>
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
            onClick={() => alert(`Total Bill: Rs. ${totalPrice}\nThank you for shopping!`)}
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

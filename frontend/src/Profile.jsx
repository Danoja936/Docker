import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    const user = {
        name: "Alex Doe",
        email: "alex.doe@example.com",
        joined: "January 2024",
        avatar: "https://ui-avatars.com/api/?name=Alex+Doe&background=ffc107&color=333&bold=true"
    };

    const orders = [
        { id: "#ORD-001", date: "2024-01-20", items: "Apple (2kg), Banana (1dz)", total: 680, status: "Delivered" },
        { id: "#ORD-002", date: "2024-01-25", items: "Mango (3kg)", total: 1050, status: "Processing" },
    ];

    return (
        <div style={{ padding: "60px 40px", maxWidth: "900px", margin: "0 auto" }}>
            {/* Profile Card */}
            <div style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "var(--white)",
                padding: "40px",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow)",
                marginBottom: "40px",
                border: "1px solid rgba(0,0,0,0.05)"
            }}>
                <img src={user.avatar} alt="Profile" style={{ width: "120px", height: "120px", borderRadius: "50%", marginRight: "40px", border: "5px solid var(--bg-color)" }} />
                <div>
                    <h1 style={{ margin: "0 0 10px 0", fontSize: "2.5rem", color: "var(--text-dark)" }}>{user.name}</h1>
                    <p style={{ margin: "0", color: "var(--text-light)", fontSize: "1.1rem" }}>{user.email}</p>
                    <div style={{ marginTop: "15px", display: "inline-block", padding: "5px 15px", backgroundColor: "#e2e6ea", borderRadius: "20px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                        Member since {user.joined}
                    </div>
                </div>
            </div>

            {/* Order History */}
            <h2 style={{ marginBottom: "25px", color: "var(--text-dark)", fontSize: "1.8rem" }}>📜 Order History</h2>
            <div style={{
                backgroundColor: "var(--white)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                boxShadow: "var(--shadow)",
                border: "1px solid rgba(0,0,0,0.05)"
            }}>
                {orders.map((order, index) => (
                    <div key={order.id} style={{
                        padding: "25px",
                        borderBottom: index !== orders.length - 1 ? "1px solid #eee" : "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        transition: "var(--transition)"
                    }}
                        className="card-hover"
                    >
                        <div>
                            <h4 style={{ margin: "0 0 8px 0", fontSize: "1.1rem" }}>{order.id} <span style={{ fontSize: "0.9rem", color: "var(--text-light)", fontWeight: "normal", marginLeft: "10px" }}>• {order.date}</span></h4>
                            <p style={{ margin: "0", color: "var(--text-light)" }}>{order.items}</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <p style={{ margin: "0 0 8px 0", fontWeight: "700", fontSize: "1.2rem", color: "var(--text-dark)" }}>Rs. {order.total}</p>
                            <span style={{
                                padding: "6px 14px",
                                borderRadius: "20px",
                                fontSize: "0.85rem",
                                fontWeight: "600",
                                backgroundColor: order.status === "Delivered" ? "#d4edda" : "#fff3cd",
                                color: order.status === "Delivered" ? "#155724" : "#856404"
                            }}>
                                {order.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="btn btn-secondary"
                style={{ marginTop: "40px", padding: "12px 30px" }}
                onClick={() => navigate("/dashboard")}
            >
                ← Back to Dashboard
            </button>
        </div>
    );
}

export default Profile;

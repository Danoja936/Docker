import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    if (['/signin', '/signup', '/'].includes(location.pathname)) {
        return null;
    }

    const navStyle = {
        padding: "1rem 2rem",
        backgroundColor: "var(--dark)",
        color: "var(--white)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "var(--shadow)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(10px)"
    };

    const logoStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "var(--primary)",
        display: "flex",
        alignItems: "center",
        gap: "10px"
    };

    const getLinkStyle = (path) => {
        const isActive = location.pathname === path;
        return {
            color: isActive ? "var(--primary)" : "var(--white)",
            textDecoration: "none",
            fontSize: "1rem",
            marginLeft: "30px",
            fontWeight: isActive ? "600" : "400",
            position: "relative",
            transition: "var(--transition)",
            opacity: isActive ? 1 : 0.8
        };
    };

    return (
        <nav style={navStyle}>
            <div style={logoStyle}>
                🍎 Fruit Shop
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Link to="/dashboard" style={getLinkStyle("/dashboard")}>Dashboard</Link>
                <Link to="/fruitjuice" style={getLinkStyle("/fruitjuice")}>Fresh Juices</Link>
                <Link to="/profile" style={getLinkStyle("/profile")}>Profile</Link>
                <Link to="/signin" style={{
                    ...getLinkStyle("/logout"),
                    color: "var(--white)",
                    backgroundColor: "#dc3545",
                    padding: "8px 20px",
                    borderRadius: "50px",
                    opacity: 1,
                    fontWeight: "600",
                    marginLeft: "40px"
                }}>Logout</Link>
            </div>
        </nav>
    );
}

export default Navbar;

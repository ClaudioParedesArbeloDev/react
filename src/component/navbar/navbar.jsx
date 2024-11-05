import '../../css/navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h3>Tienda de ReactJs</h3>
            </div>
            <nav>
                <a href=""><li>Home</li></a>
                <a href=""><li>Products</li></a>
                <a href=""><li>AboutUs</li></a>
                <a href=""><li>Contact</li></a>
            </nav>
            <div className="cart">
                <a href=""><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
    )
}

export default Navbar
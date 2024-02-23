import "./Header.css";

function Header({openCart}) {
  // const [showCart, setShowCart] = useState(false);

  // function openCart() {
  //   setShowCart(true);
  // }
  // function closeCart() {
  //   setShowCart(false);
  // }

  return (
    <div className="header">
      <h1>My react store</h1>
      <div>
        <button className="yellow-button" onClick={openCart}>
          Cart
        </button>
      </div>
      {/* <Modal show={showCart} onClose={closeCart}>
        Hello from Cart
      </Modal> */}
      {/* {showCart && (
        <div className="backdrop" onClick={closeCart}>
          <div className="modal">Hello from Cart</div>
        </div>
      )} */}
    </div>
  );
}

export default Header;

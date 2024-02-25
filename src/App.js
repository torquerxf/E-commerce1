import { useState } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  const handleAddToCart = (productId, productName, productImage) => {
    // let updatedCartItems = cartItems;
    // updatedCartItems = updatedCartItems.concat({
    //   id: productId,
    //   name: productName,
    //   image: productImage,
    //   quatity: 1,
    // });
    const cartItem = {
      id: productId,
      name: productName,
      image: productImage,
      quatity: 1,
    };
    setCartItems((state) => [...state, cartItem]);
    // setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Header openCart={openCart} />
      <Products onAddToCart={handleAddToCart} />
      <Cart showCart={showCart} closeCart={closeCart} cartItems={cartItems} />
    </div>
  );
}

export default App;

import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleDecrement = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item.quantity > 1) {
      updateQuantity(itemId, item.quantity - 1);
    }
  };

  const handleIncrement = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    updateQuantity(itemId, item.quantity + 1);
  };
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const getTotalItem = () => {
    return cart.reduce((total, item)=> total + item.quantity, 0);
  }
  
  

 return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted" />
                      </div>
                      <hr className="my-4" />

                      {cart.map((item) => (
                        <div key={item.id} className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img src={item.image} className="img-fluid rounded-3" alt={item.name} />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2">
                            <h6 className="text-muted" />
                            <h6 className="text-black mb-0">{item.name}</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3 d-flex">
                            <button
                              className="btn btn-link"
                              onClick={() => handleDecrement(item.id)}
                            >
                              -<i className="" />
                            </button>
                            <div className="input-group">
                              <input
                                style={{ width: "calc(100% + 10px)" }}
                                id={`quantity-${item.id}`}
                                min={0}
                                name="quantity"
                                value={item.quantity}
                                type="number"
                                className="form-control form-control-sm"
                                readOnly
                              />
                            </div>
                            <button
                              className="btn btn-link"
                              onClick={() => handleIncrement(item.id)}
                            >
                              +<i className="" />
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">{item.price}</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#" className="text-muted" onClick={() => removeFromCart(item.id)}>
                              <img src="./assets/images/trash-icon.jpg" alt="Remove" />
                            </a>
                          </div>
                        </div>
                      ))}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="/product" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2" />
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>

                  {/* ... Phần thông tin đặt hàng ở đây ... */}
                  <div className="col-lg-4 bg-grey">
                <form action="" method="post" encType="multipart/form-data">
                  <div className="p-5">
                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-4">
                      <h4 className="text-uppercase">Items :  </h4>
                      <h4>{getTotalItem()}</h4>
                    </div>
                    <h5 className="text-uppercase mb-3">Shipping</h5>
                    <div className="mb-4 pb-2">
                      <select className="form-select">
                        <option value={1}>Standard-Delivery- €5.00</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                      </select>
                    </div>
                    <h5 className="text-uppercase mb-3">Give code</h5>
                    <div className="mb-5">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Examplea2"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Examplea2">
                          Enter your code
                        </label>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-5">
                      <h5 className="text-uppercase">Total price: </h5>  
                      <h4>{getTotalPrice()}</h4>
                    </div>
                    <input
                      id="coursepayment"
                      type="hidden"
                      name="IdCart"
                      defaultValue=""
                    />
                    <button
                      type="submit"
                      className="btn btn-dark btn-block btn-lg"
                      data-mdb-ripple-color="dark"
                    >
                      Payment
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Cart;

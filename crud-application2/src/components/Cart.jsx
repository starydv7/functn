import React,{useState} from 'react'

const Cart = () => {

    const cart = ["shoes", "pants", "kurtas"];
    const promise = createOrder(cart);
    promise.then(function () {
        proceedToPayment(orderId);
    });
    function createOrder(cart) {
        const pr = new Promise(function (resolve, reject) {
            if (!validCart((car)){
                const err = new Error("cart is not valid");
                reject(err);
            }
            const orderId = "1234";
            if (orderId) {
                resolve(orderId);
            }
        })
    }
  return (
    <div>Cart</div>
  )
}

export default Cart
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getcart } from "../../redux/actions/CartActions";

function Cart() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcart(id));
  }, [id]);
  const cart = useSelector((state) => state.CartReducer.cart);
  return (
    <div>
      {" "}
      {cart.products.map((el) => (
        <div>
          {" "}
          <li> {el.title} </li>
          <li> {el.qty} </li>
        </div>
      ))}{" "}
    </div>
  );
}

export default Cart;

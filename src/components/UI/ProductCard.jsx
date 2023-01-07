import React from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { cartAction } from "../../redux/slices/cartSlice";
//
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  // redux
  const dispatch = useDispatch();
  // redux => action add to cart
  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id: item.id,
        productName: item.prodactName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("product added successfully");
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.prodactName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-betwen p-2">
          <span className="price">{item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;

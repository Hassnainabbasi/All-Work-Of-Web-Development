import React, { useContext, useEffect } from "react";
import { Card, Col, Image, Button } from "antd";
import { AddToCart } from "../Context/Context";
import { ShoppingFilled, ShoppingOutlined } from "@ant-design/icons";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const ProductCard = ({ item, isaddedtoCart }) => {

  const { add } = useContext(AddToCart)
  

// console.log(item.quantity)

  return (
    
    <Col sm={24} md={12} lg={8} xl={6}>
      <div className="my-2 border-2 flex flex-col items-center justify-center card ">
        <Image src={item.thumbnail} height={200} width={200} />
    <Link to={`/product/${item.id}`} className="flex justify-between p-3 w-full">
          <h1 className="font-semibold">{item.title}</h1>
          <h1 className="font-semibold">${item.price}</h1>
    </Link>
        <Button onClick={() => add(item)} className={`my-2 add-to-cart ${isaddedtoCart ? "cursor-default bg-blue-300" : "cursor-pointer"}`} icon={isaddedtoCart ? <ShoppingFilled /> : <ShoppingOutlined />} >{isaddedtoCart ? "Added" : "Add To Cart"}</Button>
      </div>
    </Col>
  )

}
export default ProductCard;
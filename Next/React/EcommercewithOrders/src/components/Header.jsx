import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Image } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AddToCart } from "../Context/Context";

function Header() {
  const navigate = useNavigate();

  const {cartitems} = useContext(AddToCart)

  const isLogin = false;
  return (
    <header className="text-gray-600 shadow body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <Image
            height={70}
            width={70}
            className="rounded-full"
            // preview={false}
            src="shopping-logo.webp"
          />
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"/"} className="mr-5 hover:text-blue-500 text-black font-bold">
            Home
          </Link>
          <Link to={"/products"} className="mr-5 hover:text-blue-500 text-black font-bold">
            Products
          </Link>
          <Link to={"/orders"} className="mr-5 hover:text-blue-500 text-black font-bold">
            Orders
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {isLogin ? (
            <Avatar size={50} icon={<UserOutlined />} />
          ) : (
            <Button onClick={() => navigate("/auth") } className="login">Login</Button>
          )}
          <Link to={"/cartitems"}>
            <Badge count={cartitems.length}>
              <ShoppingCartOutlined
                style={{
                  fontSize: 30,
                  color: "blue",
                }}
              />
            </Badge>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
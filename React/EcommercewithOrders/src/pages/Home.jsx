import { Button, Row,Col,Image } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [loader , setLoader] = useState(true)

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=12")
      .then((res) => {
        setProducts(res.data.products)
        setLoader(false)
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between my-10">
        <h1 className="text-3xl font-bold ">Find your Best Products</h1>
        <Link to={"/products"}>
          <Button className="see-all">See All</Button>
        </Link>
      </div>

      {
        loader? <img src="loader.webp" alt="" className="mx-auto" />
        :
      <Row gutter={16} justify={'center'}>
        {products.map((data,index) => (
        
    
            <Col sm={24} md={12} lg={8} xl={6} key={index}>
              <div className="my-2 border-2 flex flex-col items-center justify-center card">
                <Image src={data.thumbnail} height={200} width={200} />
            <Link to={`/product/${data.id}`} className="flex justify-between p-3 w-full">
                  <h1 className="font-semibold">{data.title}</h1>
                  <h1 className="font-semibold">${data.price}</h1>
            </Link>
              </div>
            </Col>
          
        ))}
      </Row>
      }

    </div>
  );
}

export default Home;
import { Button, Input, Pagination, Row, Select } from "antd";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { SearchOutlined, AreaChartOutlined } from "@ant-design/icons";
import { AddToCart } from "../Context/Context";
import { useParams } from "react-router";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [total, setTotal] = useState(20);
  const [loader, setLoader] = useState(true)
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState("")
  const [searchProduct, setSearchProduct] = useState([])
  const [notfound, setNotfound] = useState(false)

  const { cartitems } = useContext(AddToCart)

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data)
        setLoader(false)
        setNotfound(false)
      });
  }, []);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=194")
      .then((res) => setSearchProduct(res.data.products))

  }, [])

  const find = () => {
    const result = searchProduct.filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))
    setProducts([...result])
    if (result.length) {
      setNotfound(false)
    } else {
      setNotfound(true)
    }
  }


  useEffect(() => {
    setLoader(true)
    const url = category === "All" ? `https://dummyjson.com/products?limit=20&skip=${skip}` : `https://dummyjson.com/products/category/${category}?limit=20&skip=${skip}`
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        setTotal(res.data.total);
        setLoader(false)
        setNotfound(false)
      });
  }, [skip, category]);



  return (
    <div className="container mx-auto">
      <div className="flex gap-2 justify-between my-10">
        <Input type="search" className="shadow-xl" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        <Button icon={<SearchOutlined />} className="h-12 search" onClick={find}>
          Search
        </Button>
        <Select
          onChange={(e) => setCategory(e)}
          className="h-12 w-1/2 shadow-lg"
          placeholder="Select Category"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }

          options={categories.map((data) => {
            return { label: data.name, value: data.slug };
          })}

        />
        <Button onClick={() => setCategory("All")} icon={<AreaChartOutlined />} className="h-12 all-product">
          All Products
        </Button>
      </div>
      {
        loader ? <img className="mx-auto" src="loader.webp" alt="" />
          :
          notfound ? <h1 className="text-5xl text-center font-bold p-10">Not Found !</h1>
            :
            <Row gutter={16} justify={"center"}>
              {products.map((data) => {
                const isaddedtoCart = cartitems.findIndex((item) => item.id === data.id) !== -1;
                return (
                  <ProductCard key={data.id} item={data} isaddedtoCart={isaddedtoCart} />
                )
              })}
            </Row>
      }


      <div className="flex justify-center my-8">
        <Pagination
          onChange={(num) => {
            setSkip((num - 1) * 20);
          }}
          defaultCurrent={1}
          pageSize={20}
          total={total}
        />
        ;
      </div>
    </div>
  );
}

export default Products;
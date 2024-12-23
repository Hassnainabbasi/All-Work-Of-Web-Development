import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import CategoryChip from "../components/CategoryChip";

function Products() {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const [category, setCategory] = useState([])
    const [chosen, setChosen] = useState("All")
    const [search, setSearch] = useState("")
    const [searchProduct, setSearchProduct] = useState([])
    const [notfound, setNotFound] = useState(false)


    useEffect(() => {
        const url = chosen === "All" ? "https://dummyjson.com/products" : `https://dummyjson.com/products/category/${chosen}`
        axios(url)
            .then((res) => {
                setProducts(res.data.products)
                setLoader(false)
            })
            .catch((err) => {
                console.log(err)
                setLoader(false)

            })
    }, [chosen])


    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/categories")
            .then((res) => {
                setCategory(res.data);
                setLoader(false)
                setNotFound(false)
            })
            .catch((err) => {
                console.log(err);
                setLoader(false)

            });
    }, []);

    useEffect(() => {
        const searchArr = products.map((data) => { return data })
        const result = searchArr.filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))
        console.log(result)
        setSearchProduct([...result])
        if (searchProduct.length) {
          setNotFound(false)
        }else{
          setNotFound(true)
        }
    }, [search])

    return (
        <div className="show-container">
           
            {
                loader ? ( <div className="loader">
                    <img src="loader.webp" alt=""  />
                    </div>) : (
                    <div>
                        <div className="flex flex-wrap my-4 mx-5 ">
                            <CategoryChip categories={
                                {
                                    slug: "All",
                                    name: "All"
                                }
                            }
                                isChosen={chosen === "All"}
                                onClick={() => setChosen("All")}
                            />
                            {
                                category.map((data) => {
                                    return (
                                        <CategoryChip key={data.slug} categories={data} isChosen={data.slug === chosen} onClick={() => setChosen(data.slug)} />
                                    )
                                })
                            }
                        </div>

                        <div className="flex justify-center">
                            <img src="search-logo.webp" className="search-logo" width="40px" alt="" />
                            <input type="text" placeholder="Search Product" className="search placeholder:text-white font-bold" onChange={((e) => setSearch(e.target.value))} />
                        </div>
                        {
                            notfound ?
                                <div className="flex justify-center">
                                    <h1 className="font-bold text-5xl">Not found !</h1>
                                </div> :

                                <div className="flex flex-wrap -m-4 justify-center">
                                    {search ?
                                        searchProduct.map((item) => {
                                            return (
                                                <ProductCard key={item.id}
                                                    item={item} />

                                            )
                                        })
                                         :  products.map((item) => {
                                            return (
                                                <ProductCard key={item.id}
                                                    item={item} />
                                            )
                                        })
                                    }
                                </div>

                        }


                    </div>
                )
            }


        </div>

    )
}

export default Products;
import { useContext, useState } from "react"
import { AddToCart } from "../Context/Context"
import { Button } from "antd"
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { Checkout } from "../components/Checkout";


export default function Carts() {
    const { cartitems, add, minus, remove } = useContext(AddToCart)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const subTotal = cartitems.reduce((all, data) => data.price * data.quantity + all, 0).toFixed(2)
    const subQuantity = cartitems.reduce((all, data) => data.quantity + all, 0)


    return (
        <div className="container mx-auto">

            <div className="flex justify-center items-center my-3  gap-10">
                <div className="border border-black p-5 text-center font-bold rounded-lg text-blue-900">
                    <h1>Total Quantity</h1>
                    <h1>{subQuantity}</h1>
                </div>
                <div className="border p-5 border-black text-center font-bold rounded-lg text-blue-900">
                    <h1>Total Amount</h1>
                    <h1>${subTotal}</h1>
                </div>

                <Button onClick={()=> setIsModalOpen(true)} className="check">Check Out</Button>
                <Checkout isModalOpen={isModalOpen} handleOk={()=>setIsModalOpen(false)} handleCancel={()=>setIsModalOpen(false)} />
            </div>

            {
                cartitems.map((item, index) => {
                    return (
                        <div key={index} className="flex items-center gap-3 container mx-auto p-5 border my-2 card rounded-lg">
                            <img src={item.thumbnail} width={150} />
                            <div className="flex flex-col gap-3">

                                <h1 className="font-bold">{item.title}{`(${item.category})`}</h1>
                                <h1>{item.description}</h1>
                                <h1>${item.price}</h1>
                                <div className="gap-4 flex items-center font-bold">
                                    <Button onClick={() => add(item)} className="text-2xl  font-bold bg-green-300 ">+</Button>
                                    <span >{item.quantity}</span>
                                    <Button onClick={() => minus(item)} disabled={item.quantity <= 1} className="text-2xl font-bold bg-red-300 border-none">-</Button>
                                </div>
                                <h1>Total Price = ${(item.quantity * item.price).toFixed(2)}</h1>
                                <div>

                                    <Button className="remove" onClick={() => remove(item.id)} icon={<DeleteOutlined />}>Remove Item </Button>
                                </div>
                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}
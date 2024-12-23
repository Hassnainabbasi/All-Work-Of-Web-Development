import { Link } from "react-router-dom"

export function ProductCard({ item }) {
    const {thumbnail , category , price , title , id} = item
    return (
<Link className="card hover:translate-y-1" to={`${id}`}>
        <div  >
            <a className="block relative h-48 rounded overflow-hidden">
                <img
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full block"
                    src={thumbnail}
                />
            </a>
            <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                    {category}
                </h3>
                <h2 className=" title-font text-lg font-medium">
                    {title}
                </h2>
                <p className="mt-1">${price}</p>
            </div>
        </div>
</Link>

    )
}


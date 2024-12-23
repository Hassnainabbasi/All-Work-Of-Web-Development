function CategoryChip({categories,isChosen,onClick}){


    return(
        <div onClick={onClick} className={`cursor-pointer  hover:translate-y-1 chip hover:text-blue-800 border border-white p-2 mx-2 my-2 rounded-md px-5 text-2xl ${isChosen ? "bg-slate-950 text-white font-bold" : "bg-transparent backdrop-blur-3xl text-white font-bold"}`}>
            <h1>{categories.name}</h1>
        </div>
    )
}

export default CategoryChip;
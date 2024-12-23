function Inputs({ amount, description, addTransactions, type ,setAmount , setDescription , setType,clearAll}) {
    return (
        <div className='flex flex-col justify-center items-center m-10'>
            <div className='flex'>
                <input type="number" value={amount} placeholder='ADD AMOUNT' className='border border-purple-700 mx-2 rounded-sm p-2' onChange={(e) => setAmount(e.target.value)} />
                <input type="text" value={description} className='border border-purple-700 mx-2 rounded-sm p-2' placeholder='ADD DESCIPTION' onChange={(e) => setDescription(e.target.value)} />
                <select className={`border border-green-700 text-2xl font-bold mx-2 rounded-sm p-2 ${type == "Income" ? "bg-green-600" : "bg-red-600"}`} onChange={(e) => setType(e.target.value)}>
                    <option >Income</option>
                    <option >Expense</option>
                </select>
                <button onClick={addTransactions}
                    className='bg-blue-600 p-3 rounded-xl py-2 font-bold'>Submit</button>
                    <button onClick={clearAll} className='bg-red-300 p-3 rounded-xl py-2 font-bold mx-3'>Clear All</button>
            </div>
        </div>
    )
}

export default Inputs;
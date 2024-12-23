

function StatesShow ({transactions,keyValue,setTransactions}){

  const deleteState = (dataShow)=>{
  const filter = transactions.filter((data)=> data.keyValue !== dataShow)
setTransactions([...filter])
}

// console.log(transactions)

    return (
        <div className='flex flex-col justify-center items-center m-10'>
        <div className='flex flex-col gap-10'>
          {transactions.map((data, index) => {
            return (
            <div key={index}>
              <div className='  flex  text-3xl font-bold'>
                <h1 className={`w-60  ${data.type === "Income" ? "text-green-500" : "text-red-400"} `}>{index + 1}{') '}{data.amount}</h1>
                <h1 className='w-60  text-white'>{data.description}</h1>
                <h1 className={`underline  ${data.type === "Income" ? "text-green-500" : "text-red-400"}`}>{data.type}</h1>
                <h1 className='text-white -my-4 mx-8' >{data.record}</h1>
                <button onClick={()=> deleteState(data.keyValue)} className='bg-red-400 text-xl h-12 px-3 rounded-xl font-bold'>Delete</button>
              </div>
              <br />
              <hr />
            </div>
            )
          })}
        </div>

      </div>
    )
}

export default StatesShow;
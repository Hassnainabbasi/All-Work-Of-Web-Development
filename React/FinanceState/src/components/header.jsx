function Header({totalIncome,totalExpense,totalBalance,showTime}){
    return(
      <>
      {/* <div className='flex justify-center m-11 items-center text-white'>
      <h1 className='text-5xl font-bold'>{showTime}</h1>
    </div> */}

        <div className='flex justify-center m-11 items-center gap-9  text-white'>
        <div className='border bg-blue-600 border-purple-800 p-5 text-xl font-bold text-center rounded-xl'>
          <h1>Total Income</h1>
          <h1>{totalIncome}</h1>
        </div>
        <div className='border bg-red-500 border-purple-800 p-5 text-xl font-bold text-center rounded-xl'>
          <h1>Total Expense</h1>
          <h1>{totalExpense}</h1>
        </div>
        <div className='border bg-green-500 border-purple-800 p-5 text-xl font-bold text-center rounded-xl'>
          <h1>Total Balance</h1>
          <h1>{totalBalance}</h1>
        </div>
      </div>

      </>
    )
}

export default Header;
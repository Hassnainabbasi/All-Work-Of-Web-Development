import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Inputs from './components/inputs'
import StatesShow from './components/states'


function App() {


  {/* FINANCE TODO  */ }
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("Income")
  const [description, setDescription] = useState("")
  const [transactions, setTransactions] = useState([])
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
  const [record, setRecord] = useState([new Date().toLocaleTimeString(), <br />, new Date().toLocaleDateString(), <br />, days[new Date().getDay()]])
  const clearAll = ()=>{
    setTransactions([])
  }
  
  let getTime = setInterval(() => {

    setTime(new Date().toLocaleTimeString())

  }, 1000)

  const [showTime, setTime] = useState(getTime)

const [keyValue , setKey] = useState(0)


  let addTransactions = () => {
    if (amount == "" || description == "") {
      alert("Plz fill all inputs")
    } else {
      setTransactions([...transactions, { amount, type, description, record ,keyValue}]);
      setKey(keyValue + 1)
      setAmount("")
      setDescription("")
      setRecord([new Date().toLocaleTimeString(), <br />, new Date().toLocaleDateString(), <br />, days[new Date().getDay()]])
    }
  }


  let totalIncome = transactions.reduce((acc, transactions) => transactions.type === "Income" ? acc + parseInt(transactions.amount) : acc, 0)

  let totalExpense = transactions.reduce((acc, transactions) => transactions.type === "Expense" ? acc + parseInt(transactions.amount) : acc, 0)

  let totalBalance = totalIncome - totalExpense




  return (
    <>

      {/* FINANCE TODO  */}
      
      <Header totalIncome={totalIncome}
        totalExpense={totalExpense}
        totalBalance={totalBalance}
        showTime={showTime} />

      <Inputs amount={amount}
        description={description}
        addTransactions={addTransactions}
        type={type}
        setAmount={setAmount}
        setDescription={setDescription}
        setType={setType} 
        clearAll={clearAll}/>

      <StatesShow transactions = {transactions}
               keyValue ={keyValue} 
               setTransactions = {setTransactions} />

    </>
  )
}

export default App

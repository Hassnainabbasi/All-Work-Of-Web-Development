import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email , setEmail] = useState("") 
     const [password , setPassword] = useState("")
     const [user , setUser] = useState(null)
     const navigate = useNavigate()
     const handleSubmit = async(e) =>{
     e.preventDefault()
       
        const userRegisterdata = { email ,password}
        try {
            let response = await fetch('http://localhost:3000/auth/login',{
                method : "POST",
                 headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(userRegisterdata)
            })
    
          const data = await response.json();
          console.log(data);
    
          if (data && !data.error) {
          localStorage.setItem("token", data.data.token);
            console.log("token=>",data.data.token)
            navigate('/');
            setUser(data)
          } else {
            alert(data.msg || 'Login failed');
          }
          console.log(data)
          
        } catch (error) {
            console.log(error)
        }
    }

    console.log("user from frontend=>" , user)
  return (
    <div>
    <section className="dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-8 space-y-6 md:space-y-8 sm:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Login Your Account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-12" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required=""
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required=""
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors duration-300"
              >
                Login Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}

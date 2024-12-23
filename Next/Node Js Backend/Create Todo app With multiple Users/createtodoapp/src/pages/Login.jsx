
import React, { useState } from 'react'

export default function Login() {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault()
      console.log(email)
      console.log(password)
    //   try {
    //     const response = await fetch('http://localhost:4000/api/login',{
    //    method : "POST",
    //    headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body : JSON.stringify()
    //     })
    //     const result = await response.json();
    //     if(response.ok){
    //         alert("Login Sucessfully")
    //     }
    //     else {
    //         console.log('Login failed: ', result.message);
    //       }
    //   } catch (error) {
    //     console.log(error)
    //   }
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-green-700 p-12 py-20 rounded-lg shadow-md max-w-sm w-full">
            <h2 className="text-2xl font-bold text-center mb-7">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none">
                Login
              </button>
            </form>
          </div>
        </div>
      );
}

import React, { useState } from 'react'

export default function Signup() {

const [username,setUsername] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")


   const handleSubmit = async(e) =>{
    e.preventDefault()
    console.log(username)
    console.log(email)
    console.log(password)

    const userRegisterdata = {username , email,password}

    try {
        let response = await fetch('http://localhost:4000/api/data',{
            method : "POST",
             headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(userRegisterdata)
        })

      const data = await response.json();
        if(response.ok){
            localStorage.setItem('token', data.token);
            console.log("User signed up successfully");
            console.log("JWT Token: ", data.token);
             
        }
    } catch (error) {
        console.log(error)
    }
   } 
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-green-700 p-12 py-10 rounded-lg shadow-md max-w-sm w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-white">Username</label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
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
                Signup
              </button>
            </form>
          </div>
        </div>
      );
}

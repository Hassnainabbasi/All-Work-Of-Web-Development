import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
    console.log("Password:", password);

    const loginData = { email, password };

    try {
      // Backend ko POST request bhejna
      const response = await fetch('/api/signup', {
        method: 'GET',
        body: JSON.stringify(loginData),
      });

      // Agar response successful hai
      if (response.ok) {
        const result = await response.json();
        setUser(result.user);
        setErrorMessage('');
        console.log('Login successful:', result.message);
      } else {
        // Agar error aata hai
        const errorResult = await response.json();
        setErrorMessage(errorResult.message || 'Something went wrong');
        console.error('Login error:', errorResult.message);
      }
    } catch (error) {
      setErrorMessage('Network Error: Please try again later.');
      console.error('Error:', error);
    }
  };
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
};

export default Login;

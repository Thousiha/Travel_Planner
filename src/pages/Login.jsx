import React, { useState } from 'react';
import { loginUser } from '../services/AuthServices';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem('token', res.token);
      navigate('/userdashboard');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleLogin}
        className="bg-white p-12 rounded-3xl shadow-2xl w-full sm:w-96 flex flex-col gap-8"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Login</h2>

        {/* Email Input */}
        <div className="flex flex-col gap-3">
          <label className="text-xl text-gray-800 font-semibold" htmlFor="email">Enter your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            className="border border-gray-300 px-6 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-3">
          <label className="text-xl text-gray-800 font-semibold" htmlFor="password">Enter your Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border border-gray-300 px-6 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl text-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition duration-300"
        >
          Login
        </button>

        {/* Sign Up Link */}
        <p className="text-lg text-center mt-4 text-gray-700">
          Don't have an account?{' '}
          <a href="/signup" className="text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;

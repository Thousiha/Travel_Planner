import React, { useState } from 'react';
import { registerUser } from '../services/AuthServices';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await registerUser(formData);
      localStorage.setItem('token', res.token);
      toast.success('Signup successful! Redirecting...', { autoClose: 1500 });
      setTimeout(() => navigate('/userdashboard'), 1800);
    } catch (err) {
      toast.error('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 px-4">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-xl rounded-2xl w-full max-w-md p-8 sm:p-10">
        <h2 className="text-3xl font-bold mb-1 text-center">Sign Up</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 text-center">
          Create your account and start your journey
        </p>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
            <div
              className="absolute right-4 top-10 text-gray-500 dark:text-gray-300 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-md transition ${
              loading
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
            }`}
          >
            {loading ? 'Signing up...' : 'Create Account'}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
            Log in
          </Link>
        </p>

        <ToastContainer position="top-right" />
      </div>
    </div>
  );
};

export default Signup;



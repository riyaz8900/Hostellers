import React, { useState, useEffect } from 'react'
import google from '../assets/googl.avif'
import Loader from './Loader'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleLogin = async (e) => {
    setLoading(true)
    e.preventDefault()

    try {
      const response = await axios.post(
        'https://backend-txs7.onrender.com/api/auth/login',
        {
          username, 
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      localStorage.setItem('token', response.data.token)
      toast.success('Login success')
      setLoading(false)
      navigate('/')
    } catch (err) {
      console.error('Login failed:', err.response?.data)
      toast.error('Login failed')
    }finally{
       setLoading(false)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="container mx-auto px-3">
      <ol className="list-reset flex py-4">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <span className="mx-2"> / </span>
        </li>
        <li>Login</li>
      </ol>

      <div className="flex items-center h-screen justify-center py-5">
        <div className="shadow-lg px-4 py-6 w-[600px] bg-white rounded">
          <h1 className="text-2xl font-semibold mb-2">Login</h1>
          <p className="text-gray-400 mb-4">Sign in for the best prices, offers and rewards</p>

          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-300 py-2 rounded w-full font-semibold hover:bg-yellow-400 transition"
            >
              Login
            </button>

            <p className="py-3 text-center">
              Don't have an account?
              <span className="font-extrabold">
                <Link to="/register" className="text-blue-600 hover:underline ml-1">
                  Signup Here
                </Link>
              </span>
            </p>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-200" />
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-200" />
            </div>

            <div className="flex justify-center items-center gap-4 py-2">
              <div className="h-10 w-10">
                <img src={google} className="h-full w-full object-contain" alt="Google" />
              </div>
            </div>

            <div className="text-center text-xs text-gray-500 mt-4">
              By registering, you agree to our terms and privacy policy.
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

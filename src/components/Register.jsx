import React, { useState, useEffect } from 'react'
import facebook from '../assets/facebook.avif'
import google from '../assets/googl.avif'
import Loader from './Loader'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
  import { toast } from 'react-toastify';
function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: ''
    })
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500) // simulate loading delay (1.5s)

        return () => clearTimeout(timer)
    }, [])
    if (loading) {
        return <Loader />
    }
   const register = async (e) => {
    e.preventDefault();
    try {
       const response = await axios.post("http://localhost:5000/api/auth/register", {
    username: formData.email,       
  password: formData.password,
  fullName: formData.fullName,
  phone: formData.phone
});

        toast.success("Registration successful");
        navigate("/login");
    } catch (error) {
        console.log(error);
        toast.error('Something went wrong during registration');
    }
}

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className='container mx-auto px-3'>
            <ol className="list-reset flex">
                <li>
                    <Link to="/" className="text-blue-600 hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <span className="mx-2"> / </span>
                </li>
                 <li>Register</li>


                {/* <li className="text-gray-800 font-semibold">{selectedHostel.title}</li> */}
            </ol>
            <div className='flex items-center h-screen justify-center py-5'>

                <div className='shadow-lg px-4 py-4 w-[600px] '>
                    <div >
                        <h1 className='lg:text-2xl'>Create account</h1>
                        <p className='text-gray-400'>Sign up for the best prices, offers and rewards</p>
                    </div>
                 
                    <form className='mt-5' onSubmit={register}>
            <div className="py-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                className="w-full border rounded-md py-2 px-3" required />
            </div>

            <div className="py-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full border rounded-md py-2 px-3" required />
            </div>

            <div className="py-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange}
                className="w-full border rounded-md py-2 px-3" required />
            </div>

            <div className="py-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange}
                className="w-full border rounded-md py-2 px-3" required />
            </div>

            <button type="submit" className='bg-yellow-300 py-2 rounded w-full mt-4'>Register</button>
             <div className='py-2 text-center w-full'>
                            <p>Already have an account? <span className='font-extrabold'><a href='/login'>Login</a></span></p>
                        </div>
                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="mx-4 text-gray-500">or</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>
                        <div className="flex justify-center items-center gap-4 py-2">
                            <div className="h-20 w-20">
                                <img src={facebook} className="h-full w-full object-contain" alt="Facebook" />
                            </div>
                            <div className="h-20 w-20">
                                <img src={google} className="h-full w-full object-contain" alt="Google" />
                            </div>
                        </div>

                        <div className='flex items-center py-2 justify-center'>
                            <p>By registering, you agree with ourterms and conditions and privacy policy.</p>
                        </div>

          </form>
                </div>
            </div>
        </div>
    )
}

export default Register

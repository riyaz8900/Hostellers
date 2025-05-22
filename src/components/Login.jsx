import React,{useState,useEffect} from 'react'
import google from '../assets/googl.avif'
import Loader from './Loader'

function Login() {
       const [loading, setLoading] = useState(true)
 

     useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500) // simulate loading delay (1.5s)

        return () => clearTimeout(timer)
    }, [])
    if (loading) {
        return <Loader/>
    }
    return (
        <div>
            <div className='flex items-center h-screen justify-center py-5'>
                <div className='shadow-lg px-4 py-4 w-[600px] '>
                    <div >
                        <h1 className='lg:text-2xl'>Login</h1>
                        <p className='text-gray-400'>Sign in for the best prices, offers and rewards</p>
                    </div>
                    <form className='mt-5'>

                        <div className="py-2 block">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="py-2 block">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="mt-3 block">
                            <button className='bg-yellow-300 py-2 rounded w-full'>Login</button>
                        </div>

                        <div className='py-2 text-center w-full'>
                            <p>Dont have an account? <span className='font-extrabold'><a href='/register'> Signup Here</a> </span></p>
                        </div>
                        <div className="flex items-center my-2">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="mx-4 text-gray-500">or</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>
                        <div className="flex justify-center items-center gap-4 py-2">

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

export default Login

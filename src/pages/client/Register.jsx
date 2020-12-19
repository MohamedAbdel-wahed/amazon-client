import React,{useState} from 'react'
import {Link} from 'react-router-dom'


function Register() {

  const [cred,setCred]= useState({username:"", email:"", pwd:"", confirmPwd:""}) 

  const handleSubmit= (e)=>{
    e.preventDefault()

  }


  return (
    <div className="Register pt-4 px-2 xs:px-14 sm:px-32 md:px-52 lg:px-68 xl:px-110 2xl:px-120 bg-white select-none" style={{height: "89vh"}}>
        <div className="flex justify-center my-2">
          <img src="/images/svg/logo-auth.svg" className="w-24 xs:w-32"/>
        </div>
        <form onSubmit={handleSubmit} className="bg-white border border-white xs:border-gray-300 py-4 px-6 sm:px-8 xl:px-10 rounded-sm">
            <h1 className="mt-3 text-gray-700 text-3xl font-bold tracking-wide">Sign-Up</h1>
            <div className="flex flex-col mt-4">
                <label htmlFor="email" className="font-bold text-gray-700 text-sm">Email</label>
                <input type="text" onChange={e=>setCred({...cred, email:e.target.value})} value={cred.email} className="px-3 py-1.5 text-sm text-gray-700 focus:outline-none border border-gray-400 focus:border-yellow-600 rouned-md" placeholder="Enter Your Email"/>
                <p className="mx-0.5 my-1 text-xs text-red-800 tracking-wide">! Email error</p>
            </div>
             <div className="flex flex-col mt-2">
                <label htmlFor="pwd" className="font-bold text-gray-700 text-sm">Password</label>
                <input type="password" onChange={e=>setCred({...cred, pwd:e.target.value})} value={cred.pwd} className="px-3 py-1.5 text-sm text-gray-700 focus:outline-none border border-gray-400 focus:border-yellow-600 rouned-md" placeholder="Enter Your Password"/>
                <p className="mx-0.5 my-1 text-xs text-red-800 tracking-wide">! Password error</p>
            </div>
            <button className="w-full mt-4 px-4 py-1 text-gray-700 bg-gradient-to-r from-yellow-400 focus:from-yellow-500 tracking-wider text-sm border border-gray-500 focus:border-gray-100 focus:outline-none focus:ring-2 ring-yellow-500 rounded-sm">
               Sign Up
            </button>
            <p className="mt-3 text-xs">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        </form>
        <p className="mt-2 text-xs text-gray-700 text-center">_______already have an account?_______</p>
        <Link to="/login" className="inline-block text-center w-full mt-2 px-4 py-1 text-gray-700 bg-gradient-to-t from-gray-300 focus:from-gray-400 tracking-wider text-sm border border-gray-500 focus:border-gray-100 focus:outline-none focus:ring-2 ring-gray-400 rounded-sm">
            Login
        </Link>

    </div>
  )
}

export default Register

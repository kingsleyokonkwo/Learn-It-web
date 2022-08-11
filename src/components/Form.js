import React from "react";
import "./Form.css"
import { NavLink } from "react-router-dom";

export default function Form() {

    const [formData, setFormData] = React.useState({
        Email: "",
        password: "",
        confirmpassword: "",
        reminder: false
    })
   
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.confirmpassword) {
            console.log("successfully signed up")
        } else {
            console.log("passwords do not match")
        }
        // submit this to API
    }

    return(
        <div className="h-screen w-full bg-gray-800 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="max-w-[400px]  mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                <h2 className="text-4xl text-white font-bold text-center">SIGN UP</h2>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Email</label>
                    <input 
                    name="Email" 
                    onChange={handleChange} 
                    value={formData.Email}
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500
                             focus:bg-gray-800 focus:outline-none" type="email" />
                </div>

                <div className="flex flex-col text-gray-400 py-2">
                    <label>Password</label>
                    <input 
                    name="password" 
                    onChange={handleChange} 
                    value={formData.password} 
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 
                            focus:bg-gray-800 focus:outline-none" type="password" />
                </div>

                <div className="flex flex-col text-gray-400 py-2">
                    <label>Confirm Password</label>
                    <input 
                    name="confirmpassword" 
                    onChange={handleChange}
                    value={formData.confirmpassword}  
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 
                            focus:bg-gray-800 focus:outline-none" type="password" />
                </div>

                <div className="flex  py-2 items-center">
                    <input 
                    id="reminder" 
                    name="reminder"
                    className="mr-2" 
                    type="checkbox" 
                    checked={formData.reminder}  
                    onChange={handleChange}/>
                    <label htmlFor="reminder" className="text-gray-400">Remember me</label>
                    {/* <p className="text-gray-400">Forgot Password?</p> */}
                </div>
                <NavLink to="/hire"><button className="w-full my-5 py-2 bg-teal-500 text-white font-semibold rounded-lg">Sign Up</button></NavLink> 
                <p className="text-center text-gray-400">Already have an account? Sign in</p>
            </form>
        </div>
    )
}
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import authServive from "../appwrite/auth";

function Signup() {
const dispatch = useDispatch();
const navigate = useNavigate();
const { handleSubmit, register } = useForm();
const [error, setError] = useState("");
const signup = async (data) => {
    setError("");
    try {
    const session = await authServive.createAccount(
        data.email,
        data.password
    );
    if (session) {
        const userData = await authServive.getCurrentUser();
        if (userData) {
        dispatch(login(userData));
        navigate("/");
        }
    }
    } catch (error) {
    setError(error.message);
    }
};

return (
    <div className="flex items-center justify-center w-full">
    <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
        </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
        Sign In to your account
        </h2>
        <p className="text-center mt-2 text-base text-black/60 ">
        Already have an account?&nbsp;
        <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
        >
            Sign In{" "}
        </Link>
        </p>
        {error && <P className="text-red-600 mt-8 text-center">{error}</P>}
        <form onSubmit={handleSubmit(signup)} className="mt-8">
        <div className="space-y-5">
            {/* Name */}
            <Input 
            label="Name"
            placeholder="Enter your name"
            {...register("name", {
                required: true,
            })}
            />
            {/* Input field for Email */}
            <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
                required: true,
            })}
            />

            {/* Input field for Password */}
            <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", {
                required: true,
            })}
            />
            {/* Button */}
            <div className="text-center">
            <Button type="submit">Create Account</Button>
            </div>
        </div>
        </form>
    </div>
    </div>
);
}

export default Signup;

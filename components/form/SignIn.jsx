"use client";
import React from "react";

const SignIn = () => {
  return (
    <div className="bg-white border-stone-300 border-2 rounded-md overflow-clip w-[25rem] px-10 py-10">
      <h1 className="text-3xl font-bold">Sign In</h1>
      <p>
        Not a user?{" "}
        <a href="" className="text-blue-400 hover:underline">
          Register
        </a>
      </p>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.username.value);
        }}
        className="flex flex-col gap-1">
        <label htmlFor="username" className="text-stone-400">
          Enter username/email :
        </label>
        <input
          name="username"
          type="text"
          className="border border-slate-200 text-md p-1 rounded-lg"
        />
        <label htmlFor="password" className="text-stone-400">
          Enter password :
        </label>
        <input
          name="password"
          type="password"
          className="border-slate-200 border text-md p-1 rounded-lg"
        />
        <button
          type="submit"
          className="bg-black text-white text-md p-1 rounded-lg">
          Sign In
        </button>
      </form>
      <hr className="border border-stone-200 w-full my-5" />
      <div className="flex flex-col gap-4">
        <button className="border border-stone-300 hover:bg-stone-200 active:bg-white py-2 rounded-lg">
          Sign in with <img src="" alt="" className="w-5 h-5 inline" />
          Google
        </button>
        <button className="border border-stone-300 hover:bg-stone-200 active:bg-white py-2 rounded-lg">
          Sign in with <img src="" alt="" className="w-5 h-5 inline" />
          GitHub
        </button>
      </div>
      <p className="text-stone-500">
        Our{" "}
        <a href="" className="text-blue-400">
          Terms & Conditions
        </a>
      </p>
    </div>
  );
};

export default SignIn;

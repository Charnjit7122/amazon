import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainTheme from "./Theme/MainTheme";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repasswordError, setRePasswordError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value.trim());
    setNameError(""); // Clear the error message
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value.trim());
    setEmailError(""); // Clear the error message
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value.trim());
    setPasswordError(""); // Clear the error message
  };

  const handleRePasswordChange = (event) => {
    setRePassword(event.target.value.trim());
    setRePasswordError(""); // Clear the error message
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the input fields
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Please enter your name");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Please enter a password");
      isValid = false;
    }

    if (repassword.trim() === "") {
      setRePasswordError("Please enter the password again");
      isValid = false;
    } else if (password !== repassword) {
      setRePasswordError("Passwords do not match");
      isValid = false;
    }

    if (isValid) {
      // Add your registration logic here
      console.log("Registration submitted:", name, email, password, repassword);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <MainTheme>
      <div className="flex flex-col items-center space-y-10 py-10 bg-gray-100 min-h-screen">
        <Image
          src="/AmazonBlack.svg"
          width={150}
          height={40}
          alt="Amazon Logo"
        />

        <div className="bg-white p-8 rounded shadow-2xl w-96">
          <h1 className="text-2xl font-semibold mb-4">Create account</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Your name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="border-gray-300 border rounded w-full px-3 py-2 mt-1 text-sm focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full rounded-md sm:text-sm focus:ring-1"
              />
              {nameError && (
                <span className="text-red-500 text-sm">{nameError}</span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="border-gray-300 border rounded w-full px-3 py-2 mt-1 text-sm focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full rounded-md sm:text-sm focus:ring-1"
              />
              {emailError && (
                <span className="text-red-500 text-sm">{emailError}</span>
              )}
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="border-gray-300 border rounded w-full px-3 py-2 mt-1 text-sm focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full rounded-md sm:text-sm focus:ring-1 focus:transiton"
              />
              {passwordError && (
                <span className="text-red-500 text-sm">{passwordError}</span>
              )}
            </div>
            <div>
              <label htmlFor="repassword" className="text-sm font-medium">
                Password again
              </label>
              <input
                type="password"
                id="repassword"
                value={repassword}
                onChange={handleRePasswordChange}
                className="border-gray-300 border rounded w-full px-3 py-2 mt-1 text-sm focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full rounded-md sm:text-sm focus:ring-1"
              />
              {repasswordError && (
                <span className="text-red-500 text-sm">{repasswordError}</span>
              )}
            </div>

            <button className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-yellow-400 rounded hover:bg-white group w-full">
              <span className="w-96 h-96 rounded rotate-[-34deg] bg-[#FF9900] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-24 ml-10 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Create your Amazon account
              </span>
            </button>
          </form>
          <p className="text-xs mt-4">
            By creating an account, you agree to Amazon&apos;s&nbsp;
            <a href="#" className="text-blue-500 text-xs">
              Conditions of Use
            </a>{" "}
            and&nbsp;
            <a href="#" className="text-blue-500 text-xs">
              Privacy Notice.
            </a>
          </p>
          <p className="text-sm mt-2">
            Already have an account?&nbsp;
            <Link href="/Signin" className="text-blue-500">
              Sign in
            </Link>
          </p>
        </div>

        <footer className="mt-8 text-xs text-gray-500 text-center w-64">
          <div className="mb-2 flex justify-around w-64">
            <div>
              {" "}
              <Link href="#" className="text-blue-500">
                Conditions of Use
              </Link>{" "}
            </div>
            <div>
              {" "}
              <Link href="#" className="text-blue-500">
                Privacy Notice
              </Link>{" "}
            </div>
            <div>
              {" "}
              <Link href="#" className="text-blue-500">
                Help
              </Link>{" "}
            </div>
          </div>
          © 1996-{new Date().getFullYear()} Amazon.com, Inc. or its affiliates
        </footer>
      </div>
    </MainTheme>
  );
}

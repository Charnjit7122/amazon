import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Login submitted:", email, password);
  };

  return (
    <div className="flex flex-col items-center space-y-10 py-10 bg-gray-100 min-h-screen">
      <Image src="/AmazonBlack.svg" width={150} height={40} alt="Amazon Logo" />

      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              {" "}
              Password{" "}
            </label>
            <inputf
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="border-gray-300 border rounded w-full px-3 py-2 mt-1 text-sm focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>

          <button className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-yellow-400 rounded hover:bg-white group w-full">
            <span className="w-96 h-96 rounded rotate-[-34deg] bg-[#FF9900] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-24 ml-10 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Sign in
            </span>
          </button>
        </form>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs">
            <input type="checkbox" id="remember" className="mr-1" />
            <label htmlFor="remember">Keep me signed in</label>
          </div>
          <a href="#" className="text-blue-500 text-xs">
            Forgot your password?
          </a>
        </div>
        <p className="text-xs mt-4">
          By creating an account, you agree to Amazon's&nbsp;
          <a href="#" className="text-blue-500 text-xs">
            Conditions of Use
          </a>
          &nbsp;
          and
          &nbsp;
          <a href="#" className="text-blue-500 text-xs">
            Privacy Notice.
          </a>
        </p>
      </div>

      <p className="text-sm text-center">
        New to Amazon?&nbsp;
        <Link href={"/Register"}>
          <button className="mt-3 relative inline-flex items-center justify-start px-8 py-2 overflow-hidden font-medium transition-all bg-yellow-400 rounded hover:bg-white group w-full">
            <span className="w-96 h-96 rounded rotate-[-34deg] bg-[#FF9900] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-24 ml-10 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Create your Amazon account
            </span>
          </button>
        </Link>
      </p>
      <footer className="mt-8 text-xs text-gray-500 text-center w-64">
        <div className="mb-2 flex justify-around w-64">
          <div>
            <Link href="#" className="text-blue-500">
              Conditions of Use
            </Link>
          </div>
          <div>
            <Link href="#" className="text-blue-500">
              Privacy Notice
            </Link>
          </div>
          <div>
            <Link href="#" className="text-blue-500">
              Help
            </Link>
          </div>
        </div>
        © 1996-{new Date().getFullYear()} Amazon.com, Inc. or its affiliates
      </footer>
    </div>
  );
}









// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add your login logic here
//     console.log("Login submitted:", email, password);
//   };

//   return (
//     <div className="flex flex-col items-center space-y-10 py-10 bg-gray-100 min-h-screen">
//             <Image src="/AmazonBlack.svg" width={150} height={40} alt="Amazon Logo" />

//             <div className="bg-white p-8 rounded shadow-md w-96">
//                 <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
//                 <form onSubmit={handleSubmit} className="space-y-4">                  
//                     <div>
//                         <label htmlFor="email" className="text-sm font-medium">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={handleEmailChange}
//                             className="border-gray-300 border rounded w-full px-3 py-2 mt-1 text-sm focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full rounded-md sm:text-sm focus:ring-1"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="text-sm font-medium">                            Password                        </label>
//                         <inputf
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={handlePasswordChange}
//                             className="border-gray-300 border rounded w-full px-3 py-2 mt-1 text-sm focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full rounded-md sm:text-sm focus:ring-1"
//                         />
//                     </div>

//                     <button className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-yellow-400 rounded hover:bg-white group w-full">
//                         <span className="w-96 h-96 rounded rotate-[-34deg] bg-[#FF9900] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-24 ml-10 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
//                         <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
//                             Sign in
//                         </span>
//                     </button>
//                 </form>
//                 <div className="mt-4 flex items-center justify-between">
//           <div className="text-xs">
//             <input type="checkbox" id="remember" className="mr-1" />
//             <label htmlFor="remember">Keep me signed in</label>
//           </div>
//           <a href="#" className="text-blue-500 text-xs">
//             Forgot your password?
//           </a>
//         </div>
//                 <p className="text-xs mt-4">
//                     By creating an account, you agree to Amazon's&nbsp; 
//                     <a href="#" className="text-blue-500 text-xs">
//                      Conditions of Use
//           </a>  and&nbsp;
//           <a href="#" className="text-blue-500 text-xs">
//            Privacy Notice.
//           </a>
         
//                 </p>
//             </div>

//             <p className="text-sm text-center">
//                 New to Amazon?{" "}
//                 <Link href={"/Register"}>
//                 <button className="mt-3 relative inline-flex items-center justify-start px-8 py-2 overflow-hidden font-medium transition-all bg-yellow-400 rounded hover:bg-white group w-full">
//                         <span className="w-96 h-96 rounded rotate-[-34deg] bg-[#FF9900] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-24 ml-10 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
//                         <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
//                             Create your Amazon account
//                         </span>
//                     </button>
//                 </Link>                
//             </p>           
//             <footer className="mt-8 text-xs text-gray-500 text-center w-64">
//                 <div className="mb-2 flex justify-around w-64">
//                    <div> <Link href="#" className="text-blue-500">Conditions of Use</Link> </div>
//                    <div> <Link href="#" className="text-blue-500">Privacy Notice</Link> </div>
//                    <div> <Link href="#" className="text-blue-500">Help</Link> </div>
//                 </div>
//                 © 1996-{new Date().getFullYear()} Amazon.com, Inc. or its affiliates
//             </footer>
//         </div>
//   );
// }




// // export default function SignIn() {
// //     return (

        
// //         // 

// //         <div className="flex flex-col items-center space-y-20 pt-48 bg-gray-200 h-screen">
// //             <Image src="/AmazonBlack.svg" width={400} height={100} alt="Amazon Logo"/>
// //             <div>
// //                 {/* Replace this section with your desired design */}
// //                 <div>
// //                     <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
// //                         <span className="w-48 h-48 rounded rotate-[-34deg] bg-[#FF9900] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
// //                         <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
// //                             Sign in with Provider
// //                         </span>
// //                     </button>
// //                 </div>
// //                 {/* End of design section */}
// //             </div>
// //         </div>
// //     );
// // }
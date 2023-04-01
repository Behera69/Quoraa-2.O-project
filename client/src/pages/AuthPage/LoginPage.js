import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const LoginPage = () => {
  return (
    <>
      <div className=" flex items-center justify-center w-full h-screen bg-[#6cb7e8] md:bg-white">
        {/* auth card */}
        <div className=" flex overflow-hidden bg-white w-[50rem] h-[550px] rounded-xl shadow-lg md:flex-col-reverse md:h-[750px] md:rounded-none py-3">
          {/* left */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center justify-between gap-5 w-[250px]">
              <img
                src="https://i.postimg.cc/B6GfXrhh/signin-image.jpg"
                alt=""
              />
            </div>
          </div>
          {/* right */}
          <div className="flex-1 flex items-center justify-center">
            <div className=" flex flex-col gap-8">
              <h3 className=" text-4xl font-semibold">Sign in</h3>
              <form action="submit" className=" flex flex-col gap-6">
                <div className=" flex items-center space-x-4 border-b-[1px] border-black py-2">
                  <MdEmail />
                  <input type="email" name="email" placeholder="Email" id="" />
                </div>
                <div className=" flex items-center space-x-4 border-b-[1px] border-black py-2">
                  <FaLock />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id=""
                  />
                </div>
              </form>
              <Link
                to="/"
                className=" bg-primary w-fit py-2 px-4 text-white text-base rounded-md"
              >
                Login
              </Link>
              <div className=" flex flex-col space-y-1">
                <Link className=" text-sm hover:text-primary">
                  Forget password?
                </Link>
                <Link className=" text-sm hover:text-primary" to="/register">
                  New user? <span> Sign up </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

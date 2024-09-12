import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import backgroundImage from "../assets/images/lifestyle-home-house-garden-wallpaper-preview.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      // axios returns many things among them data here we destructure and save data in a variable called data
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          name,
          email,
          password,
        }
      );
      
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success("Login Successful. Welcome!")
        navigate("/login")
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      {/* <NavBar /> */}
      <div
        className="relative flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen md:h-screen lg:py-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>
        <div className="relative z-10 flex flex-col items-center">
          <p className="flex items-center mb-6 text-2xl font-semibold text-gray-50">
            Welcome To ProLister
          </p>
          <div className="w-full rounded-xl shadow md:mt-0 sm:max-w-md xl:p-0 bg-[#405D72]/65">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                Create a new account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={registerUser}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-950"
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="bg-gray-50 border border-gray-300 text-gray-950 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter Your Full Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-950"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-950 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@examle.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-950"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    placeholder="••••••••"
                    className="bg-gray-50 mb-5 border border-gray-300 text-gray-950 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                {/* <div>
                  <label
                    htmlFor="profilePicture"
                    className="block mb-2 text-sm font-medium text-gray-950"
                  >
                    Upload Profile Picture
                  </label>
                  <input
                    type="file"
                    name="profilePicture"
                    id="profilePicture"
                    accept="image/*"
                    className="bg-gray-50 border border-gray-300 text-gray-950 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </div> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <p className="text-sm font-light text-[#FFF8F3]">
                        I accept the{" "}
                        <a
                          href="#"
                          className="font-bold text-gray-950 hover:underline"
                        >
                          Terms and Conditions
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#758694] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-[#FFF8F3]">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-gray-950 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;

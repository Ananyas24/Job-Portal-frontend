import { setLoading } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import Navbar from "../ui/shared/Navbar";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
    file: "",
  });

  const { loading } = useSelector((store) => store.auth); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
  
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { 'Content-Type': "multipart/form-data" },
        withCredentials: true,
      });
  
      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.response?.data?.message,"dsfghjkgf")
      console.log(error);
      toast.success(error.response?.data?.message || 'An error occurred');
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              value={input.fullName}
              name="fullName"
              id="fullName" // Add id attribute
              onChange={changeEventHandler}
              placeholder="Ananya"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              id="email" // Add id attribute
              placeholder="ananya@gmail.com"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              id="phoneNumber" // Add id attribute
              placeholder="8080808080"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              id="password" // Add id attribute
              placeholder="Password"
              onChange={changeEventHandler}
            />
          </div>
          <RadioGroup className="flex items-center gap-4 my-5">
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
                className="cursor-pointer"
                id="student" // Add id attribute
              />
              <Label htmlFor="student">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
                className="cursor-pointer"
                id="recruiter" // Add id attribute
              />
              <Label htmlFor="recruiter">Recruiter</Label>
            </div>
          </RadioGroup>
          <div className="flex items-center gap-2">
            <label htmlFor="file">Profile</label> {/* Added htmlFor */}
            <Input
              accept="image/*"
              type="file"
              id="file" // Add id attribute
              className="cursor-pointer"
              onChange={changeFileHandler}
            />
          </div>
          {
            loading ? (
              <Button className="w-full my-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Signup
              </Button>
            )
          }
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  TextField,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/signUpSchema";
import WrapperComponent from "../layout/WrapperComponent";
const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setCpassword] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowCPassword = () => setCpassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="w-full h-auto md:h-dvh flex  items-center justify-center bg-blue-100 mt-12 md:mt-0">
        <div className="bg-white w-full md:w-10/12 lg:w-6/12 flex flex-col md:flex-row items-center lg:items-start rounded shadow-md ">
          {/* ================== Login Input Fields ================== */}
          <div className="p-4 px-8 flex flex-col">
            <h3 className="text-2xl font-bold text-blue-900">
              Create a New Account
            </h3>
            <p className="text-sm text-gray-400">
              {/* Join our community and start chatting in no time! */}
              Hey enter your details to create your account
            </p>

            <form
              action=""
              className="flex flex-col gap-y-1"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-y-1">
                <TextField
                  id="name"
                  label="Name"
                  variant="standard"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <span className="text-red-400 text-sm">
                  {errors.name && touched.name ? errors.name : null}
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <TextField
                  id="username"
                  label="Username"
                  variant="standard"
                  name="username"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-red-400 text-sm">
                  {errors.username && touched.username ? errors.username : null}
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-red-400 text-sm">
                  {errors.email && touched.email ? errors.email : null}
                </span>
              </div>

              <div className="flex flex-col gap-y-1">
                <FormControl variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? (
                            <IoEyeOffSharp className="text-base text-gray-400" />
                          ) : (
                            <IoEyeSharp className="text-base text-gray-400" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <span className="text-red-400 text-sm">
                  {errors.password && touched.password ? errors.password : null}
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <FormControl variant="standard">
                  <InputLabel htmlFor="standard-adornment-cpassword">
                    Confirm Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-cpassword"
                    type={showCpassword ? "text" : "password"}
                    name="confirm_password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowCPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showCpassword ? (
                            <IoEyeOffSharp className="text-base text-gray-400" />
                          ) : (
                            <IoEyeSharp className="text-base text-gray-400" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <span className="text-red-400 text-sm">
                  {errors.confirm_password && touched.confirm_password
                    ? errors.confirm_password
                    : null}
                </span>
              </div>

              <button
                className="bg-blue-500 text-white py-1 rounded font-bold hover:bg-blue-700 mt-3"
                type="submit"
              >
                Sign up
              </button>
            </form>

            <span className="text-gray-400 py-2 text-sm">
              Already have an account?{" "}
              <NavLink to="/login" className={`text-blue-600`}>
                Log in
              </NavLink>
            </span>
          </div>

          {/* ================== Side picture ====================== */}
          <div className="w-10/12 md:w-6/12 flex items-center pb-4 md:pb-0">
            <div className="w-full">
              <img src="./images/signup1.png" alt="signup" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapperComponent()(Signup);

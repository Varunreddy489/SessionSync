import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { RegisterData } from "../types";
import {  handleReisterData } from "../components/handleAuthData";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async ({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterData) => {
    const success = handleReisterData({
      name,
      email,
      password,
      confirmPassword,
    });

    if (!success) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          name,
          email,
          password,
          confirmPassword,
        },
        { withCredentials: true }
      );

      if (response.data.error) {
        throw new Error(response.data.error);
      }
      toast.success("Registration successful");
    } catch (error: any) {
      setError(error);
      console.log("error in useRegister", error);
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        toast.error(
          error.response.data.error ||
            "Failed to register. Please try again later."
        );
      } else {
        toast.error("Failed to register. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, signUp };
};
export default useRegister;

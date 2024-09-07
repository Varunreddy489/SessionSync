import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { LoginData } from "../types";
import { handleLoginData } from "../components/handleAuthData";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async ({ email, password }: LoginData) => {
    const succcess = handleLoginData({
      email,
      password,
    });

    if (!succcess) return;
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      console.log(response.data);
      toast.success("Login Completed Successfully");
    } catch (error: any) {
      console.log("error in useLogin", error);
      setError(error);
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
  return { loading, error, login };
};

export default useLogin;

import toast from "react-hot-toast";
import { LoginData, RegisterData } from "../types";

export function handleReisterData(data: RegisterData) {
  const { name, email, password, confirmPassword } = data;

  if (!name || !email || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}

export  function handleLoginData(data: LoginData) {
  const { email, password } = data;
  if (!email || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
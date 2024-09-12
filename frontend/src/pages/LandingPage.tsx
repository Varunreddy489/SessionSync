import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  
  const handleEmployeeAuth = () => {
    navigate("/employee"); // Navigate to the employee route
  };

  const handleAdminAuth = () => {
    navigate("/admin"); // Updated to navigate to the admin route
  };

  return (
    <div className="text-white flex flex-col bg-gradient-to-r from-gray-800 to-black items-center justify-center h-screen">
      <div className="text-center">
        <h4 className="text-3xl mb-2">Hi There</h4>
        <h1 className="text-6xl mb-3">
          Welcome to
          <span className="text-orange-500 font-bold"> Session Sync</span>
        </h1>
        <p className="text-lg">
          A single stop to create and manage your sessions
        </p>
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            className="flex gap-3 cursor-pointer bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
            onClick={handleAdminAuth} // Corrected action for Admin
          >
            Admin
          </button>
          <button
            className="flex gap-3 cursor-pointer text-white font-semibold px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
            onClick={handleEmployeeAuth} // Corrected action for Employee
          >
            Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

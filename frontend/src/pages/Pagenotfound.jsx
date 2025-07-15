import React from "react";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pagenotfound = () => {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="text-yellow-500 w-12 h-12" />
        </div>
        <h1 className="text-3xl font-semibold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
       
      </div>
    </div>
  );
};

export default Pagenotfound;

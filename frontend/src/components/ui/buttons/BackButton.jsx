import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="text-gray-500 flex gap-4 font-semibold text-lg mb-6"
    >
      <ArrowLeft />
      <span>Back</span>
    </button>
  );
};

export default BackButton;

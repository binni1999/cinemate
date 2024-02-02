import { Link } from "react-router-dom";

export const Button = ({ children }) => {
  return (
    <button className="w-64 text-xl dark:text-white bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-5 py-2.5 mr-2 mb-2 font-semibold hover:from-pink-500 hover:to-yellow-500">
      {children}
    </button>
  );
};

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle(`Page not found `);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-5xl text-gray-700 font-bold  mt-1 mb-3 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-xl">
            <img
              className="rounded "
              src="https://images.unsplash.com/photo-1584824486516-0555a07fc511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="404 Page not found"
            />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To CineMate</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

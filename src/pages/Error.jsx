import React from "react";

function Error() {
  return (
    <section className="flex items-center justify-center h-screen px-4 bg-gray-100">
      <div className="max-w-xl text-center">
        <h6 className="mb-2 text-sm text-gray-500">ERROR</h6>
        <h1 className="mb-4 text-6xl font-bold text-red-600">404</h1>
        <p className="text-gray-700">
          The page you are trying to access does not exist or has been moved.
          <br />
          Try going back to our{" "}
          <a href="/" className="text-blue-600 underline">
            home page
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Error;

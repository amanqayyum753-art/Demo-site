import React from "react";
import { Link } from "react-router-dom";

// This route is linked from the homepage but its page content wasn't
// part of the code that was provided, so no content has been invented
// for it. Replace this file once you have that page's code.
export default function NotIncluded() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-[#999] mb-4">
        Page not included
      </p>
      <p className="text-[#555] max-w-md">
        This page wasn't part of the code you provided, so nothing has
        been added here.
      </p>
      <Link to="/" className="mt-8 text-[#0A2540] growing-underline text-sm uppercase tracking-[0.1em]">
        Back to home
      </Link>
    </div>
  );
}

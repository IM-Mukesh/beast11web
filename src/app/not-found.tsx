// pages/404.tsx or app/not-found.tsx depending on your Next.js version
"use client"; // Include this line if using the App Router

import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
  useEffect(() => {
    // You can add any analytics or logging here
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-purple-50 p-6">
      <Head>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="The page you were looking for doesn't exist"
        />
      </Head>

      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="mb-6">
          <h1 className="text-9xl font-extrabold text-purple-800 opacity-80">
            404
          </h1>
        </div>

        {/* Cat box representation with CSS */}
        <div className="relative w-32 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-yellow-300 rounded-md shadow-lg"></div>
          <div className="absolute w-16 h-10 top-2 left-8 bg-purple-800 rounded-full">
            <div className="flex justify-between px-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-yellow-100"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-100"></div>
            </div>
          </div>
          <div className="absolute w-20 h-3 bottom-2 left-6 bg-purple-800 rounded-full"></div>
        </div>

        {/* Error text */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-2">
            Ooops...page not found
          </h2>
          <p className="text-purple-600">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Home button */}
        <Link
          href="/"
          className="inline-flex px-6 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition-colors shadow-md"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

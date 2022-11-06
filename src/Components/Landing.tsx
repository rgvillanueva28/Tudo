import React from "react";

export default function Landing({ children }: any) {
  return (
    <div className="bg-blue-100 w-full grid grid-cols-1 lg:grid-cols-3">
      <div className="flex flex-col z-[1] col-span-2 justify-center items-center">
        <h1 className="text-6xl font-bold">Tudo</h1>
        <h2>A todo app made with react and firebase</h2>
        <div className="max-w-xl mx-20">
          <img src="./tudoImage.png" alt="Tudo Landing Page" className="" />
        </div>
      </div>
      <div className="lg:col-span-1 lg:flex">{children}</div>
    </div>
  );
}

import React from "react";

export default function FooterItem({ text, icon }: any) {
  return (
    <div
      className="my-auto flex flex-col justify-center content-center"
      style={{ margin: "0 16px 0 16px" }}
    >
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
}

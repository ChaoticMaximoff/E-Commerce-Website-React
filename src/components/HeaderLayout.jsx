import React, { useContext } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import { TextDirectionContext } from "../context/TextDirection";

export default function HeaderLayout() {
  const { isEnglish } = useContext(TextDirectionContext);
  return (
    <>
      <Header />
      <div className="container my-5"
        style={{
          direction: isEnglish === true ? "ltr" : "rtl",
          textAlign: isEnglish === true ? "left" : "right",
        }}>
        <Outlet />
      </div>
    </>
  );
}

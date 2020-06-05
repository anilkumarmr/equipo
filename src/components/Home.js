import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Routes from "../router/Routes";

export default function Home() {
   return (
      <>
         <Navbar />
         <Sidebar />
         <Routes />
      </>
   );
}

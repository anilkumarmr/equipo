import React from "react";

export default function Subheader() {
   return (
      <div className="row">
         <div className="col-lg-6">
            <span className="text-red-500 text-5xl ">Dashboard</span>
         </div>
         <div className="col-lg-6 mt-4">
            <button
               className="hover:bg-blue-600 text-white py-2 px-4 rounded ml-4"
               style={{ background: "#4a91cf" }}
            >
               <i className="fas fa-notes-medical mr-2"></i>
               Summary
            </button>
            <button
               className="hover:bg-blue-600 text-white py-2 px-4 rounded ml-4"
               style={{ background: "#4a91cf" }}
            >
               <i className="fas fa-file-invoice mr-2"></i>
               Program
            </button>
            <button
               className="hover:bg-blue-600 text-white py-2 px-4 rounded ml-4"
               style={{ background: "#4a91cf" }}
            >
               <i className="fas fa-file-invoice mr-2"></i>
               Risk
            </button>
            <button
               className="hover:bg-blue-600 text-white py-2 px-4 rounded ml-4"
               style={{ background: "#4a91cf" }}
            >
               <i className="fas fa-file-medical-alt mr-2"></i>
               KPI
            </button>
         </div>
      </div>
   );
}

import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function Graphs(props) {
   const wellenessVisit = {
      datasets: [
         {
            label: "Wellness Visit",
            backgroundColor: ["#4a91cf", "#c2b8b9"],
            data: [64, 24],
         },
      ],
   };
   return (
      <div className="row mt-8">
         <div className="col-lg-12">
            <div className="col-lg-2 col-md-3 m-2  border border-black">
               <Doughnut data={wellenessVisit} height="100%" width={"100%"} />
               <div className="col-lg-12 text-center md:text-lg text-2xl mt-6">
                  Wellness Visit
               </div>
            </div>
            <div className="col-lg-2 col-md-3 m-2  border border-black">
               <Doughnut data={wellenessVisit} height="100%" width={"100%"} />
               <div className="col-lg-12 text-center md:text-lg text-2xl mt-6">
                  High Blood Pressure
               </div>
            </div>
            <div className="col-lg-2 col-md-3 m-2  border border-black">
               <Doughnut data={wellenessVisit} height="100%" width={"100%"} />
               <div className="col-lg-12 text-center md:text-lg text-2xl mt-6">
                  HbA1c Control
               </div>
            </div>
            <div className="col-lg-2 col-md-3 m-2  border border-black">
               <Doughnut data={wellenessVisit} height="100%" width={"100%"} />
               <div className="col-lg-12 text-center md:text-lg text-3xl mt-6">
                  Tobacco use screening
               </div>
            </div>
            <div className="col-lg-2 col-md-3 m-2  border border-black">
               <Doughnut data={wellenessVisit} height="100%" width={"100%"} />
               <div className="col-lg-12 text-center md:text-lg text-2xl mt-6">
                  Chronic care management
               </div>
            </div>
            <div className="col-lg-2 col-md-3 m-2  border border-black">
               <Doughnut data={wellenessVisit} height="100%" width={"100%"} />
               <div className="col-lg-12 text-center md:text-lg text-2xl mt-6">
                  TCM Services
               </div>
            </div>
            <div className="col-lg-2 col-md-3 m-2  border border-black">
               <Doughnut data={wellenessVisit} height="100%" width={"100%"} />
               <div className="col-lg-12 text-center md:text-lg text-2xl mt-6">
                  BMI Control for age>30
               </div>
            </div>
         </div>
      </div>
   );
}

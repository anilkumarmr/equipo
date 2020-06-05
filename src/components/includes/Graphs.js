import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function Graphs(props) {
   const wellenessVisit = props.chartData.wellenessVisit;
   const highBp = props.chartData.highBP;
   const hba1c = props.chartData.HbA1c;
   const tcm = props.chartData.tcm;
   const bmi = props.chartData.BMI;

   return (
      <div className="row mt-8">
         <div className="col-lg-12">
            <div className="col-lg-2 col-md-3 m-2 border border-black shadow-lg">
               <Doughnut data={wellenessVisit} height={150} width={150} />
               <div className="col-lg-12 text-center md:text-lg text-2xl mt-6">
                  Wellness Visit
               </div>
            </div>
            <div className="col-lg-2 col-md-3 m-2 border border-black shadow-lg">
               <Doughnut data={highBp} height={100} width={100} />
               <div className="col-lg-12 text-center md:text-lg text-2xl mt-6">
                  High BP
               </div>
            </div>
            <div className="col-lg-2 col-md-3 m-2  border border-black shadow-lg">
               <Doughnut data={hba1c} height={100} width={100} />
               <div className="col-lg-12 text-center md:text-lg text-2xl mt-6">
                  HbA1c Control
               </div>
            </div>
            <div className="col-lg-2 col-md-3 m-2  border border-black shadow-lg">
               <Doughnut data={tcm} height={100} width={100} />
               <div className="col-lg-12 text-center md:text-lg text-2xl mt-6">
                  TCM Services
               </div>
            </div>
            <div className="col-lg-2 col-md-3 m-2  border border-black shadow-lg">
               <Doughnut data={bmi} height={100} width={100} />
               <div className="col-lg-12 text-center md:text-lg text-2xl mt-6">
                  BMI Control for age>30
               </div>
            </div>
         </div>
      </div>
   );
}

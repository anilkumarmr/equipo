import React from "react";

export default function PatientFilter(props) {
   return (
      <div className="row mt-8">
         <div className="col-lg-12">
            <span className="font-semibold mr-4">Patients list</span>
            <span>
               <span className="mr-4">
                  <input type="radio" id="all" name="filter" value="all" />
                  <label htmlFor="all">All</label>
               </span>
               <span className="mr-4">
                  <input
                     type="radio"
                     id="pending"
                     name="filter"
                     value="pending"
                  />
                  <label htmlFor="pending">Pending</label>
               </span>
               <span className="mr-4">
                  <input
                     type="radio"
                     id="completed"
                     name="filter"
                     value="completed"
                  />
                  <label htmlFor="completed">Completed</label>
               </span>
            </span>
         </div>
      </div>
   );
}

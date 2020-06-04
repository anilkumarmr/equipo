import React from "react";

export default function Patients(props) {
   console.log(props);
   return (
      <div className="row">
         <div className="col-lg-12 pt-8">
            <div className="row">
               <div className="col-lg-6 mt-6 pull-left">
                  <span>
                     Showing {props.from} to {props.to} of {props.total}
                  </span>
               </div>
               <div className="col-lg-2 pull-right">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Search name"
                  ></input>
               </div>
            </div>
         </div>
         <div className="col-lg-12 mt-8">
            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Chronic conditions</th>
                     <th>Payor</th>
                     <th>Opportunities</th>
                     <th>Phone</th>
                     <th>Last Visit</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {props.patients.map((obj, index) => (
                     <tr key={index}>
                        <td>{obj.name}</td>
                        <td>{obj.age}</td>
                        <td>{obj.chronic_conditions}</td>
                        <td>{obj.payor}</td>
                        <td>{obj.opportunity}</td>
                        <td>{obj.phone}</td>
                        <td>{obj.lastVisited}</td>
                        <td>{obj.carePlan}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}

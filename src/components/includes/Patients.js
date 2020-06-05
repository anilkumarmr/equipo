import React from "react";
import Pagination from "react-js-pagination";

export default function Patients(props) {
   const handlePageChange = (page) => {
      props.pageinate({ page });
   };

   const handleSearch = (e) => {
      props.searchPatient({ q: e.target.value });
   };

   return (
      <div className="row">
         <div className="col-lg-12 pt-8">
            <div className="row">
               <div className="col-lg-6 mt-6 pull-left">
                  <span>
                     Showing {props.from} to {props.to} of {props.totalpatients}
                  </span>
               </div>
               <div className="col-lg-2 pull-right">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Search name"
                     onChange={handleSearch}
                  ></input>
               </div>
            </div>
         </div>
         <div className="col-lg-12 mt-8">
            <table className="table table-bordered mb-0">
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
                        <td>
                           <span
                              className="text-white py-2 px-3 rounded-md"
                              style={{ background: "#4a91cf" }}
                           >
                              CarePlan
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className="col-lg-12">
            <div className="pull-right">
               <Pagination
                  activePage={props.currentPage}
                  itemsCountPerPage={10}
                  totalItemsCount={props.totalpatients}
                  onChange={handlePageChange}
               />
            </div>
         </div>
      </div>
   );
}

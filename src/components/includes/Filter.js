import React from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const Filter = (props) => {
   const [value, onChange] = React.useState([new Date(), new Date()]);
   return (
      <div className="row mt-8">
         <div className="col-lg-12">
            <span>
               <i className="fas fa-filter text-3xl"></i>
            </span>
            <DateRangePicker
               onChange={onChange}
               value={value}
               className="ml-6"
            />
            <select
               name="cars"
               id="cars"
               className="bg-white ml-6 py-2 border border-black"
            >
               <option value="volvo">All Selected</option>
               <option value="saab">Saab</option>
               <option value="opel">Opel</option>
               <option value="audi">Audi</option>
            </select>
            <button
               className="hover:bg-blue-600 text-white py-2 px-4 rounded ml-4"
               style={{ background: "#4a91cf" }}
            >
               Go
            </button>
            <button
               className="hover:bg-blue-600 text-white py-2 px-4 rounded ml-4"
               style={{ background: "#4a91cf" }}
            >
               Reset
            </button>
         </div>
      </div>
   );
};

export default Filter;

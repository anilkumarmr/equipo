import React from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import moment from "moment";

const Filter = (props) => {
   const [value, onChange] = React.useState([new Date(), new Date()]);
   const [plan, setPlan] = React.useState("");
   const changePlan = (e) => {
      setPlan(e.target.value);
   };

   const filter = () => {
      props.onfilter({
         from: moment(value[0]).format("YYYY-MM-DD"),
         to: moment(value[1]).format("YYYY-MM-DD"),
         plan: plan,
      });
   };

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
               name="plan"
               className="bg-white ml-6 py-2 border border-black"
               value={plan}
               onChange={changePlan}
            >
               <option value="All">All Selected</option>
               <option value="plan_a">Plan A</option>
               <option value="plan_b">Plan B</option>
               <option value="plan_c">Plan C</option>
            </select>
            <button
               className="hover:bg-blue-600 text-white py-2 px-4 rounded ml-4"
               style={{ background: "#4a91cf" }}
               onClick={filter}
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

import React from "react";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import { searchPatientRequest } from "../actions/patientActions";

const Navbar = (props) => {
   const handleSearch = (e) => {
      props.searchPatientRequest({ q: e.target.value });
   };
   return (
      <nav
         className="navbar shadow-lg sticky top-0 bg-white"
         style={{ marginLeft: props.width, zIndex: "99" }}
      >
         <div className="container-fluid">
            <form className="navbar-form navbar-left" action="/action_page.php">
               <div className="form-group">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Firstname/lastname"
                     style={{ width: "300px" }}
                     onChange={handleSearch}
                  />
               </div>
            </form>
            <button
               className="hover:bg-blue-600 text-white py-2 px-4 rounded ml-4 mt-4"
               style={{ background: "#4a91cf" }}
            >
               <i className="fas fa-plus mr-2"></i>
               Patient
            </button>
            <ul className="nav navbar-nav navbar-right">
               <li>
                  <a href="#">
                     <span className="mr-6 border border-gray-600 rounded-lg px-3 py-3 ">
                        <i className="fas fa-users font text-2 xl mr-1"></i>
                        HDR Corp
                     </span>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <i className="far fa-bell  text-3xl"></i>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <i className="fab fa-telegram-plane text-3xl"></i>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <i className="fas fa-cog text-3xl"></i>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <i className="far fa-file-alt mr-6 text-3xl"></i>
                  </a>
               </li>
               <li>
                  <Avatar
                     size={30}
                     name="Anil kumar"
                     round={true}
                     color="#4a91cf"
                     className="mt-2 mr-4"
                  />
               </li>
            </ul>
         </div>
      </nav>
   );
};
const mapStateToProps = (state) => {
   return {
      width: state.view.width,
      searchResult: state.patients.searchResult,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      searchPatientRequest: (payload) =>
         dispatch(searchPatientRequest(payload)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

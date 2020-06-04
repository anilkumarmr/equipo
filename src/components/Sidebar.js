import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { maximizeSidebar, minimizeSidebar } from "../actions/viewActions";

const Sidebar = (props) => {
   return (
      <div
         className="fixed top-0 bottom-0 left-0 shadow-lg text-white"
         style={{ width: props.width, background: "#4a91cf" }}
      >
         <div className="row">
            <div className="col-lg-12 py-5">
               {props.minimized ? (
                  <div className="text-center ">
                     <span
                        className="cursor-pointer"
                        onClick={() => props.maximizeSidebar()}
                     >
                        <i className="fas fa-bars text-5xl"></i>
                     </span>
                  </div>
               ) : (
                  <div className="col-lg-12">
                     <span className="pull-left text-3xl">Equipo</span>
                     <span
                        className="pull-right cursor-pointer"
                        onClick={() => props.minimizeSidebar()}
                     >
                        <i className="fas fa-bars text-3xl"></i>
                     </span>
                  </div>
               )}
            </div>
         </div>
         <div className="row">
            <div className="col-lg-12">
               <ul className="nav">
                  <li className="nav-item"></li>
                  <li className="">
                     {props.minimized ? (
                        <a className="nav-link active text-center" href="#">
                           <i className="fas fa-home text-3xl mr-2"></i>
                        </a>
                     ) : (
                        <a className="nav-link active flex" href="#">
                           <i className="fas fa-home text-3xl mr-2"></i>
                           <span>Dashboard</span>
                        </a>
                     )}
                  </li>
                  <li className="nav-item">
                     {props.minimized ? (
                        <a className="nav-link active text-center" href="#">
                           <i className="fas fa-user text-3xl mr-2"></i>
                        </a>
                     ) : (
                        <a className="nav-link active flex" href="#">
                           <i className="fas fa-user text-3xl mr-2"></i>
                           <span>Patient</span>
                        </a>
                     )}
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      width: state.view.width,
      minimized: state.view.minimized,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      maximizeSidebar: () => dispatch(maximizeSidebar()),
      minimizeSidebar: () => dispatch(minimizeSidebar()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

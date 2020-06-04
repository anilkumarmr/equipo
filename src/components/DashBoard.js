import React, { Component } from "react";
import { connect } from "react-redux";
import Subheader from "./includes/Subheader";
import Filter from "./includes/Filter";
import Graphs from "./includes/Graphs";
import PatientFilter from "./includes/PatientFilter";
import Patients from "./includes/Patients";
import { getPatientRequest } from "../actions/patientActions";

export class DashBoard extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   componentDidMount() {
      this.props.getPatientRequest();
   }

   render() {
      return (
         <div
            className="container-fluid"
            style={{ marginLeft: this.props.width }}
         >
            <Subheader />
            <Filter />
            <Graphs />
            <PatientFilter />
            <Patients patients={this.props.patients} />
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      width: state.view.width,
      patients: state.patients.patients,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getPatientRequest: () => dispatch(getPatientRequest()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);

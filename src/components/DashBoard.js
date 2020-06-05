import React, { Component } from "react";
import { connect } from "react-redux";
import Subheader from "./includes/Subheader";
import Filter from "./includes/Filter";
import Graphs from "./includes/Graphs";
import PatientFilter from "./includes/PatientFilter";
import Patients from "./includes/Patients";
import { getPatientRequest, getChartsRequest } from "../actions/patientActions";

export class DashBoard extends Component {
   componentDidMount() {
      this.props.getPatientRequest({ page: this.props.currentPage });
      this.props.getChartsRequest();
   }

   render() {
      return (
         <div
            className="container-fluid"
            style={{ marginLeft: this.props.width }}
         >
            <Subheader />
            <Filter />
            <Graphs chartData={this.props.chartData} />
            <PatientFilter />
            <Patients
               patients={this.props.patients}
               totalpatients={this.props.totalpatients}
               from={this.props.from}
               to={this.props.to}
               pageinate={this.props.getPatientRequest}
               currentPage={this.props.currentPage}
            />
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      width: state.view.width,
      patients: state.patients.patients,
      totalpatients: state.patients.totalpatients,
      from: state.patients.from,
      to: state.patients.to,
      chartData: state.patients.chartData,
      currentPage: state.patients.currentPage,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getPatientRequest: (payload) => dispatch(getPatientRequest(payload)),
      getChartsRequest: () => dispatch(getChartsRequest()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);

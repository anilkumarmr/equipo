import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CANCEL } from "redux-saga";

const validate = Yup.object().shape({
   name: Yup.string().required("Required"),
   age: Yup.number()
      .positive()
      .integer("Invalid")
      .min(0, "Invalid")
      .max(150, "invalid")
      .required("Enter age"),
   chronic_conditions: Yup.string().required("Required"),
   payor: Yup.string().required("Required"),
   opportunity: Yup.string().required("Required"),
   phone: Yup.string().required("Required"),
});

export default function AddPatient(props) {
   const cancelAddPatient = () => {
      props.showAddPatient({ isVisible: false });
   };
   return (
      props.isVisible && (
         <div
            className=" fixed right-0 bottom-0 "
            style={{
               zIndex: 98,
               left: props.width,
               top: "60px",
            }}
         >
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-body">
                     <div className="row">
                        <div className="col-lg-12">
                           <Formik
                              initialValues={{
                                 name: "",
                                 age: "",
                                 chronic_conditions: "",
                                 payor: "",
                                 opportunity: "",
                                 phone: "",
                                 lastVisited: "04-Jun-2020",
                              }}
                              validationSchema={validate}
                              onSubmit={(values) => {
                                 props.savePatient({ patient: values });
                              }}
                           >
                              {({
                                 values,
                                 status,
                                 errors,
                                 touched,
                                 handleChange,
                                 handleBlur,
                                 handleSubmit,
                                 isSubmitting,
                              }) => (
                                 <Form
                                    noValidate={true}
                                    autoComplete="off"
                                    onSubmit={handleSubmit}
                                 >
                                    <div class="form-group">
                                       <label>Name</label>
                                       <input
                                          type="text"
                                          name="name"
                                          class="form-control"
                                          required
                                          value={values.name}
                                          onChange={handleChange}
                                       />
                                       {touched.name && errors.name && (
                                          <p className="text-red-500">
                                             {errors.name}
                                          </p>
                                       )}
                                    </div>
                                    <div class="form-group">
                                       <label>Age</label>
                                       <input
                                          type="number"
                                          name="age"
                                          class="form-control"
                                          value={values.age}
                                          required
                                          onChange={handleChange}
                                       />
                                       {touched.age && errors.age && (
                                          <p className="text-red-500">
                                             {errors.age}
                                          </p>
                                       )}
                                    </div>
                                    <div class="form-group">
                                       <label>Chronic Conditions</label>
                                       <textarea
                                          name="chronic_conditions"
                                          class="form-control"
                                          required
                                          value={values.chronic_conditions}
                                          onChange={handleChange}
                                       />
                                       {touched.chronic_conditions &&
                                          errors.chronic_conditions && (
                                             <p className="text-red-500">
                                                {errors.chronic_conditions}
                                             </p>
                                          )}
                                    </div>
                                    <div class="form-group">
                                       <label>Payor</label>
                                       <input
                                          type="text"
                                          name="payor"
                                          class="form-control"
                                          value={values.payor}
                                          onChange={handleChange}
                                       />
                                       {touched.payor && errors.payor && (
                                          <p className="text-red-500">
                                             {errors.payor}
                                          </p>
                                       )}
                                    </div>
                                    <div class="form-group">
                                       <label>Opportunities</label>
                                       <input
                                          type="text"
                                          name="opportunity"
                                          class="form-control"
                                          value={values.opportunity}
                                          onChange={handleChange}
                                       />
                                       {touched.opportunity &&
                                          errors.opportunity && (
                                             <p className="text-red-500">
                                                {errors.opportunity}
                                             </p>
                                          )}
                                    </div>
                                    <div class="form-group">
                                       <label>Phone</label>
                                       <input
                                          type="text"
                                          name="phone"
                                          class="form-control"
                                          value={values.phone}
                                          onChange={handleChange}
                                       />
                                       {touched.phone && errors.phone && (
                                          <p className="text-red-500">
                                             {errors.phone}
                                          </p>
                                       )}
                                    </div>

                                    <button
                                       className="hover:bg-blue-600 text-white py-2 px-4 rounded ml-4 mt-4 pull-right"
                                       style={{ background: "#4a91cf" }}
                                       type="submit"
                                    >
                                       SAVE
                                    </button>
                                    <button
                                       className="hover:bg-blue-600 text-white py-2 px-4 rounded ml-4 mt-4 pull-right"
                                       style={{ background: "#4a91cf" }}
                                       onClick={cancelAddPatient}
                                    >
                                       CANCEL
                                    </button>
                                 </Form>
                              )}
                           </Formik>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   );
}

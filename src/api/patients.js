import axios from "axios";
const getPatients = async (payload) => {
   return await axios.get(`data/patients.json?page=${payload.page}`);
};

const getCharts = async () => {
   return await axios.get("data/chartData.json");
};

const filterDashBoard = async (payload) => {
   return await axios.get(
      `data/patients.json?from=${payload.from}&to=${payload.to}&plan=${payload.plan}`
   );
};

const filterPatient = async (payload) => {
   return await axios.get(`data/patients.json?status=${payload.status}`);
};

const searchPatient = async (payload) => {
   return await axios.get(`data/patients.json?q=${payload.q}`);
};

export {
   getPatients,
   getCharts,
   filterDashBoard,
   filterPatient,
   searchPatient,
};

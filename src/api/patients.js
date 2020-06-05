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

export { getPatients, getCharts, filterDashBoard };

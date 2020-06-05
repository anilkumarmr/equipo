import axios from "axios";
const getPatients = async () => {
   return await axios.get("data/patients.json");
};

const getCharts = async () => {
   return await axios.get("data/chartData.json");
};

export { getPatients, getCharts };

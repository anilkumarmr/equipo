import axios from "axios";
const getPatients = async () => {
   return await axios.get("data/patients.json");
};

export { getPatients };

import axios from "axios";

export const fetchAPI = async (api, setDataApi) => {
  try {
    const res = await axios.get(api);
    const data = await res.data;
    setDataApi(data);
  } catch (error) {
    console.log(error.message);
  }
};

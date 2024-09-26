import axios from "axios";

export const fetchAPI = async (api, setDataApi) => {
  try {
    const res = await axios.get(api, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3OTU2NTgyLCJpYXQiOjE3MjczNTE3ODIsImp0aSI6ImY4MDM3MGI4NTM5ZjQ0YzY5NDc0MTcxNWIwOGVmZTcyIiwidXNlcl9pZCI6MX0.ow0F1ZYPuTvwxP6uDZQr6gcenjrAEvpPdMaUAD___SI",
      },
    });

    const data = res.data;
    setDataApi(data);
  } catch (error) {
    console.log(error.message);
  }
};

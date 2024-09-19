import axios from "axios";

export const fetchAPI = async (api, setDataApi) => {
  try {
    const res = await axios.get(api, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3MzM5NDk2LCJpYXQiOjE3MjY3MzQ2OTYsImp0aSI6IjRmZDljMGQ4NmE5YjQzODRhZWRmZDRlMTM5OTAzZGI2IiwidXNlcl9pZCI6MX0.V1L-EggNT5tDuYiHz2giKJM3ynaDMv1R7JDuz7341ds",
      },
    });

    const data = res.data;
    setDataApi(data);
  } catch (error) {
    console.log(error.message);
  }
};

import axios from "axios";

export const fetchAPI = async (api, setDataApi) => {
  try {
    const res = await axios.get(api, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4MzAwMTgwLCJpYXQiOjE3Mjc2OTUzODAsImp0aSI6IjEyMTE5YWZmZWM1MzRiOWFhYjZjZmJjNjMxODNmYWFhIiwidXNlcl9pZCI6MX0.FRtJP1_XG5oAd93eQkMt-GB2EwbnZ-qAYSavROFgD_4",
      },
    });

    const data = res.data;
    setDataApi(data);
  } catch (error) {
    console.log(error.message);
  }
};

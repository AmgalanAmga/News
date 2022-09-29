import axios from "axios";
export const getPostData = async () => {
  const res = await axios.get("https://dummyapi.io/data/v1/user", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      // use your own app-id of dummy api
      "app-id": "633533f8f02614e5a07f8857",
    },
  });
};

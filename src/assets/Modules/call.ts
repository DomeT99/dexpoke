import axios from "axios";

type MethodCall = "GET" | "POST" | "PUT" | "DELETE";

export async function CallAxiosApi(
  url: string,
  method: MethodCall,
  data: Object,
  succFunc?: Function,
  failFunc?: Function
) {
  switch (method) {
    case "GET":
      await axios
        .get(url)
        .then((response) => {
          if (succFunc != undefined) {
            succFunc(response);
          } else {
            return response;
          }
        })
        .catch((error) => {
          if (failFunc != undefined) {
            failFunc(error);
          } else {
            return error;
          }
        });
      break;

    case "POST":
      await axios
        .post(url, JSON.stringify(data))
        .then((response) => {
          if (succFunc != undefined) {
            succFunc(response);
          } else {
            return response;
          }
        })
        .catch((error) => {
          if (failFunc != undefined) {
            failFunc(error);
          } else {
            return error;
          }
        });
      break;

    case "PUT":
      await axios
        .put(url, JSON.stringify(data))
        .then((response) => {
          if (succFunc != undefined) {
            succFunc(response);
          } else {
            return response;
          }
        })
        .catch((error) => {
          if (failFunc != undefined) {
            failFunc(error);
          } else {
            return error;
          }
        });
      break;

    case "DELETE":
      await axios
        .delete(url, data)
        .then((response) => {
          if (succFunc != undefined) {
            succFunc(response);
          } else {
            return response;
          }
        })
        .catch((error) => {
          if (failFunc != undefined) {
            failFunc(error);
          } else {
            return error;
          }
        });
      break;
  }
}

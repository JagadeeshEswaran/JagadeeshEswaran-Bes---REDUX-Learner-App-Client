/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const test = "Hello, World!";
  const [data, setData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    const username = location.pathname.split("/")[1];

    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/user/?username=${username}`,
        {
          headers: {
            "x-api-key": "BESANT_STUDENT_TEST_SERVER_ACCESS_TOKEN_JULY2024",
          },
        }
      );

      // console.log(response.data.data);
      return setData(response.data.data);
    } catch (error) {
      console.log(error);
      return setErrorMsg(error.message || "Something went wrong");
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ test, data }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(GlobalContext);

  return context;
};

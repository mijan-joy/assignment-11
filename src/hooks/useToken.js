import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.email;
      if (email) {
        const { data } = await axios.post(
          "http://localhost:5000/login",
          {
            email,
          }
        );
        setToken(token);
        localStorage.setItem("accessToken", data);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;

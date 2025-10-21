import axios from "axios";
import { useEffect, useState } from "react";

const useAllData = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMount = true;
    setLoading(true);
    axios("/alldata.json")
      .then((data) => {
        if (isMount) setAppsData(data.data);
      })
      .catch((err) => {
        if (isMount) setError(err);
      })
      .finally(() => {
        if (isMount) setLoading(false);
      });
    return () => {
      isMount = false;
    };
  }, []);
  return { appsData, loading, error };
};

export default useAllData;

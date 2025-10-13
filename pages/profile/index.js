import Profile from "@/components/template/Profile";
import api from "@/config/config";
import React, { useEffect, useState } from "react";

function Index() {
  const [profiledData, setProfilData] = useState();

  const getPrifileData = async () => {
    try {
      const res = await api.get("/user/profile");
      const data = res.data;
      setProfilData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPrifileData();
  }, []);

  return (
    <div>
      <Profile getPrifileData={getPrifileData} profiledData={profiledData} />
    </div>
  );
}

export default Index;

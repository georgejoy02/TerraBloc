import { useContext, useEffect, useState } from "react";
import { SmartContractContext } from "../../utils/SmartContractContext";

const Dashboard = () => {
  const { landContract } = useContext(SmartContractContext);
  const [usrCount, setUsrCount] = useState();
  const [landCount, setlandsCount] = useState();
  const [transferCount, settransferCount] = useState();

  useEffect(() => {
    const test: any = async () => {
      if (landContract) {
        const user_count = await landContract.methods.userCount().call();
        console.log(user_count);
        setUsrCount(user_count);
        const lands_count = await landContract.methods.landsCount().call();
        setlandsCount(lands_count);
        const document_id = await landContract.methods.documentId().call();
        settransferCount(document_id);
      }
    };
    test();
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "lightgray" }}>
        <h2>Total User Register: {usrCount}</h2>
        <br />
      </div>
      <div style={{ backgroundColor: "lightgray" }}>
        <h2>Total Property Register: {landCount}</h2>
        <br />
      </div>
      <div style={{ backgroundColor: "lightgray" }}>
        <h2>Total Property Transfered: {transferCount}</h2>
        <br />
      </div>
    </div>
  );
};

export default Dashboard;

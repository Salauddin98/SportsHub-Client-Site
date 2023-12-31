import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const PaymentHistory = () => {
  const [payment, setPayment] = useState();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://summer-camp-serversite-salauddin98.vercel.app/paymentHistory/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [user?.email]);
  console.log(payment);
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="font-bold text-4xl text-center">My Payment History</h1>
      <div className="overflow-x-auto mt-8">
        <table className="table ">
          <thead className="bg-teal-950 text-white">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Transaction Id</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payment?.map((p, index) => (
              <tr key={p._id}>
                <th>{index + 1}</th>
                <td>{p.className}</td>
                <td>{p.transactionId}</td>
                <td>{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

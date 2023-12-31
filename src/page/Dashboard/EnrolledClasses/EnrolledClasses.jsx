import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const EnrolledClasses = () => {
  const [enrolled, setEnrolled] = useState();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://summer-camp-serversite-salauddin98.vercel.app/enrolledClass/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setEnrolled(data));
  }, [user.email]);
  console.log(enrolled);

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="font-bold text-4xl text-center">My Enrolled Class</h1>

      <div className="overflow-x-auto mt-8">
        <table className="table ">
          <thead className="bg-teal-950 text-white">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Student Name</th>
              <th>Student Email</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {enrolled?.map((i, index) => (
              <tr key={i._id}>
                <th>{index + 1}</th>
                <td>{i.className}</td>
                <td>{i.studentName}</td>
                <td>{i.email}</td>
                <td>{i.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;

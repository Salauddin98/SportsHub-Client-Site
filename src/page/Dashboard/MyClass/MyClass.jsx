import useClass from "../../../hooks/useClass";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClass = () => {
  const { data } = useClass();

  const feedback = (cls) => {
    Swal.fire("FeedBack!", cls, "");
  };
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-bold text-4xl text-center">My Classes</h1>
      <div className="overflow-x-auto mt-8">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr className="bg-teal-950 text-white rounded-xl">
              <td>#</td>
              <td>Class Name</td>
              <td>Status</td>
              <td>Total Enroled</td>
              <td>Feedback</td>
              <td>Update</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>
                <td>{cls.className}</td>
                <td>
                  <button className="btn-xs btn btn-secondary">
                    {cls.status}
                  </button>
                </td>
                <td>{cls.enroll}</td>
                <td>
                  <button
                    onClick={() =>
                      feedback(
                        cls.feedback.length === 0
                          ? "Admin has not sent any feedback"
                          : cls.feedback
                      )
                    }
                    className=" btn btn-info  btn-sm"
                  >
                    Feedback
                  </button>
                </td>
                <td>
                  <Link to={`/dashboard/updateMyClass/${cls._id}`}>
                    <button className="btn btn-primary btn-sm">Update</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;

import useSelectedClass from "../../../hooks/useSelectedClass";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/axiosSecure";

const SelectedClasses = () => {
  const { data, refetch } = useSelectedClass();
  const axios = useAxiosSecure();

  const handelDelete = (cls) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/selectedClass/${cls._id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Deleted Class Successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="font-bold text-4xl text-center">My Selected Class</h1>
      <div className="overflow-x-auto mt-8">
        <table className="table ">
          <thead className=" bg-teal-950 text-white">
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((cls, index) => (
              <tr key={cls._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cls.classImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>

                <td>{cls.className}</td>

                <td>${cls.price}</td>
                <td>
                  <button
                    onClick={() => handelDelete(cls)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/dashboard/payment/${cls._id}`}>
                    <button className="btn btn-info btn-sm">Pay</button>
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

export default SelectedClasses;

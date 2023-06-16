import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../providers/AuthProviders";

const Instructors = () => {
  const [instructor, setInstructor] = useState();
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    fetch("https://summer-camp-serversite-salauddin98.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);
  //   console.log(instructor);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 my-6">
      {instructor?.map((item) => (
        <div className="card w-full bg-base-100 shadow-xl" key={item._id}>
          <figure className="px-10 pt-10">
            <img src={item.image} alt="Shoes" className="rounded-xl h-60" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;

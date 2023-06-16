import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState();

  useEffect(() => {
    fetch("https://summer-camp-serversite-salauddin98.vercel.app/popularClass")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="mt-12">
      <h1 className="text-4xl font-semibold leading-none  text-center text-black">
        Our Popular Classes
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 mt-8">
        {classes?.map((cls) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={cls._id}>
            <figure className="px-10 pt-10">
              <img src={cls.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: {cls.className}</h2>
              <p className=" font-medium text-base">
                Instructor: {cls.instructorName}
              </p>
              <p className=" font-medium text-base">Enroll: {cls.enroll}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;

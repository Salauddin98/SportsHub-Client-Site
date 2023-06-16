import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <div className="p-6 py-12 bg-teal-950 text-white mt-8 mb-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">
            Up to 50% Off
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span> Use this code:</span>
            <span className="font-bold text-lg">bkash00</span>
          </div>
          <Link
            to="/classes"
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discount;

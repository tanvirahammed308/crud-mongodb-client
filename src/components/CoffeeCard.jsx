import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, amount, photo } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);
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
        const fetchData = async () => {
          try {
            const response = await fetch(
              `http://localhost:3000/coffees/${_id}`,
              {
                method: "DELETE",
                headers: {
                  "content-type": "application/json",
                },
              }
            );

            const data = await response.json();
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = coffees.filter((coffee) => coffee._id !== _id);
            setCoffees(remaining);
          } catch (error) {
            console.log("Error fetching data:", error);
          }
        };

        fetchData();

      }
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-between items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={photo}
          alt={name} // Added alt attribute with coffee name for accessibility
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name: {name}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Amount: {amount}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Price: {price}
          </p>
        </div>
        <div className="p-5 items-center flex flex-col">
          <button
            onClick={() => handleDelete(_id)}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete
          </button>
          <Link to={`/updatecoffee/${_id}`}>
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

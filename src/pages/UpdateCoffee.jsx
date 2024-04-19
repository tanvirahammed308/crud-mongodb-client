import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const loadedData=useLoaderData()

    const handleUpdateCoffee=e=>{
        e.preventDefault()
        console.log('add coffee btn is ok');
        const form=e.target;
        const name=form.name.value;
        const amount=form.amount.value;
        const price=form.price.value;
        const photo=form.photo.value;
        const updateCoffee={ name,amount,price,photo};
        console.log('new coffee added',updateCoffee);
        
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3000/coffees/${loadedData._id}`, {
              method: 'PUT',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(updateCoffee)
            });
            
            const data = await response.json();
            console.log(data);
            if (data.modifiedCount >0) {
              toast.success('Successfully Coffee Added!')
              form.reset()
    
              
            }
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
        
        fetchData();
        
      }
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <h2 className="capitalize text-center my-3 font-semibold text-blue-500">
        update Coffee here
      </h2>

      <form className="max-w-sm mx-auto border p-6" onSubmit={handleUpdateCoffee}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
          >
            coffee name
          </label>
          <input
          defaultValue={loadedData.name}
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="amount"
            className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            amount
          </label>
          <input
           defaultValue={loadedData.amount}
            type="text"
            id="amount"
            name="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            price
          </label>
          <input
           defaultValue={loadedData.price}
            type="text"
            name="price"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="photo"
            className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            photo url
          </label>
          <input

            type="text"
            name="photo"
            id="photo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
      
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          update
        </button>
      </form>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default UpdateCoffee;






import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

const Home = () => {
  const loadedDate = useLoaderData();
  const [coffees, setCoffees] = useState(loadedDate);
  return (
    <div className="max-w-screen-xl mx-auto mt-10 ">
      <div>
        <h2 className="my-2 font-bold text-2xl text-gray-800 text-center capitalize">
          total added coffee: <span className="ml-2 text-blue-500">
          
            
          {coffees.length === 0 ? (
              <h1>no coffee added</h1>
            ) : (
              coffees.length
            )}
             
             
              </span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-3 p-2">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

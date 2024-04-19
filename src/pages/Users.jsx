import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const Users = () => {
    const loadedData=useLoaderData();
    const [users,setUsers]=useState(loadedData);
    const handleDelete=_id=>{

      
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
              `http://localhost:3000/users/${_id}`,
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
            const remaining = users.filter((user) => user._id !== _id);
            setUsers(remaining);
          } catch (error) {
            console.log("Error fetching data:", error);
          }
        };

        fetchData();

      }
    });

    }
  return (
    <div className="max-w-xl mx-auto ">
        <h2 className="flex text-2xl font-bold text-center">total users:{ users.length === 0 ? <p>no user added</p> : <p>{users.length} </p>}  </h2>

        <div>
          

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
        email
        </th>
        <th scope="col" className="px-6 py-3">
        create time
        </th>
        <th scope="col" className="px-6 py-3">
        lastSignInTime
        </th>
        
        <th scope="col" className="px-6 py-3">
          <span className="">Action</span>
        </th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user)=><tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             {user.email}
            </th>
            <td className="px-6 py-4">
              {user.createdAt}
            </td>
            
            <td className="px-6 py-4">
              {user.lastSignInTime}
            </td>
            
            
            <td className="px-6 py-4 text-right">
            <button className="btn" onClick={()=>handleDelete(user._id)}>X</button>
            </td>
          </tr>
        )
        }
      
     
      
    </tbody>
  </table>
</div>


        </div>
    </div>
  )
}

export default Users
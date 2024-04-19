import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const{existingUser}=useContext(AuthContext)
  const handleSignIn=e=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    existingUser( email, password)
  .then((userCredential) => {
    // Signed in 
    const oldUser = userCredential.user;
    console.log(oldUser);
    const user={email,lastSignInTime:userCredential.user.metadata.lastSignInTime};
    console.log(user);

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        
        const data = await response.json();
        console.log(data);
        if (data.modifiedCount> 0) {
          toast.success('Successfully Coffee Added!')
          form.reset()

          
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    
    fetchData();
    
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  }
  return (
    <div className="max-w-screen-xl mx-auto mt-10 ">
      
      <form className="max-w-sm mx-auto border p-4" onSubmit={handleSignIn}>
      <h2 className="capitalize font-bold text-center">please sign in now!</h2>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
          name='email'
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
          name='password'
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <div className="capitalize pt-2">are you new ? <Link to="/signup" className="text-blue-500">sign up</Link></div>
      </form>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>

    </div>
  );
};

export default SignIn;

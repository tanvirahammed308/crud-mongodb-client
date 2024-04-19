import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignUP = () => {
  const {newUser}=useContext(AuthContext)

  const handleSignUp=e=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    newUser( email, password)
  .then((userCredential) => {
    // Signed up 
    const newUser = userCredential.user;
    const createdAt=userCredential.user.metadata.creationTime;
   const user={email,createdAt:createdAt}
   console.log(user);
    console.log(newUser);
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        
        const data = await response.json();
        console.log(data);
        if (data.insertedId) {
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
    
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });

  }
  return (
    <div className="mt-14">

      

<form className="max-w-sm mx-auto border p-5" onSubmit={handleSignUp}>
  <h2 className="capitalize font-bold text-center">please sign up now!</h2>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>

  <div className="capitalize pt-2">have already an account  ? <Link to="/signin" className="text-blue-500">sign in</Link></div>
</form>
<Toaster
  position="top-right"
  reverseOrder={false}
/>


    </div>
  )
}

export default SignUP
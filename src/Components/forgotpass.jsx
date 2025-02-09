import React from 'react'
import conpass from '../assets/conpass.png';


const ForgotPass = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Handle form data (e.g., send to an API)
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Navigate to another page if needed
    // navigate('/some-other-page');
  };

  return (
    <div className="main flex flex-col text-white justify-center items-center min-h-screen gap-6">
      <div className="title flex flex-col items-center text-center font-dmMono">
        <img className="w-24 h-24" src={conpass} alt="User Icon" />
        <h1 className="text-3xl font-bold">Forgot <span className='text-[#FFD700]'>Password?</span></h1>
      </div>

      {/* Box */}
      <div className="box h-[30vh] w-[70vh] bg-[#312F2F] flex justify-center items-center rounded-xl p-4 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] shadow-gray-600 drop-shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm">

          {/* Password Input */}
          <FormItem
            name="Email"
            label="Email"
            
          >
            <input
              type="Email"
              placeholder="Enter Email"
              className="mt-2 p-2 rounded-md bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full"
            />
          </FormItem>

          

          {/* Button */}
          <div className="flex flex-col items-center">
            <button type="submit" className="p-2 rounded-md bg-[#FFD700] text-black w-full">Continue</button>
          </div>
        </form>
      </div>

      <div className="already">
        {/* Other Content */}
      </div>
    </div>
  )
}

const FormItem = ({ name, label, rules, children }) => {
  return (
    <div className="w-full">
      <label className="text-[#c2c2cb] font-medium">{label}</label>
      {children}
      {rules?.some((rule) => rule.required) && (
        <span className="text-red-500 text-sm">{rules.find((rule) => rule.required)?.message}</span>
      )}
    </div>
  );
};

export default ForgotPass

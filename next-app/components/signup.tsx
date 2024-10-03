import {Button} from "./button";

export  function SignupComponent() {
    return (
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
        <div className="flex justify-center">
          <div className="max-w-md w-full p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="mb-6 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Create Account</h1>
              <p className="text-gray-500">Sign up for a new account</p>
            </div>
            <div>
              <LabelledInput label="Full Name" placeholder="John Doe" />
              <LabelledInput label="Email Address" placeholder="johndoe@example.com" />
              <LabelledInput label="Password" type="password" placeholder="********" />
              <LabelledInput label="Confirm Password" type="password" placeholder="********" />
              <Button text={"SignUp"}/> 
              <div className="text-center mt-4">
                <p className="text-gray-500 text-sm">
                  Already have an account?{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
  }
  
  function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
        <input
          type={type || "text"}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          placeholder={placeholder}
          required
        />
      </div>
    );
  }
  
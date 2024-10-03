import {Button} from "./button";
export  function SigninComponent() {
    return (
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="flex justify-center">
          <div className="max-w-md w-full p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="mb-6 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back</h1>
              <p className="text-gray-500">Sign in to your account</p>
            </div>
            <div>
              <LabelledInput label="Email Address" placeholder="omkarkhoche@gmail.com" />
              <LabelledInput label="Password" type="password" placeholder="********" />
              <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot Password?</a>
              </div>
              <Button text={"SignIn"}/> 
              <div className="text-center mt-4">
                <p className="text-gray-500 text-sm">
                  Don't have an account?{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    Sign up
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
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          placeholder={placeholder}
          required
        />
      </div>
    );
  }
  
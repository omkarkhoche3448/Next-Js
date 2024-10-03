"use client";
export function Button({ text }) {
  return (
    <button
      onClick={() => {
        console.log("clicked");
      }}
      type="button"
      className="w-full mt-6 text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 font-semibold rounded-lg text-sm px-5 py-3 transition-all ease-in-out duration-300 transform hover:scale-105 shadow-md"
    >
      {text}
    </button>
  );
}

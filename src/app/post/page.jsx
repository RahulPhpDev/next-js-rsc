
const page = () => {
    return (
        <div>
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
  {/* <!-- Header --> */}
  <div className="flex items-center px-4 py-3">
    <img
      className="h-10 w-10 rounded-full border border-gray-300"
      src="https://via.placeholder.com/150"
      alt="Profile Picture"
    />
    <div className="ml-3">
      <p className="text-sm font-semibold text-gray-800">username</p>
      <p className="text-xs text-gray-500">Location</p>
    </div>
    <button className="ml-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-gray-500"
      >
        <path
          strokeLinecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 12h.01M12 12h.01M18 12h.01"
        />
      </svg>
    </button>
  </div>

  {/* <!-- Post Image --> */}
  <div>
    <img
      className="w-full h-80 object-cover"
      src="https://via.placeholder.com/600"
      alt="Post Image"
    />
  </div>


  {/* <!-- Comments --> */}
        <div className="px-4 py-2 text-sm text-gray-500">
            View all 10 comments
        </div>

        <div className="px-4 py-2">
            <textarea className="w-full h-24 px-3 py-2 text-sm placeholder-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"></textarea>

            <button className="text-sm font-semibold text-blue-500">Post Comment</button>
        </div>
        </div>


       
        </div>
    );
};

export default page;
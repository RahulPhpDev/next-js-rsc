import Form from './ClientSide/Form';
import ShowComments from './ClientSide/ShowComments';
import ImageHelper from "./ImageHelper";
import User from "./User";
const page = () => {
  return (
    <div>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* <!-- Header --> */}
        <div className="flex items-center px-4 py-3">
          <ImageHelper
            className="h-10 w-10 rounded-full border border-gray-300"
            url="https://via.placeholder.com/150"
          />
          <User />
        </div>

        {/* <!-- Post Image --> */}
        <div>
          <ImageHelper
            className="w-full h-80 object-cover"
            url="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
          />
        </div>


        <div className="px-4 py-2">
        {/* <textarea name ="comment" className="w-full h-24 px-3 py-2 text-sm placeholder-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"></textarea>

        <button  className="text-sm font-semibold text-blue-500">
                Post Comment
          </button> */}
         <Form />
          <ShowComments />
        </div>
     
      </div>
    </div>
  );
};

export default page;



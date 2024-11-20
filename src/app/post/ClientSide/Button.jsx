'use client'
const Button = (props) => {
    console.log("sdfsdfsd", {isPending}, props);
    const isPending = props;
    
    const handleClick = () => {
        console.log('Post Comment');
    }
    return (
        <div>
         <button onClick={handleClick} className="text-sm font-semibold text-blue-500">
         {/* {isPending ? 'Pending .....' : ' Post Comment Now' }    */}
         Post Comment Now
          </button>
        </div>
    );
};

export default Button;
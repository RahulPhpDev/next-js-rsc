
const ImageHelper = ({url, className}) => {
    const classes = className ;
    return (
        <>
            <img
                className={className}
                src={url}
                alt="Profile Picture"
        />
      </>
    );
};

export default ImageHelper;
import PropTypes from "prop-types";

const DashHeading = ({title,subtitle}) => {
  return (
    <div className="flex flex-col w-full h-[200px] justify-start items-center bg-purple-500 p-4">
      <h2 className="text-xl md:text-2xl lg:text-4xl mb-4 font-bold text-white">
        {title}
      </h2>
      <h4 className="text-sm md:text-sm lg:text-2xl font-thin mb-4 text-white p-10">
        <div className="text-center">
        {subtitle}
        </div>
      </h4>
      
    </div>
  ) 
  
}

DashHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};


export default DashHeading
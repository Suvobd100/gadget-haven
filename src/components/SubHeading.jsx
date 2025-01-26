
import PropTypes from "prop-types";
const SubHeading = ({title,subtitle}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12 bg-purple-500 p-6">
      <h2 className="text-xl md:text-2xl lg:text-4xl mb-4 font-bold text-white">
        {title}
      </h2>
      <h4 className="text-xl md:text-xl lg:text-4xl font-thin mb-4 text-white">
        {subtitle}
      </h4>
      
    </div>
  )
}

SubHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SubHeading
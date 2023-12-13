import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const IconCard = ({ img, alt, link }) => {
  return (
    <div className="-top-6 absolute flex justify-center items-center prueba ">
      <Link
        className=" bg-[var(--color-primary)] rounded-[13.1875rem] animacion-prueba "
        to={link}
      >
        <img className=" p-6 h-[7.875rem]" src={img} alt={alt} />
      </Link>
    </div>
  );
};

IconCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
};
export default IconCard;

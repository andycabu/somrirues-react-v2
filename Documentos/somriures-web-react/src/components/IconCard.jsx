import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const IconCard = ({ img, alt, link }) => {
  return (
    <div className="container-treatments__cards__card__img">
      <Link to={`/pages${link}`}>
        <img src={img} alt={alt} />
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

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();



const Product = ({ product }) => {
  const { id,title, price, image, rating } = product;
  return (
    <div data-aos="zoom-in">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px] w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">Sunglass</h2>
            <h2 className="font-bold">${price}</h2>
          </div>
          <p>{title}</p>
          <div className="card-actions justify-between items-center">
            <div className="rating">
              <input
                type="radio"
                name={`rating-${rating}`}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name={`rating-${rating}`}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name={`rating-${rating}`}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name={`rating-${rating}`}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name={`rating-${rating}`}
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <Link to={`/details/${id}`} className="btn btn-primary">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes={
    product:PropTypes.object.isRequired
}
export default Product;

import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
   const allProducts = useLoaderData()
    const {id} = useParams()
    // console.log(id)

    const singleData = allProducts.find(product => product.id === parseInt(id))

    // console.log(singleData)

     const {title,image,description} = singleData;
    return (
      <div>
        <div
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img className="h-[300px] w-full" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="font-bold text-2xl">{title}</p>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;
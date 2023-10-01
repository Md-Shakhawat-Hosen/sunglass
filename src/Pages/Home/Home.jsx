import { useEffect } from "react";
import { useState } from "react";
import Banner from "../../Components/Banner/Banner";


const Home = () => {
     
    const [homeProducts, setHomeProducts] = useState([])

    useEffect(()=>{
        fetch('sunglass.json')
        .then (res=> res.json())
        .then (data => setHomeProducts(data))
    },[])

   

    return (
      <div>
        <Banner></Banner>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {homeProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="card card-compact bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    className="h-[300px] w-full"
                    src={product.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Sunglass</h2>
                  <p>{product.title}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default Home;
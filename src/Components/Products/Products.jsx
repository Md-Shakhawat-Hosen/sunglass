// import { useEffect } from "react";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product/Product";


const Products = () => {
    // const [productsData,setProductsData] = useState([]);

    // useEffect(()=>{
    //     fetch('sunglass.json')
    //     .then(res=>res.json())
    //     .then(data => setProductsData(data))
    // },[])

    const productsData = useLoaderData();
    // console.log(productsData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                productsData.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;
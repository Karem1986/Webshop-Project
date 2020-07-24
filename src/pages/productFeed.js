//our first page
// src/pages/productFeed.js
import React, { useEffect, useState } from "react";
import axios from "axios"

export default function ProductFeed() {
    //Local state to display products
    // const [products, setProducts] = useState([])



    useEffect(() => {
        async function getProducts() {
            const res = await axios.get(`http://localhost:4005/products`);
            console.log('testing response', res.data)
        }
        getProducts()
    }, []);



    return (
        <div>
            <h1>Our products!</h1>


        </div>

    )
}
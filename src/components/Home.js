import React, { useState } from 'react';
import data from "../data";
import Itemcart from './Itemcart';
import Product from './Products';
import ProductService from './ProductService';
const Home = (props) => {
    // const {users=useState(<ProductService/>);

    return (

        <>
            <h1 className='text-center mt-3'>All Items</h1>
            <section className='pu-4 container'>
                <div className='row justify-content-center'>
                    {/* <Product /> */}
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcart img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                        )
                    })}

                </div>
            </section>
        </>
    );
};

export default Home;
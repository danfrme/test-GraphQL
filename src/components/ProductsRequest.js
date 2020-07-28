import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Product from './Product';
import { CircularProgress } from '@material-ui/core';
import './styles/producstRequestStyle.css';



export default function ProductsRequest() {
    return (
        <Query 
            query={gql`{
            getSellerPublications(sellerId:"4cc88cdc-2d92-47ff-ab3f-9831367b889c"){
            product{
            itemName
            images
            }
            price
            stock
            }
            }
            `}
        >

            {({loading, error, data}) => {
                if (loading){
                     return <CircularProgress className='loading' />
                } else if (error) {
                    return <p>error</p>
                } 
                else {
                   return (
                    <div className='menu-wrapper'>
                        {data.getSellerPublications.map(Element => 
                        <Product
                            key={Element.product.images[0]} 
                            itemName={Element.product.itemName}
                            price={Element.price}
                            stock={Element.stock}
                            image={Element.product.images[0]}
                        />)}
                   </div>
                   )
                }
            }}

        </Query>
    )
}

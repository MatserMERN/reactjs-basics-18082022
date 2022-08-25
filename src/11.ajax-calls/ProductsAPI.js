import React, { Component } from 'react'
import {fakeProductAPI} from "../ApiStore/fakeProductAPI"

export class ProductsAPI extends Component {
    constructor(){
        super()

        this.state ={
            products: []
        }
    }

    componentDidMount(){
        fakeProductAPI.get("/products")
        .then(response => this.setState({products : response.data}))
    }
  render() {
    return (
      <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.products.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.rating.rate}</td>
                            <td>
                                <img src={product.image} alt={product.title} width="150px" height="100px" />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default ProductsAPI
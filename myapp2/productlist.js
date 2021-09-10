import React , {useState , useEffect} from 'react';
import axios from 'axios';
import ProductList from './productlist';


const ProductList = () =>{

    const[product , updateProduct] = useState([]);
const[message , updateMessage] = useState("");
const getProduct = () =>{
    axios.get("http://localhost:3003/product")
    .then(response=>{
        updateProduct(response.data.reverse());
    })
}

useEffect(()=>{
    getProduct();
}, [true])

    return(
        <>
          <div className="row">
              <div className="col-lg-12">
                  <div className="bg-white p-4 rounded">
                  <h3 className="text-center"> Product List</h3>
                  <table className = "table table-striped">
                      <thead>
                          <tr className="bg-light text-primary">
                              <th> Id </th>
                              <th> Product Name </th>
                              <th> Price </th>
                              <th> Details </th>
                              <th> Photo </th>
                              <th> Delete </th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              product.map((proinfo , index)=>{
                                  return(
                                      <tr>
                                          <td>{proinfo.id}</td>
                                          <td>{proinfo.name}</td>
                                          <td>{proinfo.price}</td>
                                          <td>{proinfo.details}</td>
                                          <td>
                                              <img src={proinfo.photo} height="50" width="50"/>
                                          </td>
                                          <td> 
                                              <button className="btn btn-danger">
                                                  <i className = "fa fa-trash"></i>
                                              </button>
                                          </td>
                                      </tr>
                                  )
                              })
                          }
                      </tbody>
                  </table>
                  </div>
              </div>
          </div>
          </>  
    )
}

export default ProductList;
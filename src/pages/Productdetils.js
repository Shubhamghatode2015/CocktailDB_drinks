import React, { useEffect } from 'react';
import {Link,useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Layout from '../Componets/Layout';
import Spinner from '../Componets/Spinner';
import { fetchSingleCocktails } from '../reducx/festures/cocktailSlice';
const Productdetils = () => {

  const dispatch = useDispatch();
  const {id}= useParams();
  const { loading, cocktail } = useSelector((state) => ({
    ...state.app,
  }));
useEffect(()=>{
  dispatch(fetchSingleCocktails({id}))
},[dispatch,id]);

  return (
    <>
         {loading ? (
          <Spinner />
        ) : (
          <Layout>
            <div className="container mt-4">
              <Link to="/" className="btn btn-info">
                GO BACK
              </Link>
                {cocktail.map((items)=>{return(
              <div className="row mt-4" key={items.idDrink}>


                <div className="col-md-5">
                  <img src={items.strDrinkThumb} alt={items.strDrink} height={300} width={400} />
                </div>
                <div className="col-md-5">
                  <h2>Name : {items.strDrink}</h2>
                  <p className="mt-1">Category :{items.strCategory}</p>
                  <p>Info : {items.strInstructions} </p>
                  <p>Glass : {items.strGlass}</p>
                  <p>Ingredients : {items.strIngredient1 + " ," }{items.strIngredient2  }</p>
                </div>
              </div>
                )})}
                </div>
          </Layout>
        )}
    </>
  )
}

export default Productdetils;

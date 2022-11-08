import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import Layout from "../Componets/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../reducx/festures/cocktailSlice";
import Spinner from "../Componets/Spinner";
const Homepage = () => {
  const dispatch = useDispatch();
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!cocktails) {
    return (
      <Layout>
        <h2>No Cocktail Found With This Name</h2>
      </Layout>
    );
  }
  return (
    <>
      
      <div className="container">
        <div className="row">
      {cocktails.map((items)=>{return(

      
          <div className="col-md-3 mt-3 m-1" key={items.idDrink}>
            <div className=" card" style={{ width: "15rem" }}>
              <img src={items.strDrinkThumb} className="card-img-top" alt={items.strDrink} />
              <div className="card-body">
                <h5 className="card-title">{items.strDrink}</h5>
                <h5 className="card-title">{items.strGlass}</h5>
                <h4 className="card-title">{items.strCategory}</h4>
                <p className="card-text">
                 {items.strInstructions} 
                </p>
                <Link to={`/${items.idDrink}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
      )})}

        </div>
      </div>
    </>
  );
};

export default Homepage;

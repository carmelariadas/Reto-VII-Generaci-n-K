import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    // <div className="text-center mt-5">

    // 	<div className="alert alert-info">
    // 		{store.message || "Loading message from the backend (make sure your python backend is running)..."}
    // 	</div>
    // 	<p>
    // 		This boilerplate comes with lots of documentation:{" "}
    // 		<a href="https://start.4geeksacademy.com/starters/react-flask">
    // 			Read documentation
    // 		</a>
    // 	</p>
    // </div>

    <>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <form id="testForm" className="d-flex">
              <label for="name" >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                // value=""
                
              /><br/>
              {" "}
              <label for="nameWithoutVocals" >
                Nombre sin vocales
              </label>
              <input
                type="text"
                id="nameWithoutVocals"
                name="nameWithoutVocals"
                // value=""
                disabled=""
                
              /><br/>
              {" "}
              <label for="date" >
                Fecha
              </label>
              <input
                type="date"
                id="date"
                name="date"
                // value=""
                
              /><br/>

              {" "}
              <label for="days" >
                Días transcurridos hasta el 10/03/2023
              </label>
              <input
                type="text"
                id="days"
                name="days"
                // value=""
                disabled=""
                
              /><br/>
          </form>
        </div>
        <div className="col"></div>
      </div>



	  <input type="text"/>
    </>
  );
};

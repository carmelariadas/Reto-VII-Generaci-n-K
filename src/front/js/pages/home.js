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

    <div className="">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <form id="testForm" className="d-flex">
            <div class="mb-3">
              <label for="name" >
                Nombre
              </label><br/>
              <input
                type="text"
                id="name"
                name="name"
                value=""
                
              ></input>
            </div>
            <div class="mb-3">
              {" "}
              <label for="nameWithoutVocals" >
                Nombre sin vocales
              </label><br/>
              <input
                type="text"
                id="nameWithoutVocals"
                name="nameWithoutVocals"
                value=""
                disabled=""
                
              />
            </div>
            <div class="mb-3">
              {" "}
              <label for="date" >
                Fecha
              </label><br/>
              <input
                type="date"
                id="date"
                name="date"
                value=""
                
              />
            </div>
            <div class="mb-3">
              {" "}
              <label for="days" >
                Días transcurridos hasta el 10/03/2023
              </label><br/>
              <input
                type="text"
                id="days"
                name="days"
                value=""
                disabled=""
                
              />
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import Card from "../component/Card";

import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
// import ContextReducer from "../component/ContextReducer";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);  
    // console.log(response[0],response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              />
              {/* <button className="btn btn-outline-success text-black bg-bg-success" type="submit">Search</button> */}
            </div>
          </div>
          <div
            className="carousel-inner relative w-full overflow-hidden"
            id="carousel"
            style={{}}
          >
            <div className="carousel-item active relative float-left w-full">
              <img
                src="https://source.unsplash.com/random/900×700/?burger"
                className="block w-100 "
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://source.unsplash.com/random/900×700/?samosa"
                className="block w-100 "
                alt="Camera"
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://source.unsplash.com/random/900×700/?barbeque"
                className="block w-100"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItem) => {
                        return (
                          <div
                            key={filterItem._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodItem={filterItem}
                              options={filterItem.options[0]}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No such Data Found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      {/* <div><ContextReducer/> </div> */}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

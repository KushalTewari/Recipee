/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoImage from "../../assets/NoImage.jpg";
import HeaderNav from "../Header/HeaderNav";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  const fetchdata = () => {
    fetch(
      `https://api.spoonacular.com/recipes/random?number=12&apiKey=${process.env.REACT_APP_API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data?.recipes ?? []);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleClick = (record) => {
    navigate(`../details`, { state: record });
  };

  useEffect(() => {
    if (!data) fetchdata();
  }, []);

  return (
    <HeaderNav>
      <section>
        {!data && (
          <div className="k__flex k__flex--align-center k__flex--justify-center mh-50">
            <CircularProgress />
          </div>
        )}
        {data && (
          <div className="k__flex k__flex--veryLoose k__flex--align-start k__flex--justify-center k__flex--wrap">
            {data &&
              data.map((item, index) => (
                <div key={`child-${index}`} className="k__flex-item">
                  <div className="card">
                    <div className="overlay__container">
                      <img
                        src={item?.image}
                        alt={item?.title}
                        onError={() => NoImage}
                      />
                      <div className="box">
                        <div className="k__flex k__flex--column k__flex--align-center k__flex--justify-center">
                          <div className="k__flex-item">
                            {item?.title ? (
                              item?.title?.length > 30 ? (
                                <h3>{item?.title?.substring(0, 30) + "..."}</h3>
                              ) : (
                                <h3>{item?.title}</h3>
                              )
                            ) : (
                              <h3>{"Unnamed Dish"}</h3>
                            )}
                          </div>
                          <div className="k__flex-item">
                            <button onClick={() => handleClick(item)}>
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>
    </HeaderNav>
  );
};

export default Home;

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Chip from "@mui/material/Chip";
import HeaderNav from "../Header/HeaderNav";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const record = location.state;

  return (
    <HeaderNav>
      <section>
        <button className="backButton" onClick={() => navigate(-1)}>
          &larr;
        </button>
        <div className="k__flex k__flex--column k__flex--veryLoose">
          <div className="k__flex-item">
            <div className="k__flex k__flex--align-start k__flex--justify-start">
              <div className="k__flex-item k__flex-item--33">
                <img
                  className="details__image"
                  src={record?.image}
                  alt={record?.title}
                />
              </div>
              <div className="k__flex-item k__flex-item--66">
                <h3 className="details__heading">
                  {record?.title ?? "Unnamed Dish"}
                </h3>
                <p className="details__desc">{record?.instructions}</p>
                <div className="k__flex k__flex--align-start k__flex--justify-start k__flex--wrap">
                  {record?.diets?.map((item, index) => (
                    <div className="k__flex-item" key={`chip-${index}`}>
                      <Chip label={item} color="success" variant="outlined" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="k__flex-item"></div>
        </div>
      </section>
    </HeaderNav>
  );
};

export default Details;

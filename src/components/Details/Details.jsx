import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NoImage from "../../assets/NoImage.jpg";
import Veg from "../../assets/veg.png";
import NonVeg from "../../assets/nonveg.png";
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
                  onError={() => NoImage}
                  src={record?.image}
                  alt={record?.title}
                />
              </div>
              <div className="k__flex-item k__flex-item--66">
                <h3 className="details__heading">
                  {record?.title ?? "Unnamed Dish"} {` `}
                  <img
                    src={record?.vegetarian ? Veg : NonVeg}
                    alt={record?.vegetarian ? "vegetarian" : "non-vegetarian"}
                  />
                </h3>
                <div className="details__desc" id="details__desc">
                  <ul>
                    {record?.analyzedInstructions?.[0]?.steps?.map(
                      (item, index) => (
                        <li key={`step-${index}`}>{item?.step}</li>
                      )
                    )}
                  </ul>
                </div>
                <div className="k__flex k__flex--align-start k__flex--justify-start k__flex--wrap">
                  {record?.diets?.map((item, index) => (
                    <div className="k__flex-item" key={`chip-${index}`}>
                      <div className="tags">
                        <p>{item}</p>
                      </div>
                    </div>
                  ))}
                  <div className="k__flex-item">
                    <div className="tags">
                      <p>Costs Rs. {record?.pricePerServing} per serving</p>
                    </div>
                  </div>
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

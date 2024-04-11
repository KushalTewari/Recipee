import React from "react";

const HeaderNav = ({ children }) => {

  return (
    <>
      <div className="header__container">
        <div className="container">
          <div className="k__flex k__flex--align-center k__flex--justify-between">
            <div className="k__flex-item">
              {/* Logo */}
              <div className="header__container__logo">
                <h1>Recipee</h1>
              </div>
            </div>
            <div className="k__flex-item">{/* Search Area or others */}</div>
          </div>
        </div>
      </div>
      <div className="child__container">
        <div className="container">{children}</div>
      </div>
    </>
  );
};

export default HeaderNav;

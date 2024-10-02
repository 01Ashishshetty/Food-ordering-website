import React from "react";
import "../css/Home.css";
import "../css/nicepage.css";

function Section2() {
  return (
    <section
      className="u-align-center u-clearfix u-grey-60 u-section-2"
      id="carousel_987a"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <div
          className="u-palette-2-base u-shape u-shape-circle u-shape-1"
          data-animation-name="fadeIn"
          data-animation-duration="1000"
          data-animation-direction="Right"
          data-animation-delay="0"
        ></div>
        <img
          className="u-image u-image-1"
          src="images/ga3d38eef04f358a659f877cbb25d33f9977d5eff21f51fa4dae8b77401934a17c492458a0fc122c5b4f743fd63287f1bc70c452fafd8a277167c5626abbb037e_1280.jpg"
          data-image-width="1280"
          data-image-height="853"
          data-animation-name="fadeIn"
          data-animation-duration="1000"
          data-animation-direction="Up"
          data-animation-delay="250"
          alt=""
        />
        <div
          className="u-align-left u-container-style u-group u-white u-group-1"
          data-animation-name="fadeIn"
          data-animation-duration="1000"
          data-animation-direction="Left"
          data-animation-delay="250"
        >
          <div className="u-container-layout u-container-layout-1">
            <h2 className="u-text u-text-default u-text-1"> Breakfast</h2>
            <p className="u-hover-feature u-text u-text-2">
            Our pizza breakfast selection features a delicious blend of fresh ingredients,
           combining classic breakfast favorites like eggs, cheese, and savory meats with our signature pizza flair, 
           ensuring a unique and satisfying start to your day that’s both hearty and delicious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;

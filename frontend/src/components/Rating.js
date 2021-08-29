import React from "react";

function Rating(props) {
  //passing props because we need to read two values
  const { rating, numReviews } = props;

  return (
    <div className="rating">
      <span>
        <i
          className={
            //rating the product with the help of ternary
            rating >= 1 //if the rating is greater than or equal to 1 then it will give full star
              ? "fa fa-star"
              : rating >= 0.5 //if the rating is greater than or equal to 0.5 then it will give half star
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          } //or else it will give a empty star from position 0
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2 //if the rating is greater than or equal to 2 then it will give 2 full star
              ? "fa fa-star"
              : rating >= 1.5 //if the rating is greater than or equal to 1.5 then it will give half star
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          } //or else it will give a empty star from position 2
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3 //if the rating is greater than or equal to 3 then it will give 3 full star
              ? "fa fa-star"
              : rating >= 2.5 //if the rating is greater than or equal to 2.5 then it will give half star
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          } //or else it will give a empty star from position 3
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4 //if the rating is greater than or equal to 4 then it will give 4 full star
              ? "fa fa-star"
              : rating >= 3.5 //if the rating is greater than or equal to 3.5 then it will give half star
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          } //or else it will give a empty star from position 4
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5 //if the rating is greater than or equal to 5 then it will give 5 full star
              ? "fa fa-star"
              : rating >= 4.5 //if the rating is greater than or equal to 4.5 then it will give half star
              ? "fa fa-star-half-o"
              : "fa fa-star-o" //or else it will give a empty star from position 5
          }
        ></i>
      </span>
      {/* //display number of reviews */}
      <span> {`${numReviews} reviews`}</span>
    </div>
  );
}

export default Rating;

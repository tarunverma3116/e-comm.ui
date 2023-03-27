import React from "react";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

type Props = {
  product: any;
};

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#562EBB",
  },
});

const ProductCard = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/product/${props.product.id}`);
      }}
      className="user-card text-white bg-[#562EBB] dark:bg-[#00000005] dark:text-black min-w-[250px] max-w-[320px] cursor-pointer rounded-md transform transition duration-500 hover:scale-110"
    >
      <div className="grid grid-cols-1 p-3">
        <img
          className="mx-auto w-full h-[200px] object-cover rounded-md"
          src={props.product.thumbnail}
          alt="car!"
        />
        <p className="pt-3 text-base">
          {props.product.title.length > 25
            ? props.product.title.slice(0, 25) + "..."
            : props.product.title}
        </p>
        <div className="flex flex-row justify-between items-center">
          <p className="text-base font-bold flex gap-1 items-center mb-1">
            <span>₹{props.product.price}</span>
            <span className="text-gray-400 text-xs">
              ({props.product.discountPercentage}% off)
            </span>
          </p>
          {/* <p className="rating text-xs text-gray-400">
            <StyledRating
              name="read-only"
              value={props.product.rating}
              readOnly
            />
            ({props.product.rating}/5)
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

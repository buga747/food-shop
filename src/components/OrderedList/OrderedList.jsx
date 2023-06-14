import React from "react";
import { BsTrash } from "react-icons/bs";
import NoImagePlaceholder from "../../assets/NoImagePlaceholder.png";
import {
  DeleteButton,
  ImageWrapper,
  ItemContainer,
  ItemDetails,
  ItemImage,
  ItemPrice,
  ItemQuantity,
  ItemTitle,
  ItemTotalPrice,
  ItemWrapper,
  OrderItem,
  OrderList,
  TotalPrice,
} from "./OrderedList.styled";

const OrderedList = ({
  cartItems,
  handleQuantityChange,
  handleDeleteItem,
  totalPrice,
}) => {
  return (
    <ItemContainer>
      <OrderList>
        {cartItems.map(({ _id, imgUrl, title, price, quantity }) => (
          <OrderItem key={_id}>
            <ItemWrapper>
              <ImageWrapper>
                {" "}
                {imgUrl ? (
                  <ItemImage src={imgUrl} alt={title} />
                ) : (
                  <ItemImage src={NoImagePlaceholder} alt={title} />
                )}
              </ImageWrapper>
              <ItemDetails>
                <ItemTitle>{title}</ItemTitle>
                <ItemPrice>Price: ${price}</ItemPrice>
                <ItemQuantity>
                  Quantity:
                  <input
                    type='number'
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(_id, parseInt(e.target.value))
                    }
                    min='1'
                  />
                </ItemQuantity>
                <ItemTotalPrice>
                  Total: ${(quantity * price).toFixed(2)}
                </ItemTotalPrice>
              </ItemDetails>
              <DeleteButton onClick={() => handleDeleteItem(_id)}>
                <BsTrash />
              </DeleteButton>
            </ItemWrapper>
          </OrderItem>
        ))}
      </OrderList>
      <TotalPrice>Total Price: ${totalPrice.toFixed(2)}</TotalPrice>
    </ItemContainer>
  );
};

export default OrderedList;

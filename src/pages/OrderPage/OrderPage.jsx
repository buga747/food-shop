// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { addOrder } from "../../services/shopsApi.js";
import {
  Container,
  DiscoverLink,
  EmptyCartWrapper,
  Title,
} from "./OrderPage.styled";
import UserForm from "../../components/UserForm/UserForm";
import OrderedList from "../../components/OrderedList/OrderedList";

const OrderPage = ({
  items,
  handleDeleteItem,
  handleSubmit,
  formData,
  setCaptchaPassed,
  handleInputChange,
  handleQuantityChange,
  totalPrice,
}) => {
  return (
    <Container>
      {items.length > 0 ? (
        <>
          <UserForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            formData={formData}
            setCaptchaPassed={setCaptchaPassed} // Pass setCaptchaPassed to UserForm
          />
          <OrderedList
            cartItems={items}
            handleQuantityChange={handleQuantityChange}
            handleDeleteItem={handleDeleteItem}
            totalPrice={totalPrice}
          />
        </>
      ) : (
        <EmptyCartWrapper>
          <Title>Add more items to the cart</Title>

          <DiscoverLink to='/'>Back to Shop</DiscoverLink>
        </EmptyCartWrapper>
      )}
    </Container>
  );
};

export default OrderPage;

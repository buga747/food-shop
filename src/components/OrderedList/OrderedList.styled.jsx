import styled from "styled-components";

export const ItemContainer = styled.div`
  flex-basis: 50%;
  /* max-height: 90vh; */
  /* overflow-y: scroll; */
`;

export const OrderList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const OrderItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #223fb5;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 150px;
  height: 100px;
  overflow: hidden;
  border-radius: 8px;
`;

export const ItemImage = styled.img`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const ItemPrice = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #373434;
`;

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-size: 14px;
`;

export const ItemTotalPrice = styled.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #063c56;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  color: #ff0000;
  transition: color 0.2s;

  &:hover {
    color: #ff5555;
  }
`;

export const TotalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  color: #022334;
`;

export const QuantityWrapper = styled.div`
  margin-left: 6px;
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  text-align: center;
  padding: 6px;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  border: 0px;

  font-size: 16px;
  font-weight: 600;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ButtonQuantity = styled.button`
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  border: 0;
  font-size: 16px;

  &:hover,
  &:focus {
    font-weight: 700;
  }
`;

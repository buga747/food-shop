import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addOrder } from "./services/shopsApi";

import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const ShopsPage = lazy(() => import("./pages/ShopsPage/ShopsPage"));
const OrderPage = lazy(() => import("./pages/OrderPage/OrderPage"));

export const App = () => {
  const [orderedItems, setOrderedItems] = useState(() => {
    const storedOrderedItems = localStorage.getItem("orderedItems");
    return storedOrderedItems ? JSON.parse(storedOrderedItems) : [];
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [shopId, setShopId] = useState("");

  // Update localStorage when orderedItems changes
  useEffect(() => {
    localStorage.setItem("orderedItems", JSON.stringify(orderedItems));
  }, [orderedItems]);

  useEffect(() => {
    if (orderedItems.length > 0) {
      setShopId(orderedItems[0].shopId);
    }
  }, [orderedItems]);

  useEffect(() => {
    let total = 0;
    orderedItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [orderedItems]);

  const addToCart = (newItem) => {
    if (orderedItems.length === 0) {
      setOrderedItems([newItem]);
      toast.success(`${newItem.title} added to your cart`);
    }

    if (orderedItems.length > 0) {
      if (orderedItems[0].shopId === newItem.shopId) {
        setOrderedItems((prev) => [...prev, newItem]);
        toast.success(`${newItem.title} added to your cart`);
      }

      const itemInCart = orderedItems.find((item) => item._id === newItem._id);

      if (itemInCart) {
        const updatedItems = orderedItems.map((item) => {
          if (item._id === newItem._id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        setOrderedItems(updatedItems);
      }

      if (orderedItems[0].shopId !== newItem.shopId) {
        toast.error("You can add items from one shop to cart", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = orderedItems.filter((item) => item._id !== itemId);
    setOrderedItems(updatedItems);
    console.log(orderedItems);
  };

  const handleQuantityChange = (itemId, quantity) => {
    const updatedItems = orderedItems.map((item) => {
      if (item._id === itemId) {
        const total = item.price * quantity;
        return {
          ...item,
          quantity,
          total,
        };
      }
      return item;
    });
    setOrderedItems(updatedItems);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaPassed) {
      toast.error("Please complete the recaptcha");
      // Handle the case when reCAPTCHA is not passed
      return;
    }

    const data = {
      user: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      },
      shopId: shopId,
      items: orderedItems.map((item) => ({
        name: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: totalPrice,
      date: new Date().toISOString(),
    };

    try {
      const response = await addOrder(data);
      if (response) {
        toast.success("Thank you for your order. Wait for the delivery");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
      setOrderedItems([]);
      setCaptchaPassed(false); // Reset the reCAPTCHA validation
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <Suspense
      fallback={
        <ThreeCircles
          height='100'
          width='100'
          color='#4fa94d'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
          ariaLabel='three-circles-rotating'
          outerCircleColor=''
          innerCircleColor=''
          middleCircleColor=''
        />
      }>
      <Routes>
        <Route path='/' element={<SharedLayout orderedItems={orderedItems} />}>
          <Route index element={<ShopsPage addToCart={addToCart} />} />
          <Route
            path='/orders'
            element={
              <OrderPage
                handleDeleteItem={handleDeleteItem}
                handleSubmit={handleSubmit}
                items={orderedItems}
                formData={formData}
                setCaptchaPassed={setCaptchaPassed}
                handleInputChange={handleInputChange}
                handleQuantityChange={handleQuantityChange}
                totalPrice={totalPrice}
              />
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </Suspense>
  );
};

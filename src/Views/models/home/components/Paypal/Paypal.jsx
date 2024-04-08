import React, { useRef, useEffect } from "react";
import Purchase from "../../../../../Models/Purchase";
import Swal from "sweetalert2";

export default function Paypal({ course, id }) {
  const paypal = useRef();

  const handlePurchasePayPal = async () => {
    const newPurchase = new Purchase(Date.now(), 1, "GIAMGIA", course.Price, parseInt(id), true);

    try {
      await newPurchase.purchase();
      console.log("Đăng ký khóa học thành công");
    } catch (error) {
      console.error("Đăng ký khóa học thất bại:");
    }
  };

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Hãy đăng ký khóa học của bạn nào",
                amount: {
                  currency_code: "CAD",
                  value: course.Price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Đăng kí thành công",
            showConfirmButton: false,
            timer: 1500,
          });
          handlePurchasePayPal();
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

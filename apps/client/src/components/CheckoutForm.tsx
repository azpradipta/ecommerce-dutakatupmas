"use client";

import { ShippingFormInputs } from "@repo/types";
import { EmbeddedCheckout } from "@stripe/react-stripe-js"; // Using EmbeddedCheckout

const CheckoutForm = ({
  shippingForm,
}: {
  shippingForm: ShippingFormInputs;
}) => {
  return <EmbeddedCheckout />;
};

export default CheckoutForm;
"use client";

import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"; // Updated component
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { CartItemsType, ShippingFormInputs } from "@repo/types";
import CheckoutForm from "./CheckoutForm";
import useCartStore from "@/stores/cartStore";

// Inisialisasi Stripe
const stripePromise = loadStripe(
  "pk_test_51MdCLkDhkeDdZct5FkM9qMlMvAzsJpObS6eUy44jYLuVMhUFjYjzr4VLodA0GiUj0WBaOSzm38QJ8ju3SAYhdNkF00myyAyh6M"
);

const fetchClientSecret = async (cart: CartItemsType, token: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL}/session/create-checkout-session`,
    {
      method: "POST",
      body: JSON.stringify({ cart }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const json = await response.json();
  // Mengambil client secret dari response backend Hono kamu
  return json.checkoutSessionClientSecret;
};

const StripePaymentForm = ({
  shippingForm,
}: {
  shippingForm: ShippingFormInputs;
}) => {
  const { cart } = useCartStore();
  const [token, setToken] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const { getToken } = useAuth();

  useEffect(() => {
    const initToken = async () => {
      const t = await getToken();
      setToken(t);
    };
    initToken();
  }, [getToken]);

  useEffect(() => {
    const fetchSecret = async () => {
      if (!token) return;
      
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL}/session/create-checkout-session`,
          {
            method: "POST",
            body: JSON.stringify({ cart }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        const json = await response.json();
        setClientSecret(json.checkoutSessionClientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    
    fetchSecret();
  }, [token, cart]);

  if (!token || !clientSecret) {
    return <div className="p-4 text-center">Loading payment information...</div>;
  }

  return (
    <EmbeddedCheckoutProvider
      stripe={stripePromise}
      options={{ clientSecret }}
    >
      <CheckoutForm shippingForm={shippingForm} />
    </EmbeddedCheckoutProvider>
  );
};

export default StripePaymentForm;
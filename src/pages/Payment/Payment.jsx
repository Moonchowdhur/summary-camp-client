import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const [singleClass, setSingleClass] = useState();

  useEffect(() => {
    axiosSecure.get(`/selectedclass/${id}`).then((res) => {
      setSingleClass(res.data);
    });
  }, [id, axiosSecure]);

  if (!singleClass) {
    return;
  }

  return (
    <div className="w-full md:w-[80%] mx-auto my-8">
      <h3
        className="text-3xl uppercase tracking-widest mx-auto font-bold rounded-lg bg-[#FFD95A] px-2 py-2 
      w-1/4 text-center"
      >
        Pay Now
      </h3>
      <Elements stripe={stripePromise}>
        <CheckoutForm singleClass={singleClass} />
      </Elements>
    </div>
  );
};

export default Payment;

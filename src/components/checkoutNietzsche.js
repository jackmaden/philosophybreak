import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_live_51II9raI0AQnkYq2qu34W5YLLLJ3nFrARYGYc9C7d4fRtgJDMc6d0y2zcEZoAif6r2zjwxSUbKzWPKmueU3GVvgHB00pNoQAiDq")
  }
  return stripePromise
}

const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1KO3pqI0AQnkYq2qOTvyivNh", quantity: 1 }],
      successUrl: `https://philosophybreak.com/thank-you-introduction-to-nietzsche/`,
      cancelUrl: `https://philosophybreak.com/introduction-to-nietzsche/`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <button
      disabled={loading}
      className="button primary top-icon-align"
      onClick={redirectToCheckout}
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>
      {loading
              ? `Loading Checkout...`
              : `Buy Course Now`}
    </button>
  )
}

export default Checkout
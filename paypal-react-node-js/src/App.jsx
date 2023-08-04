import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import "./App.css";

function App() {
  const initialOptions = {
    clientId:
      "AarPVxe-idskhjkYDKiK6d3gRlD_mpbJUwswsPGC5Dg-q8Z2gwdeGjzmwoqJDXMrdjbmTzFpPCURoJ3c",
    currency: "USD",
    intent: "capture",
  };

  const serverUrl = "http://localhost:8888";

  const createOrder = (data) => {
    // Order is created on the server and the order id is returned
    return fetch(`${serverUrl}/my-server/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        bwgTokenInfo: {
          description: "This is description",
          test: "test description",
          cost: "90",
        },
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };
  const onApprove = (data) => {
    // Order is captured on the server and the response is returned to the browser
    return fetch(`${serverUrl}/my-server/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    }).then((response) => {
      response.json();
      console.log("payment is complete");
    });
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        style={{ layout: "horizontal" }}
      />
    </PayPalScriptProvider>
  );
}

export default App;

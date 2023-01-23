import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./components/Authprovider/AuthProvider";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";
import Signin from "./components/Signin/Signin";

function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Shop />}></Route>
            <Route path="/order-review" element={<OrderReview />}></Route>
            <Route path="/inventory" element={<Inventory />}></Route>
            <Route path="/place-order" element={<PlaceOrder />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/*" element={<PrivateRoute />}>
              <Route path="shipping" element={<Shipping />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
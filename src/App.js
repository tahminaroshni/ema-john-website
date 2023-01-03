import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Shop from "./components/Shop/Shop";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Shop />}></Route>
          <Route path="/order-review" element={<OrderReview />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/place-order" element={<PlaceOrder />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
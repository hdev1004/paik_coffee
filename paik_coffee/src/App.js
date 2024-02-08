import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./pages/main";
import Pickup from "./pages/pickup/pickup";
import Order from "./pages/pickup/order";
import OrderItem from "./pages/pickup/order_item";
import Payment from "./pages/pickup/payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/pickup" element={<Pickup/>}></Route>
          <Route path="/pickup/order" element={<Order/>}></Route>
          <Route path="/pickup/order/item" element={<OrderItem/>}></Route>
          <Route path="/pickup/payment" element={<Payment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

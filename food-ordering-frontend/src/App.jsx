import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CartSidebar from "./components/CartSidebar";
import Home from "./pages/Home";
import Orders from "./pages/MyOrders";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Home />
        <Orders />
      </div>
      <CartSidebar />
    </div>
  );
}

export default App;

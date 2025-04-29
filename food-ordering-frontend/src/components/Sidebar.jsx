import { useSidebar } from "../context/SidebarContext";
import { FiUser, FiBox, FiHeart, FiCreditCard, FiHelpCircle, FiGift, FiLogOut } from "react-icons/fi";
import { FaCarSide } from "react-icons/fa";

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const menuItems = [
    { label: "Manage Account", icon: <FiUser /> },
    { label: "Orders", icon: <FiBox /> },
    { label: "Favorites", icon: <FiHeart /> },
    { label: "Wallet", icon: <FiCreditCard /> },
    { label: "Help", icon: <FiHelpCircle /> },
    { label: "Get a Ride", icon: <FaCarSide /> },
    { label: "Promotions", icon: <FiGift /> },
    { label: "Invite Friends", icon: <FiGift /> },
    { label: "Sign Out", icon: <FiLogOut /> },
  ];

  return (
    <div className={`fixed top-0 left-0 bg-white shadow-lg w-64 h-full p-5 transition-transform duration-300 z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      
      {/* Close Button */}
      <button
        onClick={toggleSidebar}
        className="mb-6 p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        Close
      </button>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-20 h-20 bg-gray-200 rounded-full mb-3"></div>
        <p className="font-semibold text-lg text-gray-800">Isuru</p>
        <button className="text-orange-500 text-sm hover:underline mt-1">
          Manage account
        </button>
      </div>

      {/* Menu Items */}
      <ul className="space-y-6">
        {menuItems.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-gray-700 hover:text-orange-500 cursor-pointer transition">
            <span className="text-xl">{item.icon}</span>
            <span className="text-md">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

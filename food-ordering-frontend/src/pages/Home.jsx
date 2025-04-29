import Categories from "../components/Categories";
import Featured from "../components/Featured";

const restaurants = [
  {
    id: 1,
    name: "Rois Food and Restaurant",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    deliveryFee: "Rs. 99",
    rating: 4.5,
    time: "55 min",
    offers: "Buy 1, Get 1 Free",
  },
  {
    id: 2,
    name: "Pilawoos",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    deliveryFee: "Rs. 39",
    rating: 4.4,
    time: "10 min",
    offers: "Top Rated",
  },
  {
    id: 3,
    name: "Biriyaniwala",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    deliveryFee: "Rs. 99",
    rating: 3.2,
    time: "80 min",
    offers: "Top Offer - Save on Select Items",
  },
  {
    id: 4,
    name: "Piccolo's Pizzeria & Cafe",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    deliveryFee: "Rs. 99",
    rating: 4.2,
    time: "50 min",
    offers: "3 Offers Available",
  },
];

function Home() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Categories at Top */}
      <div className="sticky top-0 z-20 bg-white shadow-sm">
        <Categories />
      </div>

      {/* Featured Banner */}
      <div className="p-6">
        <Featured />
      </div>

      {/* Featured Restaurants Section */}
      <main className="p-6 pt-0">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Featured on Foodie 🍽️</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden cursor-pointer duration-300"
            >
              <img
                src={restaurant.imageUrl}
                alt={restaurant.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{restaurant.name}</h3>
                
                <div className="text-sm text-gray-500 flex justify-between mb-2">
                  <span>{restaurant.deliveryFee} Delivery</span>
                  <span>⏱ {restaurant.time}</span>
                </div>
                
                <div className="text-orange-500 font-medium mb-1">
                  ⭐ {restaurant.rating}
                </div>

                {restaurant.offers && (
                  <div className="bg-orange-100 text-orange-700 px-2 py-1 text-xs rounded-md inline-block">
                    {restaurant.offers}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;

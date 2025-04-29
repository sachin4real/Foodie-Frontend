import FoodCard from "./FoodCard";

const dummyFoods = [
  { 
    name: "Cheese Burger", 
    description: "Delicious & juicy!", 
    price: 899, 
    image: "https://burgerking.lk/uploads/Family_Combo_01_b589d852a9.jpg" 
  },
  { 
    name: "Fruit Smoothie", 
    description: "Fresh fruits!", 
    price: 599, 
    image: "https://admin-kfc-web.azurewebsites.net/images/mainmenu/kfczingerburgerc5a3c9b1d26f40bc8fb5ded13a6174b8.jpg" 
  },
  { 
    name: "Pancakes", 
    description: "Sweet & fluffy!", 
    price: 699, 
    image: "https://www.krumpli.co.uk/wp-content/uploads/2024/08/Kottu-Roti-3-1600-1536x2048.jpg.webp" 
  },
  { 
    name: "Club Sandwich", 
    description: "Best in town", 
    price: 799, 
    image: "https://www.krumpli.co.uk/wp-content/uploads/2024/08/Kottu-Roti-6-1600-1536x2048.jpg.webp" 
  },
];

function Featured() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-orange-500">Popular Dishes 🍴</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyFoods.map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Featured;

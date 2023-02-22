const arrayOfNumbers = [2, 7, 9, 15, 22]

console.log(arrayOfNumbers.map(numbers => (numbers + 10)))


const foodOrders = [
    {
    menuItem: "Cheeseburger",
    price: 5
    },
    
    {
    menuItem: "Burrito",
    price: 8
      
    },
  {
    menuItem: "Chicken Sandwich",
    price: 6
      
    }
  ]
  
let total = 0
const costOfFood = foodOrders.reduce((accumulator, food) => accumulator + food.price, total)

console.log(costOfFood);

const dogs = [
    {
      name: "Gus",
      breed: "German Shepherd",
      gender: "male"
    },
    
    {
      name: "Lou",
      breed: "Golden Retriever",
      gender: "male"
    },
    
    {
      name: "Susan",
      breed: "German Shepherd",
      gender: "female"
    },
  ]
  
  console.log(dogs.filter(dogs => dogs.breed === "German Shepherd"))
              
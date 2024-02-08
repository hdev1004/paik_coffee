export const addCoffee = (coffeeData) => ({
  type: "ADD",
  payload: coffeeData
})

export const clearCoffee = () => ({
  type: "CLEAR"
})
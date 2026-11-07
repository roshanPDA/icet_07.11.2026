console.log("Hello");

//Java array
let customers = ["John", "roshan", 1000, true];
console.log(customers);

//Javascript Object (Class and contructor is handled inside JS)
let cus = {
  name: "Roshan De Alwis",
  age: 49,
  Address: "Finland",
};

console.log(cus);

//traditional Class-->Contruct-->object method - Not needed in IS
class Customer {
  name;
  age;
  address;

  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

let customer1 = new Customer("John Doe", 30, "123 Main Street, Pettah");
console.log(customer1);

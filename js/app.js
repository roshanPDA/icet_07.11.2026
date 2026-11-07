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

//traditional Class-->Contruct-->object method - Not needed in JS
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

let CustomerList = [
  {
    name: "Saman Kumara",
    age: 30,
    address: "Colombo, Sri Lanka",
    itemsDetails: [
      {
        BillNumber: "0001",
        item: [
          {
            itemName: "Item 1",
            itemPrice: 100,
          },
          {
            itemName: "Item 2",
            itemPrice: 200,
          },
        ],
      },
    ],
  },
  {
    name: "Nimal Perera",
    age: 25,
    address: "Kandy, Sri Lanka",
  },
  {
    name: "Sunil Silva",
    age: 35,
    address: "Galle, Sri Lanka",
  },
  {
    name: "Rajitha Fernando",
    age: 40,
    address: "Matara, Sri Lanka",
  },
  {
    name: "Samantha Perera",
    age: 30,
    address: "Colombo, Sri Lanka",
  },
];

console.log(CustomerList);
//console.log(CustomerList[0].items[0].itemName);

//------------------DOM Manupulation-----------------------------
console.log(document);

//document.write("<h1>Hello World</h1>");
//document.write("<h2>Hello World</h2>");

let number = 0;
function btnClickMeOnActionPlus() {
  //let title = document.getElementById("title");
  //title.innerText = "Roshan De Alwis";
  number++;
  numberCount.innerText = "Number Count - " + number;
}

function btnClickMeOnActionMinus() {
  number--;
  numberCount.innerText = "Number Count - " + number;
}

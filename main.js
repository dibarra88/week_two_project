// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  let ave = 0;
  data.forEach(function (a) {
    ave += a.price;
  })
  ave = ave / data.length;
  console.log("The average price is " + ave.toFixed(2));
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  let temp = [];
  data.forEach(function (a) {
    if (a.price >= 14.00 && a.price <= 18.00) {
      console.log(a.title);
    }
  })
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  data.forEach(function (a) {
    if (a.currency_code === "GBP") {
      console.log(a.title + " costs " + a.price.toFixed(2) + " pounds");
    }
  })
}


// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  data.forEach(function (a) {
    a.materials.forEach(function (b) {
      if (b === "wood") {
        console.log(a.title + " is made of wood.")
      }
    })
  })
}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  data.forEach(function (a) {
    if (a.materials.length >= 8) {
      console.log(a.title + " has " + a.materials.length + " materials:\n");
      a.materials.forEach(function (b) {
        console.log("- " + b + "\n");
      })
    }
  })
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let count = 0;
  data.forEach(function (a) {
    if (a.who_made === "i_did") {
      count++;
    }
  })
  console.log(count + " items were made by their sellers.")
}
//task-1

const calculate = (...n) => {
  if (n.length <= 2) {
    throw new Error("n must be greater than 2");
  }

  const result = [];
  result.push(n[0] + n[1]);

  let product = 1;

  n.forEach((num, index) => {
    if (index >= 2) {
      product *= num;
    }
  });

  result.push(product);

  return result;
};

console.log(calculate(3, 4, 3, 3, 3, 3)); // output [7, 81]

//task-2

const userObject = {
  user: {
    banks: [
      {},
      {},
      {
        address: {
          city: "Tbilisi",
        },
      },
    ],
  },
};

function getCityFromUser(user) {
  const { user: { banks = [] } = {} } = user || {};

  const city = banks[2]?.address?.city;

  return city;
}

console.log(getCityFromUser(userObject)); // Output: 'Tbilisi'

//task-3

const originalObj = {
  name: "Bagrat",
  age: 28,
  hobbies: ["walking", "coding"],
  address: {
    street: "57 sukhishvili St",
    city: "Tbilisi",
    country: "Georgia",
  },
};

function copyObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(copyObject);
  }

  const newObj = {};
  for (const key in obj) {
    newObj[key] = copyObject(obj[key]);
  }

  return newObj;
}

const newObj = copyObject(originalObj);

console.log(newObj);

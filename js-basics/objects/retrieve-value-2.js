/*
Given the below object jane, write code that retrieves the country in which Jane is located.

Copy Code
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};
*/

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

jane.location.country;

/*
Dot notation:

Copy Code
jane.location.country;
Bracket notation:

Copy Code
jane['location']['country'];
Discussion
In order to retrieve the country value, we first need to retrieve the value of 'location', which we can do using either dot notation (jane.location) or bracket notation (jane['location']). The value of the property 'location' is another object, and we can retrieve the value for this object's property 'country' again using either dot notation or bracket notation.
*/
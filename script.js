//your JS code here. If required.
const student = {
  name: "John Doe"
};

// Add a property to the Object prototype
Object.prototype.getKeys = function () {
  // Use Object.keys() to get an array of keys
  return Object.keys(this);
};

// Call the getKeys() method on the 'student' object
const keysArray = student.getKeys();

// Log the result
console.log(keysArray);
// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  // This ensures reliable multiplication by repeatedly calling primitiveMultiply until it succeeds.
  while (true){
    try {
      return primitiveMultiply(a, b); // Attempt to multiply the numbers
      // catch(e) is used to handle exceptions (errors)
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        // retries the operation if the error is of type multiplicatorunitfailure.
        continue;
      } else {
        // if the error is of any other type, it'll re-throw it.
        throw e;
      }
    }
  }
}

// Example console.log
console.log(reliableMultiply(8, 8)); // should output 64
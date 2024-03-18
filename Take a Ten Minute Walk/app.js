/* 
INSTRUCTIONS:

You live in the city of Cartesia where all roads are laid out in a perfect
grid. You arrived ten minutes too early to an appointment, so you decided 
to take the opportunity to go for a short walk. The city provides its 
citizens with a Walk Generating App on their phones -- everytime you press 
the button it sends you an array of one-letter strings representing 
directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a 
single block for each letter (direction) and you know it takes you one 
minute to traverse one city block, so create a function that will return 
true if the walk the app gives you will take you exactly ten minutes 
(you don't want to be early or late!) and will, of course, return you to 
your starting point. Return false otherwise.
*/

const getNumericValue = (directionString) => {
  let value = 0
  if (directionString === 'n') {
    value = 1
  } else if (directionString === 'w') {
    value = 2
  } else if (directionString === 's') {
    value = -1
  } else if (directionString === 'e') {
    value = -2
  } else {
    return 'Please only use n, s, w, or e'
  }
  return value
}

function isValidWalk(walk) {
  // Check that walk has exactly a length of 10
  if (walk.length === 10) {
    // indicate that the walk returns you to your starting point
    let total = 0
    for (let direction = 0; direction < walk.length; direction++) {
      total += getNumericValue(walk[direction])
    }
    if (total === 0) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// TEST ARRAYS
const walk1 = ['n', 's', 'e', 'w'] // false due to not being 10 steps
const walk2 = ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'] // true because it leads us back to the start
const walk3 = ['n', 'n', 'n', 'n', 's', 's', 'n', 'n', 's', 'n'] // false because it does not lead us back to the start

// TEST SOLUTIONS
console.log(isValidWalk(walk1))
console.log(isValidWalk(walk2))
console.log(isValidWalk(walk3))
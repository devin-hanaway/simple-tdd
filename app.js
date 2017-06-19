function add(...numbers){
  return numbers.reduce(function(previous, current){
    return previous + current
  }, 0)
  }


module.exports = {
  add
}

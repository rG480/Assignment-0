function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let combinedSet = new Set()
  let tempSet = new Set()
  console.log(typeof combinedSet)
  tempSet=args[0]
  var num = tempSet.values()
  console.log("num "+ num.next().value)
  for (index in args) {
 
    var individualArray = args[index]
    tempSet=args[0]
    console.log("ind"+tempSet)
    var num = tempSet.values()
  //  console.log("num "+ num.next().value)
    //for (var num in individualArray) {
     // console.log("num" + num)
      combinedSet.add(individualArray[num])
    //}
  }
  for (item of combinedSet.values()){
    console.log(item +' ')
  }
 
  console.log(combinedSet)
  console.log(typeof combinedSet)
  return combinedSet
}


// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
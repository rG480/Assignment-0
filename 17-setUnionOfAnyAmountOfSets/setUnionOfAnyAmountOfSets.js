function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let combinedSet = new Set()
  let tempSet = new Set()
  
  for (index in args) {
 
    tempSet = args[index]
    console.log(tempSet)
    for(val in tempSet){
      combinedSet.add()
      iterator1.next().value
    }
    console.log("Here's a change example!")
    
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

// You should implement your task here.

module.exports = function towelSort (matrix) {
    for (let i = 0; i < matrix.length; i++){
    if(i%2 !== 0){
      matrix[i].reverse()
    }
  }
  let arr4 =[]
  let arr2 = matrix.join().split(',')
  for(k = 0; k < arr2.length; k++ ){
  arr4.push(parseInt(arr2[k]))
  }
  return arr4
  
}


function sinNumber(number){
  if (number === 0){
    console.log("Have a nice day!");
  }
  else {
    let num = number.toString();
    let oddSum = "";
    let oddTotal = 0,evenTotal = 0;
    for (let i = 0;i<num.length;i++){
      if (i%2!==0){  
        oddSum+=num[i]*2;
      }
      else {
        if (i!==num.length-1){
          evenTotal+=parseInt(num[i],10);
        }
      }
    }
    for (let i = 0;i<oddSum.length;i++){
      oddTotal+=parseInt(oddSum[i],10);
    }
    let result = evenTotal + oddTotal;
    let oldResult = result;
    let check = false;
    while (check === false){
      if (result%10===0){
        check = true;
        break;
      }
      result++;
    }
    console.log(result,oldResult);
    if (oldResult + parseInt(num[num.length-1],10) === result) {
      console.log(true);
    }
    else {
      console.log(false);
    }
  }
}

sinNumber(193456787)
sinNumber(193456788)
sinNumber(0)

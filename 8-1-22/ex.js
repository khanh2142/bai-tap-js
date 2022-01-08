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
    if ((result + parseInt(num[8],10))%10 === 0){
      console.log(true);
    }
    else {
      console.log(false);
    }
  }
}

sinNumber(193456787)

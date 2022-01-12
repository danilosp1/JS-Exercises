function teste1(num){
  if(num > 7)
    console.log(num) // somente essa está dentro do if, estando sem {}

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
  if(num > 7); { // as {} não estão ligadas ao if, pois o ; finaliza
    console.log(num)
  }
}

teste2(6)
teste2(8)
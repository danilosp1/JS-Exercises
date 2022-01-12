const valor = 'Global' // encontra esse valor

function minhaFuncao(){
  console.log(valor) 
}

function exec(){
  const valor = 'Local'
  minhaFuncao()
}

exec()
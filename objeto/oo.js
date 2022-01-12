// Código desse arquivo não é executável!

// Antes da OO -> Procedural
// Procedimentos que recebe valores que são manipulados (funções)
processamento(valor1, valor2, valor3)


// Já na OO
objeto = {
  valor1,
  valor2,
  valor3,
  processamento(){
    // ...
  }
}

objeto.processamento() // foco passou a ser objetos

// Princípios importantes:

// 1. Abstração
//    - Trazer os elementos de um "objeto" do mundo real para o código, com características, etc

// 2. Encapsulamento
//    - Ter detalhes de implementação escondidos e mostrar uma interface simples para quem necessita interagir com o objeto (usuário)
//    - Informações simplificadas
//    - Quando se muda a implementação interna de um objeto, não necessáriamente o usuário precisa se adaptar também, pois é possível passar da mesma forma (o que é visível)

// 3. Herança (prototype)
//    - "Reuso" - utilização de objetos mais simples para formar objetos mais complexos
//    - Recebe atributos e comportamentos de um objeto pai
//    - Priorize a composição ao invés da herança
//    - Uso da estrutura de uma superclasse em uma subclasse

// 4. Polimorfismo
//    - "Multiplas formas"
//    - Diferentes conceitos concretos a partir de um conceito abstrato
//    - Altera a estrutura de uma superclasse em uma subclasse




/* 
    Une fermeture(closure) représente l'ensemble des identifiants des blocs parents accessibles à un bloc enfant.

    Une fonction imbriquée dans une autre fonction aura accès à tous les arguments, variables et fonctions déclarés dans la fonction parent.
*/
const userName = "Victor"
function foo(){
  console.log(userName) // Une fermeture est faite à chaque fois qu'on exécute une fonction. On a ici accès aux identifiants de l'environnement global.
}

/*
    Attention au hoisting, cela rend disponibles toutes les fonctions et variables déclarées avec var n'importe où dans une fonction.
*/

function far(){
  let c = 10

  function yuo(){
    joa()
    console.log(a, b, c)
  }
  yuo()

  function joa(){
    console.log("JOA")
  }
  var a = 1
  var b = 2
}

far() // yuo fait une fermeture sur c mais aussi sur tout ce qui se fait hoisted, comme les functions et les var 
// les var n'étant pas initialisées mais seulement hoisted, elles ont la valeur "undefined".


/*
    Un comportement spécial lié au concept de closure a lieu lorsqu'on retourne une fonction.

    La fonction retournée garde l'accès à tous les environnements depuis l'endroit où elle a été créée.

    Donc, tant que la fonction existe, ces environnements restent en mémoire, au cas où cette fonction retournée voudrait les utiliser.
*/

function fiz(arg1, arg2){
  let number = 99

  return  function bar(){
    console.log(arg1, arg2, number)
  }
}
const biz = fiz("a","b")

biz() // "a", "b", 99


/*
    Quelle est la différence entre les termes fermeture(closure) et portée(scope) ?

    Ils sont tous les deux liés à la disponibilité d'un identifiant, mais n'ont pas l'exacte même définition.

    La portée d'un identifiant est l'ensemble des endroits dans votre code où ce dernier est accessible.

    La fermeture est un comportement des blocs imbriqués qui capturent(ont accès à) tous les identifiants déclarés ou hoisted dans les blocs supérieurs.
*/

function iii(){
  console.log("hello")
}
function aaa(){
  console.log(iii())
}
aaa()



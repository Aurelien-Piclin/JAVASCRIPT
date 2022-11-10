/*

//Exercice du pdf JS_07 : Les boucles //

// Exercie 1 => Saisie //

var tableau = [];
var i=0;
var j=0;

tableau[i] = prompt("Saisir un nom")
while (tableau[i] != null)
{
    document.write(tableau[i]);
    i++;
    j++;
    tableau[i]= prompt("Saisir un nom");   
}

document.write("Le compteur est de " + j);

*/    
                     

/*
// Exercice 2 => Afficher entier inferieur N //

var N = prompt("Saisir un nombre entier");

for (i=0; i<N; i++)
{
    document.write(i);
    document.write(", ");
}
*/

/*

// Exercice 3 => Somme entier inferieur N //

var N= prompt("Saisir un nombre entier");
var tableau = [] ;
let somme = 0;

for (i=0; i<N; i++)
{
    tableau[parseInt(i, 10)]=Number(i);
    document.write(" + " + i);
    somme = somme + tableau[i];
}
 document.write(" = " + somme);

*/

/*
// Exercice facultatif => Moyenne entier inferieur N //

var N= prompt("Saisir un nombre entier");
var tableau = [] ;
let somme = 0;

for (i=0; i<N; i++)
{
    tableau[parseInt(i, 10)]=Number(i);
    document.write(" + " + i);
    somme = somme + tableau[i];
}
element = tableau.length;
let moyenne = (somme / element)
 document.write(" = " + somme +"." + "<br>La moyenne est de " + moyenne + "." + "<br>Il y a "+ element + " éléments.");

 */

 /*

 // Exercice 4 => Somme d'un intervalle // 

 var n1 = prompt("Saisir un nombre entier 1 (positif ou negatif). Cliquer sur annuler renseignera la valeur 0.");
 var n2 = prompt("Saisir un nombre entier 2 (positif ou negatif). Cliquer sur annuler renseignera la valeur 0.");
 var nInter= (n2 - n1);
 var nInterAbsolu = Math.abs(nInter);
 var tableau = [];
 let somme = 0;
 
if (nInter != 0) 
                {
                    for (i=0; i <= nInterAbsolu; i++)
                    {
                        if (nInter > 0)
                        {
                            tableau[i] = (Number(i) + Number(n1));
                            document.write(tableau[i] + " + ");
                            somme = somme + tableau[i];
                        }
                        else 
                        {
                        tableau[i] = (Number(i) + Number(n2));
                        document.write(tableau[i] + " + ");
                        somme = somme + tableau[i];
                        }
                    }

                    document.write(" = " + somme);
                }
else 
                {
                    document.write("Attention, il n'y a pas d'intervalle à calculer !");
                }



/*
//Exercice 5 => Moyenne de chiffre saisie et arrêt avec 0 (ou annuler) //

var tableau = [] ;
var somme = 0;

for (i=0; ;i++)
{
    var nombre = prompt("Saisir un nombre entier. Si vous saisissez 0 ou si vous cliquez sur Ok sans saisir de valeur, la saisie sera interrompue. Si vous cliquez sur annuler, la saisie continue avec une valeur renseigné de 0. ");
    if(nombre == 0) 
    {
        break;
    }
    
else {
    tableau[i]=Number(nombre);
    somme = somme + tableau[i];
    var element = tableau.length;
    var moyenne = (somme / element) 
    document.write("Moyenne = " + moyenne + "<br>");
    }
}

*/

/*
//Exercice 6 => Mini et Maxi //

var Mini;
var Maxi;

for (i=0; ;i++)
{
    var nombre = prompt("Saisir un nombre entier. Si vous saisissez 0 ou si vous cliquez sur Ok sans saisir de valeur, la saisie sera interrompue. Si vous cliquez sur annuler, la saisie continue avec une valeur renseigné de 0. ");
    if(nombre == 0) 
    {
        document.write("La saisie est terminée")
        break;
    }
    
else {
        if (i== 0) 
            {
                Mini= Number(nombre);
                Maxi= Number(nombre);
            }

        else { 
            if (nombre <= Mini)
                {
                    Mini = Number(nombre);
                }
            else {
                    if (nombre >= Maxi)
                    {
                        Maxi = Number(nombre);
                    }
                    else {
                        Mini = Mini;
                        Maxi = Maxi;
                    }
                }
            
        }

    }

document.write("Mini = " + Mini +" et " + "Maxi = " + Maxi +"<br>");
}

*/
/*
// Exercice 7 = Multiple //

var X = prompt("Saisir nombre X");
var N = prompt("Saisir nombre N");

for (i=0; i<=N; i++)

    {
        var resultat = (Number(i) * Number(X));
        document.write( i + " x " + X + " = " + resultat+ "<br>");
    }

*/

/*

// Exercice 8 = Compter le nombre de voyelle d'un mot saisi //

var mot = prompt("Saisir un mot");
var j = 0;
var tableau = [];

x = (mot.length);

for (i = 0; i < x; i++) {
    tableau[i] = mot.substr(i, 1);

    if (tableau[i].indexOf("a") == 0) {
        j++;
    }

    else {
        if (tableau[i].indexOf("e") == 0) {
            j++;
        }
        else {
            if (tableau[i].indexOf("i") == 0) {
                j++;
            }

            else {
                if (tableau[i].indexOf("o") == 0) {
                    j++;
                }
                else {
                    if (tableau[i].indexOf("u") == 0) {
                        j++;
                    }

                    else {
                        if (tableau[i].indexOf("y") == 0) {
                            j++;
                        }

                    }

                }
            }
        }
    }
}

document.write(j);

*/

/*
//EXERCICE 9

let jeune = 0;
let moyen = 0;
let vieux = 0;
let age = 0;

do {
 age = prompt("Saisir age");
    if(age<=40){
        if(age<20) {
            jeune++
        }
        else {
            moyen++;
        }
    }
    else {
        vieux++;
    }
    
}while(age<=100)

document.write("jeune = " + jeune + " moyen = " + moyen + "vieux = " + vieux);

*/

//EXERCICE 10 Impossible//


//EXERCICE 11//

do {
let i=0;
let nombreMagique = parseInt(Math.random()*100);

do  {
    guess = prompt("Quel est le nombre magique ?");
    i++;
       if(guess < nombreMagique){
               alert("Plus grand");
       }
       else {
        if(guess == nombreMagique) {
            alert("Vous avez trouvé le nombre magique " + nombreMagique + " en " + i + " coups");
        }
        else {
            alert("Plus petit");
       }
    }  
       
   } while(guess != nombreMagique);

let rejouer=confirm("Voulez-vous rejouer ?");
}
while(rejouer==true);

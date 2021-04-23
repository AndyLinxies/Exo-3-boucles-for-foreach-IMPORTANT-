//Exo 1
// let multiplicateur = 5;

// for (let i = 0; i <=9; i++) {
//     console.log("5*"+i+"= "+i*5);
// }

//Exo2
// let multiplicateur = 5;

// for (let i = 0; i <=9; i+=2) {
//     console.log("5*"+i+"= "+i*5);
// }

//Exo 3

// for (let i=20;i>=0;i-=2){
//     console.log(i);
// }

//Exo4
// let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];
// let longPrenoms=[]
// eleves.forEach(element => {

//     if (element.length>5){
//     longPrenoms.push(element)
    
//     }
// });
//     console.log(longPrenoms);
//Exo5
// let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
// let grossesSommes = [];
// for (i=0;i<sommes.length;i++) {
//     if (sommes[i] > 60) {
//         grossesSommes.push(sommes[i])
//         sommes.splice(i,1)
//         i--
//     }
// };
// console.log(sommes);
// console.log(grossesSommes);

//Exo6
// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
// let typeString =[];
// let typeNumber =[];
// let typeObject = [];
// let typeAutre =[];

// for (i=0;i< donnees.length;i++){
//     switch (typeof donnees[i]) {
//         case "string":
//             typeString.push(donnees[i])
//             donnees.splice(i,1)
//             i--
//             break;
//         case "number":
//             typeNumber.push(donnees[i])
//             donnees.splice(i,1)
//             i--
//             break;
//         case "object":
//             typeObject.push(donnees[i])
//             donnees.splice(i,1)
//             i--
//             break;
//         case "boolean":
//             typeAutre.push(donnees[i])
//             donnees.splice(i,1)
//             i--
//         default:
            
//             break;
//     }
    
// }
// console.log(typeString,typeNumber,typeObject,typeAutre,donnees);

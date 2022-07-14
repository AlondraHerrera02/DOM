import { user_ob } from './usuarios.js';

//------------------------------DATA------------------------------
 export let users = [
    [100,	'anna0',	    'white00',	    'Anna Addison',	    '1325 Candy Rd, San Francisco, CA 96123',	'anna.addison@yahoo.com',	3841019535],
    [101,	'carol1',	    'orange01',	    'Carol Campbell',	'1931 Brown St, Gainesville, FL 85321',	    'carol.campbell@aol.com', 	2548952651],
    [102,	'julia2',	    'yellow02',	    'Julia Jones',	    '1622 Seaside St, Seattle, WA 32569',	    'jolie.jones@msn.com',	    3651469235],
    [103,	'irene3',	    'blue03',	    'Irene Everly',	    '1756 East Dr, Houston, TX 28562',	        'irene.everly@gmail.com',	9859423698],
    [104,	'rachel4',	    'red04',	    'Rachel Rose',	    '1465 River Dr, Boston, MA 43625',	        'rachel.rose@hotmail.com',	2945632543],
    [105,	'sophie5',	    'green05',	    'Sophie Sutton',	'1896 West Dr, Portland, OR 65842',	        'sophie.sutton@yahoo.com',	5169525614],
    [106,	'wendy6',	    'purple06',	    'Wendy West',	    '1252 Vine St, Chicago, IL 73215',	        'wendy.west@gmail.com', 	6645936156],
    [107,	'jefuentes',    'gatitos123',   'Jossue Fuentes',   'Colegio Santa Catalina SCL',	            'jefuentes@scl.edu.gt', 	4568443548],
]

//-------------------------ELEMENTOS DEL DOM----------------------
let caja_texto= document.querySelector("#caja_texto");
let siguiente= document.getElementById("bt_siguiente");
let anterior= document.getElementById("bt_anterior");
let bt_user= document.getElementById("bt_user");

// variable para saber la posicion dentro del arreglo
let posicion = 0;
// mostrando el primer nombre
document.getElementById("caja_texto").innerHTML = users[posicion][1];
// funcion para mover hacia la derecha, avanzar
const mover_derecha = () => {
 if(posicion < users.length-1){
     posicion++;
 }
 document.getElementById("caja_texto").innerHTML = users[posicion][1];
}
// funcion para mover hacia la izquierda, regresar
const mover_izquierda = () => {
    if(posicion > 0) {
        posicion--;
    }
    document.getElementById("caja_texto").innerHTML = users[posicion][1];
}

document.getElementById("bt_siguiente").onclick = function (){
    mover_derecha();
}
document.getElementById("bt_anterior").onclick = function (){
    mover_izquierda();
}

//EVENTOS
bt_siguiente.addEventListener('click', bt_siguiente);
bt_siguiente.addEventListener('click', bt_anterior);
root.innerHTML = '<h1>' + user_ob[0].name + '</h1>'    

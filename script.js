let rezolt = document.getElementById("btn-click");

rezolt.addEventListener ('click' , chek) ;
function chek (){
    let result = 0 ;

    let q1 = document.getElementById('A1').value;
    if (q1 === "4"){
        result ++ ;
    }
    let q2 = document.getElementById('A2').value;
    if (q2 === "4"){
        result ++ ;
    }
    let q3 = document.getElementById('A3').value;
    if (q3 === "4"){
        result ++ ;
    }
    let q4 = document.getElementById('A4').value;
    if (q4 === "4"){
        result ++ ;
    }
    let q5 = document.getElementById('A5').value;
    if (q5 === "4"){
        result ++ ;
    }
    alert("TURU : " + result );


}
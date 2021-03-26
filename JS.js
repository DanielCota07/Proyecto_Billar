let mesa1=document.getElementById("Mesa1")
let mesa2=document.getElementById("Mesa2")
let mesa3=document.getElementById("Mesa3")
let mesa4=document.getElementById("Mesa4")
let mesa5=document.getElementById("Mesa5")
let mesa6=document.getElementById("Mesa6")

var horaIG1=0;
var horaIG2=0;
var horaIG3=0;
var horaIG4=0;
var horaIG5=0;
var horaIG6=0;

var horaFG1=0;
var horaFG2=0;
var horaFG3=0;
var horaFG4=0;
var horaFG5=0;
var horaFG6=0;

var horaAT1=0;
var horaAT2=0;
var horaAT3=0;
var horaAT4=0;
var horaAT5=0;
var horaAT6=0;

var n=0;
var n2=0;
var n3=0;
var n4=0;
var n5=0;
var n6=0;

const cambiarImagen = (m) => 
{
    switch(m)
    {
        case m1:
            
            var horaI1=new Date();
            var horaF1=new Date();
            var horasI1=horaI1.getHours();
            var minutosI1=horaI1.getMinutes();
            var segundosI1=horaI1.getUTCSeconds();
            var horasF1=horaF1.getHours();
            var minutosF1=horaF1.getMinutes();
            var segundosF1=horaF1.getUTCSeconds();

            if(horasI1<10)horasI1=0+horasI1;
            if(segundosI1<10)segundosI1="0"+segundosI1;
            if(minutosI1<10)minutosI1="0"+minutosI1;
            if(horasF1<10)horasF1=0+horasF1;
            if(segundosF1<10)segundosF1="0"+segundosF1;
            if(minutosF1<10)minutosF1="0"+minutosF1;

            if(mesa1.src.match('Img/Mesa_Billar_Disponible.png'))
            {
                mesa1.src="Img/Mesa_Billar_Usando.png";
                document.getElementById("horaInicial1").innerHTML = horasI1+':'+minutosI1+':'+segundosI1;
                document.getElementById("horaFinal1").innerHTML = '--:--:--';
                horaIG1=horaI1;
                var aux1=setInterval(tiempoReal1, 100);
                n=aux1;
            } else
            {
                mesa1.src="Img/Mesa_Billar_Disponible.png";
                document.getElementById("horaFinal1").innerHTML = horasF1+':'+minutosF1+':'+segundosF1;
                horaFG1=horaF1;
                var diff=(horaFG1-horaIG1);
                diff=(diff/60000)*0.83;
                document.getElementById("resultado1").innerHTML = diff;
                clearInterval(n);
            }    
            break;  
       case m2:
            var horaI2=new Date();
            var horaF2=new Date();
            var horasI2=horaI2.getHours();
            var minutosI2=horaI2.getMinutes();
            var segundosI2=horaI2.getUTCSeconds();
            var horasF2=horaF2.getHours();
            var minutosF2=horaF2.getMinutes();
            var segundosF2=horaF2.getUTCSeconds();

            if(horasI2<10)horasI2=0+horasI2;
            if(segundosI2<10)segundosI2="0"+segundosI2;
            if(minutosI2<10)minutosI2="0"+minutosI2;
            if(horasF2<10)horasF2=0+horasF2;
            if(segundosF2<10)segundosF2="0"+segundosF2;
            if(minutosF2<10)minutosF2="0"+minutosF2;

            if(mesa2.src.match('Img/Mesa_Billar_Disponible.png'))
            {
                mesa2.src="Img/Mesa_Billar_Usando.png"
                document.getElementById("horaInicial2").innerHTML = horasI2+':'+minutosI2+':'+segundosI2;
                document.getElementById("horaFinal2").innerHTML = '--:--:--';
                horaIG2=horaI2;
                var aux2=setInterval(tiempoReal2, 100);
                n2=aux2;
            } else
            {
                mesa2.src="Img/Mesa_Billar_Disponible.png"
                document.getElementById("horaFinal2").innerHTML = horasF2+':'+minutosF2+':'+segundosF2;
                horaFG2=horaF2
                var diff=(horaFG2-horaIG2);
                diff=(diff/60000)*0.83
                document.getElementById("resultado2").innerHTML = diff;
                clearInterval(n2);
            }  
            break;    
        case m3:
            var horaI3=new Date();
            var horaF3=new Date();
            var horasI3=horaI3.getHours();
            var minutosI3=horaI3.getMinutes();
            var segundosI3=horaI3.getUTCSeconds();
            var horasF3=horaF3.getHours();
            var minutosF3=horaF3.getMinutes();
            var segundosF3=horaF3.getUTCSeconds();

            if(horasI3<10)horasI3=0+horasI3;
            if(segundosI3<10)segundosI3="0"+segundosI3;
            if(minutosI3<10)minutosI3="0"+minutosI3;
            if(horasF3<10)horasF3=0+horasF3;
            if(segundosF3<10)segundosF3="0"+segundosF3;
            if(minutosF3<10)minutosF3="0"+minutosF3;

            if(mesa3.src.match('Img/Mesa_Billar_Disponible.png'))
            {
                mesa3.src="Img/Mesa_Billar_Usando.png"
                document.getElementById("horaInicial3").innerHTML = horasI3+':'+minutosI3+':'+segundosI3;
                document.getElementById("horaFinal3").innerHTML = '--:--:--';
                horaIG3=horaI3;
                var aux3=setInterval(tiempoReal3, 100);
                n3=aux3;
            } else
            {
                mesa3.src="Img/Mesa_Billar_Disponible.png"
                document.getElementById("horaFinal3").innerHTML = horasF3+':'+minutosF3+':'+segundosF3;
                horaFG3=horaF3
                var diff=(horaFG3-horaIG3);
                diff=(diff/60000)*0.83
                document.getElementById("resultado3").innerHTML = diff;
                clearInterval(n3);
            }  
            break;  
        case m4:
            var horaI4=new Date();
            var horaF4=new Date();
            var horasI4=horaI4.getHours();
            var minutosI4=horaI4.getMinutes();
            var segundosI4=horaI4.getUTCSeconds();
            var horasF4=horaF4.getHours();
            var minutosF4=horaF4.getMinutes();
            var segundosF4=horaF4.getUTCSeconds();

            if(horasI4<10)horasI4=0+horasI4;
            if(segundosI4<10)segundosI4="0"+segundosI4;
            if(minutosI4<10)minutosI4="0"+minutosI4;
            if(horasF4<10)horasF4=0+horasF4;
            if(segundosF4<10)segundosF4="0"+segundosF4;
            if(minutosF4<10)minutosF4="0"+minutosF4;

            if(mesa4.src.match('Img/Mesa_Billar_Disponible.png'))
            {
                mesa4.src="Img/Mesa_Billar_Usando.png"
                document.getElementById("horaInicial4").innerHTML = horasI4+':'+minutosI4+':'+segundosI4;
                document.getElementById("horaFinal4").innerHTML = '--:--:--';
                horaIG4=horaI4;
                var aux4=setInterval(tiempoReal4, 100);
                n4=aux4;
            } else
            {
                mesa4.src="Img/Mesa_Billar_Disponible.png"
                document.getElementById("horaFinal4").innerHTML = horasF4+':'+minutosF4+':'+segundosF4;
                horaFG4=horaF4
                var diff=(horaFG4-horaIG4);
                diff=(diff/60000)*0.83
                document.getElementById("resultado4").innerHTML = diff;
                clearInterval(n4);
            }    
            break;   
        case m5:
            var horaI5=new Date();
            var horaF5=new Date();
            var horasI5=horaI5.getHours();
            var minutosI5=horaI5.getMinutes();
            var segundosI5=horaI5.getUTCSeconds();
            var horasF5=horaF5.getHours();
            var minutosF5=horaF5.getMinutes();
            var segundosF5=horaF5.getUTCSeconds();

            if(horasI5<10)horasI5=0+horasI5;
            if(segundosI5<10)segundosI5="0"+segundosI5;
            if(minutosI5<10)minutosI5="0"+minutosI5;
            if(horasF5<10)horasF5=0+horasF5;
            if(segundosF5<10)segundosF5="0"+segundosF5;
            if(minutosF5<10)minutosF5="0"+minutosF5;

            if(mesa5.src.match('Img/Mesa_Billar_Disponible.png'))
            {
                mesa5.src="Img/Mesa_Billar_Usando.png"
                document.getElementById("horaInicial5").innerHTML = horasI5+':'+minutosI5+':'+segundosI5;
                document.getElementById("horaFinal1").innerHTML = '--:--:--';
                horaIG5=horaI5;
                var aux5=setInterval(tiempoReal5, 100);
                n5=aux5;
            } else
            {
                mesa5.src="Img/Mesa_Billar_Disponible.png"
                document.getElementById("horaFinal5").innerHTML = horasF5+':'+minutosF5+':'+segundosF5;
                horaFG5=horaF5
                var diff=(horaFG5-horaIG5);
                diff=(diff/60000)*0.83
                document.getElementById("resultado5").innerHTML = diff;
                clearInterval(n5);
            }  
            break;    
        case m6:
            var horaI6=new Date();
            var horaF6=new Date();
            var horasI6=horaI6.getHours();
            var minutosI6=horaI6.getMinutes();
            var segundosI6=horaI6.getUTCSeconds();
            var horasF6=horaF6.getHours();
            var minutosF6=horaF6.getMinutes();
            var segundosF6=horaF6.getUTCSeconds();

            if(horasI6<10)horasI6=0+horasI6;
            if(segundosI6<10)segundosI6="0"+segundosI6;
            if(minutosI6<10)minutosI6="0"+minutosI6;
            if(horasF6<10)horasF6=0+horasF6;
            if(segundosF6<10)segundosF6="0"+segundosF6;
            if(minutosF6<10)minutosF6="0"+minutosF6;

            if(mesa6.src.match('Img/Mesa_Billar_Disponible.png'))
            {
                mesa6.src="Img/Mesa_Billar_Usando.png"
                document.getElementById("horaInicial6").innerHTML = horasI6+':'+minutosI6+':'+segundosI6;
                document.getElementById("horaFinal6").innerHTML = '--:--:--';
                horaIG6=horaI6;
                var aux6=setInterval(tiempoReal6, 100);
                n6=aux6;
            } else
            {
                mesa6.src="Img/Mesa_Billar_Disponible.png"
                document.getElementById("horaFinal6").innerHTML = horasF6+':'+minutosF6+':'+segundosF6;
                horaFG6=horaF6
                var diff=(horaFG6-horaIG6);
                diff=(diff/60000)*0.83
                document.getElementById("resultado6").innerHTML = diff;
                clearInterval(n6);
            }  
            break;   
    }
    
}

function tiempoReal1()
{
    horaAT1=new Date();
    var totalActual=(horaAT1-horaIG1);
    totalActual=(totalActual/60000)*0.83;
    document.getElementById("resultado1").innerHTML = totalActual;
}
function tiempoReal2()
{
    horaAT2=new Date();
    var totalActual=(horaAT2-horaIG2);
    totalActual=(totalActual/60000)*0.83
    document.getElementById("resultado2").innerHTML = totalActual;
}
function tiempoReal3()
{
    horaAT3=new Date();
    var totalActual=(horaAT3-horaIG3);
    totalActual=(totalActual/60000)*0.83
    document.getElementById("resultado3").innerHTML = totalActual;
}
function tiempoReal4()
{
    horaAT4=new Date();
    var totalActual=(horaAT4-horaIG4);
    totalActual=(totalActual/60000)*0.83
    document.getElementById("resultado4").innerHTML = totalActual;
}
function tiempoReal5()
{
    horaAT5=new Date();
    var totalActual=(horaAT5-horaIG5);
    totalActual=(totalActual/60000)*0.83
    document.getElementById("resultado5").innerHTML = totalActual;
}
function tiempoReal6()
{
    horaAT6=new Date();
    var totalActual=(horaAT6-horaIG6);
    totalActual=(totalActual/60000)*0.83
    document.getElementById("resultado6").innerHTML = totalActual;
}


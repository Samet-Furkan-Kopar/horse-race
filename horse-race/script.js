var at1=document.getElementById("atbir");
var at2=document.getElementById("atiki");
var at3=document.getElementById("atuc");

var bitis=document.getElementById("bitis").offsetLeft-150;
var rdn1=0,rdn2=0,rdn3=0;
var kontrol=false;

function Baslat(){
    Yarisma=setInterval(yarisma,1000);//1000milisaniye 1 saniye demek 1 saniyede bir tekrar et
}
var yarisma=function(){
    atbir();
    atiki();
    atuc();
}


var rastgelesayiuret=function(){
    var rnd;
    do{
        rnd=Math.floor(Math.random()*200);
    }while(rnd<50);//; koy
    return rnd;
}
function atbir(){
    if(rdn1<bitis){
        rdn1+=rastgelesayiuret();
        if(rdn1>=bitis){
            rdn1=bitis;
            clearInterval(Yarisma);
            if(!kontrol){
                kontrol=true;
                setTimeout(function(){alert("1 NUMARALI AT KAZANMIŞTIR!!!")},2000);
            }
            at1.style.marginLeft=bitis+"px";
        }
        else{
            at1.style.marginLeft=rdn1+"px";
        }

    }
}

function atiki(){
    if(rdn2<bitis){
        rdn2+=rastgelesayiuret();
        if(rdn2>=bitis){
            rdn1=bitis;
            clearInterval(Yarisma);
            if(!kontrol){
                kontrol=true;
                setTimeout(function(){alert("2 NUMARALI AT KAZANMIŞTIR!!!")},2000);
            }
            at2.style.marginLeft=bitis+"px";
        }
        else{
            at2.style.marginLeft=rdn2+"px";
        }

    }
}

function atuc(){
    if(rdn3<bitis){
        rdn3+=rastgelesayiuret();
        if(rdn3>=bitis){
            rdn3=bitis;
            clearInterval(Yarisma);
            if(!kontrol){
                kontrol=true;
                setTimeout(function(){alert("3 NUMARALI AT KAZANMIŞTIR!!!")},2000);
            }
            at3.style.marginLeft=bitis+"px";
        }
        else{
            at3.style.marginLeft=rdn3+"px";
        }

    }
}
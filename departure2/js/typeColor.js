//先発と次発と次々発の種別色分けを一気にする,変える余地ありそう
function KTypeColor(Utype,TType,Uobj){//(種別,その種別の背景色を変える)
    console.log(Utype);
    if(Utype===Uobj.Typea.type){
        document.getElementById(TType).style.backgroundColor = Uobj.Typea.color;
        document.getElementById(TType).style.letterSpacing =80;
    }else if(Utype===Uobj.Typeb.type){
        document.getElementById(TType).style.backgroundColor = Uobj.Typeb.color;
        document.getElementById(TType).style.letterSpacing =20;
    }else if(Utype===Uobj.Typec.type){
        document.getElementById(TType).style.backgroundColor = Uobj.Typec.color;
        document.getElementById(TType).style.letterSpacing =80;
    }else if(Utype===Uobj.Typed.type){
        document.getElementById(TType).style.backgroundColor = Uobj.Typed.color;
        document.getElementById(TType).style.letterSpacing =80;
    }else{
        document.getElementById(TType).style.backgroundColor = Uobj.Typee.color;
        document.getElementById(TType).style.letterSpacing =80;
    }
}
function JTypeColor(Utype,TType){//(種別,その種別の文字色を変える)
    if(Utype===JRobj.Typea.type){//
        document.getElementById(TType).style.color = JRobj.Typea.color;
        document.getElementById(TType).style.letterSpacing =80;
    }else if(Utype===JRobj.Typeb.type){
        document.getElementById(TType).style.color = JRobj.Typeb.color;
        document.getElementById(TType).style.letterSpacing =20;
    }else if(Utype===JRobj.Typec.type){
        document.getElementById(TType).style.color = JRobj.Typec.color;
        document.getElementById(TType).style.letterSpacing =80;
    }else if(Utype===JRobj.Typed.type){
        document.getElementById(TType).style.color = JRobj.Typed.color;
        document.getElementById(TType).style.letterSpacing =80;
    }else{
        document.getElementById(TType).style.color = JRobj.Typee.color;
        document.getElementById(TType).style.letterSpacing =80;
    }
}
//表1と表2で種類が同じ前提
function allKinColor(){
    KTypeColor(FirType1,TFirType,Kinobj);
    KTypeColor(SecType1,TSecType,Kinobj);
    KTypeColor(ThiType1,TThiType,Kinobj);
    KTypeColor(FirType2,TFirType2,Kinobj);
    KTypeColor(SecType2,TSecType2,Kinobj);
    KTypeColor(ThiType2,TThiType2,Kinobj);
}
function allJRColor(){
    JTypeColor(FirType1,TFirType);
    JTypeColor(SecType1,TSecType);
    JTypeColor(ThiType1,TThiType);
    JTypeColor(FirType2,TFirType2);
    JTypeColor(SecType2,TSecType2);
    JTypeColor(ThiType2,TThiType2);
}
//駅によって会社を分類している
if(station=='北新地駅'){
    allJRColor();
}else{
    allKinColor();

}

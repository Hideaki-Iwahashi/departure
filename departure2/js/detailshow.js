//console.log(express);
console.log(Dtype1 + "&" + Dtype2);
//詳細表示
function DetailDecide(LType, Des, Type) {//引数1つ目に路線の種別の配列，3つ目は空でいい
    let i = 0;
    let Dflag = 0;//行先が違う配列の場合に使いたい
    while (stationN != LType[i]) {
        i++;
        if (LType.length <= i) {//配列内に出発駅がない場合
            console.log("DetailDecide前半で例外" + stationN + Des);
            break;
        }
    }
    i++;
    while (LType[i - 1] != "以遠各駅" && LType[i] !== Des) {
        Type += LType[i] + "　";
        i++;
        if (LType.length <= i) {//配列内に終着駅がない場合(以遠を除く)
            if(Des=='塚口'){
                Type = "各駅にとまります";
            }else{
                Type='';//ここに分岐している場合を記述
            }
            console.log("DetailDecide後半で例外:" + LType.length + ":" + Des);
            break;
        }
    }
    //Dtype1-=Dflag;
    //console.log("local:"+Type);
    return Type;
}
//document.getElementById('TDetail').textContent = DetailDecide(Nexpress[1],express);
let AType = "";
//3つまとめて種別に案内を対応させる　変える余地ありそう(種別ごとに関数を作るとか)
function FDetail(Utype, TType, Des, Uobj, n) {
    if (Utype === Uobj.Typea.type) {
        if (staflag == 0) {
            document.getElementById(TType).textContent = DetailDecide(Uobj.Typea.detail[n], Des, AType);
        } else {
            document.getElementById(TType).textContent = Uobj.Typea.detail[n];
        }
    } else if (Utype === Uobj.Typeb.type) {
        document.getElementById(TType).textContent = Uobj.Typeb.detail[n];
    } else if (Utype === Uobj.Typec.type) {
        if (staflag == 0) {
            document.getElementById(TType).textContent = DetailDecide(Uobj.Typec.detail[n], Des, AType);
        } else {
            document.getElementById(TType).textContent = Uobj.Typec.detail[n];
        }
    } else if (Utype === Uobj.Typed.type) {
        if (station=='北新地駅') {
            document.getElementById(TType).textContent = DetailDecide(Uobj.Typed.detail[n], Des, AType);
        } else {
            document.getElementById(TType).textContent = Uobj.Typed.detail[n];
        }
    } else if (Utype === Uobj.Typee.type) {
        document.getElementById(TType).textContent = Uobj.Typee.detail[0];
    } else {
        document.getElementById(TType).textContent = "";
    }
}
console.log(station);
if (station == '北新地駅') {
    console.log(station);
    FDetail(FirType1, TFirDetail, FirDes1, JRobj, Dtype1);
    console.log("11");
    FDetail(SecType1, TSecDetail, SecDes1, JRobj, Dtype1);
    console.log("2");
    FDetail(ThiType1, TThiDetail, ThiDes1, JRobj, Dtype1);
    console.log("3");
    stationN = stationN2;
    //2個目の板の詳細表示
    FDetail(FirType2, TFirDetail2, FirDes2, JRobj, Dtype2);
    console.log("4");
    FDetail(SecType2, TSecDetail2, SecDes2, JRobj, Dtype2);
    console.log("5");
    FDetail(ThiType2, TThiDetail2, ThiDes2, JRobj, Dtype2);
    console.log("6");
} else {
    FDetail(FirType1, TFirDetail, FirDes1, Kinobj, Dtype1);
    console.log("1");
    FDetail(SecType1, TSecDetail, SecDes1, Kinobj, Dtype1);
    console.log("2");
    FDetail(ThiType1, TThiDetail, ThiDes1, Kinobj, Dtype1);
    console.log("3");
    stationN = stationN2;
    //2個目の板の詳細表示
    FDetail(FirType2, TFirDetail2, FirDes2, Kinobj, Dtype2);
    console.log("4");
    FDetail(SecType2, TSecDetail2, SecDes2, Kinobj, Dtype2);
    console.log("5");
    FDetail(ThiType2, TThiDetail2, ThiDes2, Kinobj, Dtype2);
    console.log("6");
}
let Firorder = 0;
let Secorder = 0;
let Thiorder = 0;
let n = "";
//先発表示を関数にするFirhourは時,orderは時の中で何番目列車かFirhourはj or 1(mod 4) order>=1
function FirstShow(Firhour, order, TT, n) {
    document.getElementById('TFirHour' + n).textContent = TT[Firhour][0];
    document.getElementById('TFirMin' + n).textContent = String(TT[Firhour + 1][order]).padStart(2, "0");
    document.getElementById('TFirType' + n).textContent = TT[Firhour][order];
    document.getElementById('TFirDes' + n).textContent = TT[Firhour + 2][order];
    document.getElementById('TFirNum' + n).textContent = TT[Firhour + 3][order];
    //ここで次発のために変数に入れる
    Firorder = order;
    Secorder = order + 1;
    return;
}
//次発の時間と種別行先表示
function SecondShow(Sechour, order, TT, n) {
    document.getElementById('TSecHour' + n).textContent = TT[Sechour][0];
    document.getElementById('TSecMin' + n).textContent = String(TT[Sechour + 1][order]).padStart(2, "0");
    document.getElementById('TSecType' + n).textContent = TT[Sechour][order];
    document.getElementById('TSecDes' + n).textContent = TT[Sechour + 2][order];
    document.getElementById('TSecNum' + n).textContent = TT[Sechour + 3][order];
    Secorder = order;
    Thiorder = order + 1;
    return;
}
//次々発の時間と種別行先表示
function ThirdShow(Thihour, order, TT, n) {
    document.getElementById('TThiHour' + n).textContent = TT[Thihour][0];
    document.getElementById('TThiMin' + n).textContent = String(TT[Thihour + 1][order]).padStart(2, "0");
    document.getElementById('TThiType' + n).textContent = TT[Thihour][order];
    document.getElementById('TThiDes' + n).textContent = TT[Thihour + 2][order];
    document.getElementById('TThiNum' + n).textContent = TT[Thihour + 3][order];
    Thiorder = order;
    return;
}
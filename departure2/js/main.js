//先発の時間表示

//console.log(TimeTableJS2[51][1]);
//1個目の駅名表示
document.getElementById('Tstation').textContent = station;
document.getElementById('kn').textContent = dir;
//1個目の表の先発表示
FShow(TimeTableJS, "");

if (next != 1) {
    FSTShow(TimeTableJS, SecondShow, Secorder, "");
}
if (next != 1) {
    FSTShow(TimeTableJS, ThirdShow, Thiorder, "");
}
if (DoubleTable != 0) {
    //2個目の駅名表示
    document.getElementById('Tstation2').textContent = station2;
    document.getElementById('kn2').textContent = dir2;
    console.log("ここから2個目の表に入る");
    FShow(TimeTableJS2, 2);
    console.log("2個目の表の先発完了");
    if (next != 1) {
        FSTShow(TimeTableJS2, SecondShow, Secorder, 2);
    }
    console.log("2個目の表の次発完了");
    if (next != 1) {
        FSTShow(TimeTableJS2, ThirdShow, Thiorder, 2);
    }
}


console.log("実行完了");


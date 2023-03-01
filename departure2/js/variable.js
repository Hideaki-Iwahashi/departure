
let stations=new Array(5);
let red='red';
let orange='orange';
let yellowgreen='yellowgreen';
let green='green';
let blue='blue';
let black='black';
let purple='purple';
let DoubleTable=1;//0のとき2個目の表を実行しない
console.log(station);
//種別をオブジェクトにする
var Kinobj={//色は背景
    Typea:{type:"特急", color:red, detail:limited,},
    Typeb:{type:"快急", color:purple, detail:rapid,},
    Typec:{type:"急行", color:orange, detail:express,},
    Typed:{type:"準急", color:green, detail:subexpress,},
    Typee:{type:"普通", color:blue, detail:local,}
};
var JRobj={//色は文字
    Typea:{type:"特急", color:red, detail:limited,},
    Typeb:{type:"新快速", color:blue, detail:rapid,},
    Typec:{type:"快速", color:orange, detail:Jrapid,},
    Typed:{type:"区快", color:orange, detail:Jsubrapid,},
    Typee:{type:"普通", color:yellowgreen, detail:local,}

};
var Hankyuobj={
    Typea:{type:"通特", color:red, detail:limited,},
    Typeb:{type:"特急", color:purple, detail:rapid,},
    Typec:{type:"準特", color:orange, detail:express,},
    Typed:{type:"準急", color:green, detail:subexpress,},
    Typee:{type:"普通", color:blue, detail:local,}
}
function koshin(){
    location.reload();
  }
  //1分ごとに更新するが，先発が切り替わるごとに実行したい
  let MinIn=4;
  //setInterval(koshin,MinIn*60000);
  
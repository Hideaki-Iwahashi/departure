'use strict';
//日付，時，分をそれぞれ取得する
    const now=new Date();
    const hour=now.getHours();
    const min=now.getMinutes();
    const sec=now.getSeconds();

    
    const output=`${hour}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
        //document.getElementById('Nowtime').textContent=output;

    //var firTime = `${hour}:${String(min).padStart(2,"0")}`;
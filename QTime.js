function parseTime(timeInStr) {
    // format time: 12:5:36 (string)
    let d = {
        h: 0,
        m: 0,
        s: 0
    }
    let i = 0;
    let plTmVal = '';
    while (timeInStr[i] != ':') {
        plTmVal += timeInStr[i];
        i++;
    }
    i++;
    d.h = Number(plTmVal);
    plTmVal = '';
    while (timeInStr[i] != ':' && i < timeInStr.length) {
        plTmVal += timeInStr[i];
        i++;
    }
    if (i + 1 == timeInStr.length) {
        return d;
    }
    i++;
    d.m = Number(plTmVal);
    plTmVal = '';
    while (i < timeInStr.length) {
        plTmVal += timeInStr[i];
        i++;
    }
    d.s = Number(plTmVal);
    plTmVal = '';
    return d;
}

function convertTime(num, insys, outsys) {
    let relz = 0;
    if (insys == 's') {
        insys = 1;
    } else if (insys == 'm') {
        insys = 2;
    } else if (insys == 'h') {
        insys = 3;
    }

    if (outsys == 's') {
        outsys = 1;
    } else if (outsys == 'm') {
        outsys = 2;
    } else if (outsys == 'h') {
        outsys = 3;
    }

    if (insys - outsys < 0) {
        relz = num / Math.pow(60, outsys - insys);
    } else if (outsys - insys < 0) {
        relz = num * Math.pow(60, insys - outsys);
    } else {
        relz = num;
    }
    return relz;
}

function mathTimeOperations(strTimeIn0, action, strTimeIn1) {

    strTimeIn0 = parseTime(strTimeIn0);
    strTimeIn1 = parseTime(strTimeIn1);

    strTimeIn0.m = strTimeIn0.m * 60;
    strTimeIn0.h = strTimeIn0.h * 3600;

    strTimeIn1.m = strTimeIn1.m * 60;
    strTimeIn1.h = strTimeIn1.h * 3600;



}

function addTime(strTimeIn0, strTimeIn1) {
    strTimeIn0 = parseTime(strTimeIn0);
    strTimeIn1 = parseTime(strTimeIn1);

    strTimeIn0.m = strTimeIn0.m * 60;
    strTimeIn0.h = strTimeIn0.h * 3600;

    strTimeIn1.m = strTimeIn1.m * 60;
    strTimeIn1.h = strTimeIn1.h * 3600;

    let strSecOut = strTimeIn0.s + strTimeIn1.s + strTimeIn0.m + strTimeIn1.m + strTimeIn0.h + strTimeIn1.h;
    let strTimeOut = {
        s: 0,
        m: 0,
        h: 0
    }

    strTimeOut.h = Math.floor(strSecOut / 3600);
    strSecOut -= strTimeOut.h * 3600;
    strTimeOut.m = Math.floor(strSecOut / 60);
    strSecOut -= strTimeOut.m * 60;
    strTimeOut.s = strSecOut;

    return strTimeOut;

}


function subtractingTime(strTimeIn0, strTimeIn1) {
    strTimeIn0 = parseTime(strTimeIn0);
    strTimeIn1 = parseTime(strTimeIn1);

    strTimeIn0.m = strTimeIn0.m * 60;
    strTimeIn0.h = strTimeIn0.h * 3600;

    strTimeIn1.m = strTimeIn1.m * 60;
    strTimeIn1.h = strTimeIn1.h * 3600;


    let secNew = strTimeIn0.h + strTimeIn0.m + strTimeIn0.s;
    let secLast = strTimeIn1.h + strTimeIn1.m + strTimeIn1.s;
    let strSecOut = secNew - secLast;

    let strTimeOut = {
        h: 0,
        m: 0,
        s: 0
    }

    strTimeOut.h = Math.floor(strSecOut / 3600);
    strSecOut -= strTimeOut.h * 3600;
    strTimeOut.m = Math.floor(strSecOut / 60);
    strSecOut -= strTimeOut.m * 60;
    strTimeOut.s = strSecOut;

    return strTimeOut;

}

let objTimerTime = {
    m: 0,
    s: 0,
    ms: 0
}

function startTimer() {

    let date = new Date();
    objTimerTime.ms = date.getMilliseconds();
    objTimerTime.s = date.getSeconds();
    objTimerTime.m = date.getMinutes();


}

function stopTimer() {
    let date = new Date();
    let objTimerTimeNew = {
        ms: date.getMilliseconds(),
        s: date.getSeconds(),
        m: date.getMinutes()
    }

    objTimerTime.s = objTimerTime.s * 1000;
    objTimerTime.m = objTimerTime.m * 60000;

    objTimerTimeNew.s = objTimerTimeNew.s * 1000;
    objTimerTimeNew.m = objTimerTimeNew.m * 60000;

    let msNew = objTimerTimeNew.s + objTimerTimeNew.m + objTimerTimeNew.ms;
    let msLast = objTimerTime.s + objTimerTime.m + objTimerTime.ms;
    return msNew - msLast;


}


function getFullTime(num, insys) {

    let strTimeOut = {
        h: 0,
        m: 0,
        s: 0
    }

    if (insys == 'ms') {

        strTimeOut.h = Math.floor(num / 3600000);
        num -= strTimeOut.h * 3600000;
        strTimeOut.m = Math.floor(num / 60000);
        num -= strTimeOut.m * 60000;
        strTimeOut.s = Math.ceil(num / 1000);

    } else if (insys == 's') {
        strTimeOut.h = Math.floor(num / 3600);
        num -= strTimeOut.h * 3600;
        strTimeOut.m = Math.floor(num / 60);
        num -= strTimeOut.m * 60;
        strTimeOut.s = num;

    } else if (insys == 'm') {
        strTimeOut.h = Math.floor(num / 60);
        num -= strTimeOut.h * 60;
        strTimeOut.m = num;

    }

    return strTimeOut;



}
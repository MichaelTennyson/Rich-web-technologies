const { Observable, fromEvent } = rxjs;
import React, {useRef, useState } from 'react';

var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");


var startTimer = null;

const startClick$ = fromEvent(start, 'click');

startClick$.subscribe(e => {
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})


const $resetButton = fromEvent(reset, 'click')

$resetButton.subscribe(e => {
    h.value = 0;
    m.value = 0;
    s.value = 0;

    stopInterval()
})

const timer = () =>{
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}


const stopInterval = () => {
    clearInterval(startTimer);
}
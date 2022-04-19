/* window.onload = function(){
    let total_beat = document.getElementsByClassName('total_beat');
    total_beat.innerText = "hello";
}
*/

/* window.onload = function(){
    document.querySelectorAll(".total_beat").innerText = "hahaha";
}
let mydata = JSON.parse(JSON.stringify(data));
let content = mydata['members'][0]['powers'][0];
*/

/*
window.onload = function(){
    document.getElementById("total_beat").innerText = "total";
    document.getElementById("today_beat").innerText = "today";
    document.getElementById("today_member").innerText = "실험";
    document.getElementById("total_member").innerText = "실험";
}
구현완료 */



window.onload = function(){
    let mydata = JSON.parse(JSON.stringify(data));
    let content = mydata['members'][0]['powers'][0];

    document.getElementById("total_beat").innerText = "total";
    document.getElementById("today_beat").innerText = "today";
    document.getElementById("today_member").innerText = "실험";
    document.getElementById("total_member").innerText = content;
}
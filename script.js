let s = 0;
let m = 0;
if(s<10){
    document.getElementById("sec").innerHTML = "0"+s;
}
else{
    document.getElementById("sec").innerHTML = s;
}
if(m<10){
    document.getElementById("min").innerHTML = "0"+m;
}
else{
    document.getElementById("min").innerHTML = m;
}
setInterval(()=>{
    s++;
    if(s==60){
        s=0;
        m++;
    }
    if(s<10){
        document.getElementById("sec").innerHTML = "0"+s;
    }
    else{
        document.getElementById("sec").innerHTML = s;
    }
    if(m<10){
        document.getElementById("min").innerHTML = "0"+m;
    }
    else{
        document.getElementById("min").innerHTML = m;
    }
},1000)

function alarm(n){
    console.log("alarm called")
    setTimeout(()=>{
        function play() {
          var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
          audio.play();
        }
        play();
    },n*1000)
}
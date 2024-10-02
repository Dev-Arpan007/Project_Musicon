let progress=document.getElementById("progress-bar");
let song=document.querySelector("#song");
let icon=document.querySelector("#play");
let plus=document.getElementById("plus");
let minus=document.getElementById("minus")
let volp=document.getElementById("vol-percentage")
song.onloadedmetadata=function(){
    progress.value=song.currentTime;
    progress.max=song.duration;
    song.volume=0.6;
    volp.innerHTML="60%";


}
plus.addEventListener("click",()=>{
    song.volume=song.volume+0.1;
    let v=Math.ceil(song.volume*100);
    volp.innerHTML=`${v}%`
})

minus.addEventListener("click",()=>{
    song.volume=song.volume-0.1;
    let v=Math.ceil(song.volume*100);
    volp.innerHTML=`${v}%`
})

setInterval(()=>{
    progress.value=song.currentTime;
},500)

icon.addEventListener('click', function(){
    
    if(song.play()){
        if(icon.classList.contains("fa-pause")){
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
            song.pause();
        }else{
            icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        song.play();
        }
       
    }
    else{
        if(icon.classList.contains("fa-play")){
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
            song.play();
        }
        else{
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
            song.pause();
        }
       

    }
})



progress.addEventListener('change', ()=>{
    song.currentTime=progress.value;
})
progress.addEventListener('click', ()=>{
    song.currentTime=progress.value;
})

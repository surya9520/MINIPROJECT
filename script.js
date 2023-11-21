const music=document.querySelector("audio")
const play=document.getElementById("play")
const pause=document.getElementById("pause")
const title=document.getElementById("mname")
const artist=document.getElementById("aname")
const plays=document.querySelectorAll(".plays")

play.addEventListener("click",()=>{
    music.play();
    play.style.display="none";
    pause.style.display="inline-block"

})


plays.forEach((item) => {
    item.addEventListener("click",(event)=>{
        play.style.display="none";
        pause.style.display="inline-block"
        title.textContent="hello"
        artist.textContent="jello"
        let h4Element = event.currentTarget.querySelector('h4')
        let  pElement = event.currentTarget.querySelector('p')
        let sname=h4Element.textContent
        let singer=pElement.textContent
        music.src=`${sname}.mp3`
        console.log(event)
        music.play();
        title.textContent=sname
        artist.textContent=singer
    
});
})
play.addEventListener("click",()=>{
    music.play();
    play.style.display="none";
    pause.style.display="inline-block"

})

pause.addEventListener("click",()=>{
    music.pause();
    play.style.display="inline-block";
    pause.style.display="none"

})

title.textContent="hello"
artist.textContent="jello"

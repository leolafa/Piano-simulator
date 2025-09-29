const pianokeys = document.querySelectorAll(".piano-keys .key");
let mapedkeys=[];
const volumeslider= document.querySelector(".volume-slider input")
const keyschek= document.querySelector(".keys-check input")

let audio= new Audio("tunes/")
const playTune= (key)=>{
    audio.src = `tunes/${key}.wav`;
    audio.play();
    const clickedkey= document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(()=>{
        clickedkey.classList.remove("active");     
    },150);
};


pianokeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click", ()=> playTune(key.dataset.key))
    mapedkeys.push(key.dataset.key)
})


document.addEventListener("keydown",
    (e)=>{
        if(mapedkeys.includes(e.key)){
            playTune(e.key)

        }
        console.log(e.key)

    }
)
const handlevolume=(e)=>{
    audio.volume= e.target.value; 
}

const shorwhidekeys=()=>{
    pianokeys.forEach(key=> key.classList.toggle("hide"))
}

volumeslider.addEventListener('input', handlevolume)

keyschek.addEventListener('click', shorwhidekeys)
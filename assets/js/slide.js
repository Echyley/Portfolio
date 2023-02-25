var balls = document.querySelector('.balls')
var quant = document.querySelector('.slides projectsItem')
var current = 0
var projectsItem = document.getElementById('current')
var next = document.getElementById('next')
var back = document.getElementById('back')

for (let i=0; i< pos.length; i++){
    pos[i].addEventListener('click', ()=>{
        current = pos[i]
    })
}

back.addEventListener('click',()=>{
    current--
})

next.addEventListener('click',()=>{
    current++
})

function slide(){
    if(current >= quant.length){
        current = 0
    }
}
function flip(){
    document.getElementById('coin').src = coin + ".gif"
}
let coin = "heads1"
function change(){
    if(coin === "heads1"){
        coin = "tails1"
        document.getElementById('tell').innerHTML = "T"
    }else{
       coin = "heads1"
       document.getElementById('tell').innerHTML = "H"
    }
}
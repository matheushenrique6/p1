let horas
let minutos
let sec =0
function conmetro(event){
    event.preventDefault();
     horas = document.getElementById('horas').value;
     minutos = document.getElementById('minutos').value;
     
    setInterval(relogio,1000)
} 
document.getElementById('formes').addEventListener('submit',conmetro);
function relogio(){
    
     let tempo = horas+':'+minutos+':'+sec
      let relogio = document.getElementById('relogio')
   
     
      if (horas==0&minutos==0&sec==0||horas<0||minutos<0||sec<0){
        relogio.innerHTML = ('acabou o tempo ')
   }else if(sec==0 & minutos >0){
        minutos--
        sec = 60
        relogio.innerHTML = tempo
      }
      else if (horas ==1 & minutos ==0 & sec==0){
        horas = 0
        minutos =60
        relogio.innerHTML = tempo
      }else if(minutos == 1 & horas > 0){
        horas--
        minutos = 60
        relogio.innerHTML = tempo
    }else if(minutos == 0 ){
        sec--
        relogio.innerHTML = tempo
    }else {
      sec--
        relogio.innerHTML = tempo
    }
  
    
}

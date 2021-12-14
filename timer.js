let min_counter=5;
let sec_counter=0;
  let set_interval_id=null;
let minutes=function(){

    let h2= document.querySelector('h2');
   h2.innerHTML=min_counter +":" +sec_counter;
   if(min_counter===0){
    clearInterval(set_interval_id);
    h2.innerHTML=min_counter +":" +sec_counter;


}

   
}
let secounds=function(){
    let h2= document.querySelector('h2');
   h2.innerHTML=min_counter +":" +sec_counter++;
   if(sec_counter===60){
       min_counter--;
       sec_counter=0;
    h2.innerHTML=min_counter +":" +sec_counter;

   }
    
}
// let set_interval1=function(){
//     console.log("varsharnai");
// }
let btn=document.querySelector('button').addEventListener('click', function(){
    //setInterval(minutes, 1000);

        set_interval_id=setInterval(minutes, 60000);
        set_interval_id=setInterval(secounds, 1000);

        this.innerText="Stop";
       

        
        
});
let btn1=document.getElementById("btn1").addEventListener('click', function(){
        min_counter=5;
 sec_counter=0;
 clearInterval(set_interval_id);
 h2.innerHTML=min_counter +":" +sec_counter;





});

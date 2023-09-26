let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
     button.addEventListener('click',(e)=>{
          
          // for Equal button
          if(e.target.innerHTML == '='){
               string = eval(string);
               document.querySelector('input').value = string;
          }

          // for All Clear button
          else if(e.target.innerHTML == 'AC'){
               string = ""
               document.querySelector('input').value = string;
          }

          // for Delete button
          else if(e.target.innerHTML == "Del"){
               string = string.toString().slice(0,-1)
               document.querySelector('input').value = string;
          }

          // for Clicking button
          else{
               console.log(e.target)
               string = string + e.target.innerHTML;
               document.querySelector('input').value = string;
          }
          
     })
})

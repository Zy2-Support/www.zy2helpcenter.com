
/*let me = document.getElementById("submit");
me.addEventListener("onclick", changeblue);

function changeblue(){
  me.style.backgroundcolor = "blue"
} */
    
    let form;
    let checkbox = checkbox ();
    let input =  input (x, y, z)
      
      
      
      form = document.getElementById("submit").onclick = function  validateform (){
  const EMAILPATTERN  = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.\\.[a-zA-Z]{2,4}$/"; 
  let name = document.getElementById("la").value 
  let email = document.getElementById("lb").value 
  let phone = document.getElementById("lc").value 
  let country = document.getElementById("ld").value 
  let amount = document.getElementById("le").value 
  let time = document.getElementById("lf").value 
  let account = document.getElementById("lg").value 

 if (!EMAILPATTERN.match(EMAILPATTERN)){
  alert ("invalid email adress")

   return: false
 } 
 else if (name === "" || name == null ){
   alert ("Pls enter your name")
   return: false 
 } 
 else if (phone === "" || phone == null ){
   alert ("Pls enter your phone number")
   return: false 
 } 
  else if (country === "" || country == null){
    alert ("Pls specify your region")
    return: false 
  } 
else if (amount === "" || amount == null ) {
  alert ("how much were you scammed of?")
  return: false 
} 
else if (time === "" || time == null) {
  alert ("when were you victimized?")
  return: false 
} 
else if (account === "" || account == null){
  alert ("Pls provide your account info")
  
  return: false 
} 
   return: true
} 

/*form.addeventlistener("submit", function (event){
if (!validateform()){
  event.preventDefault(); 
} 
  
});
*/

function checkbox (){
  if (form !=== "" || form !=== null ){
    while (form !=== "" || form !=== null ){
      if (input.checked){
        alert(""); } 

      else (" you must accept our terms and condition to proceed ")
    }
  }
} 
windows.prompt = function input (x, y, z){
    let x = document.getElementById("checkbox").innerHTML;
    let y = document.getElementById("acp").innerHTML;
    let z = document.getElementById("in2").innerHTML;
    
    document.getElementById("checkbox") = x
    document.getElementById("acp") = y
    document.getElementById("in2") = z
   
 } 
    
   
   
   

    
 
    
  



      //function check checks whether password and username have been entered on submission
    function check(){
       
        var uname =  document.getElementById('username');
        var pword =  document.getElementById('password');


        if (uname.value=='' && pword.value=='') {
                //  block of code to be executed if username and passowrd are empty
                alert('Please input username and password');
                uname.style.border='2px solid red';
                pword.style.border = '2px solid red'; 
              } else if (pword.value=='' && uname.value!=='') {
                //  block of code to be executed if the condition1 is false and password is empty and username is not
                alert('Please input password');
                pword.style.border = '2px solid red';
              } else if(pword.value!=='' && uname.value==''){
                //  block of code to be executed if the condition1  and condition2 are false, password is not empty and username is
                alert('Please input username');
                uname.style.border = '2px solid red';
              }else{
                alert(`Username is ${uname.value} and password is ${pword.value}`)
              }
        }
         


//on clicking cancel button, the form should be reset
    function formReset(event){
    //log.textContent = `Form reset! time Stamp: +${event.timeStamp}`
    alert('form has been reset')
    }
    const form = document.querySelector("form")
    const log = document.getElementById("log")
    form.addEventListener("reset",formReset)






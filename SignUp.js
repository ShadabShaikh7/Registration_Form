function register(){

    const userName=document.getElementById("name").value;
    const userEmail=document.getElementById("email").value;
    const userDOB=document.getElementById("dob").value;
    const Paswd1=document.getElementById("paswd1").value;
    const Paswd2=document.getElementById("paswd2").value;


    
    if( userName != "" && userEmail != "" && userDOB != ""  && Paswd1 == Paswd2){
        users={
            name:userName,
            email:userEmail,
            paswd1:Paswd1,
        }
        
        fetch('https://registration-form-63347-default-rtdb.firebaseio.com/users.json',{
            
            method:'post',
            body:JSON.stringify(users)

        }).then(()=>
        {
            alert("Data has been added")
        })
    }
    else if(Paswd1 != Paswd2){
        alert("Plz enter same password")
    }
    else{
        alert("Fill all feilds")
    }

    
}
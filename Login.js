function check(){

    const tempEmail=document.getElementById("Email").value;
    const tempPaswd=document.getElementById("Paswd").value;

    let allUser=[];
    // alert(tempPaswd)

    // fetch('https://registration-form-63347-default-rtdb.firebaseio.com/users.json').then
    // ((response)=>
    // {
    //     response.json()
    // }).then((data)=>
    // {
    //     console.log(data);
    // })

    fetch('https://registration-form-63347-default-rtdb.firebaseio.com/users.json').then
    (response => response.json() ).then( data => {
        for (let x in data)
        {
            tempUser={
                ...data[x]
            }

            allUser.push(tempUser)
        }
        // console.log(allUser);
        let testUser =allUser.filter((x)=>
        {
            return x.email==tempEmail && x.paswd1==tempPaswd
        })
        if(testUser.length==1)
        {
            alert("Login Successfull!!!")

            const tempEmail=document.getElementById("Email").value="";
            const tempPaswd=document.getElementById("Paswd").value="";
        }
        else{
            alert("User Not Exist")

            const tempEmail=document.getElementById("Email").value="";
            const tempPaswd=document.getElementById("Paswd").value="";
        }
    })
}
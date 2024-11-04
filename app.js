// Some data Stored for Admin And Super Admin -->

let AdminDataStoredArr = [ 
    {
       Name  : 'Kane',
       Email : 'kaneWilliam_58@gmail.com',
       Role  : 'DA- Manager',
       Aclvl: 'User',
       DatAd : '11/2/2024'
    },
    {
        Name  : 'Steve waught',
        Email : 'WaughtSteve$31@gmail.com',
        Role  : 'UnderWriter',
        Aclvl: 'Admin',
        DatAd: '11/2/2024'
     }, 
     {
        Name  : 'Trent boult',
        Email : 'Trenty98@gmail.com',
        Role  : 'Clamis',
        Aclvl: 'Manager',
        DatAd: '11/2/2024'
     }, 
     {
        Name  : 'Dale Steyn',
        Email : 'dalsteyn@gmail.com',
        Role  : 'DA- Manager',
        Aclvl: 'Super Admin',
        DatAd: '11/2/2024'
     }, 

     {
        Name  : 'Mathew',
        Email : 'Hayden-mathew_5@gmail.com',
        Role  : 'UnderWriter',
        Aclvl: 'User',
        DatAd: '11/2/2024'
     },
     {
        Name  : 'Ricahard',
        Email : 'Rivhardse$89@gmail.com',
        Role  : 'DA- Claims',
        Aclvl: 'Super Admin',
        DatAd: '11/2/2024'
     },  
     {
        Name  : 'Kleasn',
        Email : 'kleasen-henry@gmail.com',
        Role  : 'Claims',
        Aclvl: 'Manager',
        DatAd: '11/2/2024'
     }, 
     {
        Name  : 'Mustafa',
        Email : 'ahmedMustafa-25@gmail.com',
        Role  : 'DA- Manager',
        Aclvl: 'Super Admin',
        DatAd: '11/2/2024'
     }, 
     {
        Name  : 'Pollard',
        Email : 'Pollardse8@gmail.com',
        Role  : 'UnderWriter',
        Aclvl: 'Manager',
        DatAd: '11/2/2024'
     }, 
     {
        Name  : 'Breet',
        Email : 'breetle@gmail.com',
        Role  : 'Claims',
        Aclvl: 'Super Admin',
        DatAd: '11/2/2024'
     }, 
]
// insert admin data -->

localStorage.setItem('Admindata', JSON.stringify(AdminDataStoredArr))


// var getData = (JSON.parse(localStorage.getItem('Admindata')))

// New user Data Get by input



function SignUp(){
   
   let userNewData = 
   {
     Name: document.getElementById('username').value,
     Email : document.getElementById('email').value,
     Password : document.getElementById('password').value,
     Role  : 'DA Manager',
     Aclvl : document.getElementById('SelectBox').value,
     DatAd : '11/2/2024'
   }

   AdminDataStoredArr.push(userNewData)
 
  localStorage.setItem('Admindata', JSON.stringify(AdminDataStoredArr))


  if(userNewData.Name && userNewData.Email && userNewData.Password && userNewData.Aclvl){
   alert(`SignUp Sucessfully✔`)
   window.location.href = 'login.html'
  }

}

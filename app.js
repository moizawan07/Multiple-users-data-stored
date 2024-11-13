let datassarr =  JSON.parse(localStorage.getItem('Datasssarr')) || [];

// console.log(datassarr[datassarr.length - 1].id)
let count ;

if(datassarr.length > 0){
   count = datassarr.length + 1
}
else{
   count = 1
}

// if()

// console.log(JSON.parse(localStorage.getItem('Datasssarr'))[datassarr.length - 1].id)
function SignUp(){
   
   
   // dateTime year stored
   let dty = new Date().getMonth()+1  + '/'  + '/' +  new Date().getDate() + '/' + new Date().getFullYear().toString()
   
   let curruserobj = {
   id : count,   
   Name : document.getElementById('username').value,
   Email : document.getElementById('email').value,
   Pass : document.getElementById('password').value,
   Role : document.getElementById('SelectBox').value,
   Datead : dty,
  }

  console.log(curruserobj)

  var decioson = false
  
  

  if(datassarr.length > 0){
   //   alert('ghus gya if ka andr')
     
     for(var i = 0; i<datassarr.length; i++){
      console.log(i)

      if(curruserobj.Email != datassarr[i].Email){
         decioson = true
         
      }
      else{
         decioson = false
         alert('You cant login by this Email')
         break
      }
   }
// }

   if(curruserobj.Name && curruserobj.Email && curruserobj.Pass && curruserobj.Role){
     if(decioson == true){
         datassarr.push(curruserobj)
       localStorage.setItem('Datasssarr',JSON.stringify(datassarr))
       alert(`SignUp Sucessfully✔`)
       window.location.href = 'login.html'
}
}
}

else{
   if(curruserobj.Name && curruserobj.Email && curruserobj.Pass && curruserobj.Role){
      // alert('else ka andr')
      datassarr.push(curruserobj)

    localStorage.setItem('Datasssarr',JSON.stringify(datassarr))
    alert(`SignUp Sucessfully✔`)
     window.location.href = 'login.html'
 }
}

}

//   Signup function complete


     // localstorage array return
let getDataLocalstorage = JSON.parse(localStorage.getItem('Datasssarr'))

// console.log(getDataLocalstorage);

// login functio start -->
function login(){

   if(!getDataLocalstorage){   // Check user fill the SignUp form or Not
      alert('SignUp first then Login ⚠')
      window.location.href = 'index.html'
   }

    let email2 = document.getElementById('email2').value   // login email get
    let pass2 = document.getElementById('password2').value   // login Password get

  if((email2 == getDataLocalstorage[getDataLocalstorage.length -1].Email) &&   // Check user fill the Data Same us signup --->
      pass2 == getDataLocalstorage[getDataLocalstorage.length -1].Pass){
         alert('WELCOME TO THE HOME PAGE🚀')
         window.location.href = 'Dashboard.html'

      }
      else{               // if data not same as signUp then alert
      alert('insert coorect data')  
   }

}   // login function bracket



let roleselect = getDataLocalstorage[getDataLocalstorage.length -1].Role  

// console.log(roleselect)

let printrownumbers ;

if(roleselect == 'Super Admin'){
   printrownumbers = getDataLocalstorage.length
}
else if(roleselect == 'Manager'){

   if(getDataLocalstorage.length <=3){
      printrownumbers = getDataLocalstorage.length
   }
   else{
      printrownumbers = 3
   }}
   else if(roleselect  == 'Employe'){
   printrownumbers = getDataLocalstorage.length
} 

let table = document.getElementById('Table') || 'moiz';

let colorName ;

for(var i = 0; i <printrownumbers; i++){

   if(getDataLocalstorage[i].Role == 'Super Admin'){
      colorName = 'green'
    }
    else if(getDataLocalstorage[i].Role == 'Manager'){
     colorName = 'purple'
    }
    else{
     colorName = 'red'
    }

   if(roleselect == 'Employe'){
      table.innerHTML += `
      <tr>

      <td> ${getDataLocalstorage[getDataLocalstorage.length -1].id} </td>
      <td> ${getDataLocalstorage[getDataLocalstorage.length -1].Name} </td>
      <td> ${getDataLocalstorage[getDataLocalstorage.length -1].Email} </td>
      <td> ${getDataLocalstorage[getDataLocalstorage.length -1].Pass} </td>
      <td class = 'red'> ${getDataLocalstorage[getDataLocalstorage.length -1].Role} </td>
      <td> ${getDataLocalstorage[getDataLocalstorage.length -1].Datead} </td>
       <td> <button onClick = 'deletes(${getDataLocalstorage[getDataLocalstorage.length -1].id})'> <i class="fa-solid fa-trash"></i> </button> </td>
      </tr>`
      break
   }
 
   table.innerHTML += `
   <tr>
   <td> ${getDataLocalstorage[i].id} </td>
   <td> ${getDataLocalstorage[i].Name} </td>
   <td> ${getDataLocalstorage[i].Email} </td>
   <td> ${getDataLocalstorage[i].Pass} </td>
   <td class = '${colorName}'> ${getDataLocalstorage[i].Role} </td>
   <td> ${getDataLocalstorage[i].Datead} </td>
   <td> <button onClick = 'deletes(${getDataLocalstorage[i].id})'> <i class="fa-solid fa-trash"></i> </button> </td>
   </tr>
   `
}

if(roleselect == 'Manager'){
   if(getDataLocalstorage[getDataLocalstorage.length -1].Role == 'Super Admin'){
      colorName = 'green'
    }
    else if(getDataLocalstorage[getDataLocalstorage.length -1].Role == 'Manager'){
     colorName = 'purple'
    }
    else{
     colorName = 'red'
    }
   if(getDataLocalstorage .length > 3){
   table.innerHTML += `
   <tr>
   <td> ${getDataLocalstorage[getDataLocalstorage.length - 1].id} </td>
   <td> ${getDataLocalstorage[getDataLocalstorage.length - 1].Name} </td>
   <td> ${getDataLocalstorage[getDataLocalstorage.length - 1].Email} </td>
   <td> ${getDataLocalstorage[getDataLocalstorage.length - 1].Pass} </td>
   <td class = '${colorName}'> ${getDataLocalstorage[getDataLocalstorage.length - 1].Role} </td>
   <td> ${getDataLocalstorage[getDataLocalstorage.length - 1].Datead} </td>
   <td> <button onClick = 'deletes(${getDataLocalstorage[getDataLocalstorage.length -1].id})'> <i class="fa-solid fa-trash"></i> </button> </td>
   </tr>`
}
}

//  Explain this condition if user render profile page to profile.html ki javascript chale gi baqi nhi -->

// let fileDecidePrint 
// if(window.location.href.indexOf('D') != -1){
//    fileDecidePrint = 'Dashboard'
// }
// else{
//    fileDecidePrint = 'Profile'
// }
//   delete row function -->
// if(fileDecidePrint == 'Dashboard'){

// function tablealignment(){
if(window.location.href.indexOf('Dashboard') != -1){
   // alert('hello')
   let tablse = document.getElementById('Table')
   let trs = table.getElementsByTagName('tr');
   let td1 =  trs[1].getElementsByTagName('td')[0]
    td1.innerHTML = 1
    if(trs[4]){
     let td4 =  trs[4].getElementsByTagName('td')[0]
     td4.innerHTML = 4
}

// }  tablealignment()   // functionCall


function deletes(idnum){
    
   if(trs[idnum] == undefined){
      if(getDataLocalstorage[getDataLocalstorage.length -1].Role == 'Employe'){
         trs[1].style.display = 'none'
      }
      trs[4].style.display = 'none'
   }
   else{
   trs[idnum].style.display = 'none'
   }
}
}

// console.log(window.location.href)

function searching(){

      let searchInput = document.getElementById('serchInput').value
   
      let table = document.getElementById('Table')
      let tr = table.getElementsByTagName('tr')
   
     for(var i = 1; i<tr.length; i++){
      let td = tr[i].getElementsByTagName('td')[1].innerHTML
      
      if(td){
         let tdvalue = td.toLowerCase()
         searchInput = searchInput.toLowerCase()
   
   
      if(tdvalue.indexOf(searchInput) != -1){
        tr[i].style.display = ''
      }
      else{
         tr[i].style.display = 'none'
      }
}}
    }

    function toggle(){
      let leftSide = document.getElementById('show-hide').style.display = 'none'
      let centerfullSize = document.getElementById('full-size').style.margin = '0 auto';
      let showicon = document.getElementById('showicon').style.display = 'block'
    }
    function toggleshow(){
      let leftSide = document.getElementById('show-hide').style.display = 'block'
      let showicon = document.getElementById('showicon').style.display = 'none'
    }

    // toggle side bar function

    
   // } // file checker if complete here {}
   
// else{

// profile code 

if(window.location.href.indexOf('profil') != -1){
//  alert('hello')
 let namechnage = document.getElementById('name').innerHTML = getDataLocalstorage[getDataLocalstorage.length -1].Name
 console.log(namechnage)
 let emailChange = document.getElementById('Email').innerHTML = getDataLocalstorage[getDataLocalstorage.length -1].Email
document.getElementById('pass').innerHTML = getDataLocalstorage[getDataLocalstorage.length -1].Pass
document.getElementById('bigname').innerHTML = namechnage
document.getElementById('bigEmail').innerHTML = emailChange
document.getElementById('lastname').innerHTML = namechnage
}


function editProfileText(valueGet){
  
   let ids = ['name', 'Email', 'pass']

   let changeValue = prompt('Enter a Change value', valueGet)

   if(valueGet == getDataLocalstorage[getDataLocalstorage.length -1].Name){

      var data = window.localStorage.getItem('Datasssarr');

      let convertobj = JSON.parse(data);
      convertobj[convertobj.length -1].Name = changeValue;
      window.localStorage.setItem('Datasssarr', JSON.stringify(convertobj));
      // console.log(cart)

     let changevaluestored = document.getElementById(ids[0]).innerHTML = changeValue
     document.getElementById('bigname').innerHTML = changevaluestored
   }

   else if(valueGet == getDataLocalstorage[getDataLocalstorage.length -1].Email){   
      var data = window.localStorage.getItem('Datasssarr');

      let convertobj = JSON.parse(data);
      convertobj[convertobj.length -1].Email = changeValue;
      window.localStorage.setItem('Datasssarr', JSON.stringify(convertobj));
      // console.log(cart)

       let changevaluestored = document.getElementById(ids[1]).innerHTML = changeValue;
       document.getElementById('bigEmail').innerHTML = changevaluestored

      }
   else{
      var data = window.localStorage.getItem('Datasssarr');

      let convertobj = JSON.parse(data);
      convertobj[convertobj.length -1].Pass = changeValue;
      window.localStorage.setItem('Datasssarr', JSON.stringify(convertobj));
      // console.log(cart)

     document.getElementById(ids[2]).innerHTML = changeValue
   }
}
 
function selectImg(){
   let imgsrc = document.getElementById('imgchange');
   let imgsrc1 = document.getElementById('imgchange1');
   let imgsrc2 = document.getElementById('imgchange2');
   let inputfile = document.getElementById('input-file')

   imgsrc.src = URL.createObjectURL(inputfile.files[0])
   imgsrc1.src = URL.createObjectURL(inputfile.files[0])
   imgsrc2.src = URL.createObjectURL(inputfile.files[0])
   console.log(imgsrc)
}


function profile_toggle(){
  let stored =  document.getElementById('show');

   if(stored.style.display == 'none'){
      stored.style.display = 'block'
   }
   else{
      stored.style.display = 'none'
   }

}

//profile code



// let nameeprofile = document.getElementById("nameenter").innerHTML = getDataLocalstorage[getDataLocalstorage.length -1].Name

// let idcardnumprofile = document.getElementById('idcardnum').innerHTML =  Math.round(Math.random()*1000000)
// let emailshowprofile = document.getElementById('emailshow').innerHTML = getDataLocalstorage[getDataLocalstorage.length -1].Email
// let displyNameProfile = document.getElementById('profnamee').innerHTML = `⭐ ${nameeprofile}`
// let displyNameemail = document.getElementById('profEmail').innerHTML = `⭐ ${emailshowprofile}`
// let BigNameprofile = document.getElementById('BigNameprofile').innerHTML = `${nameeprofile}🎇`.toUpperCase()



//  let insertindexnum ;
 
//  let getrole = getData[10].Aclvl

//  if(getrole == 'Super Admin'){
//     insertindexnum= 11
//  }
//  else if(getrole == 'Admin'){
//     insertindexnum = 3
//  }
//  else if(getrole == 'Employe'){
//     insertindexnum = 11
//  }

//  // print in table -->

//  // color td array 

//  let color = ['purple', 'green', 'red', 'purple', 'green', 'purple', 'red', 'purple', 'green', 'red', 'purple']

//  var table = document.getElementById('Table')

//  for(var i = 0; i<insertindexnum;i++){
   
//    if(getrole == 'Employe'){
//        table.innerHTML += `
//        <tr> 
//        <td> ${getData[i+10].Name} </td>
//           <td> ${getData[i+10].Email} </td>
//           <td class = 'purple'> ${getData[i+10].Role} </td>
//           <td> ${getData[i+10].Aclvl} </td>
//           <td> ${getData[i+10].DatAd} </td>
//        </tr>
//        `
//        break
//     }

//     table.innerHTML += `
//     <tr> 
//        <td class = 'name'> ${getData[i].Name} </td>
//        <td> ${getData[i].Email} </td>
//        <td class = '${color[i]}'> ${getData[i].Role} </td>
//        <td> ${getData[i].Aclvl} </td>
//        <td> ${getData[i ].DatAd} </td>
//     </tr>`
     
    
//  } 
 
//  function searching(){
//    let searchInput = document.getElementById('serchInput').value

//    let table = document.getElementById('Table')
//    let tr = table.getElementsByTagName('tr')

//   for(var i = 1; i<tr.length; i++){
//    let td = tr[i].getElementsByTagName('td')[0].innerHTML
   
//   if(td){
//    let tdvalue = td.toLowerCase()
//    searchInput = searchInput.toLowerCase()


//    if(tdvalue.indexOf(searchInput) != -1){
//      tr[i].style.display = ''
//    }
//    else{
//       tr[i].style.display = 'none'
//    }
   
//   }
   
//   }
   

   
//  }

// get inputs value by localstorage
let getData = (JSON.parse(localStorage.getItem('Admindata'))) 


function login(){
    
    let email2 = document.getElementById('email2').value
    let pass2 = document.getElementById('password2').value
 
    if(email2 == getData[10].Email && pass2 == getData[10].Password){
       window.location.href = 'Dashboard.html'
    }
    else{
        alert('Insert Correct data')
    }
 }

 let insertindexnum ;
 
 let getrole = getData[10].Aclvl

 if(getrole == 'Super Admin'){
    insertindexnum= 11
 }
 else if(getrole == 'Admin'){
    insertindexnum = 3
 }
 else if(getrole == 'Employe'){
    insertindexnum = 11
 }

 // print in table -->

 // color td array 

 let color = ['purple', 'green', 'red', 'purple', 'green', 'purple', 'red', 'purple', 'green', 'red', 'purple']

 var table = document.getElementById('Table')

 for(var i = 0; i<insertindexnum;i++){
   
   if(getrole == 'Employe'){
       table.innerHTML += `
       <tr> 
       <td> ${getData[i+10].Name} </td>
          <td> ${getData[i+10].Email} </td>
          <td class = 'purple'> ${getData[i+10].Role} </td>
          <td> ${getData[i+10].Aclvl} </td>
          <td> ${getData[i+10].DatAd} </td>
       </tr>
       `
       break
    }

    table.innerHTML += `
    <tr> 
       <td class = 'name'> ${getData[i].Name} </td>
       <td> ${getData[i].Email} </td>
       <td class = '${color[i]}'> ${getData[i].Role} </td>
       <td> ${getData[i].Aclvl} </td>
       <td> ${getData[i ].DatAd} </td>
    </tr>`
     
    
 } 
 
 function searching(){
   let searchInput = document.getElementById('serchInput').value

   let table = document.getElementById('Table')
   let tr = table.getElementsByTagName('tr')

  for(var i = 1; i<tr.length; i++){
   let td = tr[i].getElementsByTagName('td')[0].innerHTML
   
  if(td){
   let tdvalue = td.toLowerCase()
   searchInput = searchInput.toLowerCase()


   if(tdvalue.indexOf(searchInput) != -1){
     tr[i].style.display = ''
   }
   else{
      tr[i].style.display = 'none'
   }
   
  }
   
  }
   

   
 }

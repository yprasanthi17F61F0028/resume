function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
    if(response.ok){
      resolve(response.json());
    }else{
      reject(new error('error'));
    }
  })
})
}
var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
})
var child2=document.querySelector("#child2");
//carrer
function career(car){
  var heading=document.createElement("h1");
  heading.textContent="carrer objective";
  child2.appendChild(heading);
  var line=document.createElement("hr");
  child2.appendChild(line);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}
//education
function education(edu){
    var h2=document.createElement("h1");
    h2.textContent="education qualification";
    child2.appendChild(h2);
    var line=document.createElement("hr");
    child2.appendChild(line);
    var table=document.createElement("table");
    child2.appendChild(table);
    var tr="<tr> <td> s.no</td><td> Degree</td><td> institute </td> <td> data </td> ";
    table.innerHTML=tr;
    table.border="1";
    var tr1="";
    for(var i=0; i<edu.length;i++){
    tr1+="<tr><td>"+(i+1)+" </td><td>" +edu[i].degree+"</td> <td>"+edu[i].Institudte+" </td><td>"+edu[i].data+" </td></tr>";
    }
    table.innerHTML=tr+tr1;
}

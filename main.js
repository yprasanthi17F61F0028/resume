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
})
var child2=document.querySelector("#child2");
function career(car){
  var heading=document.createElement("h1");
  heading.textContent="carrer objective";
  child2.appendChild(heading);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}

const teks=document.querySelector("#link")
const star=document.querySelector("#Sky")


const btn = 'https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/list'
function getProducts(){
  fetch(btn)
      .then(res=>res.json())
      .then(bos=>{
        console.log(bos);
        greetings(bos)
        
      })
}
getProducts()

function greetings(arr){
  for (const life of arr){
    teks.innerHTML=`
    <div class="Sky">
     <img src=${life.avatar} alt="photo"/>
     <li>
     <span>${life.title}</span>
     <p>${life.category}</p>
     </li>
     </div>`
    
  }
}

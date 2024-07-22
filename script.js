async function getData(){
     let res= await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`)

     let result= await res.json();
     console.log(result)

   display(result.data)


}
getData()
function display(data){
  let container=document.getElementById('countryContainer')
   container.innerHTML="";
  data.forEach(ele => {
        
    let card=document.createElement('div')

    let name=document.createElement('h3')
    name.textContent= ele.country;
    let rank=document.createElement('h5')
    rank.textContent= ele.Rank;
    let population=document.createElement('p')
    population.textContent= ele.population;

    card.append(name,rank,population)
    container.append(card)
  });
}

document.getElementById('sortBtn').addEventListener('click',()=>{
         sortData();
})

 async function sortData(){
  let res= await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc`)

  let result= await res.json();
   
  display(result.data)
 }
console.log(got);

let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);



let parentEle = document.querySelector('.mainBox');

let cardsHtml = allPeople.map((person)  => {

    return  `<li class= "card">
            <div class = "info">
            <img 
              src=${person.image}
              alt=${person.name}
            />
            <h2>${person.name}</h2>
            </div>
     
    <p>${person.description}
    </p>
    <a class="btn"  href=${person.wikiLink}>Learn More!</a>
  </li>`
});

parentEle.innerHTML = cardsHtml.join("");
console.log(cardsHtml);




   
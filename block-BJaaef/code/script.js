let ul = document.createElement('ul');

got.houses.forEach((house)  => {

    let div = document.createElement('div');

    div.style.backgroundColor = "white";
    div.style.margin = "12px 12px";
    
    let img = document.createElement('img');
    img.src= house.image;
    img.style.borderRadius = "50%";

    let h2  = document.createElement('h2');
    h2.innerText = house.name;
    
    let p = document.createElement('p');
     p.innerText = house.description;
     p.style.color = "grey";

    let btn = document.createElement('button');

     btn.append('Learn More!');
     btn.style.backgroundColor = '#E7EDFD';
     btn.style.border = '0px';
     btn.style.borderRadius = "5px";
     btn.style.padding = '10px 25px';
     btn.style.color = '#ffff';
     btn.style.marginBottom = '10px';
    
     div.append(img, h2, p, btn);
     ul.append(div);

});


   


const main = document.getElementById('mainid')
const searchButton = () => {
    const inputBox = document.getElementById('input-value');
    const geterror = document.getElementById('error');

    const searchText = inputBox.value;
    if(searchText == '' || searchText == Number){
        geterror.innerText = 'Please give meaningful name';
        inputBox.value = '';
        main.innerHTML = '';
    }

    else {
        main.innerHTML = '';
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then (data => displayPhones(data.data));

        document.getElementById('input-value').value = '';
        geterror.innerText = '';
    }

}

const displayPhones = (disPhones) => {
    for (const phone of disPhones){
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('mb-3');
        div.classList.add('container');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="container">
            <h5 class="card-title mt-4">${phone.brand}</h5>
            <p class="card-text">${phone.phone_name}</p>
            <button onclick="details('${phone.slug}')" class="btn btn-primary mb-3">Details</button>
        </div>
        </div>
        `
        main.appendChild(div);
    }

}




        
   

    
const details = (slug) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
    .then(res => res.json())
    .then(data => {
        const allPhones = data.data;
        const singlePhone = allPhones.find(phone => phone.slug == slug);
        const div = document.createElement('div');
        main.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${singlePhone.image}" class="card-img-top" alt="...">
        <div class="container">
            <h5 class="card-title mt-4">${singlePhone.brand}</h5>
            <p class="card-text">${singlePhone.phone_name}</p>
        </div>
        </div>
        `
        main.appendChild(div);

        
    }) 
} 



    // const displayDetail = (phones) => {
    //     console.log('coooooool');

        
        // for (const detail of phones){
        //     console.log(detail)
        //     const div = document.createElement('div');
        //     div.classList.add('container');
        // div.innerHTML = `
        // <div class="card" style="width: 18rem;">
        // <img src="${detail.image}" class="card-img-top" alt="...">
        // <div class="container">
        //     <h5 class="card-title mt-4">${detail.brand}</h5>
        //     <p class="card-text">${detail.phone_name}</p>
        // </div>
        // </div>
        // `
        // main.appendChild(div);
        // }

// }

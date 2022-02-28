

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

        inputBox.vlaue = '';
        geterror.innerText = '';
    }

}

const displayPhones = (disPhones) => {
    for (const phone of disPhones){
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        // div.classList.add('col-sm-1');
        div.classList.add('mb-3');
        div.classList.add('container');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="container">
            <h5 class="card-title mt-4">${phone.brand}</h5>
            <p class="card-text">${phone.phone_name}</p>
            <a href="#" onclick="cardDetails('${phone.code}')" class="btn btn-primary mb-3">Details</a>
        </div>
        </div>
        `
        main.appendChild(div)
    }
}


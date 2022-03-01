

const main = document.getElementById('mainid')
const searchButton = () => {
    const inputBox = document.getElementById('input-value');
    const geterror = document.getElementById('error');

    const searchText = inputBox.value;
    if(searchText == ''){
        geterror.innerText = 'Please give meaningful name';
        // inputBox.value = '';
        main.innerHTML = '';
    }
    

    else {
        main.innerHTML = '';
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then (inputdata => displayPhones(inputdata.data));

        document.getElementById('input-value').value = '';
        geterror.innerText = '';
    }

}

const displayPhones = (disPhones) => {
    const showDiv = document.getElementById('show-details');
    for (const phone of disPhones){
        
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('mb-3');
        div.classList.add('container');
        div.innerHTML = `
        <div class="card bg-info bg-gradient bg-opacity-25 m-5 p-2 d-flex justify-content-around justify-content-sm-center" style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title mt-4">${phone.brand}</h4>
            <p class="card-text">${phone.phone_name}</p>
            <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary mb-3">Details</button>
        </div>
        </div>
        `
        showDiv.appendChild(div);
        // console.log(phone)

    }

}


const loadPhoneDetail = phoneId => {
    // console.log(phoneId);
    main.innerHTML = '';
    const url =`https://openapi.programming-hero.com/api/phone/${phoneId}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showDetail(data.data));
}

const showDetail = showPhoneDetail => {
    const detailId = document.getElementById('detail-field');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card bg-success bg-gradient bg-opacity-25 m-5 p-2" style="width: 18rem;">
        <h1 class="text-success w-100 text-center"> Details your searched Phone</h1>
        <img src="${showPhoneDetail.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h1 class="card-title mt-4">${showPhoneDetail.brand}</h1>
        <p class="card-text">${showPhoneDetail.phone_name}</p>
    </div>
    <div>
    
    </h1>
    `

    detailId.appendChild(div);
    
    
}





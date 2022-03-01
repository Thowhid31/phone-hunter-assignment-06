

const main = document.getElementById('mainid')
const searchButton = () => {
    const inputBox = document.getElementById('input-value');
    const geterror = document.getElementById('error');

    const searchText = inputBox.value;
    if(searchText == '' || searchText == undefined){
        geterror.innerText = 'Please give meaningful name';
        main.innerHTML = '';
    }

    

    else {
        main.innerHTML = '';
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then (inputdata => displayPhones(inputdata.data.slice(0, 20)));
        

        document.getElementById('input-value').value = '';
        geterror.innerText = '';
    }

}

const displayPhones = (disPhones) => {
    const showDiv = document.getElementById('show-details');
    showDiv.innerHTML = '';
    for (const phone of disPhones){
        
        // console.log(phone);
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

    main.innerHTML = '';
const loadPhoneDetail = phoneId => {
    // console.log(phoneId);
    
    const url =`https://openapi.programming-hero.com/api/phone/${phoneId}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showDetail(data.data));
}

const showDetail = showPhoneDetail => {
    console.log(showPhoneDetail)
    const detailId = document.getElementById('detail-field');
    const div = document.createElement('div');
    // div.classList.add('card');
    div.innerHTML = `
    <div class="card bg-success bg-gradient bg-opacity-25 m-5 p-2 d-flex center" style="width: 18rem;">
        <h1 class="text-success w-100 text-center"> Details your searched Phone</h1>
        <img src="${showPhoneDetail.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h1 class="card-title mt-4">${showPhoneDetail.brand}</h1>
        <p class="card-text fw-bold">Release Date: ${showPhoneDetail.releaseDate ? showPhoneDetail.releaseDate:'release date not found'}</p>
        <p class="card-text fw-bold">Phone Name: ${showPhoneDetail.name}</p>
        <h5 class="text-danger"> Main Features </h5>
        <p class="card-text fw-bold"> Storage: ${showPhoneDetail.mainFeatures.storage ? showPhoneDetail.storage:'Storage not found'}</p>
        <p class="card-text fw-bold">Sensors: ${showPhoneDetail.mainFeatures.sensors ? showPhoneDetail.sensors:'N/A'}</p>
        <p class="card-text fw-bold">Memory: ${showPhoneDetail.mainFeatures.memory ? showPhoneDetail.memory:'N/A'}</p>
        <p class="card-text fw-bold">Others: ${showPhoneDetail.others.WLAN ? showPhoneDetail.WLAN:'N/A'}</p>
        <p class="card-text fw-bold">Bluetooth${showPhoneDetail.others.Bluetooth ? showPhoneDetail.Bluetooth:'N/A'}</p>
        <p class="card-text fw-bold">GPS: ${showPhoneDetail.others.GPS ? showPhoneDetail.GPS:'N/A'}</p>
        <p class="card-text fw-bold">NFC: ${showPhoneDetail.others.NFC ? showPhoneDetail.NFC:'N/A'}</p>
        <p class="card-text fw-bold">Radio: ${showPhoneDetail.others.Radio ? showPhoneDetail.Radio:'N/A'}</p>
        <p class="card-text fw-bold">USB: ${showPhoneDetail.others.USB ? showPhoneDetail.USB:'N/A'}</p>
    </div>
    <div>
    
    </h1>
    `

    detailId.appendChild(div);
    
    
}
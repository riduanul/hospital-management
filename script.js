
const loadServices = () => {
    fetch("https://testing-8az5.onrender.com/services/")
    .then(res => res.json())
    .then(data => displayService(data))
    .catch(error => console.log(error))
    
};
const loadDoctors = () => {
    fetch("https://testing-8az5.onrender.com/doctor/list/")
    .then(res => res.json())
    .then(data => displayDoctors(data.results))
    .catch(error => console.log(error))
    
};
const loadDesignation = () => {
    fetch("https://testing-8az5.onrender.com/doctor/designation/")
    .then(res => res.json())
        .then(data => {
            data.forEach(designation => {
                const parent = document.getElementById('drop-designation')
                const li = document.createElement('li')
                li.classList.add('dropdown-item')
                li.innerHTML = designation
                parent.appendChild(li);
            })
    })
    .catch(error => console.log(error))
    
};
const loadSpecialization = () => {
    fetch("https://testing-8az5.onrender.com/doctor/specialization/")
    .then(res => res.json())
        .then(data => {
            data.forEach(specialization => {
                const parent = document.getElementById('drop-specialization')
                const li = document.createElement('li')
                li.classList.add('dropdown-item')
                li.innerHTML = designation
                parent.appendChild(li);
            })
    })
    .catch(error => console.log(error))
    
};


const displayService = (services) => {
    services.forEach(service => {
        const ul = document.getElementById('service-container')
        const li = document.createElement('li')
        li.innerHTML = `
        <div class="card shadow h-100">
        <div class="ratio ratio-16x9">
            <img src=${service.image} class="card-img-top" loading="lazy" alt="...">
        </div>
        <div class="card-body  p-3 p-xl-5">
            <h3 class="card-title h5">${service.name}</h3>
            <p class="card-text">${service.description.slice(0,100)}</p>
            <a href="#" class="btn btn-primary">View Detail</a>
        </div>
        </div>
        `

        ul.appendChild(li)
    });
}

const displayDoctors = (doctors) => {
    doctors.forEach(doctor => {
        const doctorsDiv = document.getElementById('doctors')
        const div = document.createElement('div')
        div.classList.add('doc-card')
        div.innerHTML = `
        <img src=${doctor?.image} class="doc-img">
        <h4>${doctor?.full_name}</h4>
        <h6>${doctor?.designation[0]}</h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, corrupti!</p>
           <p>
            ${
                doctor?.specialization.map(item => {
                    return <button>${item}</button>
                    })
                }
           </p>
        <button class="btn btn-success btn-sm">Details</button>
        `
        doctorsDiv.appendChild(div)
    })
}


loadServices()
loadDoctors()
loadDesignation()
loadSpecialization()



// ESERCIZIO 1

class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }

    compareAge(otherUser) {
        if(this.age === otherUser.age) {
            return `${this.firstName} ha la stessa età di ${otherUser.firstName}`
        }else if(this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`
        }else {
            return `${this.firstName} è più giovane di  ${otherUser.firstName}`
        }
    }
}

const user1 = new User('Mario', 'Rossi', 24, 'Milano')
const user2 = new User('Gianluca', 'Folzi', 32, 'Torino')

// ESERCIZIO 2

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

    hasSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName
    }
}

const pets = [];


function addPet() {
    const petName = document.getElementById('petName').value
    const ownerName = document.getElementById('ownerName').value
    const species = document.getElementById('species').value
    const breed = document.getElementById('breed').value

    const newPet = new Pet(petName, ownerName, species, breed)
    pets.push(newPet)

    addToPetList()
    resetForm()
}

function addToPetList() {
    const petList = document.getElementById('petList')
    petList.innerHTML = ''

    pets.forEach(pet => {
        const listItem = document.createElement('li')
        listItem.textContent = `${pet.petName} (Species: ${pet.species}, Breed: ${pet.breed}, Owner: ${pet.ownerName})`
        petList.appendChild(listItem)
    })
}

function resetForm() {
    document.getElementById('petForm').reset()
}


// BOOTSTRAP JS

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
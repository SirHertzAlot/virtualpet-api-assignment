//The view retriever that also generates text to confirm view is working correctly.


async function retrieveAllPetsData(){
    const ul = document.createElement('ul');
    const list = document.createDocumentFragment();

    try {
        fetch('http://localhost:8081/returnAllPets').then((response) => {
            if(response.ok){
                return response.json();
            } 
        }).then((data) => {

            let virtualPets = data;

            virtualPets.map(function(virtualPet) {

                let title = document.createElement('h1');
                let li = document.createElement('li');
                let name = document.createElement('h2');
                let description = document.createElement('span');
                
                title.innerText = 'Get All Pets';
                name.innerHTML = `${virtualPet.name}`;
                description.innerHTML = `${virtualPet.description}`;

                

                li.appendChild(title);
                li.appendChild(name);
                li.appendChild(description);
                list.appendChild(li);
                ul.appendChild(list);

                let processedPets = JSON.stringify(virtualPets);

                console.log(`%cSuccessfully retrieved all virtual pets,` + processedPets + ` . Please check web page for output.`, "font-size:20px");
            });
        }).catch((error) => {
            return `Error, please refer to error message for details. ${error.message}`;
        });
    } catch (error) {
        console.error('Something went wrong, please refer to our log here -> ' + error.message)
    }
    document.body.appendChild(ul);
}

async function retrieveOnePetsData(){
    const ul = document.createElement('ul');
    const list = document.createDocumentFragment();

    try {
        fetch('http://localhost:8081/virtualpet/1').then((response) => {
            if(response.ok){
                return response.json();
            } 
        }).then((data) => {

            let virtualPet = data;
            
            let title = document.createElement('h1');
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let description = document.createElement('span');

            title.innerText = 'Get Pet By Id';
            name.innerHTML = `${virtualPet.name}`;
            description.innerHTML = `${virtualPet.description}`;

            li.appendChild(title);
            li.appendChild(name);
            li.appendChild(description);
            list.appendChild(li);
            ul.appendChild(list);

            let processedPet = JSON.stringify(virtualPet);
            
            console.log(`%cSuccessfully retrieved virtual pet: -> ${processedPet}. Please check web page for output.`, "font-size:20px");
        }).catch((error) => {
            return `Error, please refer to error message for details. ${error.message}`;
        });
    } catch (error) {
        console.error('Something went wrong, please refer to our log here -> ' + error.message)
    }
    document.body.appendChild(ul);
}

async function postOnePetsData(url = "", data = {}){
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return console.log(response.json());
}
 

//This is the only function that should return an error
async function retrieveDeletedPetData(){
    const ul = document.createElement('ul');
    const list = document.createDocumentFragment();

    try {
        fetch('http://localhost:8081/virtualpet/5').then((response) => {
            if(response.ok){
                return response.json();
            } 
        }).then((data) => {

            let virtualPet = data;
            
            let title = document.createElement('h1');
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let description = document.createElement('span');

            title.innerText = 'Get Pet By Id';
            name.innerHTML = `${virtualPet.name}`;
            description.innerHTML = `${virtualPet.description}`;

            li.appendChild(title);
            li.appendChild(name);
            li.appendChild(description);
            list.appendChild(li);
            ul.appendChild(list);
            
            console.log(ul);
        }).catch((error) => {
            let h1 = document.createElement('h1');
            h1.innerText(`Error is indication of successful deletion and call to retrieve pet that no longer exists. ${error.message}`);
            document.body.appendChild(h1);
            console.log(`Error is indication of successful deletion and call to retrieve pet that no longer exists. ${error.message}`);
        });
    } catch (error) {
        console.error('Something went wrong, please refer to our log here -> ' + error.message)
    }
    document.body.appendChild(ul);
}

//Goodbye Jackie boy number 2.
async function deleteOnePetsData(){
    const response = await fetch('http://localhost:8081/virtualpet/5', { /* Will be removing javascript call in HTML for this function so it doesn't keep deleting. */
        method: "DELETE",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log("Pet has been deleted.")
    return response.json();
} 
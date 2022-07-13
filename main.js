
function myFunction() {
        var popup =
    document.getElementById("myPopup");
    popup.classList.toggle("show");

    const load_data = async () => {
        const art = getData();

        art.forEach( element => create_list(element.id, element.name))
    }
}

const getData = async () => {
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks/75644/manifest.json`)
    console.log(response.data)
    return response.data
}

const DOM_Elements = {
    stoneData : ".stone-data"
}

const create_list = ( id, title ) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${title} </a>`
    document.querySelector(DOM_Elements.stoneData).insertAdjacentHTML('beforeend', html)
}


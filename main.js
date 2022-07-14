
const stone_url = 'https://api.artic.edu/api/v1/artworks/75644'
const knight_url = 'https://api.artic.edu/api/v1/artworks/15468'
const hercules_url = 'https://api.artic.edu/api/v1/artworks/20579'
const adam_url = 'https://api.artic.edu/api/v1/artworks/105073'

async function getStone() {
    const response = await fetch(stone_url);
    const datas = await response.json();
    const { data } = datas;

    document.getElementById('id1').textContent = data.id
    document.getElementById('title1').textContent = data.title
    document.getElementById('date1').textContent = data.date_start
    document.getElementById('empire1').textContent = data.subject_titles[7]
                    
}

async function getKnight() {
    const response = await fetch(knight_url);
    const datas = await response.json();
    const { data } = datas;

    document.getElementById('id2').textContent = data.id
    document.getElementById('title2').textContent = data.title
    document.getElementById('date2').textContent = data.date_start
    document.getElementById('empire2').textContent = data.artist_title
                    
}

async function getHercules() {
    const response = await fetch(hercules_url);
    const datas = await response.json();
    const { data } = datas;

    document.getElementById('id3').textContent = data.id
    document.getElementById('title3').textContent = data.title
    document.getElementById('date3').textContent = data.date_start
    document.getElementById('empire3').textContent = data.artist_title
                    
}

async function getAdam() {
    const response = await fetch(adam_url);
    const datas = await response.json();
    const { data } = datas;

    document.getElementById('id4').textContent = data.id
    document.getElementById('title4').textContent = data.title
    document.getElementById('date4').textContent = data.date_start
    document.getElementById('empire4').textContent = data.artist_title
                    
}

function myFunction1() {
        var popup =
    document.getElementById("myPopup1");
    popup.classList.toggle("show");
    getStone()

}

function myFunction2() {
        var popup =
    document.getElementById("myPopup2");
    popup.classList.toggle("show");
    getKnight()

}

function myFunction3() {
        var popup =
    document.getElementById("myPopup3");
    popup.classList.toggle("show");
    getHercules()

}

function myFunction4() {
        var popup =
    document.getElementById("myPopup4");
    popup.classList.toggle("show");
    getAdam()

}
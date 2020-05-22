// Challenge 2: Cat Generator

function generateCat(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen')
    image.src = "https://media1.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=ecf05e4708eccf705d4b4d625cb3d581b004c85007d3e880&rid=giphy.gif"
    div.appendChild(image);
}
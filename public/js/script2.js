let disHid;
let listConv = [
    'Pitches/hour Opvoerelevator',
    'Pitches/hour B.O.NAR conveyor',
    'Pitches/hour invoer spraytunnel',
    'Pitches/hour spraytunnel',
    'Pitches/hour Uitvoer spraytunnel',
    'Pitches/hour Aanvoerconveyor egalistatie',
    'Pitches/hour Sidefinger in invoer elevat',
    'Pitches/hour Afvoerconveyor 1 egalisatie',
    'Pitches/hour geen',
    'Pitches/hour geen',
    'Pitches/hour Afvoerconveyor 2 egalisatie',
    'Pitches/hour Afvoerconveyor 3 egalisatie',
    'Pitches/hour Neerlaatconv 1e snit',
    'Pitches/hour Neervlijelva 1e snit',
    'Pitches/hour Neerlaatconv Karkas expedi',
    'Pitches/hour Neervlijelva Karkas exped',
    'Pitches/hour Opveorconv Karkas expediti',
    'Pitches/hour Afvoerconveyor 1e snit midd',
    'Pitches/hour Afvoerconveyor 1e snit ribb',
    'Pitches/hour Afvoerconveyor 2 delencel 2',
    'Pitches/hour Neerlaatconveyor 2 expediti',
    'Pitches/hour Overname delen 2 buffercel',
    'Pitches/hour Afvoerconveyor 1A delencel',
    'Pitches/hour Afvoerconveyor 1B delencel',
    'Pitches/hour Afvoerconveyor 1B delencel ',
    'Pitches/hour Neerlaatconveyor 1 bufferkoel',
    'Pitches/hour Toevoer externe delen',
    'Pitches/hour Afvoerconveyor 1 buffercel',
    'Pitches/hour Organenkoeling',
    'Pitches/hour leeg',
    'Pitches/hour Bypass conveyor spraytunnel',
    'Pitches/hour Afvoerconveyor 2 bufferkoel'
]

disHid = {
    displayList: 'displayList',
    hideList: 'hideList'
}
$('#but').text(disHid.displayList)
function myFunction() {
    let x = document.getElementById("uul");
    if (x.style.display === "none") {
        x.style.display = "block";
        $('#but').text(disHid.hideList)
    } else {
        x.style.display = "none";
        $('#but').text(disHid.displayList)
    }
}

$(document).ready(function () {
    $('#uul').hide();
    function makeUl(array) {
        let list = document.getElementById('uul');
        for (let i = 0; i < array.length; i++) {
            let item = document.createElement('li');
            item.appendChild(document.createTextNode(listConv[i]));
            list.appendChild(item);
        }
        return list;
    }
    document.getElementById('uul').appendChild(makeUl(listConv))
})
        
        

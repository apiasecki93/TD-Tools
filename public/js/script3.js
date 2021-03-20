//const ping2 = require('./script5');
const buttonShowPing = document.querySelector('.button-show-ping')
const pingForm = document.querySelector('.pingForm')
const pingButton = document.querySelector('.pingButton')
//const hostStatus = document.getElementById('.hostStatus')


// add eventListeners 
buttonShowPing.addEventListener('click', showPingForm);
pingButton.addEventListener('click', pingHost);


 
function changeButtonDescription() {
        if(buttonShowPing.value == showHid.showPing) {
            buttonShowPing.value = showHid.hidePing;

        } else {
            buttonShowPing.value = showHid.showPing;
        } 
} 

let showHid = {
    showPing: 'Show Ping tool',
    hidePing: 'Hide Ping tool'
}

function showPingForm(e) {
    changeButtonDescription()
    //console.log(a)
    switch (e.target.value) {
        case "Hide Ping tool":
            pingForm.style.display = 'flex';
            pingButton.style.display = "flex";
            $('#ping').text("PING")
            break;
        case "Show Ping tool":
            pingForm.style.display = "none";
            pingButton.style.display = "none";
            break;
    } 
}

function PressedPing() {
    let a,b,c,d;
    let ip1 = parseInt(document.getElementById('ipField1').value);
    let ip2 = parseInt(document.getElementById('ipField2').value);
    let ip3 = parseInt(document.getElementById('ipField3').value);
    let ip4 = parseInt(document.getElementById('ipField4').value);
    if (ip1.toString().length>= 2 ) {
        a = true;
    } else {
        a = false;
    }
    if (ip2.toString().length >= 2)  {
        b = true;
    } else {
        b = true;
    } 
    if (ip3.toString().length >= 2 )  {
        c = true;
    } else {
        c = false;
    }
    if (ip4.toString().length >= 2 )  {
        d = true;
    } else {
        d = false;
    }
    if (a && b && c && d) {
        let ipHost = ip1 + "." + ip2 + "." + ip3 + "." + ip4;
        //ipHost.toString()
    
        let resIp;

       fetch('http://localhost:4001/ping', {
            //method: 'GET',
            //body: '',
            headers: {ip: ipHost}
        })
            .then(res=>res.json())
            .then(resJson=> { 
                
                let divIp = document.createElement('div')
                divIp.className = "pinging"

                if (resJson.res) {
                    divIp.innerHTML = `${resJson.res}`  
                    let pinging = document.getElementById("afterPingHpst");
                    pinging.appendChild(divIp)
                } else {
                    let divIp = document.createElement('div')
                    divIp.className = "pinging"
                    divIp.innerHTML =" Host is unreachable "
                    let pinging = document.getElementById("afterPingHpst");
                    pinging.appendChild(divIp)
                } 
        
            
            });
    }
}

function pingHost(e) {
    PressedPing()
}      

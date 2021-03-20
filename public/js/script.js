let answer;
let output;

let deflauts = {
    display_info: "1.  You have to know speed of the conveyour which can be found on Scada",
    display_info2: "2.  If you have a speed write it to field named 'speed' and press 'calculate'"

}

function calculation(){
    var speed = parseInt(document.getElementById('speedField').value);
    if (speed && typeof(speed) === 'number' && (speed.toString().length >= 3 && speed.toString().length <=4)) { //
         let wynik = ((speed * 80) / 3600)
         wynik = wynik.toFixed(0)
         answer = {
            result: `The pulse shoud be set to ${wynik} `
        }
      
    } else {
        console.log('Error')
        let error = "wrong input, you should type integer"
        answer = {
            result: error
        } 
    } 
};

document.getElementById('submit').onclick = () =>{
    calculation();
    $('#result').text(answer.result);
}

const redrawText = () => {
    $('#display_info').text(deflauts.display_info);
    $('#display_info2').text(deflauts.display_info2);

  };

redrawText();

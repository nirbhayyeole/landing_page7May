// var sheetName = 'Sheet1'
// var scriptProp = PropertiesService.getScriptProperties()

// function intialSetup () {
//   var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//   scriptProp.setProperty('key', activeSpreadsheet.getId())
// }

// function doPost (e) {
//   var lock = LockService.getScriptLock()
//   lock.tryLock(10000)

//   try {
//     var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
//     var sheet = doc.getSheetByName(sheetName)

//     var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
//     var nextRow = sheet.getLastRow() + 1

//     var newRow = headers.map(function(header) {
//       return header === 'timestamp' ? new Date() : e.parameter[header]
//     })

//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   catch (e) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   finally {
//     lock.releaseLock()
//   }
// }
// //https://script.google.com/macros/s/AKfycbzkbDI_1606fVi9-nbrHCpNrnDYM2jTDi0jVKPqlIVPWWdpe0ipr2W5tMa0bTfwio1O/exec

const scriptURL='https://script.google.com/macros/s/AKfycbw4SGzOYnezHnCj6HpwwkdUVqG431LP8Q6v63QRJprgjYt7C0OH5BQ16ds1BY6SriMG/exec'

const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
             form.reset();
             alert("Thanks for contacting us..! We Will Contact You Soon...");
            // form.reset();
            localStorage.setItem('formSubmitted', 'true');
        })
        .catch(error => console.error('Error!', error.message));
});








document.querySelector(".hamburger").addEventListener("click", () => {
    let a=document.querySelector(".navlist");
    if(a.style.display == "none"){
        a.style.display = "block";
        
    }
    else{
        a.style.display = "none";
        a.style.right="3%"
    }
  })

  function openFullScreen() {
    var imgSrc = event.target.src;
    var fullscreenImg = document.getElementsByClassName("fullscreen-image")[0];
    fullscreenImg.src = imgSrc;
   fullscreenImg.style.width="70vw";

    var fullscreenContainer = document.getElementsByClassName("fullscreen-container")[0];
    fullscreenContainer.style.display = "flex";
  
}

function closeFullScreen() {
    var fullscreenContainer = document.getElementsByClassName("fullscreen-container")[0];
    fullscreenContainer.style.display = "none";
}
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById('overlay').style.display = 'block';
// });

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById('overlay').style.display = 'block';
// });

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById('overlay').style.display = 'block';
// });

document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['google-sheet1'];   
    const overlay = document.getElementById('overlay');
    const formSubmitted = localStorage.getItem('formSubmitted');
    if (!formSubmitted) {
        setTimeout(function() {
            overlay.style.display = 'block';
        }, 5000); 
        // overlay.style.display = 'block';

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(form)
                })
                .then(response => {
                    form.reset();
                    localStorage.setItem('formSubmitted', 'true');
                })
                .catch(error => console.error('Error!', error.message));
            document.getElementById('overlay').style.display = 'none';
        });
    }else{
        document.getElementById('overlay').style.display = 'none';
    }

});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});


function showPopup(element) {
    const overlay = document.getElementById('overlay');
    const image = element.querySelector('img');
    image.setAttribute('draggable', 'false');

    const formSubmitted = localStorage.getItem('formSubmitted');
    if (!formSubmitted) {
        overlay.style.display = 'block';
    }else{
        element.querySelector('img').style.filter = 'blur(3px)';
    }
}

function hidePopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.blur-img'); 
    const formSubmitted = localStorage.getItem('formSubmitted');
        setInterval(function() {
            images.forEach(function(image) {
                if(formSubmitted){
                    image.style.filter = 'blur(0)';
                }else{
                    image.style.filter = 'blur(10px)';
                }
            });
        }, 0);
});
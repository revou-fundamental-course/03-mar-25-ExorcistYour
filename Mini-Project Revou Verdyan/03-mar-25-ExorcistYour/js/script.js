// function replaceName(){
//     let name = prompt("Halo, Siapa nama anda?", "")
//     document.getElementById("name").innerHTML = name 
// }

// document.getElementById('tombol').addEventListener("click", function(){
//     replaceName()
// })

// let nameInput = document.getElementById('name-input')

// document.getElementById('submit').addEventListener("click", function(changeName){
//     const name = nameInput.value

//     if (nama == ""){
//         document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong"
//     }else{
//         document.getElementById('name').innerHTML = nama
//     }

//     document.getElementById('name').innerHTML = nama
// })

// Message Us Form Validation
document.addEventListener('DOMContentLoaded', function() {
    var currentTime = new Date();
    document.getElementById('currentTime').innerText = currentTime.toLocaleString();

    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var name = document.getElementById('name').value;
        var dateOfBirth = document.getElementById('dateOfBirth').value;
        var gender = document.getElementById('gender').value;
        var pesan = document.getElementById('pesan').value;

        var submittedInfo = `Name: ${name}\nDate Of Birth: ${dateOfBirth}\nGender: ${gender}\nMessage: ${pesan}`;
        document.getElementById('submittedInfo').innerText = submittedInfo;
    });
});
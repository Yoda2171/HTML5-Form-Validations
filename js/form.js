let form = document.querySelector("form");

$(form).ready(function () {
    $("#alertNO").hide();
    $(document).on("click", "#send", function (){
        $("#alertNO").show();
    })
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    




    
    let cardnumber = /^[0-9]{12,16}$/;

if (!cardnumber.test(form.card.value)) {

    form.card.classList.add('is-invalid');
} else {

    form.card.classList.remove('is-invalid');
}

let siglacvc = /^[0-9]{3}$/;

if (!siglacvc.test(form.CVC.value)) {

    form.CVC.classList.add('is-invalid');
} else {

    form.CVC.classList.remove('is-invalid');
}

let siglamonto = /^[0-9]{1,}$/;

if (!siglamonto.test(form.Amount.value)) {

    form.Amount.classList.add('is-invalid');
} else {

    form.Amount.classList.remove('is-invalid');
}

let firstname = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,}$/;

if (!firstname.test(form.name.value)) {

    form.name.classList.add('is-invalid');
} else {

    form.name.classList.remove('is-invalid');
}

let apellido = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,}$/;

if (!apellido.test(form.lastname.value)) {

    form.lastname.classList.add('is-invalid');
} else {

    form.lastname.classList.remove('is-invalid');
}

let ciudad = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,}$/;

if (!ciudad.test(form.city.value)) {

    form.city.classList.add('is-invalid');
} else {

    form.city.classList.remove('is-invalid');
}

let select = document.querySelector("#state")

if (select.value == "") {
    form.state.classList.add('is-invalid');
} else {
    form.state.classList.remove('is-invalid');
}

let postalcodenumber = /^[0-9]{4}$/;

if (!postalcodenumber.test(form.postalcode.value)) {

    form.postalcode.classList.add('is-invalid');
} else {

    form.postalcode.classList.remove('is-invalid');
}

let mensaje = document.querySelector("#exampleFormControlTextarea1");

if (select.value == "") {

    form.message.classList.add('is-invalid');
} else {

    form.message.classList.remove('is-invalid');
}





















});
function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
}

function editNote() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var edit = document.getElementById('update');
    edit.classList.toggle('active')
}

function cancelUpdate() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var close = document.getElementById('update');
    close.classList.toggle('active')
}
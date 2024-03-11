const div = document.getElementById('mainDiv');

setInterval(function () {
    let date = new Date();
    div.innerHTML = date.toLocaleTimeString(); 
},1000)
document.getElementById('demosMenu').addEventListener('change', function(e){
    let dropdown = document.getElementById('demosMenu');
    window.location.href = dropdown.options[dropdown.selectedIndex].getAttribute('id') + '.html';
});
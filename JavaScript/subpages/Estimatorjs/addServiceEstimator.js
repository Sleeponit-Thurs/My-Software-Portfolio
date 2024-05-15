document.getElementById('add-service').addEventListener('click', function() {
    var servicesDiv = document.getElementById('services');
    var serviceCount = servicesDiv.getElementsByTagName('select').length;

    var label = document.createElement('label');
    label.setAttribute('for', 'service' + (serviceCount + 1));
    label.textContent = 'Select another Service:';

    var select = document.createElement('select');
    select.id = 'service' + (serviceCount + 1);
    select.name = 'service' + (serviceCount + 1);

    var options = ['mowing', 'edging', 'trimming'];
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement('option');
        option.value = options[i];
        option.textContent = options[i].charAt(0).toUpperCase() + options[i].slice(1);
        select.appendChild(option);
    }

    servicesDiv.appendChild(label);
    servicesDiv.appendChild(select);
});
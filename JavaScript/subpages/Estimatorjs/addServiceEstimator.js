/// The following will give the mowing service a new box to enter the sqaure footage of the lawn, this only works for 
///the primary box and I am adding a function to add more boxes for more services later int he code
document.getElementById('service1').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex].value;

    // Check if the selected option is "mowing"
    if (selectedOption == 'mowing') {
        // Create a new text input field
        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'squareFootage1';
        input.placeholder = 'Enter square footage';

        // Append the input field to the 'services' div
        var servicesDiv = document.getElementById('services');
        servicesDiv.appendChild(input);
    } else {
        // If the selected option is not "mowing", remove the input field if it exists
        var input = document.querySelector('input[name="squareFootage1"]');
        if (input) {
            input.remove();
        }
    }
});

/// The following function will add a new service to the estimator page when the user chooses to add a service
document.getElementById('add-service').addEventListener('click', function() {
    var servicesDiv = document.getElementById('services');
    var serviceCount = servicesDiv.getElementsByTagName('select').length;

    var label = document.createElement('label');
    label.setAttribute('for', 'service' + (serviceCount));
    label.textContent = 'Select another Service:';

    var select = document.createElement('select');
    select.id = 'service' + (serviceCount);
    select.name = 'service' + (serviceCount);

    // this code adds the text box for the square footage of the lawn on the new service if chosen
    select.addEventListener('change', function() {
        var selectedOption = this.options[this.selectedIndex].value;

        if (selectedOption == 'mowing') {
            var input = document.createElement('input');
            input.type = 'text';
            input.name = 'squareFootage' + (serviceCount);
            input.placeholder = 'Enter square footage';
            servicesDiv.appendChild(input);
        } else {
            var input = document.querySelector('input[name="squareFootage' + (serviceCount) + '"]');
            if (input) {
                input.remove();
            }
        }
    });
    // this finishes adding the option values to the new service
    var options = ['edging', 'trimming','mowing'];
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement('option');
        option.value = options[i];
        option.textContent = options[i].charAt(0).toUpperCase() + options[i].slice(1);
        select.appendChild(option);
    }

    servicesDiv.appendChild(label);
    servicesDiv.appendChild(select);
});
/// The following function will calculate the total cost of the services selected by the user
document.getElementById('calculate-total').addEventListener('click', function() {
    var servicesDiv = document.getElementById('services');
    var serviceCount = servicesDiv.getElementsByTagName('select').length;
    ///The first section counts the number of mows, and the square footage of each mow from the text boxes
    /// array to hold the square footage of each mow
    var lawnSquareFootage = [];
    var trimmingCount = 0; 
    var edgingCount = 0;
    var mowingCount = 0;
    for (var i = 0; i < serviceCount; i++) {
        var select = servicesDiv.getElementsByTagName('select')[i];
        var selectedOption = select.options[select.selectedIndex].value;
        if (selectedOption == 'mowing' || selectedOption == 'Mowing') {
            mowingCount = mowingCount + 1;
            var input = servicesDiv.getElementsByTagName('input')[mowingCount - 1];
            var squareFootage = parseInt(input.value);
            lawnSquareFootage.push(squareFootage);
        }
    }
    ///The following counts each selected option to give a total count of services.
    var mowingCount = 0;
    for (var i = 0; i < serviceCount; i++) {
        var select = servicesDiv.getElementsByTagName('select')[i];
        var selectedOption = select.options[select.selectedIndex].value;
        if (selectedOption == 'trimming') {
            trimmingCount = trimmingCount + 1;
        } else if (selectedOption == 'edging') {
            edgingCount = edgingCount + 1;
        } else if (selectedOption == 'mowing' || selectedOption == 'Mowing') {
            mowingCount = mowingCount + 1;
        }
    }
    ///The following is the total square footage of the lawn
    var lawnSquareFootageTotal = 0;
    lawnSquareFootage.forEach( footage => {
        lawnSquareFootageTotal += footage;
      })

    ///The following is simple math to calculate the total cost of the services

    var total = trimmingCount * 25 + edgingCount * 20 + 0.02 * lawnSquareFootageTotal;

    // Display the total cost
    var totalCost = document.getElementById('total');
    totalCost.textContent = 'Total: $' + total.toFixed(2);
});

This JavaScript code is designed to provide an interactive service estimator for lawn care services. It allows users to select services, enter the square footage of their lawn for mowing services, and calculate the total cost of the selected services.


I had zero experience two weeks ago with this so it is a bit rudimentary, but the webpage functions, the real application of my javascript is in the estimator portion.

## Price Estimator Function

The code uses event listeners to respond to user actions:

1. **Service Selection**: An event listener is attached to the 'service1' dropdown. When the user selects a service, the code checks if the selected service is 'mowing'. If it is, a new text input field is created for the user to enter the square footage of their lawn. If the selected service is not 'mowing', the input field is removed if it exists.

2. **Add Service**: An event listener is attached to the 'add-service' button. When the user clicks this button, a new service dropdown is created with options for 'edging', 'trimming', and 'mowing'. If the user selects 'mowing' for this new service, a text input field is created for the user to enter the square footage of their lawn.

3. **Calculate Total**: An event listener is attached to the 'calculate-total' button. When the user clicks this button, the code calculates the total cost of the selected services. It counts the number of each service selected and the total square footage for mowing services, then calculates the total cost based on these counts. The total cost is then displayed on the page.

## Cost Calculation

The cost calculation is based on the following rates:

- Trimming: $25 per service
- Edging: $20 per service
- Mowing: $0.02 per square foot

The total cost is calculated by multiplying the count of each service by its rate, then adding these totals together. The total cost is then displayed on the page, formatted to two decimal places.

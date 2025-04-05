document.getElementById('reserve-btn').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const destination = document.getElementById('destination').value;
  
  if (name && destination) {
    const confirmationMessage = `Hello ${name}, your ticket to ${destination} has been reserved!`;
    document.getElementById('confirmation').textContent = confirmationMessage;
  } else {
    alert('Please fill out all fields.');
  }
});
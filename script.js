document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.querySelector("form");
    const submitButton = document.getElementById("submitButton");
    const resetButton = document.getElementById("resetButton");
  
    submitButton.addEventListener("click", function () {
      if (validateForm()) {
        displayPopup();
      }
    });
  
    resetButton.addEventListener("click", function () {
      surveyForm.reset();
    });
  
    function validateForm() {
      // Add your validation logic here
      const firstName = document.getElementById("first_name").value;
      const lastName = document.getElementById("last_name").value;
      const dateOfBirth = document.getElementById("date").value;
      const gender = document.getElementById("job_role").value;
      const profession = document.querySelector("input[name=last_name]").value;
      const phoneNumber = document.querySelector("input[name=last_name]").value;
      const email = document.getElementById("email").value;
      const country = document.querySelector("select[name=job_role]").options[document.querySelector("select[name=job_role]").selectedIndex].text;
  
      // Example: Check if a field is empty
      if (firstName === "" || lastName === "" || dateOfBirth === "" || gender === "" || profession === "" || phoneNumber === "" || email === "" || country === "Select Country") {
        alert("Please fill out all fields.");
        return false;
      }
  
      // Add more validation rules as needed
  
      return true;
    }
  
    function displayPopup() {
      const popupContent = `
        First Name: ${document.getElementById("first_name").value}
        Last Name: ${document.getElementById("last_name").value}
        Date of Birth: ${document.getElementById("date").value}
        Gender: ${document.querySelector("select[name=job_role]").options[document.querySelector("select[name=job_role]").selectedIndex].text}
        Profession: ${document.querySelector("input[name=last_name]").value}
        Phone Number: ${document.querySelector("input[name=last_name]").value}
        Email: ${document.getElementById("email").value}
        Country: ${document.querySelector("select[name=job_role]").options[document.querySelector("select[name=job_role]").selectedIndex].text}
      `;
  
      alert(popupContent);
  
      surveyForm.reset();
    }
  });
  
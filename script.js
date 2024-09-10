document.addEventListener("DOMContentLoaded", function () {
  const generateResumeButton = document.getElementById("generateResume");
  const editResumeButton = document.getElementById("editResume");
  const saveResumeButton = document.getElementById("saveResume");
  const resumeForm = document.getElementById("resumeForm");

  // Disable form fields function
  function toggleFormFields(state) {
      document.getElementById("firstName").disabled = state;
      document.getElementById("lastName").disabled = state;
      document.getElementById("email").disabled = state;
      document.getElementById("phone").disabled = state;
      document.getElementById("skills").disabled = state;
      document.getElementById("experience").disabled = state;
      document.getElementById("education").disabled = state;
      document.getElementById("address").disabled = state;
      document.getElementById("courses").disabled = state;
      document.getElementById("summary").disabled = state;
  }

  // Generate Resume
  resumeForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting and refreshing the page
      
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const skillsInput = document.getElementById("skills").value;
      const experience = document.getElementById("experience").value;
      const education = document.getElementById("education").value;
      const address = document.getElementById("address").value;
      const courses = document.getElementById("courses").value;
      const summary = document.getElementById("summary").value;

      // Display the text information
      document.getElementById("displayName").innerText = firstName + " " + lastName;
      document.getElementById("displayEmail").innerText = email;
      document.getElementById("displayPhone").innerText = phone;
      document.getElementById("displayExperience").innerText = experience;
      document.getElementById("displayEducation").innerText = education;
      document.getElementById("displayAddress").innerText = address;
      document.getElementById("displayCourses").innerText = courses;
      document.getElementById("displaySummary").innerText = summary;

      // Process and display skills
      const skillsList = document.getElementById("displaySkills");
      skillsList.innerHTML = ""; // Clear any previous entries
      const skillsArray = skillsInput.split(",").map(skill => skill.trim());
      skillsArray.forEach(skill => {
          if (skill) {
              const li = document.createElement("li");
              li.innerText = skill;
              skillsList.appendChild(li);
          }
      });

      // Disable the form after generating the resume
      toggleFormFields(true);

      // Hide Save button and show Edit button
      saveResumeButton.style.display = "none";
      editResumeButton.style.display = "block";
  });

  // Edit Resume
  editResumeButton.addEventListener("click", function () {
      // Enable form fields for editing
      toggleFormFields(false);

      // Show the Save button
      saveResumeButton.style.display = "block";

      // Hide the Edit button
      editResumeButton.style.display = "none";
  });

  // Save Resume
  saveResumeButton.addEventListener("click", function () {
      // Trigger the generate function to save changes
      generateResumeButton.click();
  });
});

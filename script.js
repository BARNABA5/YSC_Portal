document.getElementById("registerForm").addEventListener("submit", function(e){
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const outstation = document.getElementById("outstation").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const dob = document.getElementById("dob").value;
  const photo = document.getElementById("photo").files[0];

  // Convert photo to base64
  const reader = new FileReader();
  reader.onload = function(){
    const photoData = reader.result;

    // Save data in localStorage
    const user = {
      firstName,
      lastName,
      outstation,
      gender,
      dob,
      photo: photoData
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("🎉 Registration successful! You can now log in.");
    window.location.href = "login.html";
  };
  reader.readAsDataURL(photo);
});

(function(userName) {
  const navbar = document.getElementById("navbar");



  const userDiv = document.createElement("div");
  userDiv.className = "user-info";



  const profilePic = document.createElement("img");
  profilePic.src = "photo.jpg"; // Placeholder image
  profilePic.alt = `${userName}'s profile picture`;



  const nameSpan = document.createElement("span");
  nameSpan.textContent = userName;



  userDiv.appendChild(profilePic);
  userDiv.appendChild(nameSpan);
  navbar.appendChild(userDiv);
})("John");

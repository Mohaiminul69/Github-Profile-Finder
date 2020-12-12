const github = new Github();
const ui = new UI();

//Search Input
const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", (e) => {
  e.preventDefault();
  const userText = e.target.value;
  console.log(userText);
  if (userText !== "") {
    //Make the HTTP call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show alert
        ui.showAlert("User not found", "alert alert danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepo(data.repos);
      }
    });
  } else {
    //clear the profile
    ui.clearProfile();
  }
});

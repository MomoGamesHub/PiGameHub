const Leaderboard = {

  show() {
    let users = JSON.parse(localStorage.getItem("allUsers") || "[]");

    users.sort((a,b)=> b.points - a.points);

    let list = document.getElementById("leaderboardList");
    list.innerHTML="";

    users.forEach(u=>{
      let li=document.createElement("li");
      li.innerText = u.username + " - " + u.points;
      list.appendChild(li);
    });

    UI.showModal("leaderboardModal");
  },

  update(user) {
    let users = JSON.parse(localStorage.getItem("allUsers") || "[]");

    let index = users.findIndex(u => u.uid === user.uid);

    if(index > -1)
      users[index] = user;
    else
      users.push(user);

    localStorage.setItem("allUsers", JSON.stringify(users));
  }
};

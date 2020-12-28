let projects = [
  {
    name: "The Bestiary",
    description:
      "A companion app I created for Dungeon and Dragons 5th edition made with React and Rails. The Bestiary works as a combat encounter builder.",
    videoID: "https://www.youtube.com/embed/BCurAZFaviY",
    repoLink: "https://github.com/denimcouch/the-bestiary-frontend",
  },
  {
    name: "Island Helper",
    description:
      "A companion app for Animal Crossing: New Horizons made with React and Rails. Island Helper allows you to keep track of what villagers are on your island as well as which bugs and fish you have caught.",
    videoID: "https://www.youtube.com/embed/mx34YoRmfCk",
    repoLink: "https://github.com/denimcouch/island-helper-frontend",
  },
  {
    name: "Edgeledger",
    description:
      "A website for a fictional finance company. Edgeledger was built to practice CSS flex and responsive design",
    videoID: "",
    repoLink: "https://github.com/denimcouch/edgeledger-project",
  },
  {
    name: "Hotel AM",
    description: "A website for a fictional hotel.",
    videoID: "",
    repoLink: "https://github.com/denimcouch/hotel-css-project",
  },
  {
    name: "Hot and Fresh",
    description:
      "An ecommerce store for people to purchase local baked goods. Hot and Fresh is fully built in Rails using erb views.",
    videoID: "https://www.youtube.com/embed/2zN8BXWVJ0o",
    repoLink: "https://github.com/denimcouch/hot_and_fresh",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded up!");
  renderProjectCards(projects)
});

const renderProjectCards = (projectArray) => {
  projectArray.forEach((project) => createProjectCard(project));
};

const createProjectCard = (project) => {
  const works = document.getElementById("works");
  // Create Project card elements
  const projectDiv = createEl("div");
  const projectTitle = createEl("h2");
  const desc = createEl("p");
  const repoLink = createEl("a");
  const gitHubIcon = createEl("i");
  const player = createEl('iframe')
  
  // Gives player attributes
  player.title = 'YouTube video player'
  player.type = 'text/html'
  player.height = '390'
  player.width = '640'
  player.src = project.videoID
  player.className = 'player'


  // Assign card elements necessary attributes
  projectDiv.className = "project";
  gitHubIcon.className = "fab fa-github fa-2x";
  projectTitle.className = 'text-primary'
  desc.className = 'text-secondary'
  repoLink.href = project.repoLink;
  repoLink.target = '_blank'
  repoLink.innerText = 'Check out the repo here! '
  desc.innerText = project.description;
  projectTitle.innerText = project.name;

  repoLink.append(gitHubIcon)
  projectDiv.append(projectTitle, player, desc, repoLink)
  works.append(projectDiv)
};

const createYTPlayer = (projectObj) => {
  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "390",
      width: "640",
      videoId: projectObj.videoID,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }

  // The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
}

const createEl = (el) => document.createElement(el);

import { content } from "./content.js";

const container = document.querySelector(".container-cards");

content.forEach(item => {
  const blogCard = document.createElement("div");
  blogCard.classList.add("blog-card");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const screenshot = document.createElement("img");
  screenshot.src = item.screenshot;
  screenshot.alt = item.title;
  screenshot.classList.add("screenshot");
  imageContainer.appendChild(screenshot);

  blogCard.appendChild(imageContainer);

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  const title = document.createElement("h2");
  title.textContent = item.title;
  title.classList.add("title");
  contentContainer.appendChild(title);

  const description = document.createElement("p");
  description.textContent = item.description;
  description.classList.add("description");
  contentContainer.appendChild(description);

  const githubLink = document.createElement("a");
  githubLink.href = item.githubrepo;
  githubLink.target = "_blank";
  githubLink.textContent = "GitHub Repo";
  githubLink.classList.add("github-link");
  contentContainer.appendChild(githubLink);

  const netlifyLink = document.createElement("a");
  netlifyLink.href = item.netlifyURL;
  netlifyLink.target = "_blank";
  netlifyLink.textContent = "Hosted on Netlify";
  netlifyLink.classList.add("netlify-link");
  contentContainer.appendChild(netlifyLink);

  const iconsDiv = document.createElement("div");
  iconsDiv.classList.add("icons");

  item.icons.forEach(iconURL => {
    const icon = document.createElement("img");
    icon.src = iconURL;
    icon.classList.add("icon");
    iconsDiv.appendChild(icon);
  });

  contentContainer.appendChild(iconsDiv);

  blogCard.appendChild(contentContainer);

  container.appendChild(blogCard);
});

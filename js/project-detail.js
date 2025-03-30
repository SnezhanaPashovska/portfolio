document.addEventListener("DOMContentLoaded", function () {
  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modal-image");

  if (!imageModal || !modalImage) {
    console.error("Modal or modal image element not found.");
    return;
  }

  // Create Bootstrap modal instance
  const modal = new bootstrap.Modal(imageModal);

  // Function to open modal and set image
  function openImageModal(imageSrc) {
    if (imageSrc) {
      modalImage.src = imageSrc;
      imageModal.removeAttribute("inert"); // Ensure accessibility
      modal.show();
    } else {
      console.error("Image source is empty.");
    }
  }

  // Handle image clicks for additional images
  document.addEventListener("click", function (event) {
    const target = event.target;

    if (target.matches("[data-bs-img]")) {
      openImageModal(target.getAttribute("data-bs-img"));
    }

    if (target.id === "main-image") {
      openImageModal(target.src);
    }
  });

  // Project data and rendering
  const projects = {
    tasklinker: {
      title: "TaskLinker",
      description:
        "A Symfony-based platform for task management and project tracking.",
      status: "Completed",
      techStack: "Symfony, PHP",
      projectType: "Full-stack",
      image: "assets/img/bg-callout.jpg",
      link: "https://github.com/SnezhanaPashovska/tasklinker",
      photos: [
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
      ],
    },
    greengoodies: {
      title: "Green Goodies",
      description:
        "A Symfony-based platform for task management and project tracking.",
      status: "Completed",
      techStack: "Symfony, PHP",
      projectType: "Full-stack",
      image: "assets/img/bg-callout.jpg",
      link: "https://github.com/SnezhanaPashovska/GreenGoodies",
      photos: [
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
      ],
    },
    ecogarden: {
      title: "EcoGarden & co",
      description:
        "A Symfony-based platform for task management and project tracking.",
      status: "Completed",
      techStack: "API",
      projectType: "Back-end",
      image: "assets/img/bg-callout.jpg",
      link: "https://github.com/SnezhanaPashovska/Eco_Garden",
      photos: [
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
      ],
    },

    tomtroc: {
      title: "Tom Troc",
      description:
        "A Symfony-based platform for task management and project tracking.",
      status: "Completed",
      techStack: "API",
      projectType: "Back-end",
      image: "assets/img/bg-callout.jpg",
      link: "https://github.com/SnezhanaPashovska/tom-troc",
      photos: [
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
        "assets/img/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
      ],
    },
  };

  // Get the project ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");
  if (!projectId || !projects[projectId]) {
    document.getElementById("project-container").innerHTML = `
      <h2>Project not found!</h2>
      <a href="index.html" class="btn btn-secondary">Back to Projects</a>
    `;
    return;
  }

  const project = projects[projectId];
  const container = document.getElementById("project-container");

  // Populate project details
  container.innerHTML = `
    <div class="col-md-6">
      <img
        src="${project.image}"
        alt="${project.title}"
        class="img-fluid rounded"
        id="main-image"
      />
    </div>

    <div class="col-md-6">
      <h1>${project.title}</h1>
      <p class="text-muted">Published on: ${project.date}</p>
      <p>${project.description}</p>
      <ul class="list-group mb-4">
        <li class="list-group-item"><strong>Status : </strong> ${project.status}</li>
        <li class="list-group-item"><strong>Tech Stack : </strong> ${project.techStack}</li>
        <li class="list-group-item"><strong>Project Type :</strong> ${project.projectType}</li>
        <li class="list-group-item"><strong>GitHub : </strong> ${project.link}</li>
      </ul>
      <a href="index.html" class="btn btn-primary">Back to Projects</a>
    </div>
  `;

  // Add additional photos
  if (project.photos.length) {
    const photoContainer = document.createElement("div");
    photoContainer.className = "row mt-4";

    project.photos.forEach((photo) => {
      photoContainer.innerHTML += `
        <div class="col-4">
          <img
            src="${photo}"
            alt="Additional Image"
            class="img-fluid rounded"
            data-bs-img="${photo}"
          />
        </div>
      `;
    });

    container.appendChild(photoContainer);
  }
});

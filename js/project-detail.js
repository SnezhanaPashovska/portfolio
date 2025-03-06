document.addEventListener("DOMContentLoaded", function () {
  const imageElements = document.querySelectorAll("[data-bs-img]");
  const modalImage = document.getElementById("modal-image");

  
  if (modalImage) {
   
    imageElements.forEach((element) => {
      element.addEventListener("click", (event) => {
        const imageSrc = event.target.getAttribute("data-bs-img");
        console.log("Image clicked:", imageSrc); 
        if (imageSrc) {
          modalImage.src = imageSrc; 
        }

        // Show the modal
        const modal = new bootstrap.Modal(
          document.getElementById("imageModal")
        );
        modal.show();
      });
    });

    
    const mainImage = document.getElementById("main-image");
    if (mainImage) {
      mainImage.addEventListener("click", () => {
        modalImage.src = mainImage.src; // Set the modal image to the main image
        const modal = new bootstrap.Modal(
          document.getElementById("imageModal")
        );
        modal.show(); // Show the modal
      });
    }
  } else {
    console.error("Modal image element not found");
  }

  // Project data and rendering
  const projects = {
    tasklinker: {
      title: "TaskLinker",
      date: "October 2023",
      description:
        "A Symfony-based platform for task management and project tracking.",
      status: "Completed",
      techStack: "Symfony, PHP",
      projectType: "Full-stack",
      image: "assets/img/bg-callout.jpg",
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

  if (!projectId) {
    console.error("No project ID found in the URL");
  }

  console.log("Project ID:", projectId);

  // Find the container
  const container = document.getElementById("project-container");
  const project = projects[projectId];

  if (project) {
    // Populate the main project details
    container.innerHTML = `
      <!-- Main Project Image -->
      <div class="col-md-6">
        <img
          src="${project.image}"
          alt="${project.title}"
          class="img-fluid rounded"
          id="main-image"
          data-bs-toggle="modal"
          data-bs-target="#imageModal"
        />
      </div>

      <!-- Project Information -->
      <div class="col-md-6">
        <h1>${project.title}</h1>
        <p class="text-muted">Published on: ${project.date}</p>
        <p>${project.description}</p>

        <!-- Project Meta Information -->
        <ul class="list-group mb-4">
          <li class="list-group-item"><strong>Status:</strong> ${project.status}</li>
          <li class="list-group-item"><strong>Tech Stack:</strong> ${project.techStack}</li>
          <li class="list-group-item"><strong>Project Type:</strong> ${project.projectType}</li>
        </ul>

        <a href="index.html" class="btn btn-primary">Back to Projects</a>
      </div>
    `;

    // Add the optional photos dynamically
    const photoContainer = document.createElement("div");
    photoContainer.className = "row mt-4";

    project.photos.forEach((photo) => {
      photoContainer.innerHTML += `
        <div class="col-4">
          <img
            src="${photo}"
            alt="Additional Image"
            class="img-fluid rounded"
            data-bs-toggle="modal"
            data-bs-target="#imageModal"
            data-bs-img="${photo}"
          />
        </div>
      `;
    });

    container.appendChild(photoContainer);
  } else {
    container.innerHTML = `
      <h2>Project not found!</h2>
      <a href="index.html" class="btn btn-secondary">Back to Projects</a>
    `;
  }
});

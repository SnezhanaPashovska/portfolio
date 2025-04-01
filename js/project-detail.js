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
        "TaskLinker est une solution de gestion de projets développée avec Symfony, permettant aux employés de créer, suivre et gérer leurs tâches. Grâce à un contrôle d’accès basé sur les rôles, une authentification à deux facteurs avec Google Authenticator et une interface responsive, la plateforme assure une gestion sécurisée et efficace des projets.",
      status: "Terminé",
      techStack: "Symfony, PHP, PostgreSQL, Twig, Google Authenticator",
      projectType: "Full-stack Web Application",
      image: "assets/img-project/TaskLinker-fotor-2025033014421.jpg",
      link: "https://github.com/SnezhanaPashovska/tasklinker",
      photos: [
        "assets/img-project/tl-connect.jpg",
        "assets/img-project/tl-ga.jpg",
        "assets/img-project/tl-projects.png",
        "assets/img-project/tl-equipe.jpg",
        "assets/img-project/tl-project.png",
        "assets/img-project/tl-project-edit.png",
      ],
    },
    greengoodies: {
      title: "Green Goodies",
      description:
        "GreenGoodies est une boutique en ligne qui propose une sélection de produits bio et écoresponsables, tout en intégrant des solutions numériques modernes. Grâce à une interface intuitive, une gestion sécurisée des commandes et une API dédiée aux partenaires, la plateforme facilite l’accès à un mode de vie sain et responsable.",
      status: "Terminé",
      techStack: "Symfony 7, PHP, MySQL, Doctrine ORM, Twig Templates, CSS/SASS",
      projectType: "Full-stack",
      image: "assets/img-project/green-goodies-edited-fotor-20250330144428.jpg",
      link: "https://github.com/SnezhanaPashovska/GreenGoodies",
      photos: [
        "assets/img-project/bienvenue-gg.jpg",
        "assets/img-project/gg-connexion.png",
        "assets/img-project/savon-gg.png",
        "assets/img-project/monpanier-gg.png",
        "assets/img-project/moncompte-gg.png",
        "assets/img-project/commande-gg.png",
      ],
    },
    ecogarden: {
      title: "EcoGarden & co",
      description:
        "A Symfony-based platform for task management and project tracking.",
      status: "Completed",
      techStack: "API",
      projectType: "Back-end",
      image: "assets/img-project/ecogarden-co-fotor-20250330144450.jpg",
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
      image: "assets/img-project/tomtroc-fotor-2025033014445.jpg",
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
      <p>${project.description}</p>
      <ul class="list-group mb-4">
        <li class="list-group-item"><strong>Statut : </strong> ${project.status}</li>
        <li class="list-group-item"><strong>Stack technologique : </strong> ${project.techStack}</li>
        <li class="list-group-item"><strong>Type de projet  :</strong> ${project.projectType}</li>
        <li class="list-group-item"><strong>GitHub : </strong> ${project.link}</li>
      </ul>
      <a href="projects.html" class="btn btn-primary">Back to Projects</a>
    </div>
  `;

  // Add additional photos
  if (project.photos.length) {
    const photoContainer = document.createElement("div");
    photoContainer.className = "row mt-4";

    project.photos.forEach((photo) => {
      photoContainer.innerHTML += `
        <div class="col-4 images-detail">
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

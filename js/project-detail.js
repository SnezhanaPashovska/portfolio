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
      techStack:
        "Symfony 7, PHP, MySQL, Doctrine ORM, Twig Templates, CSS/SASS",
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
        "Eco Garden est un projet backend développé avec Symfony qui permet d’obtenir des prévisions météorologiques et des conseils de jardinage en fonction du mois et de la localisation de l’utilisateur. Il intègre une API externe pour les données météo et met en cache les résultats pour optimiser les performances.",
      status: "Terminé",
      techStack:
        "Symfony (Backend), OpenWeather API (Données météo), PHP, MySQL",
      projectType: "API Backend",
      image: "assets/img-project/ecogarden-co-fotor-20250330144450.jpg",
      link: "https://github.com/SnezhanaPashovska/Eco_Garden",
      photos: [
        "assets/img-project/post-eg.png",
        "assets/img-project/get-advuce-current-month.png",
        "assets/img-project/get-city-eg.png",
        "assets/img-project/get-user-eg.png",
        "assets/img-project/post-city-eg.png",
        "assets/img-project/update-advice-eg.png",
      ],
    },

    tomtroc: {
      title: "Tom Troc",
      description:
        "TomTroc est un projet web conçu pour faciliter l'échange de livres entre particuliers. Développé en PHP avec une architecture MVC, il permet aux utilisateurs de s'inscrire, se connecter et organiser des échanges en toute simplicité. Le projet respecte les principes de la programmation orientée objet (POO) et utilise MySQL pour la gestion des données.",
      status: "Terminé",
      techStack: "PHP (MVC, POO), MySQL (Base de données)",
      projectType: "Application Web Full-Stack",
      image: "assets/img-project/tomtroc-fotor-2025033014445.jpg",
      link: "https://github.com/SnezhanaPashovska/tom-troc",
      photos: [
        "assets/img-project/accueil-tt.jpg",
        "assets/img-project/mon-compte-tt.jpg",
        "assets/img-project/messagerie-tt.jpg",
        "assets/img-project/list-books-tt.jpg",
        "assets/img-project/book-detail-tt.jpg",
        "assets/img-project/account-tt.jpg",
      ],
    },
    inazaoui: {
      title: "Ina Zaoui - Portfolio",
      description:
        "Ina Zaoui Portfolio est un projet développé avec Symfony dans le cadre de la formation OpenClassrooms. Il permet aux photographes de gérer leurs albums et médias via une interface web intuitive. L'application utilise PostgreSQL pour la gestion des données et repose sur une architecture robuste facilitant l'organisation et l'affichage des portfolios.",
      status: "Terminé",
      techStack:
        " Symfony (Backend), PHP 8.1+ (Langage de programmation), PostgreSQL (Base de données)",
      projectType: "Application Web Full-Stack",
      image: "assets/img-project/inazaoui.jpg",
      link: "https://github.com/SnezhanaPashovska/vehiloc",
      photos: [
        "assets/img-project/accueul-iz.jpg",
        "assets/img-project/invites-iz.jpg",
        "assets/img-project/portfolio-iz.jpg",
        "assets/img-project/qsj-iz.jpg",
        "assets/img-project/liste-admin-iz.jpg",
        "assets/img-project/form-iz.jpg",
      ],
    },
    vehicloc: {
      title: "Véhicloc",
      description:
        "VéhiLoc est une plateforme web développée avec Symfony pour la gestion d’une flotte de véhicules en location. Le projet vise à rendre le site dynamique en permettant l’ajout et la suppression de voitures via un formulaire interactif.",
      status: "Terminé",
      techStack: "Symfony, PHP, MySQL, Doctrine ORM, Twig",
      projectType: "Application Web Full-Stack",
      image: "assets/img-project/vehicloc.jpg",
      link: "https://github.com/SnezhanaPashovska/vehiloc",
      photos: [
        "assets/img-project/accueil-vehiloc.jpg",
        "assets/img-project/form-vehicloc.jpg",
        "assets/img-project/vehicloc-account.jpg",
      ],
    },
    booki: {
      title: "Booki",
      description:
        "Booki est une page web conçue pour permettre aux utilisateurs de rechercher des hébergements et des activités touristiques dans la ville de leur choix. Le projet consiste en l'intégration fidèle d’une maquette fournie par un designer, en respectant les spécifications techniques et contraintes d’accessibilité. Deux versions de la même page d’accueil ont été réalisées, chacune respectant la même maquette mais dans un contexte de développement distinct. Le site est uniquement statique et ne comporte pas de fonctionnalités dynamiques.",
      status: "Terminé (Page d’accueil uniquement, deux versions)",
      techStack: "HTML5, CSS3",
      projectType: "Intégration web statique",
      image: "assets/img-project/booki.jpg",
      link: "https://github.com/SnezhanaPashovska/Booki-V2, https://github.com/SnezhanaPashovska/Booki",
      photos: [
        "assets/img-project/booki-pic.jpg",
        "assets/img-project/booki-1-pic.jpg",
        "assets/img-project/booki-2-pic.jpg",
      ],
    },
    forteroche: {
      title: "Blog d’Émilie Forteroche",
      description:
        "Ce projet consiste à intervenir sur un blog existant écrit en PHP selon le modèle MVC, appartenant à l'autrice Émilie Forteroche. L’objectif était d’ajouter une page d’administration permettant à l’autrice de suivre les performances de ses articles grâce à un tableau interactif (triable par titre, vues, commentaires et date), tout en respectant l’identité visuelle du site. Le projet inclut également l’implémentation d’un système de suppression de commentaires via l’interface admin, afin de faciliter la modération sans accéder à la base de données. Aucune bibliothèque tierce n’a été utilisée, en respectant la volonté du client de garder un code simple et lisible.",
      status: "Terminé",
      techStack: "PHP (sans framework), Architecture MVC, HTML5, CSS3, MySQL",
      projectType: "Maintenance évolutive d’un site existant",
      image: "assets/img-project/ef.jpg",
      link: "https://github.com/SnezhanaPashovska/blog-Emilie-Forteroche",
      photos: [
        "assets/img-project/hp-ef.png",
        "assets/img-project/comments-ef.png",
        "assets/img-project/liste-ef.png",
        "assets/img-project/table-ef.png",
        "assets/img-project/article-ef.jpg",
        "assets/img-project/edit-ef.png",
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

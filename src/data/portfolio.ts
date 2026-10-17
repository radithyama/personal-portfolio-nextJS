import planit from "@/assets/images/projects/planit.png";
import musawarah from "@/assets/images/projects/musawarah.png";
import shinyapp from "@/assets/images/projects/shiny-app.png";
import snakeGame from "@/assets/images/projects/snake-game.png";

export const skillDetails: Record<string, { title: string; description: string }> = {
  "Web Development": {
    title: "Web Development",
    description:
      "Built and maintained scalable web applications using React.js, Next.js, Node.js, and Spring Boot. Experience includes designing REST APIs, responsive UIs, authentication, and integrating with cloud services.",
  },
  "Mobile Development": {
    title: "Mobile Development",
    description:
      "Developed mobile apps using React Native and Flutter. Delivered features such as push notifications, secure authentication, and seamless API integration for fintech and productivity apps.",
  },
  AWS: {
    title: "AWS",
    description:
      "Deployed and managed applications on AWS using EC2, S3, RDS, Lambda, and IAM. Automated CI/CD pipelines with Jenkins and GitHub Actions for robust cloud deployments.",
  },
  "Google Cloud": {
    title: "Google Cloud",
    description:
      "Utilized Google Cloud Platform (GCP) services including Compute Engine, Cloud Functions, Pub/Sub, and Firestore for scalable backend and data processing solutions.",
  },
  "DevOps / Docker": {
    title: "DevOps / Docker",
    description:
      "Containerized applications with Docker, orchestrated deployments using Kubernetes, and implemented CI/CD pipelines for automated testing and deployment.",
  },
  Cybersecurity: {
    title: "Cybersecurity",
    description:
      "Applied secure coding practices, performed vulnerability assessments, and researched secure software development as part of a Master’s in Cybersecurity.",
  },
};

export const portfolioItems = [
  {
    image: planit,
    alt: "Planit",
    title: "Planit",
    titleColor: "text-rose-600 dark:text-rose-400",
    description: "A responsive webpage for Planit, showcasing modern web development techniques.",
    link: "/projects/planit",
  },
  {
    image: musawarah,
    alt: "Musawarah",
    title: "Musawarah",
    titleColor: "text-indigo-600 dark:text-indigo-400",
    description: "A dynamic donation webpage for Musawarah, built with a focus on user experience and performance.",
    link: "/projects/musawarah",
  },
  {
    image: shinyapp,
    alt: "USA EV Dashboard",
    title: "USA EV Dashboard",
    titleColor: "text-sky-600 dark:text-sky-400",
    description: "An interactive web application built with Shiny, demonstrating data visualization and analysis capabilities.",
    link: "/projects/shiny-app",
  },
  {
    image: snakeGame,
    alt: "Snake Game",
    title: "Snake Game",
    titleColor: "text-green-600 dark:text-green-400",
    description: "A simple Snake Game project created to train code logic and algorithm skills.",
    link: "/projects/snake-game",
  },
];

import type { IconType } from "react-icons";
import { FaAws, FaDocker, FaGithub, FaGoogle, FaLinkedin, FaMedium, FaMobileAlt, FaReact, FaShieldAlt } from "react-icons/fa";

export const profile = {
  name: "Radithya Mirza",
  location: "Jakarta, Indonesia",
  role: "Backend Engineer",
  email: "radithyamirza00@gmail.com",
  currently: "Building Wondr by BNI",
  headline: "Bridging Software Development and Cybersecurity Excellence",
  intro:
    "I build robust, scalable backend systems for digital banking, and research how to make the software supply chain more secure.",
};

export const socials: { label: string; href: string; icon: IconType }[] = [
  { label: "GitHub", href: "https://github.com/radithyamirza", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/radithya-mirza-aribowo/", icon: FaLinkedin },
  { label: "Medium", href: "https://medium.com/@radithyamirza", icon: FaMedium },
];

export const stats = [
  { value: "4+", label: "Years building production software" },
  { value: "2", label: "National-scale fintech apps: Wondr by BNI & AstraPay" },
  { value: "M.Cyber", label: "Master of Cybersecurity, Monash University" },
];

export const about = {
  engineering:
    "Experienced in full-stack development, I build robust, scalable applications that prioritize both functionality and security. As a Backend Engineer, I craft end-to-end solutions with Java, Spring Boot, Apache Kafka, Node.js, React.js and Docker: designing backend architectures, developing responsive frontends, and deploying containerized applications with Kubernetes. I rely on Google Cloud Platform, AWS and Jenkins to keep integration and delivery seamless, balancing rapid development with high-quality releases.",
  security:
    "Alongside my professional work, I am pursuing a Master's in Cybersecurity at Monash University. My research focuses on enhancing secure software development processes, particularly addressing vulnerabilities like zero-day attacks and improving dependency management practices. By combining industry experience with cybersecurity research, I aim to help organizations build more secure and resilient digital products.",
};

export const techStack = [
  "Java",
  "Spring Boot",
  "Apache Kafka",
  "Node.js",
  "React.js",
  "Next.js",
  "Docker",
  "Kubernetes",
  "Google Cloud",
  "AWS",
  "Jenkins",
];

export const experience = [
  {
    period: "Jul 2024 – Present",
    role: "Backend Engineer",
    company: "Bank Negara Indonesia",
    description:
      "Developing the Wondr by BNI backend, including QRIS domestic & international transactions, NFC transactions, bill payment, the wealth management system and personal financial insights for customers.",
    tags: ["QRIS", "NFC Payments", "Bill Payment", "Wealth Management"],
  },
  {
    period: "Feb 2022 – Jul 2024",
    role: "Product Engineer",
    company: "AstraPay",
    description:
      "Developed core AstraPay features such as account balance transfer, QRIS domestic transactions, disbursement, bank top-ups via virtual account, an Open API for third-party integrations, and a back-office dashboard for reports & transaction monitoring.",
    tags: ["Transfers", "QRIS", "Disbursement", "Open API"],
  },
  {
    period: "Aug 2021 – Dec 2021",
    role: "Product Engineering Intern",
    company: "AstraPay",
    description:
      "Developed AstraPay's merchant transaction dashboard and contributed to the administration process while acquiring a public license from the national regulator.",
    tags: ["Merchant Dashboard", "Licensing"],
  },
];

export const education = [
  { period: "2024 – 2026", degree: "Master of Cybersecurity", school: "Monash University", detail: "GPA 3.50 / 4.00" },
  { period: "2020 – 2024", degree: "Bachelor of Science, Computer Science", school: "BINUS University", detail: "GPA 3.64 / 4.00" },
  { period: "2017 – 2020", degree: "High School", school: "SMA Negeri 6 Jakarta" },
];

export const expertise: { title: string; years: string; icon: IconType; color: string; description: string }[] = [
  {
    title: "Web Development",
    years: "4+ years",
    icon: FaReact,
    color: "text-cyan-500",
    description:
      "Scalable web applications with React.js, Next.js, Node.js and Spring Boot: REST APIs, responsive UIs, authentication and cloud integrations.",
  },
  {
    title: "Mobile Development",
    years: "2+ years",
    icon: FaMobileAlt,
    color: "text-teal-500",
    description:
      "React Native and Flutter apps with push notifications, secure authentication and seamless API integration for fintech and productivity.",
  },
  {
    title: "AWS",
    years: "2+ years",
    icon: FaAws,
    color: "text-amber-500",
    description:
      "Deploying and managing applications on EC2, S3, RDS, Lambda and IAM, with CI/CD pipelines in Jenkins and GitHub Actions.",
  },
  {
    title: "Google Cloud",
    years: "2+ years",
    icon: FaGoogle,
    color: "text-sky-500",
    description:
      "Compute Engine, Cloud Functions, Pub/Sub and Firestore for scalable backends and data processing.",
  },
  {
    title: "DevOps / Docker",
    years: "2+ years",
    icon: FaDocker,
    color: "text-blue-500",
    description:
      "Containerized services with Docker, orchestrated on Kubernetes, shipped through automated test and deploy pipelines.",
  },
  {
    title: "Cybersecurity",
    years: "1+ years",
    icon: FaShieldAlt,
    color: "text-emerald-500",
    description:
      "Secure coding practices, vulnerability assessments and research into secure software development.",
  },
];

// Key facts shown in the hero's "whoami" card
export const snapshot: { key: string; value: string }[] = [
  { key: "role", value: "Backend Engineer @ BNI" },
  { key: "builds", value: "Payments: QRIS, NFC, transfers" },
  { key: "stack", value: "Java · Spring Boot · Kafka" },
  { key: "ships_on", value: "Docker · Kubernetes · GCP · AWS" },
  { key: "studying", value: "M. Cybersecurity @ Monash" },
  { key: "research", value: "Secure SDLC · dependency risk" },
  { key: "based_in", value: "Jakarta, Indonesia" },
];

import type { Project } from "./types";

/** Replace placeholder links and add screenshots when each project is published. */
export const projects: Project[] = [

  {
    slug: "quick-parcel-delivery",
    name: "Quick Parcel Delivery",
    summary:
      "A full-stack parcel delivery management application featuring parcel booking, shipment management, user authentication, and admin and rider workflows.",
    status: "complete",
    stack: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
    ],
    image: {
      src: "/projects/parcel-delivery.png",
      alt: "Quick Parcel Delivery project illustration",
    },
    links: {
      live: "https://quick-parcel-delivery.web.app/",
    },
  },

  {
    slug: "cartoon-studio",
    name: "Cartoon Studio",
    summary: "A creative studio concept for turning Bangla scripts into character-led cartoon scenes with voice and generated backgrounds.",
    status: "in-progress",
    stack: ["JavaScript", "React", "AI integration", "Text to Speech"],
    image: { src: "/projects/cartoon-studio.svg", alt: "Cartoon Studio project illustration" },
    links: {},
  },
  {
    slug: "flying-tesla-game",
    name: "3D Flying Car Game",
    summary: "An interactive browser game concept featuring a 3D flying car, animated environments, and keyboard controls.",
    status: "in-progress",
    stack: ["React", "Three.js", "JavaScript", "CSS"],
    image: { src: "/projects/flying-car.svg", alt: "3D flying car game illustration" },
    links: {},
  },
];

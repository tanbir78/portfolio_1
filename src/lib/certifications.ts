export type Certification = {
  id: string;
  title: string;
  provider: string;
  completedAt: string;
  description?: string;
  skills: string[];
  /** Image path relative to /public, e.g. /certificates/mern-course.png */
  image?: string;
  credentialUrl?: string;
};

/** Add your real course certificates here. No sample credentials are shown. */
export const certifications: Certification[] = [
  {
    id: "mern-self-learning",
    title: "MERN Stack – Self Learning",
    provider: "Self-Learning · YouTube",
    completedAt: "2026",
    description:
      "Learned MERN stack development through YouTube tutorials and hands-on project development.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST API",
    ],
    image: "",
    credentialUrl: "",
  },

  {
    id: "computer-vision-bootcamp-2025",
    title: "Computer Vision and Deep Learning for Medical Data Analysis",
    provider: "Daffodil International University · HiRL",
    completedAt: "2025",
    description:
      "Successfully completed the Computer Vision and Deep Learning for Medical Data Analysis Bootcamp 2025 at Daffodil International University.",
    image: "/certificates/computer-vision-bootcamp-2025.png",
    skills: [
      "Computer Vision",
      "Deep Learning",
      "Medical Data Analysis",
      "Image Processing",
    ],
    credentialUrl: "",
  },

  {
    id: "phitron-cse-fundamentals-batch-4",
    title: "CSE Fundamentals With Phitron – Batch 4",
    provider: "Phitron",
    completedAt: "February 2024",
    description:
      "Successfully completed the CSE Fundamentals program (Batch 4), covering Introduction to C Programming, C++ for DSA, Basic Data Structures, and Introduction to Algorithms. Achieved Grade A in all four courses.",
    skills: [
      "C",
      "C++",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "DSA",
    ],
    image: "/certificates/phitron-batch-4.png",
    credentialUrl: "",
  },

  // {
  //   id: "phitron-batch-4-semester-3",
  //   title: "CSE Fundamentals With Phitron – Semester 03",
  //   provider: "Phitron",
  //   completedAt: "Fall 2023",
  //   description:
  //     "Completed Semester 03 of the CSE Fundamentals program (Batch 4), Software Development Track, covering Database Management, OOP and Python Programming, and Software Development Project.",
  //   image: "/certificates/phitron-batch-4-semester-3.png",
  //   skills: [
  //     "Database Management",
  //     "Python",
  //     "Object-Oriented Programming",
  //     "Software Development",
  //     "Problem Solving",
  //   ],
  //   credentialUrl: "",
  // },

  // {
  //   id: "phitron-xpsc-batch-4",
  //   title: "XPSC – Problem Solving Track",
  //   provider: "Phitron · Xetabytes Problem Solvers Club",
  //   completedAt: "Fall 2023",
  //   description:
  //     "Successfully completed the XPSC course under the CSE Fundamentals With Phitron program (Batch 4, Semester 03), focused on problem solving and competitive programming fundamentals.",
  //   image: "/certificates/phitron-batch-4-xpsc.png",
  //   skills: [
  //     "Problem Solving",
  //     "Competitive Programming",
  //     "Algorithmic Thinking",
  //     "Logical Reasoning",
  //     "Programming Fundamentals",
  //   ],
  //   credentialUrl: "",
  // },

  
];

export function getCertifications(): Certification[] {
  return certifications;
}

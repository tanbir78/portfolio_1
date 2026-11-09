import type { LinkItem } from "./types";

/**
 * Personal details. Everything on the site reads from here,
 * so edit this file instead of the components.
 */

export const profile = {
  name: "Tanbir Hasan Jewel",
  initials: "THJ",
  role: "CSE Student· MERN Full Stack Developer",
  location: "Bangladesh",
  timeZone: "Asia/Dhaka",
  headline: {
    lead: "I build thoughtful",
    emphasis: "digital experiences",
    tail: "for the web.",
  },

  intro:
    "Computer Science & Engineering student and aspiring full-stack developer. I enjoy solving problems, building useful web applications, and turning ideas into polished products.",
  photo: {
    src: "/images/tanbir-portrait.png",
    full: "/images/tanbir-portrait.png",
    alt: "Tanbir Hasan monogram portrait",
    avatar: "/images/tanbir-portrait.png",
  },


  techStack: [
    {
      group: "Frontend",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      group: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
      ],
    },
    {
      group: "Database",
      items: [
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      group: "Programming Languages",
      items: [
        "C",
        "C++",
        "Java",
        "JavaScript",
        "Python",
      ],
    },
    {
      group: "AI & Machine Learning",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Generative AI",
      ],
    },
    {
      group: "Computer Science",
      items: [
        "Data Structures & Algorithms",
        "OOP",
        "Design Patterns",
        "Problem Solving",
      ],
    },
    {
      group: "Tools",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
      ],
    },
  ],

  about: [
    "I'm Tanbir Hasan Jewel, a Computer Science & Engineering student from Bangladesh with a passion for building modern, scalable, and user-friendly web applications.",
    "I specialize in full-stack web development and have been exploring the MERN stack, turning ideas into practical projects through clean UI design, efficient functionality, and well-structured application logic.",
    "Beyond development, I'm passionate about competitive programming and continuously sharpen my problem-solving and analytical skills. I have solved 700+ problems on Codeforces, achieved a peak rating of 1200+, and secured 3rd and 10th positions in university programming contests.",
    "I'm always eager to explore new technologies, take on challenging projects, and collaborate with others. Currently, I'm seeking opportunities where I can contribute my skills, gain real-world experience, and grow as a software developer.",
  ],
  education: [
    {
      qualification: "BSc in Computer Science & Engineering",
      short: "BSc in CSE",
      institution: "Daffodil International University (DIU)",
      place: "Dhaka, Bangladesh",
      result: "CGPA: 3.75 (Expected completion: December 2026)",
      current: true,
    },
    {
      qualification: "Higher Secondary Certificate (HSC)",
      short: "HSC in Science",
      institution: "Hazara Tuju Degree College",
      place: "Boddarhat, Chittagong, Bangladesh",
      result: "GPA: 5.00 | Completed: 2020",
      current: false,
    },
    {
      qualification: "Secondary School Certificate (SSC)",
      short: "SSC in Science",
      institution: "Chakoria Korok Biddapith",
      place: "Chakoria, Cox's Bazar, Bangladesh",
      result: "GPA: 5.00 | Completed: 2018",
      current: false,
    },
    {
      qualification: "Junior School Certificate (JSC)",
      short: "JSC",
      institution: "Badarkhali Colonization High School",
      place: "Badarkhali, Chakoria",
      result: "GPA: 5.00 | Completed: 2015",
      current: false,
    },
    {
      qualification: "Primary School Certificate (PSC)",
      short: "PSC",
      institution: "Badarkhali Government Primary School",
      place: "Badarkhali, Chakoria",
      result: "GPA: 5.00 | Completed: 2012",
      current: false,
    },
  ] as Array<{
    qualification: string;
    short: string;
    institution: string;
    place?: string;
    result?: string;
    current?: boolean;
    progress?: { current: number; total: number; asOf: string };
  }>,
  experience: [
    {
      kind: "Work",
      organization:
        "Department of Computing & Information System (CIS), Daffodil International University",
      place: "Dhaka, Bangladesh",
      roles: [
        {
          title: "AI Project Competition Finalist – Team Integration",
          period: "August 2026",
          current: false,
          project: "Daffodil Intelligence – Next-Generation Generative AI Platform",
          summary:
            "Collaborated with Team Integration to build Daffodil Intelligence, a Generative AI platform featuring 24+ specialized AI tools for research, programming, content creation, and productivity. Reached the Final Round of the AI Project Competition 2026.",
          tags: [
            "Generative AI",
            "Artificial Intelligence",
            "Full-Stack Development",
            "Team Collaboration",
          ],
          badge: "Finalist · 2026",
        },
      ],
    },
    {
      kind: "Volunteering",
      organization: "DIU Computer & Programming Club (DIU CPC)",
      place: "Daffodil International University, Dhaka",
      roles: [
        {
          title: "Volunteer – Contest Guidance",
          period: "January 2025",
          current: false,
          project: "DIU Take-OFF Programming Contest Fall-24 [Final]",
          summary:
            "Assisted and guided participants before the programming contest, helping them with directions, locating the contest venue, understanding event procedures, and providing event support.",
          tags: [
            "Event Support",
            "Participant Guidance",
            "Teamwork",
          ],
          badge: "Volunteering",
        },
      ],
    },


  ] as Array<{
    kind: "Work" | "Volunteering";
    organization: string;
    place?: string;
    roles: Array<{
      title: string;
      period: string;
      current?: boolean;
      summary?: string;
      project?: string;
      tags?: string[];
      badge?: string;
    }>;
  }>,
  contact: {
    email: "thjewel800@gmail.com",
    github: "https://github.com/tanbir78",
    linkedin: "https://www.linkedin.com/in/tanbir-hasan-jewel-713336357",
    x: "https://x.com/TanbirHasanj",
  },
  extraLinks: [] as LinkItem[],
};

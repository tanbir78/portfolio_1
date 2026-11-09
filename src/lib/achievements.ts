
export type Achievement = {
  id: string;
  title: string;
  description: string;
  category: string;
  value: string;
  status: string;
  date?: string;
  image: string;
  /** Optional larger award/trophy photo shown in the View Details dialog. */
  detailImage?: string;
  tags: string[];
};

export const achievements: Achievement[] = [

  {
    id: "unlock-algorithm-2024",
    title: "2nd Runner Up – Unlock the Algorithm",
    description:
      "Awarded 2nd Runner Up in the Unlock the Algorithm Programming Contest, organized by Daffodil International University (DIU), Spring 2024 (Slot C).",
    category: "University Programming Contest",
    value: "2nd Runner Up",
    status: "Awarded",
    date: "Spring 2024",
    image: "/achievements/unlock-the-algorithm-2024.png",
    detailImage: "/achievements/unlock-the-algorithm-trophy.png",
    tags: [
      "Programming Contest",
      "Daffodil International University",
      "CPC",
      "Slot C",
    ],
  },

  {
    id: "code-trap-10th-place-2024",
    title: "10th Position – Code Trap",
    description:
      "Secured 10th place in the DIU Code Trap Programming Contest – Fall 2023, held on 9 February 2024 at Daffodil Smart City, Ashulia.",
    category: "University Programming Contest",
    value: "10th",
    status: "Awarded",
    date: "9 February 2024",
    image: "/achievements/code-trap-2024.png",
    detailImage: "/achievements/code-trap-10th-award.png",
    tags: [
      "Programming Contest",
      "Daffodil International University",
      "Code Trap",
      "10th Place",
    ],
  },


  {
    id: "unlock-algorithm-participation-2024",
    title: "Participation – Unlock the Algorithm",
    description:
      "Successfully participated in the Unlock the Algorithm Programming Contest, Spring 2024, organized by Daffodil International University.",
    category: "University Programming Contest",
    value: "Participation",
    status: "Participated",
    date: "Spring 2024",
    image: "/achievements/unlock-algorithm-participation.png",
    detailImage: "/achievements/unlock-algorithm-participation.png",
    tags: [
      "Programming Contest",
      "Daffodil International University",
      "CPC",
      "Participation",
    ],
  },

  {
    id: "math-olympiad-champion-2015",
    title: "Champion – Math Olympiad 2015",
    description:
      "Achieved Champion position in the Junior Category at Math Olympiad 2015, organized by Youth Ending Hunger – Bangladesh.",
    category: "Mathematics Olympiad",
    value: "Champion",
    status: "Awarded",
    date: "2015",
    image: "/achievements/math-olympiad-2015.png",
    detailImage: "/achievements/math-olympiad-2015.png",
    tags: [
      "Math Olympiad",
      "Youth Ending Hunger",
      "Junior Category",
      "Champion",
    ],
  },


];

export function getAchievements(): Achievement[] {
  return achievements;
}

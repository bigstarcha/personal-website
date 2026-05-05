type Interest = {
  text: string;
  style: string;
};

export const MAX_INTERESTS = 6;

const interests: Interest[] = [
  {
    text: "work out",
    style: "from-red-500 to-amber-500",
  },
  {
    text: "do some music stuff",
    style: "from-orange-500 to-yellow-500",
  },
  {
    text: "play video games",
    style: "from-lime-500 to-emerald-500",
  },
  {
    text: "hang out with friends",
    style: "from-teal-500 to-blue-500",
  },
  {
    text: "read new books",
    style: "from-blue-500 to-purple-500",
  },
  {
    text: "explore new places",
    style: "from-indigo-500 to-fuchsia-500",
  },
];

export function getInterest(index: number): Interest {
  return interests[index];
}

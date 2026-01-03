type Interest = {
  text: string;
  style: string;
};

export const MAX_INTERESTS = 6;

const interests: Interest[] = [
  {
    text: "work out",
    style: "from-green-400 to-cyan-400",
  },
  {
    text: "do some music stuff",
    style: "from-sky-400 to-purple-400",
  },
  {
    text: "play video games",
    style: "from-red-400 to-amber-400",
  },
  {
    text: "hang out with friends",
    style: "from-lime-400 to-teal-400",
  },
  {
    text: "read new books",
    style: "from-orange-400 to-yellow-400",
  },
  {
    text: "explore new places",
    style: "from-indigo-400 to-fuchsia-400",
  },
];

export function getInterest(index: number): Interest {
  return interests[index];
}

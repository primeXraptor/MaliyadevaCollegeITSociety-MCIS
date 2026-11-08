export type Kind = "blogs" | "events" | "competitions" | "news";
export type Entry = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  status?: "Upcoming" | "Completed";
  venue?: string;
  body: string[];
  eligibility?: string;
  rules?: string;
  registration?: string;
  schedule?: string[];
};
export const settings = {
  name: "MCIS",
  fullName: "Maliyadeva College IT Society",
  location: "Kurunegala, Sri Lanka",
  links: { github: null as string | null, forums: null as string | null },
  email: null as string | null,
  productionUrl: null as string | null,
};
export const navigation = [
  { label: "Competitions", href: "/competitions" },
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/blogs" },
  { label: "News", href: "/news" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
export const sponsors: {
  id: string;
  name: string;
  logo?: string;
  tier?: string;
}[] = [];
export const communities = [
  {
    id: "development",
    name: "Development",
    symbol: "code",
    description:
      "Turn a blank editor into something that matters. Explore the craft of building for the web and beyond.",
    focus: ["Web development", "Open source"],
  },
  {
    id: "robotics",
    name: "Robotics & IoT",
    symbol: "cpu",
    description:
      "Connect code to the physical world. Experiment with circuits, sensors, and machines that move ideas forward.",
    focus: ["Electronics", "Automation"],
  },
  {
    id: "design",
    name: "Creative Design",
    symbol: "pen",
    description:
      "Make technology feel human. Bring ideas to life through thoughtful interfaces and visual storytelling.",
    focus: ["UI / UX", "Digital art"],
  },
  {
    id: "security",
    name: "Cybersecurity",
    symbol: "shield",
    description:
      "Think critically, explore responsibly. Learn how digital systems work and how to keep them secure.",
    focus: ["Ethical security", "Problem solving"],
  },
];
const common = {
  date: "2026-01-15",
  author: "Sample editorial",
  body: [
    "This is demonstration content for the MCIS website. It illustrates how an article or activity will appear once approved society content is available.",
    "Technology is best explored by making things, asking questions, and sharing what we learn. Start with a small idea, work alongside others, and document the process so the next person can build on it.",
    "Replace this sample with an approved account, practical tutorial, or event information before publishing. Official dates, participants, and outcomes have not been supplied.",
  ],
};
export const content: Record<Kind, Entry[]> = {
  blogs: [
    {
      ...common,
      slug: "first-line-of-code",
      title: "Every great idea starts with a first line.",
      category: "Development",
      excerpt:
        "A practical starting point for turning your curiosity into your first coding project.",
      image: "code",
      body: [
        "A first project works best when it solves a small, familiar problem. A reading list, a revision timer, or a simple calculator can teach you more than an ambitious idea that never leaves the planning stage.",
        "Write down one thing your project should do. Sketch the screen on paper, then build the smallest version that can perform that task. Keep your first version simple enough to explain to a friend.",
        "When something breaks, read the error carefully. Check your assumptions one at a time, and change one thing before trying again. A short note about what you discovered is useful documentation for your future self.",
        "Share the result, ask for feedback, and choose one improvement. Progress comes from that repeated cycle of building, observing, and refining. This educational sample is not a report of an official MCIS activity.",
      ],
    },
    {
      ...common,
      slug: "designing-with-intention",
      title: "Good design asks better questions.",
      category: "Design",
      excerpt:
        "Looking beyond the pixels to create experiences that people understand.",
      image: "design",
      body: [
        "Before choosing a colour or drawing a button, ask who will use the interface and what they need to accomplish. A clear answer gives every design decision a purpose.",
        "Start by arranging information. Put the most useful action where people can find it, use familiar labels, and remove steps that do not help someone reach their goal.",
        "Accessibility belongs in the first sketch. Plan visible focus states, readable contrast, generous touch targets, and labels that make sense without a visual hint. Test with a keyboard as well as a mouse.",
        "Ask someone to complete a task without coaching them. Watch where they hesitate. Those moments are useful evidence for the next revision. This is a sample educational article.",
      ],
    },
    {
      ...common,
      slug: "open-source-together",
      title: "Build in the open. Grow together.",
      category: "Community",
      excerpt:
        "Why sharing your work can be the most valuable part of making it.",
      image: "network",
      body: [
        "Open source begins with making work understandable to someone else. A useful README can explain the problem, show how to run the project, and make the first contribution less intimidating.",
        "Before contributing to an existing project, read its licence and contribution guide. Look for a small, well-defined issue, reproduce the problem, and discuss your proposed approach respectfully.",
        "Keep a change focused. Include a clear explanation of its purpose and describe how you checked it. Documentation improvements and careful bug reports are valuable contributions too.",
        "Never commit passwords or personal information. Review your changes before sharing them, and learn how the project handles responsible disclosure. This article is educational sample content, not an official society announcement.",
      ],
    },
  ],
  events: [
    {
      ...common,
      slug: "build-together",
      title: "Build Together: a project workshop",
      category: "Workshop",
      excerpt:
        "A sample hands-on session for exploring ideas and building small projects with peers.",
      image: "code",
      status: "Upcoming",
      venue: "To be confirmed",
    },
    {
      ...common,
      slug: "creative-lab",
      title: "The Creative Lab",
      category: "Design",
      excerpt:
        "A sample collaborative exploration of interfaces, visual systems, and creative technology.",
      image: "design",
      status: "Completed",
      venue: "Sample online format",
    },
  ],
  competitions: [
    {
      ...common,
      slug: "code-challenge",
      title: "The Code Challenge",
      category: "Programming",
      excerpt:
        "A sample problem-solving competition for curious minds and creative approaches.",
      image: "code",
      status: "Upcoming",
      venue: "To be confirmed",
      eligibility:
        "Sample: student eligibility will be confirmed in official competition information.",
      rules:
        "Official rules, judging criteria, and submission requirements have not been supplied.",
    },
    {
      ...common,
      slug: "interface-challenge",
      title: "Interface / Reimagined",
      category: "Design",
      excerpt:
        "A sample design challenge exploring how a useful idea becomes an intuitive experience.",
      image: "design",
      status: "Completed",
      venue: "Sample online format",
      eligibility: "Eligibility to be confirmed.",
      rules: "This demonstration has no active submissions or official rules.",
    },
  ],
  news: [
    {
      ...common,
      slug: "a-space-for-ideas",
      title: "A new space for ideas, and the people behind them.",
      category: "Announcement",
      excerpt:
        "A demonstration of how society announcements and updates will be shared.",
      image: "network",
    },
  ],
};
export const terminal = {
  name: "TERMINAL",
  edition: "v26.0",
  date: null as string | null,
  venue: null as string | null,
  registration: null as string | null,
  schedule: [] as string[],
};
export const dateLabel = (date: string) =>
  new Date(date + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2
        id="Relevant Course Work"
        className="mb-2 sm:mb-0  text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-teal-200 bg-opacity-50"
      >
        Skills and coursework
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Operating Systems",
    description:
      "Explored processes and threads, including their management and lifecycle. Studied synchronization techniques and inter-process communication. Learned about scheduling algorithms and memory management strategies.Covered file system structures, resource protection, and security mechanisms. Analyzed the architecture and design of operating systems.",
    link: "#",
  },
  {
    title: "Data Structures and Algorithms",
    description:
      "Covered fundamental data structures such as stacks, queues, hash tables, binary trees, and graphs. Explored key algorithms for searching, sorting, and graph traversal, including minimum spanning trees, shortest path algorithms, and tree operations. Gained hands-on experience with algorithmic design strategies, performance analysis, and correctness proofs. Focused on evaluating the time complexity of algorithms (best, average, and worst-case) and understanding the trade-offs between time and space complexity. Developed the ability to select and justify appropriate data structures and algorithms to solve various computational problems effectively.",
    link: "#",
  },
  {
    title: "Computer Architecture",
    description:
      "Developed a comprehensive understanding of foundational concepts, including digital logic computation, number representations (integer and floating-point), instruction set architecture (ISA), and the interaction between processors, memory, and I/O. Gained hands-on experience programming in ARM assembly and integrating assembly with C for practical tasks. Explored advanced topics such as CPU pipelining, parallelism, virtual memory, caching, and I/O systems. Acquired skills in evaluating and reasoning about ISA design and performance, memory hierarchies, and architecture choices while mastering the ability to analyze and convert between various number representation standards.",
    link: "#",
  },
  {
    title: "Human Computer Interfaces",
    description:
      "Focused on the design and evaluation of user interfaces, emphasizing principles of effective and intuitive interface design. Explored task-oriented and user experience design methodologies to create functional and user-centered solutions. Addressed inclusive design principles to ensure accessibility for diverse user groups. Studied human cognition, including memory, perception, and motor systems, to align interfaces with human capabilities. Examined graphical communication techniques and addressed challenges like mode awareness. Gained hands-on experience with interface design tools and strategies for developing help systems to enhance user support and engagement.",
    link: "#",
  },
  {
    title: "Software Development",
    description:
      "Explored software process models and activities essential to software development, including requirement engineering for discovering and documenting requirements. Studied software design principles and graphical modeling techniques using Unified Modeling Language (UML). Gained expertise in interface specification, mathematical notations, and programming paradigms such as object-oriented and functional programming. Applied design patterns, conducted software verification and validation, and understood test-driven development methodologies. Examined the software evolution process, maintenance practices, and the role of software engineers in modern development workflows. Acquired hands-on experience in Java programming and designing robust, scalable systems.",
    link: "#",
  },
  {
    title: "Statistics and Probability",
    description:
      "Studied fundamental concepts of probability and statistics, including combinatorics, independence, and conditional probability. Explored discrete and continuous distributions, statistical applications, and the Poisson process. Developed an understanding of expectation, transformations, moment-generating functions, and their applications. Analyzed joint, marginal, and conditional distributions, as well as covariance and correlation. Examined the central limit theorem and its significance in statistical inference and data analysis.",
    link: "#",
  },
];

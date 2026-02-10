import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "resume",
        title: "Resume",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "C/C++ Programmer",
        icon: mobile,
    },
    {
        title: "Backend Enthusiast",
        icon: backend,
    },
    {
        title: "UI/UX Explorer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Computer Science Undergraduate",
        company_name: "Lovely Professional University",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "2023 - Present",
        points: [
            "Pursuing a Degree in Computer Science, focusing on advanced Data Structures, Algorithms, and System Design.",
            "Consistently applying theoretical knowledge to real-world software engineering challenges.",
            "Active participant in technical workshops and competitive programming events.",
        ],
    },
    {
        title: "Research Paper Author",
        company_name: "LPU Research Hub",
        icon: creator,
        iconBg: "#383E56",
        date: "2024",
        points: [
            "Conducted in-depth research on Ant Colony Optimization (ACO) algorithms for solving complex optimization problems.",
            "Analyzed bio-inspired heuristics to improve pathfinding efficiency in dynamic environments.",
            "Drafted and finalized a research paper detailing findings and algorithmic enhancements.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Luminary Invoice (Freelance/Project)",
        icon: web,
        iconBg: "#E6DEDD",
        date: "2024",
        points: [
            "Developed a high-performance industrial ledger and invoice management system for corporate clients.",
            "Implemented specialized templates for Hatsun Agro and JVS Comatsco, reducing manual entry time by 40%.",
            "Built dynamic dashboard features including real-time activity feeds and workstation management.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Prathmesh's work on the Luminary Invoice system demonstrated a deep understanding of complex business logic and UI/UX synchronization.",
        name: "Collaborator",
        designation: "Frontend Lead",
        company: "Industrial Operations",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];

const projects = [
    {
        name: "Luminary Invoice",
        description:
            "A professional industrial ledger and automated invoice system. Streamlines business operations with specialized client templates, automated mailing helpers, and a clean, high-efficiency workstation dashboard.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "framer-motion",
                color: "green-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        source_code_link: "https://luminary-invoice.vercel.app/",
    },
    {
        name: "Ant Colony Optimization Hub",
        description:
            "A visualization and research tool for Ant Colony Optimization algorithms. Explores how digital pheromones can solve the Traveling Salesman Problem and other routing challenges effectively.",
        tags: [
            {
                name: "python/cpp",
                color: "blue-text-gradient",
            },
            {
                name: "algorithms",
                color: "orange-text-gradient",
            },
            {
                name: "research",
                color: "green-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1509228468518-180dd4821811?q=80&w=2670&auto=format&fit=crop",
        source_code_link: "https://github.com/prathmesh-kadam",
    },
];

export { services, technologies, experiences, testimonials, projects };

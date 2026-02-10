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

// Navigation Links matching the requested structure
export const navLinks = [
    {
        id: "home",
        title: "Home",
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
        id: "certifications",
        title: "Certifications",
    },
    {
        id: "achievements", // Mapping to Resume or separate section
        title: "Achievements",
    },
    {
        id: "resume",
        title: "Resume",
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

const education = [
    {
        title: "Bachelor of Technology - Computer Science and Engineering",
        school_name: "Lovely Professional University",
        icon: meta, // Using existing icon as placeholder
        iconBg: "#383E56",
        date: "Since August 2022",
        grade: "CGPA: 8.16",
        points: [
            "Pursuing B.Tech in Computer Science.",
            "Focusing on Data Structures, Algorithms, and Web Technologies.",
        ],
    },
    {
        title: "Intermediate",
        school_name: "St Theresa's Convent School",
        icon: starbucks, // Using existing icon as placeholder
        iconBg: "#E6DEDD",
        date: "April 2021 - March 2022",
        grade: "Percentage: 90.4%",
        points: ["Completed 12th grade with a focus on Science and Mathematics."],
    },
    {
        title: "Matriculation",
        school_name: "Delhi Public School",
        icon: shopify, // Using existing icon as placeholder
        iconBg: "#383E56",
        date: "April 2019 - March 2020",
        grade: "Percentage: 93.3%",
        points: ["Completed 10th grade with distinction."],
    },
];

const certifications = [
    {
        name: "Python Programming & OOPs",
        issuer: "Certificate of Completion",
        date: "2024",
        image: "https://img.icons8.com/color/144/000000/python--v1.png", // Python Icon
        credential_link: "/certificates/Python Programming Language with OOPs.pdf",
    },
    {
        name: "Professional Certificate",
        issuer: "Achievement",
        date: "2024",
        image: creator, // Using creator icon as generic placeholder
        credential_link: "/certificates/Prathmesh_Kadam.pdf",
    },
];

const aboutMe = {
    introduction: "Hello! I'm Prathmesh Kadam, a passionate developer with a deep fascination for transforming complex problems into elegant digital solutions. My journey in tech began with curious exploration and has evolved into a focused expertise in full-stack development. I specialize in crafting responsive, user-centered applications using React, Node.js, and modern cloud infrastructure.",
    journey: "What drives me is the intersection of technology and creativity—finding that perfect balance between functional code and intuitive design. I'm constantly expanding my skills through hands-on projects and keeping up with emerging technologies.",
    approach: "I believe in creating technology that's not just functional but meaningful. Every line of code I write aims to solve real problems and enhance user experiences. I value clean architecture, collaborative development, and continuous learning as the foundations of great software.",
    quickFacts: [
        { title: "Location", value: "Punjab, India" },
        { title: "Education", value: "Pursuing B.Tech in Computer Science" },
        { title: "Experience", value: "Freshman/Student" },
    ],
    hobbies: [
        { title: "Surfing Web", icon: web },
        { title: "Reading", icon: creator },
        { title: "Music", icon: mobile },
    ],
};

const achievements = [
    {
        title: "LeetCode Profile",
        platform: "LeetCode",
        image: "https://leetcard.jacoblin.cool/luminary24?theme=dark&font=inter&ext=heatmap",
        link: "https://leetcode.com/u/luminary24/"
    },
];

export { services, technologies, experiences, testimonials, projects, education, certifications, aboutMe, achievements };

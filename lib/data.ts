import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'junaidsamishaik@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi SHAIK, I am reaching out to you because...',

    upworkProfile: 'https://www.fiverr.com/s/2KPdko4',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/mrstrange1708/' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/shaik-mohammed-junaid-sami-20885430b/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: "Python",
            icon: "/logo/python.png"
        }

    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },

    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: "Pandas",
            icon: "/logo/Pandas.png"
        },
        {
            name: 'Vercel',
            icon: '/logo/vercel.png',
        },
    ],

};

export const PROJECTS: IProject[] = [
    {
        title: 'Novelverse',
        slug: 'novelverse',
        liveUrl: 'https://novel-verse-ten.vercel.app/',
        year: 2024,
        thumbnail: '/Assets/Novelverse.jpg',
        longThumbnail: '/Assets/Novelverse.jpg',
        images: ['/Assets/Novelverse.jpg'],
        techStack: [
            'Next.js',
            'Node.js',
            'Express.js',
            'MySQL',
            'Tailwind CSS',
            'Docker',
            'Git',
            'Vercel',
        ],
        description: `
      Novelverse is an online open-library platform designed to offer seamless browsing, reading, and management of digital books. <br/><br/>
      Key Features:<br/>
      <ul>
        <li>📚 Extensive Book Library with category-based filtering</li>
        <li>🔎 Search & Pagination for smooth navigation</li>
        <li>🖥️ Fully responsive UI for desktop and mobile reading</li>
        <li>⚡ Fast load times using Next.js SSR & ISR</li>
        <li>🔐 Secure backend powered by Node.js, Express & MySQL</li>
      </ul><br/>
      Technical Highlights:
      <ul>
        <li>Designed scalable MySQL schema for book management</li>
        <li>Implemented API routing with robust error handling</li>
        <li>Dockerized backend environment for easy deployment</li>
        <li>Optimized UI with Tailwind and reusable components</li>
      </ul>
    `,
        role: `
      Full Stack Developer<br/>
      <ul>
        <li>⚙️ Built backend APIs using Express.js & MySQL</li>
        <li>🎨 Created all frontend pages in Next.js and Tailwind CSS</li>
        <li>🚀 Deployed and optimized using Vercel and Docker</li>
      </ul>
    `,
    },
    {
        title: 'MERN Stack E-commerce',
        slug: 'stylish-lady-collection',
        liveUrl: 'https://stylish-lady-collection.vercel.app/',
        year: 2024,
        thumbnail: '/Assets/Stylish.jpg',
        longThumbnail: '/Assets/Stylish.jpg',
        images: ['/Assets/Stylish.jpg'],
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
        description: `
      A complete MERN stack e-commerce website built for a clothing brand. Designed with a modern UI, smooth shopping flow, and full product management. <br/><br/>
      Key Features:<br/>
      <ul>
        <li>🛒 Add to Cart, Checkout, Product Variants</li>
        <li>📦 Real-time product updates via MongoDB</li>
        <li>🎨 Clean, modern, responsive UI with Tailwind CSS</li>
        <li>🔐 JWT Authentication and protected API routes</li>
      </ul><br/>
      Technical Highlights:
      <ul>
        <li>Custom MongoDB models for products & carts</li>
        <li>Efficient API architecture using Express.js</li>
        <li>Reusable component architecture in React</li>
      </ul>
    `,
        role: `
      Full Stack Developer<br/>
      <ul>
        <li>🖥️ Built frontend UI in React & Tailwind</li>
        <li>🔐 Developed backend APIs with Express & MongoDB</li>
        <li>🚀 Deployed on Vercel</li>
      </ul>
    `,
    },
    {
        title: 'Finance Flow',
        slug: 'finance-flow',
        liveUrl: 'https://fin.oidelta.com/',
        year: 2024,
        thumbnail: '/Assets/Financeflow.jpg',
        longThumbnail: '/Assets/Financeflow.jpg',
        images: ['/Assets/Financeflow.jpg'],
        techStack: [
            'Next.js',
            'Node.js',
            'Express.js',
            'MySQL',
            'Tailwind CSS',
            'Docker',
            'Git',
            'Vercel',
        ],
        description: `
      FinanceFlow is a personal expense tracker built to help users categorize, analyze, and control their spending. <br/><br/>
      Key Features:<br/>
      <ul>
        <li>💸 Income & Expense Tracking with charts</li>
        <li>📊 Category-wise analytics for better insights</li>
        <li>🕒 Real-time data sync via MySQL backend</li>
        <li>📱 Fully responsive UI</li>
      </ul><br/>
      Technical Highlights:
      <ul>
        <li>Built REST APIs with Node.js & Express</li>
        <li>MySQL schema optimized for analytics</li>
        <li>Clean component-driven UI in Next.js</li>
      </ul>
    `,
        role: `
      Full Stack Developer<br/>
      <ul>
        <li>⚙️ Developed backend APIs & MySQL queries</li>
        <li>🎨 Designed user dashboard in Next.js</li>
        <li>☁️ Managed deployment with Docker & Vercel</li>
      </ul>
    `,
    },
    {
        title: 'Task Flow',
        slug: 'task-flow',
        liveUrl: 'https://project-management-caps.vercel.app/',
        year: 2024,
        thumbnail: '/Assets/Taskflow.jpg',
        longThumbnail: '/Assets/Taskflow.jpg',
        images: ['/Assets/Taskflow.jpg'],
        techStack: ['React.js', 'API', 'Framer Motion', 'Tailwind CSS'],
        description: `
      A project management system where users can create, assign, and track tasks with an intuitive dashboard and smooth animations. <br/><br/>
      Key Features:<br/>
      <ul>
        <li>📁 Project & Task creation system</li>
        <li>📅 Deadline & priority management</li>
        <li>🎞️ Framer Motion animations</li>
        <li>📱 Fully responsive interface</li>
      </ul>
    `,
        role: `
      Frontend Developer<br/>
      <ul>
        <li>🎨 Built entire UI with React & Tailwind</li>
        <li>⚡ Added animations with Framer Motion</li>
        <li>🔗 Integrated APIs for project data</li>
      </ul>
    `,
    },
    {
        title: 'Cognify',
        slug: 'cognify',
        liveUrl: 'https://cognify-lemon.vercel.app/',
        year: 2024,
        thumbnail: '/Assets/Cognify.jpg',
        longThumbnail: '/Assets/Cognify.jpg',
        images: ['/Assets/Cognify.jpg'],
        techStack: ['React-flow', 'React.js', 'Framer Motion', 'Tailwind CSS'],
        description: `
      Cognify is an interactive mind-map builder that helps users organize thoughts visually using draggable nodes and connectors. <br/><br/>
      Key Features:<br/>
      <ul>
        <li>🧠 Real-time node creation & editing</li>
        <li>🔗 Drag & connect logic using React-Flow</li>
        <li>🎞️ Smooth animations with Framer Motion</li>
        <li>📱 Responsive design for all devices</li>
      </ul>
    `,
        role: `
      Frontend Developer<br/>
      <ul>
        <li>🎨 Built mind-map editor using React-Flow</li>
        <li>⚡ Added transitions & animations</li>
        <li>📁 Integrated component-based UI</li>
      </ul>
    `,
    },
    {
        title: 'Fintech Learning',
        slug: 'fintech-learning',
        liveUrl: 'https://fin-tech-learning.vercel.app/',
        year: 2024,
        thumbnail: '/Assets/Fintech.jpg',
        longThumbnail: '/Assets/Fintech.jpg',
        images: ['/Assets/Fintech.jpg'],
        techStack: ['JavaScript', 'React.js', 'Tailwind CSS'],
        description: `
      A lightweight learning platform designed to introduce users to financial concepts through simple lessons and an intuitive UI. <br/><br/>
      Key Features:<br/>
      <ul>
        <li>📘 Clean content layout for easy reading</li>
        <li>📱 Fully responsive interface</li>
        <li>🎨 Lightweight and fast</li>
      </ul>
    `,
        role: `
      Frontend Developer<br/>
      <ul>
        <li>🎨 Designed and built all UI screens</li>
        <li>⚡ Implemented responsive layout</li>
        <li>🔗 Connected lessons dynamically</li>
      </ul>
    `,
    },
    {
        title: 'Tic Tac Toe Game',
        slug: 'tic-tac-toe',
        liveUrl: 'https://tic-tac-toe-project-gamma-pink.vercel.app/',
        year: 2023,
        thumbnail: '/Assets/Tic-tac-toe.jpg',
        longThumbnail: '/Assets/Tic-tac-toe.jpg',
        images: ['/Assets/Tic-tac-toe.jpg'],
        techStack: ['JavaScript', 'HTML', 'CSS'],
        description: `
      A classic Tic Tac Toe game built with simple game logic and smooth UI interactions. Perfect for practicing core JS fundamentals.
    `,
        role: `
      Developer<br/>
      <ul>
        <li>🧠 Implemented full game logic</li>
        <li>🎨 Designed responsive board UI</li>
      </ul>
    `,
    },
    {
        title: 'Todo List',
        slug: 'todo-list',
        liveUrl: 'https://to-do-list-jade-chi.vercel.app/',
        year: 2023,
        thumbnail: '/Assets/Todos.jpg',
        longThumbnail: '/Assets/Todos.jpg',
        images: ['/Assets/Todos.jpg'],
        techStack: ['JavaScript', 'HTML', 'CSS'],
        description: `
      A clean and minimal todo list app allowing users to add, remove, and track tasks easily.
    `,
        role: `
      Developer<br/>
      <ul>
        <li>📝 Built full CRUD operations</li>
        <li>🎨 Designed simple & responsive UI</li>
      </ul>
    `,
    },
    {
        title: 'PHA5E',
        slug: 'pha5e',
        liveUrl: 'https://mrstrange1708.github.io/Pha5e/',
        year: 2023,
        thumbnail: '/Assets/Phase.jpg',
        longThumbnail: '/Assets/Phase.jpg',
        images: ['/Assets/Phase.jpg'],
        techStack: ['JavaScript', 'HTML', 'CSS'],
        description: `
      A static portfolio-style website built with smooth navigation and clean structure.
    `,
        role: `
      Developer<br/>
      <ul>
        <li>🎨 Created UI from scratch</li>
        <li>⚡ Added smooth navigation features</li>
      </ul>
    `,
    },
    {
        title: 'Capstone Project',
        slug: 'capstone-project',
        liveUrl: 'https://cap-stone-projects.vercel.app/',
        year: 2023,
        thumbnail: '/Assets/Capstone.jpg',
        longThumbnail: '/Assets/Capstone.jpg',
        images: ['/Assets/Capstone.jpg'],
        techStack: ['JavaScript', 'HTML', 'CSS'],
        description: `
      A static final-year project featuring structured pages, responsive layout, and clear UI design.
    `,
        role: `
      Developer<br/>
      <ul>
        <li>🖥️ Built all frontend pages</li>
        <li>⚡ Ensured responsive performance</li>
      </ul>
    `,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'React Native Frontend Developer',
        company: 'Apodic Software Solutions LLP',
        duration: 'Sept 2025 - Nov 2025',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Nov 2024 - Dec 2024',
    }
];

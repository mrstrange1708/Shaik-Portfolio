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
  { name: "leetcode", url: "https://leetcode.com/junaidsamishaik/" }
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
    sourceCode: 'https://github.com/mrstrange1708/NovelVerse',
    year: 2025,
    thumbnail: '/projects/Novelverse.png',
    longThumbnail: '/projects/Novelverse.png',
    images: ['/projects/Novelverse.png', '/projects/Novelverse_1.png', '/projects/Novelverse_2.png', '/projects/Novelverse_3.png'],
    techStack: [
      'Next.js',
      "TypeScript",
      'Node.js',
      'Express.js',
      'MySQL',
      'Tailwind CSS',
      'Docker',
      'Git',
      'Vercel',
    ],
    description: `
      Novelverse is a full-stack digital library platform that allows users to explore, search, and read books online. I designed the application to make browsing large book collections smooth and intuitive, with category filters, pagination, and a responsive reading experience across all devices. The project focuses on delivering fast load times, clean UI, and a stable backend to handle different book operations. <br/><br/>
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
        <li>Optimized UI with Tailwind and reusable components</li>
        <li>Responsive layout for desktop and mobile reading</li>
      </ul>
    `,
    role: `
      Full Stack Developer<br/>
      <ul>
        <li>⚙️ Built backend APIs using Express.js & MySQL</li>
        <li>🎨 Created all frontend pages in Next.js and Tailwind CSS</li>
        <li>🚀Managed deployment, environment setup, and optimizations using Vercel and Docker</li>
      </ul>
    `,
  },
  {
    title: 'Stylish Lady Collection',
    slug: 'stylish-lady-collection',
    liveUrl: 'https://stylish-lady-collection.vercel.app/',
    sourceCode: 'https://github.com/mrstrange1708/Stylish_Lady',
    year: 2025,
    thumbnail: '/projects/Stylish.png',
    longThumbnail: '/projects/Stylish.png',
    images: ['/projects/Stylish.png', '/projects/Stylish_1.png', '/projects/Stylish_2.png'],
    techStack: ['Next.js', 'TypeScript', 'Supabase', "Razorpay", 'Tailwind CSS', 'Git', "Vercel"],
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
        <li>Reusable component architecture in React</li>
        <li>JWT Authentication and protected API routes</li>
        <li>Real-time product updates via Supabase</li>
        <li>Payment integration with Razorpay</li>
      </ul>
    `,
    role: `
      Full Stack Developer<br/>
      <ul>
        <li>🖥️ Built frontend UI in React & Tailwind</li>
        <li>🚀 Deployed on Vercel</li>
      </ul>
    `,
  },
  {
    title: 'Finance Flow',
    slug: 'finance-flow',
    liveUrl: 'https://fin.oidelta.com/',
    sourceCode: 'https://github.com/mrstrange1708/FinanceFlow',
    year: 2024,
    thumbnail: '/projects/Financeflow.png',
    longThumbnail: '/projects/Financeflow.png',
    images: ['/projects/Financeflow.png', '/projects/Financeflow_1.png', '/projects/Financeflow_2.png'],
    techStack: [
      'Next.js',
      "Supabase",
      "Google OAuth",
      "JWT",
      "Chart.js",
      'Tailwind CSS',
      'Git',
      'Vercel',
    ],
    description: `
      FinanceFlow is a personal expense tracker built to help users categorize, analyze, and control their spending. <br/><br/>
      Key Features:<br/>
      <ul>
        <li>💸 Income & Expense Tracking with charts</li>
        <li>📊 Category-wise analytics for better insights</li>
        <li>📱 Fully responsive UI for mobile screens</li>
      </ul><br/>
      Technical Highlights:
      <ul>
        <li>JWT Authentication and protected API routes</li>
        <li>Clean component-driven UI in Next.js</li>
        <li>Real-time data sync via Supabase</li>
      </ul>
    `,
    role: `
      Full Stack Developer<br/>
      <ul>
        <li>⚙️ Developed backend APIs & Supabase queries</li>
        <li>🎨 Designed user dashboard in Next.js</li>
        <li>☁️ Managed deployment with Vercel</li>
      </ul>
    `,
  },
  {
    title: 'Task Flow',
    slug: 'task-flow',
    liveUrl: 'https://project-management-caps.vercel.app/',
    sourceCode: 'https://github.com/mrstrange1708/Project-Management_Caps',
    year: 2024,
    thumbnail: '/projects/Taskflow.jpg',
    longThumbnail: '/projects/Taskflow.jpg',
    images: ['/projects/Taskflow.jpg', '/projects/Taskflow_1.png', '/projects/Taskflow_2.png'],
    techStack: ['React.js', 'Node.js', "Express.js", "MongoDB", "Google OAuth", "JWT", 'Tailwind CSS', 'Git', 'Vercel'],
    description: `
      A project management system where users can create, assign, and track tasks with an intuitive dashboard and smooth animations. <br/><br/>
      Key Features:<br/>
      <ul>
        <li>📁 Project & Task creation system</li>
        <li>📅 Deadline & priority management</li>
        <li>🎞️ Framer Motion animations</li>
        <li>📱 Fully responsive interface</li>
      </ul>
      Technical Highlights:
      <ul>
        <li>JWT Authentication and protected API routes</li>
        <li>Clean component-driven UI in React</li>
        <li>Real-time data sync via MongoDB</li>
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
    title: 'Fintech Learning',
    slug: 'fintech-learning',
    liveUrl: 'https://fin-tech-learning.vercel.app/',
    sourceCode: 'https://github.com/mrstrange1708/FinTech-Learning',
    year: 2024,
    thumbnail: '/projects/Fintech.jpg',
    longThumbnail: '/projects/Fintech.jpg',
    images: ['/projects/Fintech.jpg', '/projects/Fintech_1.png', '/projects/Fintech_2.png'],
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
    title: 'Cognify',
    slug: 'cognify',
    liveUrl: 'https://cognify-lemon.vercel.app/',
    sourceCode: 'https://github.com/mrstrange1708/Mind_Map_Builder',
    year: 2024,
    thumbnail: '/projects/Cognify.jpg',
    longThumbnail: '/projects/Cognify.jpg',
    images: ['/projects/Cognify.jpg'],
    techStack: ['React-flow', 'React.js', 'Framer Motion', 'Tailwind CSS', "Firebase", 'Git', 'Vercel'],
    description: `
      Cognify is an interactive mind-map builder that helps users organize thoughts visually using draggable nodes and connectors. <br/><br/>
      Key Features:<br/>
      <ul>
        <li>🧠 Real-time node creation & editing</li>
        <li>🔗 Drag & connect logic using React-Flow</li>
        <li>🎞️ Smooth animations with Framer Motion</li>
        <li>📱 Responsive design for all devices</li>
      </ul>
      Technical Highlights:
      <ul>
        <li>JWT Authentication and protected API routes</li>
        <li>Clean component-driven UI in React</li>
        <li>Real-time data sync via MongoDB</li>
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
    title: 'E-commerce',
    slug: 'ecommerce',
    liveUrl: 'https://mrstrange1708.github.io/E-commerce/',
    sourceCode: 'https://github.com/mrstrange1708/E-commerce',
    year: 2023,
    thumbnail: '/projects/E-commerce.png',
    longThumbnail: '/projects/E-commerce.png',
    images: ['/projects/E-commerce.png'],
    techStack: ['JavaScript', 'HTML', 'CSS', 'Git', 'Vercel'],
    description: `
      A static E-commerce website built with smooth navigation and clean structure.
      <br/><br/>
      Key Features:<br/>
      <ul>
        <li>📱 Responsive design for all devices</li>
      </ul> 
      Technical Highlights:
      <ul>
        <li>Clean component-driven UI in JavaScript</li>
      </ul>
    `,
    role: `
      Developer<br/>
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
    sourceCode: 'https://github.com/mrstrange1708/Tic_Tac_Toe_Project',
    year: 2023,
    thumbnail: '/projects/Tic-tac-toe.jpg',
    longThumbnail: '/projects/Tic-tac-toe.jpg',
    images: ['/projects/Tic-tac-toe.jpg'],
    techStack: ['JavaScript', 'HTML', 'CSS', 'Git', 'Vercel'],
    description: `
      A classic Tic Tac Toe game built with simple game logic and smooth UI interactions. Perfect for practicing core JS fundamentals.
      <br/><br/>
      Key Features:<br/>
      <ul>
        <li>Classic Tic Tac Toe game logic</li>
        <li>📱 Responsive design for all devices</li>
      </ul> 
      Technical Highlights:
      <ul>
        <li>Clean component-driven UI in JavaScript</li>
      </ul>
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
    sourceCode: 'https://github.com/mrstrange1708/To-Do-List',
    year: 2023,
    thumbnail: '/projects/Todos.jpg',
    longThumbnail: '/projects/Todos.jpg',
    images: ['/projects/Todos.jpg'],
    techStack: ['JavaScript', 'HTML', 'CSS', 'Git', 'Vercel'],
    description: `
      A clean and minimal todo list app allowing users to add, remove, and track tasks easily.
      <br/><br/>
      Key Features:<br/>
      <ul>
        <li>📱 Responsive design for all devices</li>
      </ul> 
      Technical Highlights:
      <ul>
        <li>Clean component-driven UI in JavaScript</li>
      </ul>
    `,
    role: `
      Developer<br/>
      <ul>
        <li>🎨 Designed simple & responsive UI</li>
      </ul>
    `,
  },
  {
    title: 'PHA5E',
    slug: 'pha5e',
    liveUrl: 'https://mrstrange1708.github.io/Pha5e/',
    year: 2023,
    thumbnail: '/projects/Phase.jpg',
    longThumbnail: '/projects/Phase.jpg',
    images: ['/projects/Phase.jpg'],
    techStack: ['JavaScript', 'HTML', 'CSS'],
    description: `
      A static portfolio-style website built with smooth navigation and clean structure.
      <br/><br/>
      Key Features:<br/>
      <ul>
        <li>📱 Responsive design for all devices</li>
      </ul> 
      Technical Highlights:
      <ul>
        <li>Clean component-driven UI in JavaScript</li>
      </ul>
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
    thumbnail: '/projects/Capstone.jpg',
    longThumbnail: '/projects/Capstone.jpg',
    images: ['/projects/Capstone.jpg'],
    techStack: ['JavaScript', 'HTML', 'CSS'],
    description: `
      A static final-year project featuring structured pages, responsive layout, and clear UI design.
      <br/><br/>
      Key Features:<br/>
      <ul>
        <li>📱 Responsive design for all devices</li>
      </ul> 
      Technical Highlights:
      <ul>
        <li>Clean component-driven UI in JavaScript</li>
      </ul>
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
    company: 'Codsoft',
    duration: 'Nov 2024 - Dec 2024',
  },
];


export const TIMELINE_DATA = [
  {
    title: '2025',
    content: {
      description: 'Started my journey as a React Native Frontend Developer at Apodic Software Solutions LLP',
      highlights: [
        '📱 Built mobile applications using React Native',
        '⚛️ Implemented responsive UI components',
        '🔧 Worked with modern frontend technologies',
        '🚀 Contributed to production-ready applications',
      ],
      projects: [
        {
          name: 'Novelverse',
          image: '/projects/Novelverse.png',
          description: 'Online open-library platform with Next.js and MySQL',
        },
        {
          name: 'Finance Flow',
          image: '/projects/Financeflow.png',
          description: 'Personal expense tracker with analytics',
        },
        {
          name: 'MERN E-commerce',
          image: '/projects/Stylish.jpg',
          description: 'Full-stack e-commerce with React and MongoDB',
        },
      ],
    },
  },
  {
    title: '2024',
    content: {
      description: 'Worked as a Frontend Developer at Codsoft and built multiple full-stack projects',
      highlights: [
        '💼 Frontend Developer at Codsoft',
        '🛒 Built MERN stack e-commerce platform',
        '📊 Developed project management systems',
        '🎨 Created modern, responsive UIs',
      ],
      projects: [

        {
          name: 'Task Flow',
          image: '/projects/Taskflow.jpg',
          description: 'Project management system with Framer Motion',
        },
        {
          name: 'Cognify',
          image: '/projects/Cognify.jpg',
          description: 'Interactive mind-map builder with React-Flow',
        },
        {
          name: 'Fintech Learning',
          image: '/projects/Fintech.jpg',
          description: 'Financial education platform',
        },
      ],
    },
  },
  {
    title: '2023',
    content: {
      description: 'Started my web development journey and built foundational projects',
      highlights: [
        '🎓 Learned core web technologies',
        '🎮 Built interactive games and applications',
        '📝 Created task management tools',
        '🌐 Developed static websites',
      ],
      projects: [
        {
          name: 'Tic Tac Toe',
          image: '/projects/Tic-tac-toe.jpg',
          description: 'Classic game with vanilla JavaScript',
        },
        {
          name: 'Todo List',
          image: '/projects/Todos.jpg',
          description: 'Task management application',
        },
        {
          name: 'PHA5E',
          image: '/projects/Phase.jpg',
          description: 'Portfolio-style website',
        },
        {
          name: 'Capstone Project',
          image: '/projects/Capstone.jpg',
          description: 'Final-year project with structured pages',
        },
      ],
    },
  },
];
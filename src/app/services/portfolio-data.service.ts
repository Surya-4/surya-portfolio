import { Injectable } from '@angular/core';
import {
  NavLink, HeroStat, AboutDetail,
  SkillCategory, Experience, Project, Achievement
} from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  get exp(): string {
    const time = Date.now() - new Date('2024-06-26T00:00:00').getTime();
    const years = +((time / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1));
    return years.toString();
  }

  readonly navLinks: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  readonly heroStats: HeroStat[] = [
    { num: this.exp, label: 'Years at Accenture' },
    { num: '800+', label: 'Problems Solved' },
    { num: '8.14', label: 'CGPA — IIEST Shibpur' },
  ];

  readonly aboutDetails: AboutDetail[] = [
    { key: 'Location', val: 'Hyderabad' },
    { key: 'Role', val: 'Software Engineer' },
    { key: 'Company', val: 'Accenture' },
    { key: 'Degree', val: 'B.Tech IT — IIEST Shibpur' },
    { key: 'Email', val: 'suryavamsi04@gmail.com' },
    { key: 'Hobbies', val: 'Cricket · Shooting · Movies' },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      icon: '☕',
      title: 'Languages',
      tags: ['Java', 'JavaScript', 'Python', 'C++'],
    },
    {
      icon: '⚙️',
      title: 'Backend',
      tags: ['Spring Boot', 'Node.js', 'Express.js', 'FASTAPI', 'REST'],
    },
    {
      icon: '🎨',
      title: 'Frontend',
      tags: ['Angular', 'React.js', 'HTML5', 'Bootstrap', 'CSS3 / SCSS'],
    },
    {
      icon: '🗄️',
      title: 'Databases',
      tags: ['MongoDB', 'SQL', 'MySQL'],
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      tags: ['Google Cloud Platform', 'Terraform', 'Cloud Security', 'CI/CD Pipelines', 'IaC'],
    },
    {
      icon: '🛠️',
      title: 'Tools & Practices',
      tags: ['Git', 'Postman', 'Agile', 'OOP', 'Functional Programming'],
    },
  ];

  readonly experiences: Experience[] = [
    {
      period: 'Jun 2024 – Present',
      company: 'Accenture',
      location: 'India',
      type: 'Full-time',
      role: 'Advanced Application Engineering Analyst',
      bullets: [
        'Managed Terraform-based cloud infrastructure across 10 shared test environments, provisioning resources and enforcing IAM/ingress policy compliance for 50+ engineering teams.',
        'Diagnosed and eliminated recurring CI/CD integration test failures across cloud services, stabilizing automated staging pipelines and preventing deployment blocks.',
        'Automated temporary credential issuance and privilege-escalation checks in Python and Shell, delivering least-privilege access across 10+ core platform teams.',
        'Engineered lifecycle cleanup scripts in Python across cloud resource types, cutting stale test-resource buildup by 90% and ensuring cross-environment consistency.',
        'Investigated and resolved stockout incidents by analyzing application logs, system metrics, and recent code deployments, isolating root causes and reducing system downtime.',
        'Developed 10+ reusable Bash automation scripts for test-environment diagnostics, cutting manual operational overhead by 20+ hours per platform team.'
      ],
    },
    {
      period: 'May 2023 – Jul 2023',
      company: 'Celebal Technologies',
      location: 'Remote',
      type: 'Internship',
      role: 'ReactJS Intern',
      bullets: [
        'Developed and enhanced frontend components using React.js for assigned project modules.',
        'Debugged UI issues and improved component reusability and overall application performance.',
      ],
    },
  ];

  readonly projects: Project[] = [
    {
      name: 'Distributed Rate Limiter',
      icon: '🚦',
      type: 'Backend · Distributed Systems',
      stack: ['Java', 'Spring Boot', 'Redis', 'Lua', 'Testcontainers'],
      desc: 'Scalable distributed rate limiting service supporting Fixed Window, Sliding Window, and Token Bucket algorithms. Uses atomic Redis Lua scripts to prevent race conditions across distributed instances, with per-client limits, HTTP 429 retry handling, and integration testing.',
      github: 'https://github.com/Surya-4/rate-limiter',
    },
    {
      name: 'DocMind',
      icon: '🤖',
      type: 'AI · Document Intelligence',
      stack: ['React', 'Spring Boot', 'FastAPI', 'FAISS', 'Redis', 'PostgreSQL'],
      desc: 'AI-powered document intelligence platform for querying PDF documents using a RAG pipeline. Combines vector similarity search with LLMs to retrieve relevant content and generate contextual answers, with Redis caching and secure JWT authentication.',
      github: 'https://github.com/Surya-4/docmind',
    },
    {
      name: 'EastErn',
      icon: '🛍️',
      type: 'Full Stack · E-Commerce',
      stack: ['Angular', 'Spring Boot', 'MongoDB', 'Microservices'],
      desc: 'Full-stack e-commerce platform with Angular frontend and Spring Boot microservices. Features secure cookie-based authentication, RBAC, product catalog, cart, and orders management.',
      github: 'https://github.com/Surya-4/EastErn',
    },
    {
      name: 'BlogSpace',
      icon: '✍️',
      type: 'Full Stack · MERN',
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      desc: 'MERN stack blogging platform with user registration, JWT authentication, and public blog viewing. Optimised MongoDB queries and REST API design for fast load times at scale.',
      github: 'https://github.com/Surya-4/blogspace',
    },
    {
      name: 'KnoWeather',
      icon: '🌤️',
      type: 'Frontend · React',
      stack: ['React.js', 'OpenWeatherMap API', 'CSS3'],
      desc: 'React.js weather forecasting app with dynamic UI that adapts to current conditions. Graceful error handling and loading states ensure a robust, reliable user experience.',
      github: 'https://github.com/Surya-4/knoweather',
    },
    {
      name: 'Recognising pattern of mall visiting customers',
      icon: '📊',
      type: 'Unsupervised Machine Learning · Clustering',
      stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn', 'plotly'],
      desc: 'a customer segmentation model using K-Means clustering on mall customer data to group visitors based on Age, Annual Income, and Spending Score. Applied data preprocessing, and Elbow Method to determine optimal clusters, helping identify different customer behavior segments for targeted marketing.',
      github: 'https://github.com/Surya-4/Recognising-pattern-of-mall-visiting-customers',
    },
    {
      name: 'Student result management system',
      icon: '🎓',
      type: 'FullStack · Web Application',
      stack: ['HTML', 'JavaScript', 'CSS3', 'PHP', 'MySQL'],
      desc: 'Developed a Student Result Management System to manage, store, and generate student academic records efficiently. Enables secure result entry, updates, and performance tracking through an organized interface.',
      github: 'https://github.com/Surya-4/student-result-management-system',
    },
    {
      name: 'BukMySho',
      icon: '🎟️',
      type: 'Frontend · React',
      stack: ['React.js', 'TV Maze API'],
      desc: 'Developed a movie ticket booking website inspired by BookMyShow using React, featuring interactive movie listings, show details, and responsive UI design. Focused on building a dynamic and user-friendly frontend experience.',
      github: 'https://github.com/Surya-4/bukmysho',
    },
  ];

  readonly achievements: Achievement[] = [
    {
      icon: '☁️',
      title: 'Google Cloud Digital Leader Certification',
      sub: 'Certified in Google Cloud Digital Leader (CDL), demonstrating foundational knowledge of GCP services, cloud infrastructure, data and AI, security, and Google Cloud’s core technology offerings.',
    },
    {
      icon: '🏅',
      title: '800+ Coding Problems Solved',
      sub: 'Consistent competitive programming across LeetCode, GeeksforGeeks, and CodeChef — covering DSA, dynamic programming, and system design.',
    },
    {
      icon: '🤖',
      title: 'IBM AI Innovation Camp',
      sub: 'Completed IBM\'s Innovation Camp on Artificial Intelligence — exploring AI/ML fundamentals and applied use cases.',
    },
    {
      icon: '📜',
      title: 'DSA Certification — C/C++',
      sub: 'Certified in Data Structures and Algorithms using C/C++, covering core computer science fundamentals and problem-solving patterns.',
    },
  ];
}

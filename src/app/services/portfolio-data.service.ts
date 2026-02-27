import { Injectable } from '@angular/core';
import {
  NavLink, HeroStat, AboutDetail,
  SkillCategory, Experience, Project, Achievement
} from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  readonly navLinks: NavLink[] = [
    { label: 'About',        href: '#about' },
    { label: 'Skills',       href: '#skills' },
    { label: 'Experience',   href: '#experience' },
    { label: 'Projects',     href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact',      href: '#contact' },
  ];

  readonly heroStats: HeroStat[] = [
    { num: '1+',   label: 'Years at Accenture' },
    { num: '800+', label: 'Problems Solved' },
    { num: '8.14', label: 'CGPA — IIEST Shibpur' },
  ];

  readonly aboutDetails: AboutDetail[] = [
    { key: 'Location',  val: 'India' },
    { key: 'Role',      val: 'App Engineering Analyst' },
    { key: 'Company',   val: 'Accenture' },
    { key: 'Degree',    val: 'B.Tech IT — IIEST Shibpur' },
    { key: 'Email',     val: 'suryavamsi04@gmail.com' },
    { key: 'Hobbies',   val: 'Cricket · Kabaddi · Movies' },
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
      tags: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'Microservices'],
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
      tags: ['Terraform', 'Cloud Security', 'CI/CD Pipelines', 'IaC'],
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
        'Developed and maintained RESTful APIs using Java and Spring Boot to support backend microservices, improving system reliability and reducing response latency across multiple service endpoints.',
        'Designed and provisioned cloud test environments using Terraform, enabling consistent infrastructure setup and supporting reliable end-to-end cloud security testing.',
        'Automated secure cleanup of unused cloud resources through scripted pipelines, reducing manual effort and minimising security vulnerabilities and operational costs.',
        'Collaborated with development and cloud operations teams, analysing logs and cloud states to resolve recurring environment failures and ensure release readiness.',
        'Enhanced automated cloud security policy tests, increasing compliance coverage and improving validation accuracy across cloud environments.',
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
      stack: ['HTML', 'JavaScript', 'CSS3', 'PHP' , 'MySQL'],
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

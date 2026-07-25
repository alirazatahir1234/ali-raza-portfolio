import { PortfolioData } from '../models/portfolio.model';

export const PORTFOLIO_DATA: PortfolioData = {
  hero: {
    name: 'Ali Raza Tahir',
    title: 'Lead Full Stack .NET Engineer',
    intro: "Hi, I'm",
    tagline:
      '8+ years of experience building secure, scalable payroll, payment and fleet platforms with .NET 8 / ASP.NET Core, C#, AI integration, Angular, Vue.js, Flutter, Go, microservices and Azure cloud-native architectures.',
    badges: ['.NET 8', 'ASP.NET Core', 'C#', 'AI Integration', 'Angular', 'Flutter', 'Azure'],
    stats: [
      { label: 'Years Experience', value: '8+' },
      { label: 'Projects Completed', value: '20+' },
      { label: 'Followers', value: '1,995+' },
      { label: 'GitHub Repos', value: '18' }
    ],
    viewProjectsHref: '#projects',
    resumeHref: '/Ali-Raza-Tahir-Resume.pdf',
    contactHref: '#contact',
    availability: 'Available for Opportunities',
    profileImage: '/profile.png',
    featuredCertificate: {
      title: 'Certificate of Appreciation',
      issuer: 'Ministry of Human Resources and Emiratisation',
      previewImage: '/certificates/appreciation-certificate-preview.jpg',
      pdfUrl: '/certificates/Appreciation-Certificate.pdf'
    }
  },
  about: {
    heading: 'About Me',
    description:
      'Lead Full Stack .NET Engineer with 8+ years of experience building secure, scalable payroll, payment and fleet platforms across fintech, government and enterprise domains — specializing in .NET 8, ASP.NET Core and C# with AI-assisted workflows and production Flutter mobile apps.',
    highlights: [
      'Primary stack: .NET Core / .NET 8, ASP.NET Core, C#, Blazor, Dapper / Entity Framework and SQL Server.',
      'Also strong in Angular, Vue.js, React.js, Flutter, Go (Golang) and Azure cloud-native delivery.',
      'AI integration experience: LLM/provider APIs, AI copilots, OCR document extraction and intelligent automation in SaaS and fleet platforms.',
      'Built Flutter fleet and driver apps (Riverpod, Dio, Firebase, Google Maps, SignalR) for multi-tenant travel operations.',
      'Deep fintech expertise: payroll processing, accounts payable automation and PCI DSS-compliant payment platforms.',
      'Hands-on expertise with microservices, gRPC, REST APIs and service-to-service integration.',
      'Cloud-native delivery on Azure and AWS with Docker, Kubernetes and CI/CD pipelines.',
      'Implemented secure auth and RBAC systems using OAuth, JWT and EIDA-based OTP workflows.'
    ]
  },
  skills: [
    { name: '.NET 8' },
    { name: '.NET Core' },
    { name: 'ASP.NET Core' },
    { name: 'C#' },
    { name: 'Blazor' },
    { name: 'Entity Framework' },
    { name: 'Dapper' },
    { name: 'Angular' },
    { name: 'Vue.js' },
    { name: 'React.js' },
    { name: 'Flutter' },
    { name: 'Dart' },
    { name: 'Go (Golang)' },
    { name: 'AI Integration' },
    { name: 'LLM APIs' },
    { name: 'OCR / Document AI' },
    { name: 'Microservices' },
    { name: 'gRPC' },
    { name: 'REST APIs' },
    { name: 'SQL Server' },
    { name: 'Oracle' },
    { name: 'PostgreSQL' },
    { name: 'Azure' },
    { name: 'AWS' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'CQRS' },
    { name: 'Clean Architecture' },
    { name: 'OAuth / JWT' },
    { name: 'CI/CD' }
  ],
  projects: [
    {
      title: 'SheikhGo Fleet & Driver (Flutter)',
      summary:
        'Own-product Flutter mobile apps for multi-tenant fleet operations: role-based dashboards, AI Copilot, live GPS maps, trip workflows, attendance, fuel capture, inspections, biometric auth, offline cache and real-time SignalR updates against a shared ASP.NET Core API.',
      tech: ['Flutter', 'Dart', 'AI Copilot', 'Riverpod', 'Firebase', 'Google Maps', 'SignalR'],
      githubUrl: 'https://github.com/alirazatahir1234/Sheikh-Travel-System',
      repoName: 'Sheikh-Travel-System / sheikhGo-Fleet & sheikh-driver',
      imageUrl: '/projects/sheikh-travel.svg',
      status: 'In Progress',
      liveDemoUrl: 'https://www.sheikhgo.com/',
      caseStudyUrl: 'https://github.com/alirazatahir1234/Sheikh-Travel-System'
    },
    {
      title: 'TechBirdsFly',
      summary:
        'AI-powered website builder and multi-service SaaS ecosystem focused on generating modern web applications with automation and intelligent workflows.',
      tech: ['C#', '.NET', 'AI Integration', 'SaaS', 'Automation'],
      githubUrl: 'https://github.com/alirazatahir1234/TechBirdsFly',
      repoName: 'TechBirdsFly',
      imageUrl: '/projects/ai-dashboard.svg',
      status: 'In Progress',
      caseStudyUrl: 'https://github.com/alirazatahir1234/TechBirdsFly'
    },
    {
      title: 'Sheikh Travel System (ERP + API)',
      summary:
        'Own product: multi-tenant fleet and travel operations platform with Angular ERP, ASP.NET Core APIs, AI Copilot / OCR document extraction, GPS/Traccar integration and Flutter field apps for drivers and fleet staff.',
      tech: ['Angular', '.NET 8', 'AI Integration', 'Flutter', 'OCR', 'SignalR'],
      githubUrl: 'https://github.com/alirazatahir1234/Sheikh-Travel-System',
      repoName: 'Sheikh-Travel-System',
      imageUrl: '/projects/sheikh-travel.svg',
      status: 'Live',
      liveDemoUrl: 'https://www.sheikhgo.com/',
      caseStudyUrl: 'https://github.com/alirazatahir1234/Sheikh-Travel-System'
    },
    {
      title: 'Dynamic Webservice Frontend (Angular)',
      summary:
        'Angular-based frontend for dynamic webservice integration, built with modular TypeScript architecture and scalable UI patterns.',
      tech: ['Angular', 'TypeScript', 'Web Services', 'Component Design'],
      githubUrl: 'https://github.com/alirazatahir1234/dynamic-webservice-frontend-angular',
      repoName: 'dynamic-webservice-frontend-angular',
      imageUrl: '/projects/dynamic-webservice.svg',
      status: 'Case Study',
      caseStudyUrl:
        'https://github.com/alirazatahir1234/dynamic-webservice-frontend-angular'
    },
    {
      title: 'Dynamic Webservice Frontend (React)',
      summary:
        'React frontend variant for dynamic webservice workflows with reusable UI modules and clean client-side architecture.',
      tech: ['React.js', 'JavaScript', 'REST APIs', 'UI/UX'],
      githubUrl: 'https://github.com/alirazatahir1234/dynamic-webservice-frontend-react',
      repoName: 'dynamic-webservice-frontend-react',
      imageUrl: '/projects/dynamic-webservice.svg',
      status: 'Case Study',
      caseStudyUrl:
        'https://github.com/alirazatahir1234/dynamic-webservice-frontend-react'
    },
    {
      title: 'Dynamic Webservice Node Backend',
      summary:
        'TypeScript Node.js backend repository supporting dynamic webservice processing and integration logic.',
      tech: ['Node.js', 'TypeScript', 'Backend APIs', 'Integration'],
      githubUrl: 'https://github.com/alirazatahir1234/Dynamic-WebServoce-NodeJs',
      repoName: 'Dynamic-WebServoce-NodeJs',
      imageUrl: '/projects/dynamic-webservice.svg',
      status: 'Case Study',
      caseStudyUrl: 'https://github.com/alirazatahir1234/Dynamic-WebServoce-NodeJs'
    },
    {
      title: 'Dynamic Web Service App',
      summary:
        'Backend-focused .NET project for dynamic web service orchestration and reusable service processing patterns.',
      tech: ['C#', '.NET', 'Service Layer', 'Backend'],
      githubUrl: 'https://github.com/alirazatahir1234/Dynamic-Web-Service-App',
      repoName: 'Dynamic-Web-Service-App',
      imageUrl: '/projects/microservices-api.svg',
      status: 'Case Study',
      caseStudyUrl: 'https://github.com/alirazatahir1234/Dynamic-Web-Service-App'
    },
    {
      title: 'TechBirds API',
      summary:
        'API backend for TechBirds platform designed around scalable services, clean endpoint structure and business workflow support.',
      tech: ['C#', '.NET API', 'Backend Services', 'REST'],
      githubUrl: 'https://github.com/alirazatahir1234/TechBirdsApi',
      repoName: 'TechBirdsApi',
      imageUrl: '/projects/microservices-api.svg',
      status: 'Case Study',
      caseStudyUrl: 'https://github.com/alirazatahir1234/TechBirdsApi'
    },
    {
      title: 'TechBirds Frontend',
      summary:
        'Frontend implementation for TechBirds platform focused on reusable components, responsive UX and API-driven workflows.',
      tech: ['JavaScript', 'Frontend Architecture', 'REST APIs', 'UI Components'],
      githubUrl: 'https://github.com/alirazatahir1234/TechBirds-Frontend',
      repoName: 'TechBirds-Frontend',
      imageUrl: '/projects/ai-dashboard.svg',
      status: 'Case Study',
      caseStudyUrl: 'https://github.com/alirazatahir1234/TechBirds-Frontend'
    },
    {
      title: 'Online Energy Consumption Platform',
      summary:
        'Web platform focused on monitoring and visualizing energy usage patterns with dashboard-style frontend implementation.',
      tech: ['HTML', 'JavaScript', 'Data Visualization', 'Web Dashboard'],
      githubUrl:
        'https://github.com/alirazatahir1234/Online-Energy-Consumption-Platform-master',
      repoName: 'Online-Energy-Consumption-Platform-master',
      imageUrl: '/projects/energy-platform.svg',
      status: 'Case Study',
      caseStudyUrl:
        'https://github.com/alirazatahir1234/Online-Energy-Consumption-Platform-master'
    },
    {
      title: 'Job System',
      summary:
        'C# based project centered on job workflow automation and backend process orchestration.',
      tech: ['C#', '.NET', 'Automation', 'Backend Logic'],
      githubUrl: 'https://github.com/alirazatahir1234/JobSystem',
      repoName: 'JobSystem',
      imageUrl: '/projects/microservices-api.svg',
      status: 'Case Study',
      caseStudyUrl: 'https://github.com/alirazatahir1234/JobSystem'
    },
    {
      title: 'RabbitMQ Generic API',
      summary:
        'Backend API sample demonstrating asynchronous messaging patterns and decoupled communication using RabbitMQ.',
      tech: ['C#', 'ASP.NET API', 'RabbitMQ', 'Messaging'],
      githubUrl: 'https://github.com/alirazatahir1234/RabbitMQGenericAPI-master',
      repoName: 'RabbitMQGenericAPI-master',
      imageUrl: '/projects/microservices-api.svg',
      status: 'Case Study',
      caseStudyUrl: 'https://github.com/alirazatahir1234/RabbitMQGenericAPI-master'
    },
    {
      title: 'Inventory Management System',
      summary:
        'Inventory and operations management repository with business modules for stock and workflow tracking.',
      tech: ['JavaScript', 'Web App', 'Inventory', 'Business Logic'],
      githubUrl: 'https://github.com/alirazatahir1234/Inventory-Management-System-master',
      repoName: 'Inventory-Management-System-master',
      imageUrl: '/projects/default-project.svg',
      status: 'Case Study',
      caseStudyUrl:
        'https://github.com/alirazatahir1234/Inventory-Management-System-master'
    },
    {
      title: 'Library Management System',
      summary:
        'Library operations system repository for cataloging, issuance and management workflows.',
      tech: ['JavaScript', 'Management System', 'CRUD', 'Web'],
      githubUrl: 'https://github.com/alirazatahir1234/Library-Management-System-master',
      repoName: 'Library-Management-System-master',
      imageUrl: '/projects/default-project.svg',
      status: 'Case Study',
      caseStudyUrl: 'https://github.com/alirazatahir1234/Library-Management-System-master'
    }
  ],
  certifications: [
    {
      name: 'Certificate of Appreciation',
      issuer: 'Ministry of Human Resources and Emiratisation (UAE)',
      issued: '30 Sep 2025',
      previewImage: '/certificates/appreciation-certificate-preview.jpg',
      pdfUrl: '/certificates/Appreciation-Certificate.pdf'
    }
  ],
  experience: [
    {
      period: 'Jan 2025 - Present',
      title: 'Lead Full Stack Engineer',
      company: 'Abu Dhabi Ports (Remote)',
      details:
        'Leading development of secure, scalable microservices platforms using .NET 8, ASP.NET Core, Go, Vue.js and Angular with Azure cloud deployment, CI/CD automation and enterprise-grade payment and workflow integrations.'
    },
    {
      period: '2025 - Present',
      title: 'Founder & Full Stack .NET, Flutter & AI Engineer',
      company: 'SheikhGo / Sheikh Travel System (Own Product) — https://www.sheikhgo.com/',
      details:
        'Building my own multi-tenant fleet and travel product end-to-end: ASP.NET Core APIs and Angular ERP with AI integration — AI Copilot, provider-configurable LLM APIs, OCR document extraction — plus Flutter fleet/driver apps with role-based nav, live GPS, trips, attendance and offline-ready field ops.'
    },
    {
      period: 'May 2023 - Feb 2025',
      title: 'Senior Software Engineer',
      company: 'Ministry of Human Resources and Emiratisation (UAE)',
      details:
        'Delivered mission-critical government applications, EIDA OTP and RBAC security systems, MOHRE Wallet modules and workflow automation.'
    },
    {
      period: 'Apr 2022 - Feb 2023',
      title: 'Software Engineer',
      company: 'EBizCharge (Remote)',
      details:
        'Designed and built a secure, high-volume payroll and accounts payable payment platform using Go microservices, gRPC and PCI DSS-compliant fintech architecture with Blazor/Telerik UI.'
    },
    {
      period: 'May 2022 - Dec 2022',
      title: 'Technical Solutions Consultant',
      company: 'Telebu Communications (Remote)',
      details:
        'Designed IVR, call routing and campaign automation systems integrated with CRM/ticketing platforms and analytics reporting.'
    },
    {
      period: 'May 2021 - May 2022',
      title: 'Software Developer',
      company: 'Macrosoft (Lahore)',
      details:
        'Led legacy modernization from Visual FoxPro to .NET Core + Angular, and implemented RabbitMQ/Kafka/Redis with Azure CI/CD pipelines.'
    },
    {
      period: 'Jul 2018 - Apr 2020',
      title: 'Junior Software Developer',
      company: 'University of Sialkot',
      details:
        'Built ERP, LMS, EMS and Library Management systems using ASP.NET MVC, Entity Framework and SQL Server with role-based security.'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institute: 'University of Gujrat',
      period: 'Sep 2015 - Jun 2019',
      location: 'Gujrat, Pakistan'
    }
  ],
  drivingLicenses: [
    {
      category: 'Category B',
      issued: '20 Jun 2025',
      expires: '20 Jun 2027'
    }
  ],
  contact: {
    heading: "Let's work together!",
    blurb:
      'Open to Lead Full Stack .NET Engineer roles focused on secure payroll, payment and fleet platforms with AI integration using .NET 8, ASP.NET Core, Angular, Vue.js and Flutter.',
    phoneSectionTitle: 'My Phone Numbers',
    phones: [
      { display: '+92301-6169209', href: 'tel:+923016169209' },
      { display: '+92317-7368305', href: 'tel:+9233177368305' }
    ],
    emailSectionTitle: 'Email Address',
    email: {
      display: 'Ali.raza.tahir@hotmail.com',
      href: 'mailto:Ali.raza.tahir@hotmail.com'
    },
    links: [
      { label: 'Email Me', href: 'mailto:Ali.raza.tahir@hotmail.com' },
      { label: 'Download CV', href: '/Ali-Raza-Tahir-Resume.pdf' }
    ],
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ali-raza-tahir-0601b21ab/' },
      { label: 'GitHub', href: 'https://github.com/alirazatahir1234' },
      { label: 'WhatsApp', href: 'https://wa.me/923016169209' },
      { label: 'Email', href: 'mailto:Ali.raza.tahir@hotmail.com' }
    ]
  },
  seo: {
    title: 'Ali Raza Tahir | Lead Full Stack .NET Engineer',
    description:
      'Portfolio of Ali Raza Tahir, Lead Full Stack .NET Engineer with 8+ years building secure payroll, payment and fleet platforms with .NET 8, ASP.NET Core, AI integration, Angular, Flutter and Azure.',
    image: '/profile.png',
    url: 'https://www.linkedin.com/in/ali-raza-tahir-0601b21ab/'
  }
};

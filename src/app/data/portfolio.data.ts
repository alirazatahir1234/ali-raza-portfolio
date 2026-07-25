import { PortfolioData } from '../models/portfolio.model';

export const PORTFOLIO_DATA: PortfolioData = {
  hero: {
    name: 'Ali Raza Tahir',
    title: 'Senior Full Stack Engineer (.NET | Flutter | Angular | React | Azure)',
    headline: 'Ali Raza Tahir',
    tagline:
      '8+ years building scalable enterprise applications, mobile apps, AI-powered systems and cloud solutions — specializing in .NET 8, ASP.NET Core, Flutter and Azure.',
    badges: ['.NET 8', 'ASP.NET Core', 'Flutter', 'Angular', 'AI Integration', 'Azure'],
    availabilityChips: [
      'Available for Remote',
      'Open to Relocation',
      'UAE Experience',
      'Immediate Joiner'
    ],
    stats: [
      { label: 'Years Experience', value: '8+' },
      { label: 'Projects Delivered', value: '20+' },
      { label: 'Global + Remote', value: 'Yes' },
      { label: 'Own Product Live', value: 'SheikhGo' }
    ],
    viewProjectsHref: '#projects',
    resumeHref: '/Ali-Raza-Tahir-Resume.pdf',
    contactHref: '#contact',
    scheduleInterviewHref:
      'mailto:Ali.raza.tahir@hotmail.com?subject=Interview%20Request%20—%20Ali%20Raza%20Tahir&body=Hi%20Ali%2C%0A%0AI%20would%20like%20to%20schedule%20an%20interview.%0A%0A',
    availability: 'Available for Opportunities',
    profileImage: '/profile.jpg'
  },
  about: {
    heading: 'About Me',
    description:
      'Lead Full Stack .NET Engineer with 8+ years building secure payroll, payment and fleet platforms across fintech, government and enterprise — specializing in .NET 8, ASP.NET Core and C# with AI-assisted workflows and production Flutter mobile apps. Recognized with a MOHRE Certificate of Appreciation.',
    highlights: [
      'Primary stack: .NET Core / .NET 8, ASP.NET Core, C#, Blazor, Dapper / Entity Framework and SQL Server.',
      'Also strong in Angular, Vue.js, React.js, Flutter, Go (Golang) and Azure cloud-native delivery.',
      'AI integration: LLM provider APIs, AI Copilot, OCR document extraction and intelligent automation (SheikhGo + TechBirdsFly).',
      'Built Flutter fleet and driver apps for multi-tenant travel operations.',
      'Fintech expertise: payroll processing, accounts payable automation and PCI DSS-compliant payment platforms.',
      'Microservices, gRPC, REST APIs, OAuth / JWT and EIDA-based OTP workflows.'
    ]
  },
  skillGroups: [
    {
      category: 'Backend',
      skills: ['.NET 8', '.NET Core', 'ASP.NET Core', 'C#', 'Web API', 'Dapper', 'EF Core', 'SignalR', 'gRPC', 'Microservices']
    },
    {
      category: 'Frontend',
      skills: ['Angular', 'Vue.js', 'React.js', 'Blazor', 'TypeScript', 'JavaScript', 'HTML / CSS']
    },
    {
      category: 'Mobile',
      skills: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Google Maps', 'Hive', 'GoRouter']
    },
    {
      category: 'Database',
      skills: ['SQL Server', 'Oracle', 'PostgreSQL', 'Dapper', 'Entity Framework']
    },
    {
      category: 'Cloud / DevOps',
      skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Azure DevOps']
    },
    {
      category: 'AI',
      skills: ['AI Integration', 'LLM Provider APIs', 'AI Copilot', 'OCR / Document AI', 'Intelligent Automation']
    },
    {
      category: 'Security / Architecture',
      skills: ['OAuth / JWT', 'PCI DSS', 'RBAC', 'EIDA OTP', 'CQRS', 'Clean Architecture', 'Event-Driven']
    }
  ],
  ai: {
    heading: 'AI Solutions',
    blurb:
      'Practical AI integration shipped in production products — not slideware. Focused on copilots, document intelligence and automation wired into .NET and Flutter systems.',
    capabilities: [
      {
        title: 'AI Copilot',
        description:
          'Role-gated AI Copilot in SheikhGo for fleet managers and admins, backed by provider-configurable LLM APIs.'
      },
      {
        title: 'LLM Provider APIs',
        description:
          'Configurable AI provider settings so tenants can wire model keys and capability toggles into the ERP platform.'
      },
      {
        title: 'OCR / Document AI',
        description:
          'Document extraction flows for fleet operations (licenses, compliance docs) integrated with ASP.NET Core APIs.'
      },
      {
        title: 'Intelligent Automation',
        description:
          'AI-assisted workflows in TechBirdsFly — an AI-powered website builder and multi-service SaaS ecosystem.'
      }
    ]
  },
  services: [
    {
      title: 'Enterprise .NET Development',
      description: 'ASP.NET Core APIs, microservices, Clean Architecture and high-volume transactional systems.'
    },
    {
      title: 'Flutter Mobile Apps',
      description: 'Production fleet/driver apps with offline sync, GPS, biometrics and real-time SignalR.'
    },
    {
      title: 'Angular / Vue Frontends',
      description: 'Enterprise ERP and dashboards with RBAC, multi-tenant UX and API-driven modules.'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Azure deployments with Docker, Kubernetes and CI/CD for reliable enterprise releases.'
    },
    {
      title: 'AI Integration',
      description: 'LLM copilots, OCR document intelligence and automation embedded in business products.'
    },
    {
      title: 'API & Microservices',
      description: 'REST, gRPC, messaging (RabbitMQ/Kafka/Redis) and secure OAuth / JWT integrations.'
    },
    {
      title: 'Architecture Consulting',
      description: 'CQRS, DDD, event-driven design and modernization from legacy stacks to .NET + Angular.'
    }
  ],
  projects: [
    {
      slug: 'sheikhgo-erp',
      title: 'SheikhGo Fleet ERP + API',
      summary:
        'Own-product multi-tenant fleet and travel operations platform with Angular ERP, ASP.NET Core APIs, AI Copilot / OCR and Flutter field apps.',
      problem:
        'Fleet operators need one system for vehicles, drivers, trips, GPS, maintenance and compliance — with mobile field workflows and AI assistance.',
      features: [
        'Live GPS tracking & trip analytics',
        'Driver & vehicle management',
        'Maintenance & compliance modules',
        'AI Copilot & OCR document extraction',
        'Multi-tenant RBAC & audit'
      ],
      achievements: [
        'Shipped live product at www.sheikhgo.com',
        'Unified Angular ERP with ASP.NET Core APIs and SignalR',
        'Integrated Traccar GPS and Flutter field clients'
      ],
      architectureLayers: ['Angular ERP', 'ASP.NET Core API', 'SQL Server', 'SignalR', 'Traccar GPS', 'AI / OCR', 'Flutter Apps'],
      lessons: [
        'Shared permission model between ERP and Flutter reduces drift.',
        'Provider-configurable AI keeps tenants flexible without hard-coding one LLM vendor.'
      ],
      tech: ['.NET 8', 'ASP.NET Core', 'Angular', 'SQL Server', 'SignalR', 'AI Integration', 'Flutter'],
      githubUrl: 'https://github.com/alirazatahir1234/Sheikh-Travel-System',
      repoName: 'Sheikh-Travel-System',
      imageUrl: '/projects/sheikh-travel.svg',
      featured: true,
      status: 'Live',
      liveDemoUrl: 'https://www.sheikhgo.com/',
      caseStudyPath: '/projects/sheikhgo-erp'
    },
    {
      slug: 'sheikhgo-flutter',
      title: 'SheikhGo Fleet & Driver (Flutter)',
      summary:
        'Own-product Flutter apps for fleet staff and drivers: role-based nav, live GPS, trips, attendance, fuel/inspections, biometric auth and offline-ready sync.',
      problem:
        'Drivers and field staff cannot rely on desktop ERP — they need mobile-first workflows with GPS, offline tolerance and the same RBAC as the web product.',
      features: [
        'Role-based dashboards & navigation',
        'Live GPS maps & trip workflows',
        'Attendance, fuel & inspections',
        'Biometric lock & offline cache',
        'AI Copilot for Admin / Fleet Manager'
      ],
      achievements: [
        'Dual Flutter apps (fleet + driver) on shared ASP.NET Core APIs',
        'Riverpod, Dio, Firebase, Google Maps and SignalR in production paths',
        'Store assets and release checklist prepared for distribution'
      ],
      architectureLayers: ['Flutter', 'Riverpod', 'Dio / REST', 'ASP.NET Core', 'SignalR', 'Firebase', 'SQL Server'],
      lessons: [
        'Role-first bottom nav mirrors ERP permissions and cuts support confusion.',
        'Offline outbox + SignalR keeps field ops usable on weak networks.'
      ],
      tech: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Google Maps', 'SignalR', 'AI Copilot'],
      githubUrl: 'https://github.com/alirazatahir1234/Sheikh-Travel-System',
      repoName: 'sheikhGo-Fleet & sheikh-driver',
      imageUrl: '/projects/sheikh-travel.svg',
      featured: true,
      status: 'In Progress',
      liveDemoUrl: 'https://www.sheikhgo.com/',
      caseStudyPath: '/projects/sheikhgo-flutter'
    },
    {
      slug: 'techbirdsfly',
      title: 'TechBirdsFly',
      summary:
        'AI-powered website builder and multi-service SaaS ecosystem focused on generating modern web applications with automation and intelligent workflows.',
      problem:
        'Teams need faster ways to generate and operate modern web apps without assembling every service from scratch.',
      features: [
        'AI-assisted website generation',
        'Multi-service SaaS workflows',
        '.NET backend services',
        'Automation-oriented delivery'
      ],
      achievements: [
        'Active .NET + AI integration product under development',
        'Shared platform direction with TechBirds API and Frontend repositories'
      ],
      architectureLayers: ['Web Frontend', '.NET API', 'AI Integration', 'Automation Services'],
      lessons: [
        'AI features work best when tied to clear product workflows, not standalone demos.'
      ],
      tech: ['C#', '.NET', 'AI Integration', 'SaaS', 'Automation'],
      githubUrl: 'https://github.com/alirazatahir1234/TechBirdsFly',
      repoName: 'TechBirdsFly',
      imageUrl: '/projects/ai-dashboard.svg',
      featured: true,
      status: 'In Progress',
      caseStudyPath: '/projects/techbirdsfly'
    }
  ],
  experience: [
    {
      period: 'Jan 2025 - Present',
      title: 'Lead Full Stack Engineer',
      company: 'Abu Dhabi Ports',
      location: 'Remote',
      type: 'Remote',
      details:
        'Leading development of secure, scalable microservices platforms using .NET 8, ASP.NET Core, Go, Vue.js and Angular with Azure cloud deployment.',
      achievements: [
        'Architecting payment and workflow platforms with .NET 8, ASP.NET Core, Go, Vue.js and Angular on Azure.',
        'Delivering Docker, Kubernetes and CI/CD pipelines for enterprise releases.',
        'Implementing OAuth 2.0 / JWT and RBAC across distributed microservices.',
        'Mentoring engineers and driving code-review standards.'
      ]
    },
    {
      period: '2025 - Present',
      title: 'Founder & Full Stack .NET, Flutter & AI Engineer',
      company: 'SheikhGo / Sheikh Travel System (Own Product)',
      location: 'www.sheikhgo.com',
      type: 'Own Product',
      details:
        'Building my own multi-tenant fleet and travel product end-to-end with ASP.NET Core, Angular, Flutter and AI.',
      achievements: [
        'Shipped live product at https://www.sheikhgo.com/.',
        'Built ASP.NET Core APIs and Angular ERP with AI Copilot, OCR and provider-configurable LLM APIs.',
        'Delivered Flutter fleet/driver apps with GPS, trips, attendance, fuel/inspections and offline sync.',
        'Integrated SignalR realtime updates and Traccar GPS tracking.'
      ]
    },
    {
      period: 'May 2023 - Feb 2025',
      title: 'Senior Software Engineer',
      company: 'Ministry of Human Resources and Emiratisation',
      location: 'UAE',
      type: 'UAE',
      details:
        'Delivered mission-critical government applications, EIDA OTP and RBAC security systems, MOHRE Wallet modules and workflow automation.',
      achievements: [
        'Delivered government payroll and MOHRE Wallet modules at national scale.',
        'Implemented EIDA OTP authentication, advanced RBAC and secure API integrations.',
        'Led workflow automation reducing manual processing time by 60%.',
        'Awarded Certificate of Appreciation (Sep 2025) for outstanding engineering contributions.'
      ]
    },
    {
      period: 'Apr 2022 - Feb 2023',
      title: 'Software Engineer – Fintech & Payments',
      company: 'EBizCharge',
      location: 'Remote',
      type: 'Remote',
      details:
        'Designed and built a secure, high-volume payroll and accounts payable payment platform.',
      achievements: [
        'Built payroll/AP payment platform with Go microservices and gRPC.',
        'Implemented PCI DSS-compliant architecture with full audit trails.',
        'Delivered Vue.js and Blazor/Telerik payment dashboards.',
        'Integrated OAuth 2.0 / JWT across distributed payment services.'
      ]
    },
    {
      period: 'May 2022 - Dec 2022',
      title: 'Technical Solutions Consultant',
      company: 'Telebu Communications',
      location: 'Remote',
      type: 'Remote',
      details:
        'Designed IVR, call routing and campaign automation systems integrated with CRM/ticketing platforms.',
      achievements: [
        'Architected IVR, call routing and campaign automation with CRM/ticketing integrations.',
        'Built analytics dashboards using React.js and Vue.js for campaign performance reporting.'
      ]
    },
    {
      period: 'May 2021 - May 2022',
      title: 'Software Developer',
      company: 'Macrosoft',
      location: 'Lahore, Pakistan',
      type: 'On-site',
      details:
        'Led legacy modernization from Visual FoxPro to .NET Core + Angular.',
      achievements: [
        'Led Visual FoxPro → .NET Core + Angular modernization, improving performance 3×.',
        'Implemented RabbitMQ, Kafka and Redis with Azure DevOps CI/CD pipelines.'
      ]
    },
    {
      period: 'Jul 2018 - Apr 2020',
      title: 'Junior Software Developer',
      company: 'University of Sialkot',
      location: 'Sialkot, Pakistan',
      type: 'On-site',
      details:
        'Built ERP, LMS, EMS and Library Management systems using ASP.NET MVC, Entity Framework and SQL Server.',
      achievements: [
        'Built ERP, LMS, EMS and Library systems for 3,000+ users.',
        'Implemented RBAC, automated reporting and audit logging.'
      ]
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
  certifications: [
    {
      name: 'Certificate of Appreciation',
      issuer: 'Ministry of Human Resources and Emiratisation (UAE)',
      issued: '30 Sep 2025',
      previewImage: '/certificates/appreciation-certificate-preview.jpg',
      pdfUrl: '/certificates/Appreciation-Certificate.pdf'
    }
  ],
  contact: {
    heading: "Let's work together!",
    blurb:
      'Open to Senior / Lead Full Stack .NET Engineer roles worldwide — remote or relocation — focused on enterprise, fintech, fleet and AI-enabled products.',
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
    location: 'Pakistan · Open to All Countries & Remote',
    timezone: 'PKT (UTC+5) · Flexible for global overlap (EU / US / Middle East / APAC)',
    availability: 'Immediate joiner · Available for remote interviews worldwide',
    links: [
      {
        label: 'Schedule Interview',
        href: 'mailto:Ali.raza.tahir@hotmail.com?subject=Interview%20Request%20—%20Ali%20Raza%20Tahir'
      },
      { label: 'Email Me', href: 'mailto:Ali.raza.tahir@hotmail.com' },
      { label: 'Download CV', href: '/Ali-Raza-Tahir-Resume.pdf' }
    ],
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ali-raza-tahir-0601b21ab/' },
      { label: 'GitHub', href: 'https://github.com/alirazatahir1234' },
      { label: 'WhatsApp', href: 'https://wa.me/923016169209' },
      { label: 'Email', href: 'mailto:Ali.raza.tahir@hotmail.com' },
      { label: 'SheikhGo', href: 'https://www.sheikhgo.com/' }
    ]
  },
  seo: {
    title: 'Ali Raza Tahir | Senior Full Stack .NET & Flutter Developer',
    description:
      'Senior Full Stack Engineer with 8+ years of experience in .NET, Flutter, Angular, React, Azure, AI and enterprise solutions. Open to remote roles worldwide · own product SheikhGo.',
    image: '/profile.jpg',
    url: 'https://www.linkedin.com/in/ali-raza-tahir-0601b21ab/'
  }
};

export function getProjectBySlug(slug: string) {
  return PORTFOLIO_DATA.projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return PORTFOLIO_DATA.projects.filter((project) => project.featured);
}

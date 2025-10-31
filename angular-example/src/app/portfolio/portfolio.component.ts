import { Component, OnInit } from '@angular/core';

// Interfaces
interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillCategory {
  category: string;
  emoji: string;
  skills: Skill[];
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  image?: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  // State
  darkMode = false;
  activeSection = 'home';

  // Portfolio Data
  name = 'Akash Manda';
  role = 'Full-Stack Developer';
  bio = 'Passionate about building scalable, efficient, and user-focused applications using modern technologies like React, Angular, Node.js, Python, and more.';

  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      emoji: '🎨',
      skills: [
        { name: 'React.js', icon: '⚛️', level: 90 },
        { name: 'Angular', icon: '🅰️', level: 85 },
        { name: 'Vue.js', icon: '💚', level: 80 },
        { name: 'Tailwind CSS', icon: '🎨', level: 95 },
        { name: 'TypeScript', icon: '📘', level: 88 },
        { name: 'JavaScript', icon: '📜', level: 92 }
      ]
    },
    {
      category: 'Backend',
      emoji: '⚙️',
      skills: [
        { name: 'Node.js', icon: '🟢', level: 85 },
        { name: 'Python/Flask', icon: '🐍', level: 90 },
        { name: 'Express.js', icon: '🚂', level: 88 },
        { name: 'Django', icon: '🎯', level: 82 },
        { name: 'REST APIs', icon: '🔌', level: 90 },
        { name: 'GraphQL', icon: '◼️', level: 78 }
      ]
    },
    {
      category: 'Database',
      emoji: '🗄️',
      skills: [
        { name: 'MongoDB', icon: '🍃', level: 85 },
        { name: 'PostgreSQL', icon: '🐘', level: 88 },
        { name: 'MySQL', icon: '🐬', level: 82 },
        { name: 'Redis', icon: '📮', level: 75 },
        { name: 'Firebase', icon: '🔥', level: 80 }
      ]
    },
    {
      category: 'DevOps',
      emoji: '🚀',
      skills: [
        { name: 'Docker', icon: '🐳', level: 85 },
        { name: 'Git/GitHub', icon: '📦', level: 92 },
        { name: 'CI/CD', icon: '🔄', level: 80 },
        { name: 'AWS', icon: '☁️', level: 75 },
        { name: 'Linux', icon: '🐧', level: 82 }
      ]
    }
  ];

  projects: Project[] = [
    {
      title: 'Employee Salary Prediction',
      description: 'Machine Learning model using Python to predict employee salaries based on various factors',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      category: 'Machine Learning'
    },
    {
      title: 'Full-Stack Portfolio',
      description: 'Modern responsive portfolio built with React, Angular, Tailwind CSS showcasing full-stack capabilities',
      tech: ['React', 'Angular', 'Tailwind CSS', 'TypeScript'],
      category: 'Web Development'
    },
    {
      title: 'RESTful API Service',
      description: 'Scalable REST API with authentication, database integration, and comprehensive documentation',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'Backend'
    },
    {
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat application with user authentication and message persistence',
      tech: ['Angular', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'Full-Stack'
    }
  ];

  education: Education[] = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Bharat Institute of Engineering And Technology',
      period: '2021 - Present'
    },
    {
      degree: 'Intermediate (XII)',
      institution: 'Sri Chaitanya College',
      period: '2019 - 2021'
    },
    {
      degree: 'High School (X)',
      institution: 'Masterji High School',
      period: '2018 - 2019'
    }
  ];

  certifications: Certification[] = [
    {
      title: 'Python Developer Certificate',
      issuer: 'Pinnacle Labs',
      date: '2024'
    },
    {
      title: 'Geodata Processing using Python and Machine Learning',
      issuer: 'IIRS (Dehradun)',
      date: '2024'
    },
    {
      title: 'Full-Stack Web Development',
      issuer: 'Online Certification',
      date: '2023'
    },
    {
      title: 'Angular Development',
      issuer: 'Modern Frontend Framework Certification',
      date: '2023'
    }
  ];

  socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/AkashManda854/My-Portfolio', icon: '💻' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manda-akash-53654331b/', icon: '💼' },
    { name: 'Twitter', url: 'https://x.com/AKASHMANDA31392', icon: '🐦' },
    { name: 'Instagram', url: 'https://www.instagram.com/mr_akhil_366_/?hl=en', icon: '📷' },
    { name: 'Email', url: 'mailto:mandaakash33@gmail.com', icon: '📧' }
  ];

  hobbies = [
    { name: 'Music', icon: '🎵' },
    { name: 'Exploring', icon: '🗺️' },
    { name: 'Researching', icon: '🔍' },
    { name: 'Reading', icon: '📚' },
    { name: 'Coding', icon: '💻' },
    { name: 'Gaming', icon: '🎮' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Load dark mode preference from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      this.darkMode = savedDarkMode === 'true';
      this.updateDarkMode();
    }
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.updateDarkMode();
    localStorage.setItem('darkMode', this.darkMode.toString());
  }

  private updateDarkMode(): void {
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  scrollToSection(sectionId: string): void {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}

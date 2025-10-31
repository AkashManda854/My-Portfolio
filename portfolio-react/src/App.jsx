import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const skills = {
    frontend: [
      { name: 'React.js', icon: '⚛️', level: 90 },
      { name: 'Angular', icon: '🅰️', level: 85 },
      { name: 'Vue.js', icon: '💚', level: 80 },
      { name: 'Tailwind CSS', icon: '🎨', level: 95 },
      { name: 'TypeScript', icon: '📘', level: 88 },
      { name: 'HTML5/CSS3', icon: '🌐', level: 95 },
      { name: 'JavaScript', icon: '📜', level: 92 }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', level: 85 },
      { name: 'Python/Flask', icon: '🐍', level: 90 },
      { name: 'Express.js', icon: '🚂', level: 88 },
      { name: 'Django', icon: '🎯', level: 82 },
      { name: 'REST APIs', icon: '🔌', level: 90 },
      { name: 'GraphQL', icon: '◼️', level: 78 }
    ],
    database: [
      { name: 'MongoDB', icon: '🍃', level: 85 },
      { name: 'PostgreSQL', icon: '🐘', level: 88 },
      { name: 'MySQL', icon: '🐬', level: 82 },
      { name: 'Redis', icon: '📮', level: 75 },
      { name: 'Firebase', icon: '🔥', level: 80 }
    ],
    devops: [
      { name: 'Docker', icon: '🐳', level: 85 },
      { name: 'Git/GitHub', icon: '📦', level: 92 },
      { name: 'CI/CD', icon: '🔄', level: 80 },
      { name: 'AWS', icon: '☁️', level: 75 },
      { name: 'Linux', icon: '🐧', level: 82 },
      { name: 'Nginx', icon: '🌐', level: 78 }
    ],
    tools: [
      { name: 'VS Code', icon: '💻', level: 95 },
      { name: 'Webpack/Vite', icon: '⚡', level: 85 },
      { name: 'Jest/Testing', icon: '🧪', level: 82 },
      { name: 'Postman', icon: '📬', level: 88 },
      { name: 'Figma', icon: '🎨', level: 75 }
    ]
  }

  const projects = [
    {
      title: 'Employee Salary Prediction',
      description: 'Machine Learning model using Python to predict employee salaries based on various factors',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      category: 'Machine Learning'
    },
    {
      title: 'Full-Stack Portfolio',
      description: 'Modern responsive portfolio built with React, Tailwind CSS showcasing full-stack capabilities',
      tech: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
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
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'Full-Stack'
    }
  ]

  const certifications = [
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
    }
  ]

  const education = [
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
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/AkashManda854/My-Portfolio', icon: '💻' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manda-akash-53654331b/', icon: '💼' },
    { name: 'Twitter', url: 'https://x.com/AKASHMANDA31392', icon: '🐦' },
    { name: 'Instagram', url: 'https://www.instagram.com/mr_akhil_366_/?hl=en', icon: '📷' },
    { name: 'Email', url: 'mailto:mandaakash33@gmail.com', icon: '📧' }
  ]

  const hobbies = [
    { name: 'Music', icon: '🎵' },
    { name: 'Exploring', icon: '🗺️' },
    { name: 'Researching', icon: '🔍' },
    { name: 'Reading', icon: '📚' },
    { name: 'Coding', icon: '💻' },
    { name: 'Gaming', icon: '🎮' }
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Akash Manda
            </h1>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('home')}
                className={`px-3 py-2 rounded-lg transition-colors ${activeSection === 'home' ? 'bg-light-blue' : darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                🏠 Home
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`px-3 py-2 rounded-lg transition-colors ${activeSection === 'skills' ? 'bg-light-green' : darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                💡 Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-3 py-2 rounded-lg transition-colors ${activeSection === 'projects' ? 'bg-light-orange' : darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                🚀 Projects
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className={`px-3 py-2 rounded-lg transition-colors ${activeSection === 'education' ? 'bg-light-violet' : darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                🎓 Education
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 rounded-lg transition-colors ${activeSection === 'contact' ? 'bg-light-red' : darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                📬 Contact
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'} hover:opacity-80 transition-opacity`}
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-32 pb-20 px-4 ${darkMode ? 'gradient-rainbow-dark' : 'gradient-rainbow-light'}`}>
        <div className="container mx-auto text-center">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Akash Manda
          </h1>
          <p className={`text-2xl md:text-3xl mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            Full-Stack Developer
          </p>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Passionate about building scalable, efficient, and user-focused applications using modern technologies like React, Angular, Node.js, Python, and more.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg hover:shadow-xl transition-shadow`}
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            💻 Full-Stack Skills
          </h2>
          
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-12">
              <h3 className={`text-2xl font-bold mb-6 capitalize ${darkMode ? 'text-light-blue' : 'text-gray-800'}`}>
                {category === 'frontend' && '🎨 Frontend'}
                {category === 'backend' && '⚙️ Backend'}
                {category === 'database' && '🗄️ Database'}
                {category === 'devops' && '🚀 DevOps & Tools'}
                {category === 'tools' && '🛠️ Development Tools'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillList.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{skill.icon}</span>
                      <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-light-blue to-light-indigo h-3 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className={`text-right mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {skill.level}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            🚀 Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-light-blue text-gray-900' : 'bg-light-blue text-white'}`}>
                    {project.category}
                  </span>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-lg text-sm ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} shadow`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            🎓 Education & Certifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-light-green' : 'text-gray-800'}`}>
                📚 Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}
                  >
                    <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {edu.institution}
                    </p>
                    <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-light-violet' : 'text-gray-800'}`}>
                🏆 Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}
                  >
                    <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {cert.title}
                    </h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {cert.issuer}
                    </p>
                    <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="mt-12">
            <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-light-orange' : 'text-gray-800'}`}>
              🎯 Hobbies & Interests
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.name}
                  className={`px-6 py-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <span className="text-3xl">{hobby.icon}</span>
                  <p className={`mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {hobby.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${darkMode ? 'gradient-rainbow-dark' : 'gradient-rainbow-light'}`}>
        <div className="container mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            📬 Get In Touch
          </h2>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            Let's connect and build something amazing together!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-lg font-semibold`}
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
        <div className="container mx-auto text-center">
          <p className="text-lg">
            © {new Date().getFullYear()} Akash Manda. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Built with React ⚛️, Tailwind CSS 🎨, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

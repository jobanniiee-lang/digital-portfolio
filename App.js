import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Terminal,
  Cpu,
  Globe,
  Menu,
  X,
  ChevronDown,
  Award,
  BookOpen,
  Wrench,
  CheckCircle,
  PenTool,
  Heart,
  Play,
  Youtube,
} from "lucide-react";

// --- Data Constants ---

const PERSONAL_INFO = {
  name: "Jovan Riel Pepito Bargamento",
  title: "Technical Support & Digital Fabrication",
  tagline:
    "To explore new areas, gain experience, and utilize my technical skills to achieve organizational goals.",
  about:
    "I am a dedicated Technical Vocational Livelihood graduate specializing in Computer Systems Servicing (CSS), currently pursuing Drafting Technology. I have practical experience in digital fabrication environments and a strong foundation in computer maintenance. I possess excellent interpersonal and time management skills, and I am eager to work in a dynamic, stable organization where I can contribute and grow.",
  email: "jovanriel.bargamento@g.msuiit.edu.ph",
  location: "Prk 2B, Pindugangan, Tipanoy, Iligan City",
  phone: "0953-249-7413 / 0970-846-7580",
  profileImage: "Gemini_Generated_Image_cf1k8rcf1k8rcf1k.jpg", // Ensure this file is in your public folder
};

const SKILLS = [
  {
    name: "Computer Skills",
    icon: <Terminal size={24} />,
    items: [
      "System Reformatting",
      "Word Processing",
      "Hardware Repair",
      "Troubleshooting",
      "Editing",
    ],
  },
  {
    name: "Digital Fabrication",
    icon: <Cpu size={24} />,
    items: ["3D Printing", "Laser Cutting", "CNC Milling", "FabLab Operations"],
  },
  {
    name: "Drafting & Design",
    icon: <PenTool size={24} />,
    items: [
      "AutoCAD",
      "Architectural Design",
      "Civil Design",
      "Structural Designs",
    ],
  },
  {
    name: "Interpersonal",
    icon: <Globe size={24} />,
    items: [
      "Communication",
      "Problem-Solving",
      "Time Management",
      "Collaboration",
      "Goal Setting",
    ],
  },
  {
    name: "Interests",
    icon: <Heart size={24} />,
    items: [
      "Structural Designs",
      "Computer Games",
      "Hiking",
      "Pets",
      "Recreational Activities",
    ],
  },
];

const EXPERIENCES = [
  {
    title: "FabLab Mindanao Immersion",
    role: "Work Immersion Trainee",
    description:
      "Completed intensive training at the College of Engineering and Technology, MSU-IIT. Gained hands-on experience in digital fabrication technologies including 3D printing and laser cutting operations.",
    tags: ["Jan 2020 - Feb 2020", "MSU-IIT", "Digital Fab"],
    link: "#",
  },
  {
    title: "Technical Vocational Livelihood",
    role: "CSS Student Specialist",
    description:
      "Specialized track focusing on Computer Systems Servicing. Developed core competencies in installing, maintaining, and repairing computer systems and networks.",
    tags: ["2019 - 2020", "Hardware", "Networking"],
    link: "#",
  },
];

const CERTIFICATIONS = [
  {
    title: "Computer Systems Servicing NCII",
    issuer: "Technical Education and Skills Development Authority (TESDA)",
    date: "Issued December 13, 2024",
    description:
      "Certified competent in installing and configuring computer systems, setting up computer networks and servers, and maintaining and repairing computer systems and networks.",
    competencies: [
      "Install & Configure Systems",
      "Set-up Computer Networks",
      "Set-up Computer Servers",
      "Maintain & Repair Systems",
    ],
    image: "nc2.jpg", // Ensure this file is in your public folder
  },
];

const EDUCATION = [
  {
    school:
      "Mindanao State University - Iligan Institute of Technology (MSU-IIT)",
    level: "College",
    year: "Aug 2023 — Present",
    details: "BTVTED - Drafting Technology",
    awards: [],
  },
  {
    school: "Iligan City National High School",
    level: "Senior High School",
    year: "2019 — 2020",
    details: "Technical Vocational Livelihood – CSS",
    awards: [
      "Graduate with Honours",
      "Outstanding Performance Award – TVL - CSS",
    ],
  },
  {
    school: "Iligan City National High School",
    level: "Junior High School",
    year: "2014 — 2018",
    details: "General Secondary Education",
    awards: [],
  },
  {
    school: "Francisco Lluch Laya Memorial Integrated School",
    level: "Elementary",
    year: "2008 — 2014",
    details: "Primary Education",
    awards: [],
  },
];

const FEATURED_VIDEO = {
  title: "OJT Video",
  description: "A closer look at my work and projects.",
  videoId: "Q037bISDrZs", // Video ID from the URL you provided
};

const REFERENCES = [
  {
    name: "Ms. Jacquelyn Suzanne A. Escalante",
    role: "Teacher I / ICT Coordinator",
    contact: "0917-797-5384",
  },
  { name: "Mrs. Emily C. Incon", role: "Teacher II", contact: "0926-894-9065" },
  {
    name: "Mr. Dexter Ken P. Lopera",
    role: "Internal Operation Manager, FabLab",
    contact: "0906-844-2242",
  },
];

// --- Components ---

const Navbar = ({
  activeSection,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Video", id: "video" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <Wrench className="text-blue-500" size={28} />
            <span className="font-bold text-xl text-white tracking-tight">
              Digital Portfolio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? "text-blue-400 bg-slate-800"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <img
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.name}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-800 shadow-2xl object-cover mx-auto ring-4 ring-blue-500/20"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none"; // Hide if image fails to load
              }}
            />
          </div>

          <h2 className="text-blue-500 font-medium text-lg mb-4 tracking-wide uppercase">
            Hello, I'm {PERSONAL_INFO.name}
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            {PERSONAL_INFO.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("experience")}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
            >
              View My Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-3 bg-transparent border border-slate-600 text-slate-300 rounded-full font-semibold hover:border-white hover:text-white transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-400 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Based in {PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Open to Work & Dynamic Roles</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            {SKILLS.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-400">
                  {skillGroup.icon}
                  <h3 className="font-semibold text-xl text-white">
                    {skillGroup.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-blue-500" /> Certifications
          </h3>
          <div className="grid gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-blue-500/30 rounded-xl p-6 shadow-lg shadow-blue-900/10 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-blue-400 font-medium">{cert.issuer}</p>
                  </div>
                  <div className="px-4 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-200 text-sm font-medium whitespace-nowrap">
                    {cert.date}
                  </div>
                </div>
                <p className="text-slate-400 mb-6">{cert.description}</p>

                {/* Certificate Image - Only shown if available */}
                {cert.image && (
                  <div className="mb-6 rounded-lg overflow-hidden border border-slate-700 bg-slate-950">
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-auto hover:opacity-90 transition-opacity"
                      onError={(e) => {
                        e.target.parentElement.style.display = "none"; // Hide container if image fails
                      }}
                    />
                  </div>
                )}

                <div>
                  <p className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Core Competencies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.competencies.map((comp, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700"
                      >
                        <CheckCircle size={14} className="text-green-500" />{" "}
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education History */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <BookOpen className="text-blue-500" /> Academic History
          </h3>
          <div className="space-y-8">
            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500"></div>
                <div className="mb-1 text-sm text-blue-400 font-semibold uppercase tracking-wider">
                  {edu.year}
                </div>
                <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                <p className="text-slate-300 font-medium mb-2">
                  {edu.level} — {edu.details}
                </p>

                {edu.awards.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.awards.map((award, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-yellow-300 bg-yellow-900/20 rounded-full border border-yellow-900/30"
                      >
                        <Award size={14} /> {award}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & Training
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="text-blue-400 font-medium">{exp.role}</div>
                </div>
                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section id="video" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Youtube className="text-red-500" size={40} />{" "}
            {FEATURED_VIDEO.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {FEATURED_VIDEO.description}
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800 bg-slate-900">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${FEATURED_VIDEO.videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact & References
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <Mail size={20} className="text-blue-500" />
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-5 h-5 flex items-center justify-center text-blue-500 font-bold text-xs border border-blue-500 rounded-full">
                    P
                  </div>
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Globe size={20} className="text-blue-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">References</h3>
              <div className="space-y-4">
                {REFERENCES.map((ref, idx) => (
                  <div
                    key={idx}
                    className="border-b border-slate-800 last:border-0 pb-3 last:pb-0"
                  >
                    <p className="text-white font-medium">{ref.name}</p>
                    <p className="text-sm text-slate-500">{ref.role}</p>
                    <p className="text-sm text-blue-400">{ref.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none resize-none"
                  placeholder="Hello..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 ${
                  submitted
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } disabled:opacity-70`}
              >
                {isSubmitting
                  ? "Sending..."
                  : submitted
                  ? "Message Sent!"
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Wrench className="text-blue-500" size={24} />
          <span className="font-bold text-xl text-white tracking-tight">
            Jovan Riel.
          </span>
        </div>

        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
          reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Automatically inject Tailwind CSS for styling
  useEffect(() => {
    if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }
  }, []);

  // Handle scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "education",
        "experience",
        "video",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64, // Adjust for fixed navbar height
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Education />
        <Experience />
        <VideoSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

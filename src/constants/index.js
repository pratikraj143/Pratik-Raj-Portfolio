import project1 from "../assets/projects/buy&blast.png";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like Html, Css, JavaScript, React, as well as back-end technologies like Node.js, Express, MongoDB, and SQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack MERN developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including HTML, CSS, JavaScript React, Node.js, Express, MySQL, and MongoDB, GIt, Github. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const educationData = [
  {
    course: "MCA",
    institution: "National Institute of Technology, Kurukshetra",
    board: "National Institute of Technology",
    year: "2026 (Pursuing)",
    cgpa: "8.19 (Upto 4th sem)",
    icon: "FaUniversity",
  },
  {
    course: "BCA (Computer Application)",
    institution: "College of Commerce, Arts and Science, Patna, Bihar",
    board: "Patliputra University",
    year: "2023",
    cgpa: "68.6%",
    icon: "FaUniversity",
  },
  {
    course: "12ᵗʰ",
    institution: "Holy mission sec school, Patna, BIHAR",
    board: "CBSE",
    year: "2020",
    cgpa: "72.8%",
    icon: "FaSchool",
  },
  {
    course: "10ᵗʰ",
    institution: "Vishashvi public school, Patna, Bihar",
    board: "CBSE",
    year: "2018",
    cgpa: "72.6%",
    icon: "FaHome",
  },
];

export const PROJECTS = [
  {
  title: "Buy and Sell Platform",
  image: project1,
  description:
    "A web platform inspired by college WhatsApp groups for trading used items. It allows users to list products, upload images, and chat in a WhatsApp-like interface for an engaging and user-friendly experience.",
  technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Cloudinary"],
},
{
  title: "Doctor Appointment Booking System",
  image: project2,
  description:
    "A complete full-stack doctor appointment booking system built using the MERN stack. Includes features like user and doctor authentication, appointment scheduling, admin dashboard, and responsive UI.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS" ,"Cloudinary"],
  },
 {
  title: "Web-Based Attendance System",
  image: project3, 
  description:
    "A real-time attendance system using face recognition. Built with DeepFace for image processing, Node.js for backend, and MongoDB for storing attendance records. Supports student, teacher, and admin roles, with downloadable Excel reports.",
  technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Python", "DeepFace"],
},
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React","Tailwind CSS","Framer Motion"],
  },
  {
  title: "Decoding Destiny",
  image: project5,
  description:
    "Collaborated with colleagues to develop a Java-based project applying astrological science concepts through API integration. The system interprets astrological data to provide insightful predictions and recommendations.",
  technologies: ["Java", "API Integration", "Astrological Science"],
},
{
  title: "TCS YEP (Youth Employment Program)",
  image: project6,
  description:
    "Completed a 22-day training program by Tata Consultancy Services aimed at enhancing employability skills in youth. Focused on professional communication, workplace readiness, and handling real-world challenges.",
  technologies: ["Soft Skills", "Communication", "Professional Training"],
  company: "Tata Consultancy Services",
  duration: "22 days"
}

];

export const CONTACT = {
  address: "Arya Samaj Road, Agarpur, Lalganj, Vaishali, Bihar, India",
  phoneNo: "+91 7082980041",
  email: "pratikraj143aj@gmail.com",
};

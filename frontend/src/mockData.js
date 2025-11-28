// Data untuk portfolio
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const personalInfo = {
  name: "Mumtaz Kholafiyan Alfan",
  title: "Full Stack Developer & UI/UX Designer",
  location: "Yogyakarta, Indonesia",
  phone: "+62 858 0121 4943",
  email: "mumtazalfan1307@gmail.com",
  profileImage: "/placeholder-profile.jpg",
  aboutImage: "/placeholder-about.jpg",
  bio: "Saya adalah Full Stack Developer dan UI/UX Designer dengan passion dalam membangun aplikasi web yang modern, responsif, dan user-friendly. Dengan pengalaman dalam berbagai teknologi frontend dan backend, saya fokus menghadirkan solusi digital yang efektif dan estetis.",
  socialMedia: {
    github: "https://github.com/mumtazalfan",
    linkedin: "https://linkedin.com/in/mumtazalfan",
    instagram: "https://instagram.com/mumtazalfan",
    facebook: "https://facebook.com/mumtazalfan",
    twitter: "https://twitter.com/mumtazalfan"
  }
};

export const skills = {
  frontend: [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 85 },
    { name: "Vue.js", level: 75 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Bootstrap", level: 80 }
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "PHP", level: 75 },
    { name: "Python", level: 70 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Firebase", level: 70 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "UI/UX Design", level: 85 },
    { name: "Figma", level: 80 }
  ],
  categories: [
    { name: "Frontend", percentage: 95 },
    { name: "Backend", percentage: 80 },
    { name: "Design", percentage: 85 },
    { name: "Soft Skills", percentage: 75 }
  ]
};

export const experiences = [
  {
    id: 1,
    title: "Praktik Kerja Lapangan",
    company: "BAPPERIDA Kulon Progo",
    location: "Kulon Progo, Yogyakarta",
    duration: "Oktober 2025 - Januari 2026",
    description: "Praktik Kerja Lapangan di Badan Perencanaan Riset Daerah selama 4 bulan, mengembangkan sistem informasi dan aplikasi web untuk kebutuhan internal.",
    technologies: ["React", "Node.js", "AWS", "MongoDB"],
    type: "internship"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "Yogyakarta, Indonesia",
    duration: "2018 - 2020",
    description: "Mengembangkan antarmuka pengguna untuk berbagai klien dari berbagai industri. Fokus pada pengalaman pengguna yang optimal dan performa aplikasi yang tinggi. Bekerja dengan desainer untuk mengimplementasikan desain yang menarik dan fungsional.",
    technologies: ["JavaScript", "Vue.js", "CSS", "Webpack", "SASS", "Jest"],
    type: "work"
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "Startup Company",
    location: "Yogyakarta, Indonesia",
    duration: "2017 - 2018",
    description: "Bekerja dalam tim pengembangan produk untuk membangun platform e-commerce. Bertanggung jawab atas pengembangan frontend dan integrasi dengan backend. Mempelajari best practices dalam pengembangan web.",
    technologies: ["HTML/CSS", "jQuery", "PHP", "MySQL", "Git", "Bootstrap"],
    type: "work"
  }
];

export const projects = [
  {
    id: 1,
    title: "Website Perangkat Saya",
    category: "Personal Project",
    year: "2025",
    description: "Website interaktif yang menampilkan informasi detail tentang perangkat handphone dan laptop yang saya gunakan sehari-hari, lengkap dengan spesifikasi dan review.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Socket.io"],
    image: "/placeholder-project1.jpg",
    gallery: ["/placeholder-project1-1.jpg", "/placeholder-project1-2.jpg", "/placeholder-project1-3.jpg"]
  },
  {
    id: 2,
    title: "Website Belajar Server",
    category: "School Project",
    year: "2025",
    description: "Platform pembelajaran untuk mengkonfigurasi DNS Server, Web Server, dan WordPress menggunakan VM Ubuntu 22. Menyediakan tutorial step-by-step dan dokumentasi lengkap.",
    technologies: ["Vue.js", "Firebase", "Vuetify", "PWA", "Vuex", "Chart.js"],
    image: "/placeholder-project2.jpg",
    gallery: ["/placeholder-project2-1.jpg", "/placeholder-project2-2.jpg", "/placeholder-project2-3.jpg"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    category: "Personal Project",
    year: "2019",
    description: "Dashboard cuaca interaktif dengan visualisasi data real-time, prediksi cuaca, dan notifikasi. Mengintegrasikan API cuaca dan menampilkan data dalam bentuk grafik dan peta interaktif.",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API", "Leaflet", "Service Worker"],
    image: "/placeholder-project3.jpg",
    gallery: ["/placeholder-project3-1.jpg", "/placeholder-project3-2.jpg", "/placeholder-project3-3.jpg"]
  }
];

export const education = [
  {
    id: 1,
    institution: "SMK Negeri 2 Pengasih",
    degree: "Teknik Jaringan Komputer dan Telekomunikasi",
    duration: "2023 - 2026",
    description: "Menguasai sistem jaringan komputer baik software maupun hardware. Aktif dalam berbagai kegiatan ekstrakurikuler dan kompetisi teknologi.",
    status: "current"
  },
  {
    id: 2,
    institution: "MTs Negeri 1 Kulon Progo",
    degree: "Kelas A",
    duration: "2020 - 2023",
    description: "Lulusan dengan nilai ASPD tertinggi di MTsN 1 Kulon Progo angkatan 2023",
    status: "completed"
  },
  {
    id: 3,
    institution: "SD Negeri Pepen",
    degree: "Pendidikan Dasar",
    duration: "2014 - 2020",
    description: "Lulusan sekolah dasar dengan prestasi akademik yang baik",
    status: "completed"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    description: "Sertifikasi profesional dalam Generative AI, mempelajari konsep dan implementasi AI generatif dalam berbagai use case."
  }
];

// Real API function untuk contact form submission
export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

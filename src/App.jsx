import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import maylaPic from "./assets/mayla.png";
import kelasrisetPic from "./assets/kelasriset.png";
import globalPic from "./assets/global.png";
import eduresearchPic from "./assets/eduresearch.png";
import internalitPic from "./assets/internalit.png";
import dashboardPic from "./assets/dashboard.png";
import gamanagementPic from "./assets/gamanagement.png";

// data
const PROJECTS = [
  {
    id: 1,
    name: "KelasRiset",
    tag: "MVP 2.1",
    period: "Des 2025 – Mar 2026",
    desc: "Revamp platform management learning dengan tampilan yang lebih modern, clean, dan responsive.",
    contribution: "Landing Page Revamp · Pricing Redesign · UI Improvement",
    outcome: "Visual consistency meningkat, navigasi lebih intuitif, dan interface yang sepenuhnya responsif.",
    stack: ["HTML", "CSS", "Figma"],
    accent: "#0071E3",
    image: kelasrisetPic,
    link: "https://kelasriset.id",
  },
  {
    id: 2,
    name: "Global Educativa.id",
    tag: "Platform",
    period: "April 2026",
    desc: "Platform edukasi dengan interface professional yang dirancang untuk audience global.",
    contribution: "Frontend Development · Interface Design ",
    outcome: "UI modern dan professional dengan visual clarity yang meningkat signifikan.",
    stack: ["React JS", "TailwindCSS", "Three.js", "GSAP"],
    accent: "#5E5CE6",
    image: globalPic,
    link: "https://global.educativa.id/",
  },
  {
    id: 3,
    name: "EduResearch AI",
    tag: "AI Platform",
    period: "Apr 2026 – Sekarang",
    desc: "Platform AI education yang menggabungkan teknologi dan usability dalam satu experience.",
    contribution: "AI Platform Interface · Frontend Architecture · Interaction Design",
    outcome: "Arsitektur frontend scalable dengan pola interaksi AI yang intuitif.",
    stack: ["React JS", "TailwindCSS", "Framer Motion"],
    accent: "#30B0C7",
    image: eduresearchPic,
    link: "https://dev-research.educativa.id/",
  },
  {
    id: 4,
    name: "Dashboard Internal IT",
    tag: "Prototype",
    period: "Mei 2026",
    desc: "Prototype dashboard internal dengan fokus pada keterbacaan data dan efisiensi workflow.",
    contribution: "Dashboard Prototype · Data Visualization · Workflow Experience",
    outcome: "Hierarki data yang jelas dan experience dashboard yang modern.",
    stack: ["Figma"],
    accent: "#34C759",
    image: internalitPic,
    link: "https://www.figma.com/proto/3nfpUVrEN4BfwRpuTm4WoD/Wireframe?page-id=0%3A1&node-id=2137-508&viewport=-4267%2C320%2C0.14&t=CYfmbAfqvjQN3prx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2137%3A508"
  },
  {
    id: 5,
    name: "Dashboard Absen",
    tag: "Monitoring",
    period: "Mar – Apr 2026",
    desc: "Dashboard monitoring absensi dengan interface yang clean dan mudah dipahami.",
    contribution: "Monitoring Dashboard · Attendance Interface · Dashboard Usability",
    outcome: "Usability meningkat dengan experience monitoring yang clean dan intuitif.",
    stack: ["HTML", "CSS", "JS"],
    accent: "#FF9F0A",
    image: dashboardPic,
  },
  {
    id: 6,
    name: "GA Management System",
    tag: "Efisiensi Operasional Perusahaan",
    period: "April 2026",
    desc: "Integrated GA management system dengan konsep akses data yang lebih terstruktur, satu pintu, transparan dan real time.",
    contribution: "System Interface · Scalable UI · Integration Flow",
    outcome: "Sistem UI terstruktur dengan akses data terintegrasi dan alur operasional transparan.",
    stack: ["HTML", "CSS", "JS"],
    accent: "#FF375F",
    image: gamanagementPic,
  },
];

const TECH = [
  { name: "React JS", icon: "⚛️" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "Framer Motion", icon: "👾" },
  { name: "GSAP", icon: "⚡" },
  { name: "Threejs", icon: "🔥" },
  { name: "HTML", icon: "🎯" },
  { name: "CSS", icon: "✨" },
  { name: "Figma", icon: "✦" },
  { name: "Git", icon: "⌥" },
];

const STATS = [
  { value: "6+", label: "Internal Project", sub: "Lintas departemen" },
  { value: "2×", label: "Best FE/UI UX Mentor", sub: "Diakui oleh Intern FE & Intern UI/UX" },
  { value: "Top 5", label: "EduBisa Nominee", sub: "Dipilih Manajemen" },
  { value: "Most", label: "Growth Person", sub: "Dipilih melalui voting oleh EduTeam" },
];

const ACHIEVEMENTS = [
  {
    title: "2× Best Front-End & UI/UX Mentor",
    desc: "Dipercaya sebagai mentor dengan fokus pada frontend implementation, UI thinking, dan problem solving.",
    icon: "🏆",
    color: "#0071E3",
  },
  {
    title: "Top 5 EduBisa Nominee",
    desc: "GA Management System berhasil masuk dalam nominasi Top 5 EduBisa di bulan April berdasarkan inovasi, dan 4 kriteria EduAward",
    icon: "⭐",
    color: "#5E5CE6",
  },
  {
    title: "Intern Maganghub Terbaik",
    desc: "Mendapatkan Nilai Akhir dengan score 98,  dengan rata rata nilai 100 untuk Skor Kinerja KPI dan tidak ada yang kurang dari 90",
    icon: "🌟",
    color: "#5E0CE2",
  },
  {
    title: "Most Growth Mindset Person",
    desc: "Awarded 'Most Growth Mindset'. Diapresiasi atas komitmen tinggi dalam mempelajari konteks produk yang kompleks dengan cepat, serta dorongan konstan untuk memberikan output terbaik di setiap project",
    icon: "💡",
    color: "#9E22E2",
  },
  {
    title: "Proactive Product Initiative & Problem Solving ",
    desc: "Tidak hanya berfokus pada implementasi, tetapi juga aktif mengidentifikasi permasalahan operasional dan menginisiasi solusi digital melalui pengembangan GA Management System dan Dashboard Absen.",
    icon: "◈",
    color: "#30B0C7",
  },
  {
    title: "Cross-Team Collaboration",
    desc: "Bekerja bersama dengan semua tim untuk memastikan visual dan implementation tetap selaras.",
    icon: "◉",
    color: "#34C759",
  },
];

const timelineData = [
  {
    name: "MVP 2.1 - KelasRiset",
    period: "Des 2025 – Mar 2026",
    tag: "Platform Revamp",
    bullets: [
      "Melakukan revamp pada beberapa halaman utama seperti Landing Page dan Pricing Page.",
      "Meningkatkan visual consistency dan user experience secara keseluruhan.",
      "Membangun interface responsif modern yang dioptimalkan untuk semua ukuran layar.",
    ],
  },
  {
    name: "Global Educativa.id",
    period: "April 2026",
    tag: "Platform Layanan Akademik dan Riset Internasional",
    bullets: [
      "Membangun tampilan frontend dengan visual yang modern dan professional.",
      "Membangun design menggunakan standar design internasional ",
      "Meningkatkan visual clarity di seluruh alur utama pengguna.",
    ],
  },
  {
    name: "EduResearch AI",
    period: "Apr 2026 – Sekarang",
    tag: "AI Education Platform",
    bullets: [
      "Mendesain dan mengembangkan interface platform AI education yang fokus pada usability.",
      "Membuat flowchart di bagian chatbot.",
      "Membangun arsitektur frontend scalable yang siap untuk pertumbuhan fitur ke depan.",
    ],
  },
  {
    name: "Dashboard Absen",
    period: "Mar – Apr 2026",
    tag: "Monitoring System - Belum Terimplementasi",
    bullets: [
      "Membangun dashboard monitoring absensi dengan tampilan yang clean dan mudah digunakan.",
      "Merancang experience monitoring yang intuitif untuk penggunaan sehari-hari.",
      "Memudahkan HR untuk melakukan rekap kehadiran EduTeam setiap harinya.",
    ],
  },
  {
    name: "Dashboard Internal IT",
    period: "Mei 2026",
    tag: "Operations IT Dashboard - Belum Terimplementasi",
    bullets: [
      "Membuat prototype dashboard internal untuk membantu visualisasi data operasional.",
      "Merancang experience dashboard modern dengan hierarki informasi yang kuat.",
    ],
  },
  {
    name: "GA Management System",
    period: "April 2026",
    tag: "Enterprise System  - Belum Terimplementasi",
    bullets: [
      "Membuat interface untuk sistem GA management terintegrasi.",
      "Digerakkan oleh visi produk: 'One Gate. All Data. Transparansi dan Real Time Access.'",
      "Mengubah dari spreadsheet menjadi dashboard yang terstruktur",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Tentang", "Pengalaman", "Proyek", "Stack"];
  const hrefs = ["about", "experience", "projects", "stack"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? "bg-white/80 backdrop-blur-2xl border-b border-black/[0.06] shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#1D1D1F] flex items-center justify-center text-xs font-semibold text-white tracking-tight">
            M
          </div>
          <span className="text-[#1D1D1F] font-semibold text-sm tracking-tight">Mayla</span>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${hrefs[i]}`}
              className="text-sm text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,113,227,0.06) 0%, transparent 60%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-5">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-black/[0.08] mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] animate-pulse" />
          <span className="text-xs text-[#6E6E73] tracking-wide font-medium">
            Front-End Developer Intern · MagangHub Batch 1
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1D1D1F] leading-[1.07] tracking-tight mb-6"
        >
          Mendesain Interface.
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #0071E3 0%, #5E5CE6 100%)" }}
          >
            Membangun Experience.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-xl mx-auto text-lg text-[#6E6E73] leading-relaxed mb-10"
        >
          Front-end developer yang fokus membangun produk digital yang scalable dan meaningful lewat kombinasi design thinking dan engineering modern.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-full bg-[#0071E3] text-white font-semibold text-sm tracking-wide shadow-lg shadow-blue-500/20 hover:bg-[#0077ED] transition-colors duration-200"
          >
            Lihat Project →
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-full bg-[#F5F5F7] text-[#1D1D1F] font-semibold text-sm tracking-wide hover:bg-[#E8E8ED] transition-colors duration-200 border border-black/[0.06]"
          >
            Perjalanan Saya
          </motion.a>
        </motion.div>

        {/* Laptop mockup */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative flex justify-center"
        >
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-2xl"
          >
            <div className="w-full bg-[#F5F5F7] rounded-2xl border border-black/[0.08] shadow-2xl shadow-black/10 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-black/[0.05]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[#F5F5F7] rounded-md px-3 py-1 text-xs text-[#AEAEB2] max-w-xs mx-auto text-center border border-black/[0.06]">
                    mayla.portfolio.dev
                  </div>
                </div>
              </div>
              <div className="h-48 md:h-56 bg-white flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 p-4 space-y-3">
                  <div className="h-3 rounded-full w-1/3 bg-[#0071E3]/10" />
                  <div className="h-2.5 rounded-full w-2/3 bg-black/[0.04]" />
                  <div className="h-2.5 rounded-full w-1/2 bg-black/[0.04]" />
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {["#0071E3", "#5E5CE6", "#30B0C7"].map((c, i) => (
                      <div key={i} className="h-14 rounded-xl border border-black/[0.06]"
                        style={{ background: `${c}08` }} />
                    ))}
                  </div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-10 h-10 rounded-2xl bg-[#1D1D1F] flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                    M
                  </div>
                  <p className="text-xs text-[#AEAEB2] tracking-widest uppercase">Building with purpose</p>
                </div>
              </div>
            </div>
            <div className="w-[106%] h-3 bg-[#E8E8ED] -ml-[3%] rounded-b-lg border-x border-b border-black/[0.06]" />
            <div className="w-[120%] h-1.5 bg-[#F5F5F7] -ml-[10%] rounded-b-xl border-x border-b border-black/[0.04]" />
          </motion.div>
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-12 blur-3xl opacity-30"
            style={{ background: "radial-gradient(ellipse, #0071E3, transparent)" }}
          />
        </motion.div> */}

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-14 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#AEAEB2] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-6 bg-gradient-to-b from-[#AEAEB2] to-transparent"
          />
        </motion.div> */}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs text-center text-[#0071E3] tracking-widest uppercase font-semibold">Tentang</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — photo */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-[#F5F5F7] aspect-[4/5] border border-black/[0.06]">
                <img
                  src={maylaPic}
                  alt="Mayla"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div style={{ display: "none" }}
                  className="absolute inset-0 flex-col items-center justify-center bg-[#F5F5F7]">
                  <div className="w-20 h-20 rounded-2xl bg-[#1D1D1F] flex items-center justify-center text-3xl font-bold text-white mb-3">M</div>
                  <p className="text-[#6E6E73] text-sm">Mayla</p>
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/40 to-transparent">
                  <p className="text-white font-semibold">Mayla</p>
                  <p className="text-white/70 text-sm">Front-End Developer Intern</p>
                  <p className="text-white/50 text-xs mt-0.5">MagangHub · Batch 1 · Nov 2025 – Mei 2026</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-8 bg-white border border-black/[0.08] rounded-2xl px-4 py-3 shadow-lg shadow-black/5"
              >
                <p className="text-xs text-[#AEAEB2]">Recognition</p>
                <p className="text-[#1D1D1F] font-semibold text-sm">2× Best Mentor</p>
                <p className="text-[#FF9F0A] text-xs">⭐ Top 5 EduBisa</p>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i * 0.1}
                  className="bg-[#F5F5F7] rounded-2xl p-4 border border-black/[0.04] hover:bg-[#EBEBF0] transition-colors duration-200"
                >
                  <p className="text-2xl font-bold text-[#1D1D1F]">{s.value}</p>
                  <p className="text-sm text-[#1D1D1F] font-medium mt-0.5">{s.label}</p>
                  <p className="text-xs text-[#AEAEB2] mt-0.5">{s.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] leading-tight tracking-tight mb-5">
                Interface yang baik bukan cuma karena tampilannya keren,{" "}
                <span style={{ color: "#0071E3" }}>namun juga terasa nyaman saat digunakan.</span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={1}
              className="space-y-1"
            >
              {[
                {
                  icon: "◈",
                  title: "End-to-End Product Execution (UI/UX to Code)",
                  desc: "Berperan ganda dalam merancang arsitektur visual di Figma sekaligus menerjemahkannya ke dalam kode (HTML/CSS/React/Tailwind) dengan akurasi 90-100%.",
                },
                {
                  icon: "◉",
                  title: "Fast Learner dan Proaktif",
                  desc: "Terbiasa bekerja dengan ritme cepat dan efisien, mampu menyelesaikan timeline pengembangan 3 bulan dalam waktu 1 bulan. Kecepatan eksekusi ini memberikan ruang bagi saya untuk proaktif menginisiasi solusi digital pada sistem operasional internal lainnya.",
                },
                {
                  icon: "◆",
                  title: "Detail Oriented",
                  desc: "Menerapkan standar kualitas yang tinggi soal tampilan dan experience.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i * 0.12}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-[#F5F5F7] transition-all duration-200"
                >
                  <span className="text-[#0071E3] text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-[#1D1D1F] font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-[#6E6E73] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ project, index, isLast }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp} custom={index * 0.08}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.4 }}
          onClick={() => setExpanded(!expanded)}
          className="w-3.5 h-3.5 rounded-full border-2 border-[#0071E3] bg-white cursor-pointer z-10 mt-1 shadow-sm shadow-blue-200"
        />
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-[#0071E3]/20 to-transparent mt-2" />}
      </div>

      <div className="pb-10 flex-1 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="group">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-xs text-[#0071E3] font-medium bg-[#0071E3]/8 px-3 py-1 rounded-full border border-[#0071E3]/15">
              {project.period}
            </span>
            <span className="text-xs text-[#AEAEB2]">{expanded ? "▲" : "▼"}</span>
          </div>
          <h3 className="text-lg font-bold text-[#1D1D1F] mb-0.5 group-hover:text-[#0071E3] transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-[#AEAEB2] mb-3">{project.tag}</p>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="bg-[#F5F5F7] border border-black/[0.05] rounded-2xl p-4 space-y-2.5">
                  {project.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0071E3] mt-2 flex-shrink-0" />
                      <p className="text-sm text-[#6E6E73] leading-relaxed">{b}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#F5F5F7]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs text-[#0071E3] tracking-widest uppercase font-semibold">Pengalaman</span>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0.5}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">
            6 Bulan. 6 Produk.
            <br />
            <span style={{ color: "#0071E3" }}>Banyak proses dan improvement.</span>
          </h2>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <div className="flex items-center gap-3 px-4 py-2.5 bg-white border border-black/[0.06] rounded-2xl shadow-sm">
              <div className="w-7 h-7 rounded-xl bg-[#F5F5F7] flex items-center justify-center text-sm">🏢</div>
              <div>
                <p className="text-[#1D1D1F] font-semibold text-sm">MagangHub</p>
                <p className="text-[#AEAEB2] text-xs">Batch 1 · Nov 2025 – Mei 2026</p>
              </div>
            </div>
            <div className="px-4 py-2 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20">
              <p className="text-[#0071E3] text-xs font-semibold">Frontend Developer Intern</p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-2xl bg-white rounded-3xl border border-black/[0.05] p-8 shadow-sm">
          {timelineData.map((project, i) => (
            <TimelineItem key={i} project={project} index={i} isLast={i === timelineData.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const cardContent = (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp} custom={index * 0.08}
      onHoverStart={() => project.link && setHovered(true)}
      onHoverEnd={() => project.link && setHovered(false)}
      className={`group bg-white border border-black/[0.06] rounded-3xl overflow-hidden ${
        project.link 
          ? "hover:shadow-xl hover:shadow-black/[0.06] cursor-pointer" 
          : "cursor-default"
      } transition-all duration-500 h-full`}
    >
      {/* Mockup top */}
      <div className="relative h-48 bg-[#F5F5F7] overflow-hidden">
        <div className="absolute inset-4 bg-white rounded-xl border border-black/[0.06] overflow-hidden shadow-sm flex flex-col">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/[0.05] bg-white flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
            <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
            <div className="w-2 h-2 rounded-full bg-[#28C840]" />
            <div className="flex-1 mx-2 bg-[#F5F5F7] rounded h-2.5 border border-black/[0.04]" />
          </div>
          <div className="flex-1 overflow-hidden relative bg-white flex items-center justify-center">
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="p-3 space-y-2 w-full">
                <div className="h-3 rounded-full w-2/3" style={{ background: `${project.accent}18` }} />
                <div className="h-2.5 rounded-full w-full bg-black/[0.04]" />
                <div className="h-2.5 rounded-full w-3/4 bg-black/[0.04]" />
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-10 rounded-lg border border-black/[0.05]"
                      style={{ background: `${project.accent}08` }} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}10, transparent 70%)` }}
        />

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-black/[0.08] text-[#1D1D1F] shadow-sm">
            {project.tag}
          </span>
        </div>

        {/* Arrow on hover */}
        {project.link && (
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-xs shadow-sm"
            style={{ color: project.accent }}
          >
            →
          </motion.div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-[#1D1D1F] font-bold text-base leading-tight">{project.name}</h3>
          <p className="text-[#AEAEB2] text-xs mt-0.5">{project.period}</p>
        </div>

        <p className="text-[#6E6E73] text-sm leading-relaxed mb-4">{project.desc}</p>

        <div className="border-t border-black/[0.04] pt-4 space-y-2.5">
          <div>
            <p className="text-xs text-[#AEAEB2] uppercase tracking-wider mb-1">Kontribusi</p>
            <p className="text-xs text-[#6E6E73]">{project.contribution}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded-lg bg-[#F5F5F7] text-[#6E6E73] border border-black/[0.04]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full transition-transform duration-300 hover:-translate-y-1">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

function Projects() {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs text-[#0071E3] tracking-widest uppercase font-semibold">Proyek</span>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0.5}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">
            Project yang Dibangun Dengan
            <br />
            <span style={{ color: "#5E5CE6" }}>Purpose dan Detail.</span>
          </h2>
          <p className="text-[#6E6E73] max-w-lg text-sm leading-relaxed">
            Setiap project punya challenge yang berbeda. Dari improving user flow, membangun dashboard yang lebih readable, sampai membuat interface AI yang tetap terasa sederhana untuk digunakan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="py-32 bg-[#F5F5F7]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs text-[#0071E3] tracking-widest uppercase font-semibold">Recognition</span>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0.5}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-3">
            Diakui karena konsistensi
            <br />
            <span style={{ color: "#0071E3" }}>dan kualitas kerja.</span>
          </h2>
          <p className="text-[#AEAEB2] text-sm italic">
            "Recognition earned through consistency, execution, and attention to detail."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i * 0.1}
              whileHover={{ y: -3 }}
              className="bg-white border border-black/[0.06] rounded-3xl p-6 hover:shadow-lg hover:shadow-black/[0.05] transition-all duration-400"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 border border-black/[0.05]"
                  style={{ background: `${a.color}10` }}
                >
                  {a.icon}
                </div>
                <div>
                  <h3 className="text-[#1D1D1F] font-bold text-base mb-2 leading-tight">{a.title}</h3>
                  <p className="text-[#6E6E73] text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
              {/* Top accent line */}
              <div className="mt-5 h-px rounded-full" style={{ background: `linear-gradient(90deg, ${a.color}30, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="stack" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs text-[#0071E3] tracking-widest uppercase font-semibold">Tech Stack</span>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0.5}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-3">
            Tools yang Sering digunakan.
          </h2>
          <p className="text-[#6E6E73] text-sm">Stack modern yang scalable, performant, dan menghasilkan interface yang indah.</p>
        </motion.div>

        {/* Marquee 1 */}
        <div className="relative overflow-hidden mb-3">
          <motion.div
            animate={{ x: [0, -1100] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 w-max"
          >
            {[...TECH, ...TECH, ...TECH].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2.5 px-5 py-3.5 bg-[#F5F5F7] border border-black/[0.05] rounded-2xl flex-shrink-0 hover:bg-[#EBEBF0] transition-all duration-200 cursor-default"
                style={{ minWidth: 130 }}
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-[#1D1D1F] font-medium text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Marquee 2 reverse */}
        <div className="relative overflow-hidden mb-12">
          <motion.div
            animate={{ x: [-1100, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 w-max"
          >
            {[...TECH.slice().reverse(), ...TECH.slice().reverse(), ...TECH.slice().reverse()].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2.5 px-5 py-3.5 bg-[#F5F5F7]/60 border border-black/[0.04] rounded-2xl flex-shrink-0 hover:bg-[#F5F5F7] transition-all duration-200 cursor-default"
                style={{ minWidth: 130 }}
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-[#AEAEB2] font-medium text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {TECH.map((tech, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i * 0.07}
              whileHover={{ scale: 1.03, y: -3 }}
              className="bg-[#F5F5F7] border border-black/[0.04] rounded-2xl p-5 text-center hover:bg-[#EBEBF0] transition-all duration-200 cursor-default"
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <p className="text-[#1D1D1F] font-semibold text-xs">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="py-40 bg-[#F5F5F7] relative overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(0,113,227,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="h-px bg-black/[0.06]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/[0.08] mb-10 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] animate-pulse" />
          <span className="text-xs text-[#6E6E73] tracking-wide">Terbuka untuk peluang full-time</span>
        </motion.div> */}

        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0.5}
          className="text-4xl md:text-6xl font-bold text-[#1D1D1F] leading-tight tracking-tight mb-6"
        >
          Membangun Experience
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #0071E3 0%, #5E5CE6 100%)" }}
          >
            yang Punya Impact.
          </span>
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={1}
          className="text-lg text-[#6E6E73] mb-3 max-w-xl mx-auto leading-relaxed"
        >
          Produk yang baik bukan cuma soal fitur, tapi bagaimana produk itu terasa saat digunakan.
        </motion.p>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={1.2}
          className="text-sm text-[#AEAEB2] mb-12 italic"
        >
          "Driven by curiosity, refined through execution, and focused on creating meaningful digital experiences."
        </motion.p>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={1.5}
        >
          {/* <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(0,113,227,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-full bg-[#0071E3] text-white font-bold text-base tracking-wide shadow-lg shadow-blue-500/20 hover:bg-[#0077ED] transition-colors duration-200"
          >
            Mari Bangun Sesuatu yang Exceptional ✦
          </motion.button> */}
        </motion.div>

        {/* Links */}
        {/* <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={2}
          className="flex items-center justify-center gap-6 mt-10"
        >
          {["GitHub", "LinkedIn", "Figma", "Email"].map((link) => (
            <a key={link} href="#"
              className="text-sm text-[#AEAEB2] hover:text-[#1D1D1F] transition-colors duration-200">
              {link}
            </a>
          ))}
        </motion.div> */}
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-6 mt-20">
        <div className="h-px bg-black/[0.06] mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#1D1D1F] flex items-center justify-center text-xs font-semibold text-white">M</div>
            <span className="text-[#6E6E73] text-sm">Mayla · Front-End Developer</span>
          </div>
          <p className="text-[#AEAEB2] text-xs">
            MagangHub Batch 1 · Nov 2025 – Mei 2026 · Built with React and lots of curiosity ✦
          </p>
        </div>
      </div>
    </section>
  );
}

export default function AppLight() {
  return (
    <div className="bg-white min-h-screen antialiased overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #F5F5F7; }
        ::-webkit-scrollbar-thumb { background: #D1D1D6; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #AEAEB2; }
        ::selection { background: rgba(0,113,227,0.15); color: #1D1D1F; }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <TechStack />
      <FinalCTA />
    </div>
  );
}
import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiFigma, SiCanva } from "react-icons/si";
import { FaHandshake, FaChartLine, FaUsers, FaBullhorn, FaLightbulb, FaPaintBrush, FaMobile, FaShoppingCart } from "react-icons/fa";
import { MdManageAccounts, MdInventory, MdTrendingUp, MdBusinessCenter } from "react-icons/md";
import { HiPresentationChartLine } from "react-icons/hi";

const skills = [
  // Compétences commerciales et managériales
  { name: "Gestion Commerciale", icon: FaChartLine, color: "#3b82f6", url: "#" },
  { name: "Relation Client", icon: FaHandshake, color: "#10b981", url: "#" },
  { name: "Management", icon: MdManageAccounts, color: "#8b5cf6", url: "#" },
  { name: "Supply Chain", icon: MdInventory, color: "#f59e0b", url: "#" },
  { name: "Négociation", icon: HiPresentationChartLine, color: "#ef4444", url: "#" },
  { name: "Communication", icon: FaBullhorn, color: "#06b6d4", url: "#" },
  { name: "Leadership", icon: FaUsers, color: "#84cc16", url: "#" },
  { name: "E-commerce", icon: FaShoppingCart, color: "#f97316", url: "#" },

  // Compétences techniques (Fiabilitech)
  { name: "Développement Web", icon: SiHtml5, color: "#e34f26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "JavaScript", icon: SiJavascript, color: "#ffd600", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  { name: "CSS", icon: SiCss3, color: "#1572b6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8", url: "https://tailwindcss.com/" },
  { name: "Design UI/UX", icon: FaPaintBrush, color: "#ec4899", url: "#" },
  { name: "Figma", icon: SiFigma, color: "#f24e1e", url: "https://www.figma.com/" },
  { name: "Apps Mobile", icon: FaMobile, color: "#6366f1", url: "#" },

  // Compétences entrepreneuriales
  { name: "Entrepreneuriat", icon: MdBusinessCenter, color: "#7c3aed", url: "#" },
  { name: "Innovation", icon: FaLightbulb, color: "#fbbf24", url: "#" },
  { name: "Stratégie", icon: MdTrendingUp, color: "#059669", url: "#" },
  { name: "Canva", icon: SiCanva, color: "#00c4cc", url: "https://www.canva.com/" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Compétences</SectionTitle>

        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 mt-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} url={skill.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
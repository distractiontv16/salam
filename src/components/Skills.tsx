import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { SiReact } from "react-icons/si";
import { FaChartLine, FaPaintBrush } from "react-icons/fa";

// Compétences principales selon initial-data.json
const mainSkills = [
  {
    name: "Gestion Commerciale",
    icon: FaChartLine,
    color: "#3b82f6",
    url: "#",
    level: 90,
    description: "Management de projets, relation client et stratégies commerciales"
  },
  {
    name: "Développement Web & Mobile",
    icon: SiReact,
    color: "#61dafb",
    url: "#",
    level: 85,
    description: "Création d'applications et sites web responsive"
  },
  {
    name: "Design UI/UX",
    icon: FaPaintBrush,
    color: "#ec4899",
    url: "#",
    level: 80,
    description: "Conception d'interfaces utilisateur intuitives"
  },
];

// Soft skills selon initial-data.json
const softSkills = [
  "Excellent sens relationnel",
  "Esprit d'équipe",
  "Adaptabilité",
  "Leadership",
  "Communication",
  "Gestion du stress",
  "Créativité",
  "Sens de l'organisation"
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Compétences</SectionTitle>

        {/* Compétences principales */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Compétences Techniques
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mainSkills.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: `${skill.color}20` }}>
                    <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{skill.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{skill.description}</p>
                  </div>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  />
                </div>

                <div className="mt-2 text-right">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Qualités Personnelles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all duration-300"
              >
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
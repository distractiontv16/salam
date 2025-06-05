import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";

const aboutSections = [
  {
    icon: User2,
    title: "Qui je suis",
    description: [
      "Étudiant en Bachelor Supply Chain passionné par la gestion commerciale.",
      "Co-fondateur de Fiabilitech, agence de développement web et mobile.",
      "Jeune entrepreneur déterminé avec un excellent sens relationnel.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "Ce que je fais",
    description: [
      "Gestion commerciale et relation client dans l'immobilier.",
      "Développement de solutions digitales avec Fiabilitech.",
      "Optimisation des processus d'achat et de supply chain.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "Mes objectifs",
    description: [
      "Valider mon Bachelor Supply Chain avec excellence.",
      "Développer Fiabilitech et créer des solutions innovantes.",
      "Acquérir une expertise en gestion des achats et approvisionnement.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "Ma philosophie",
    description: [
      "L'innovation doit servir l'efficacité commerciale.",
      "L'excellence relationnelle est la clé du succès.",
      "L'apprentissage continu ouvre toutes les opportunités.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionTitle>About Me</SectionTitle>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Salut ! 👋 Je suis <span className="text-blue-600 font-semibold">SAIBOU ABDOU SALAM</span>,
            étudiant en Bachelor Supply Chain et co-fondateur de Fiabilitech.
            Passionné par le commerce et l'entrepreneuriat, j'associe compétences en gestion commerciale
            et expertise digitale pour créer des solutions innovantes et développer mon expérience professionnelle.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
              🎯 Recherche d'alternance 2025-2026 • Bachelor Achats et Supply Chain
            </span>
          </div>
        </div>

        {/* About Section Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutSections.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="relative group">
              {/* Background Effect */}
              <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4 space-x-4">
                  {/* Icon */}
                  <div className={`p-3 ${color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                </div>
                <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

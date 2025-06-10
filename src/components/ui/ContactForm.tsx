import React from 'react';
import { User, Mail, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { FaRegCommentDots } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import { useContent } from '../../contexts/ContentContext';
import { FORMSPREE_CONFIG } from '../../config/formspree';

export function ContactForm() {
  const { content } = useContent();
  const { successMessage, errorMessage } = content.contact;

  // Utilisation de la configuration Formspree
  const [state, handleSubmit] = useForm(FORMSPREE_CONFIG.FORM_ID);

  // Affichage du message de succès
  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-600 mb-2">Message envoyé !</h3>
        <p className="text-gray-600 dark:text-gray-300">{successMessage}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Nom
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <User className="w-5 h-5" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Entrez votre nom"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-gray-100"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Mail className="w-5 h-5" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Entrez votre email"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-gray-100"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 text-gray-400">
            <FaRegCommentDots className="w-5 h-5" />
          </div>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Entrez votre message"
            rows={4}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none text-gray-900 dark:text-gray-100"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 ${
          state.submitting
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white'
        }`}
      >
        {state.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
        {!state.submitting && <Send className="w-5 h-5" />}
      </button>

      {/* Error Messages */}
      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Erreur lors de l'envoi</span>
          </div>
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errorMessage || 'Une erreur s\'est produite. Veuillez réessayer plus tard.'}
          </p>
        </div>
      )}

      {/* Info Message */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-blue-600 dark:text-blue-400 text-sm">
          💡 <strong>Note :</strong> Ce formulaire utilise Formspree pour l'envoi sécurisé des messages.
          Vos données sont protégées et ne seront utilisées que pour vous répondre.
        </p>
      </div>
    </form>
  );
}

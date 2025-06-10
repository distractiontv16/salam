// Configuration Formspree
// Remplacez 'YOUR_FORM_ID' par votre vrai ID Formspree après avoir créé votre formulaire

export const FORMSPREE_CONFIG = {
  // Votre ID de formulaire Formspree
  // Exemple: si votre endpoint est https://formspree.io/f/abc123, utilisez 'abc123'
  FORM_ID: 'mblygwbk',
  
  // Email de destination (doit correspondre à celui configuré sur Formspree)
  DESTINATION_EMAIL: 'salamsaibou2002@gmail.com',
  
  // Configuration optionnelle
  SETTINGS: {
    // Redirection après soumission (optionnel)
    redirectTo: null,
    
    // Réponse automatique (configuré sur Formspree)
    autoReply: true,
    
    // Captcha (configuré sur Formspree)
    captcha: false,
  }
};

// Instructions pour obtenir votre FORM_ID :
// 1. Allez sur https://formspree.io/register
// 2. Créez un compte avec l'email: salamsaibou2002@gmail.com
// 3. Créez un nouveau formulaire nommé "Portfolio Contact Form"
// 4. Copiez l'ID du formulaire (la partie après /f/ dans l'URL)
// 5. Remplacez 'YOUR_FORM_ID' ci-dessus par votre vrai ID

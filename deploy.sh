#!/bin/bash

# Script de Déploiement Bash pour Hostinger
# Usage: ./deploy.sh

echo "🚀 Début du processus de déploiement..."

# Vérification de l'existence du dossier node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Erreur lors de l'installation des dépendances"
        exit 1
    fi
fi

# Nettoyage du dossier dist précédent
if [ -d "dist" ]; then
    echo "🧹 Nettoyage du dossier dist..."
    rm -rf dist
fi

# Build de production
echo "🔨 Construction de l'application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de la construction"
    exit 1
fi

# Vérification du build
if [ ! -f "dist/index.html" ]; then
    echo "❌ Le fichier index.html n'a pas été généré"
    exit 1
fi

echo "✅ Build terminé avec succès!"

# Affichage des informations du build
DIST_SIZE=$(du -sh dist | cut -f1)
echo "📊 Taille du build: $DIST_SIZE"

# Instructions pour l'upload
echo ""
echo "📋 Étapes suivantes pour le déploiement sur Hostinger:"
echo "1. Connectez-vous à votre compte Hostinger"
echo "2. Accédez au Gestionnaire de Fichiers"
echo "3. Naviguez vers le dossier public_html"
echo "4. Supprimez les anciens fichiers du portfolio"
echo "5. Uploadez tout le contenu du dossier 'dist' vers public_html"

echo ""
echo "🔗 Liens sociaux mis à jour:"
echo "• LinkedIn: https://www.linkedin.com/in/abdou-saibou"
echo "• WhatsApp: https://wa.me/33651104334"
echo "• Threads: https://www.threads.com/@ldn_h24"
echo "• Twitter: Supprimé"

echo ""
echo "✨ Déploiement prêt!"

# Optionnel : Ouvrir le dossier dist
echo ""
read -p "Voulez-vous ouvrir le dossier dist? (y/n): " open_folder
if [ "$open_folder" = "y" ] || [ "$open_folder" = "Y" ]; then
    if command -v xdg-open > /dev/null; then
        xdg-open dist
    elif command -v open > /dev/null; then
        open dist
    else
        echo "Impossible d'ouvrir le dossier automatiquement"
    fi
fi

echo ""
echo "📖 Consultez DEPLOYMENT_GUIDE_HOSTINGER.md pour plus de détails"

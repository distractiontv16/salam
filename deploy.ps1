# Script de Déploiement PowerShell pour Hostinger
# Usage: .\deploy.ps1

Write-Host "🚀 Début du processus de déploiement..." -ForegroundColor Green

# Vérification de l'existence du dossier node_modules
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Erreur lors de l'installation des dépendances" -ForegroundColor Red
        exit 1
    }
}

# Nettoyage du dossier dist précédent
if (Test-Path "dist") {
    Write-Host "🧹 Nettoyage du dossier dist..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "dist"
}

# Build de production
Write-Host "🔨 Construction de l'application..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors de la construction" -ForegroundColor Red
    exit 1
}

# Vérification du build
if (-not (Test-Path "dist/index.html")) {
    Write-Host "❌ Le fichier index.html n'a pas été généré" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build terminé avec succès!" -ForegroundColor Green

# Affichage des informations du build
$distSize = (Get-ChildItem -Recurse "dist" | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "📊 Taille du build: $([math]::Round($distSize, 2)) MB" -ForegroundColor Cyan

# Instructions pour l'upload
Write-Host "`n📋 Étapes suivantes pour le déploiement sur Hostinger:" -ForegroundColor Cyan
Write-Host "1. Connectez-vous à votre compte Hostinger" -ForegroundColor White
Write-Host "2. Accédez au Gestionnaire de Fichiers" -ForegroundColor White
Write-Host "3. Naviguez vers le dossier public_html" -ForegroundColor White
Write-Host "4. Supprimez les anciens fichiers du portfolio" -ForegroundColor White
Write-Host "5. Uploadez tout le contenu du dossier 'dist' vers public_html" -ForegroundColor White

Write-Host "`n🔗 Liens sociaux mis à jour:" -ForegroundColor Cyan
Write-Host "• LinkedIn: https://www.linkedin.com/in/abdou-saibou" -ForegroundColor White
Write-Host "• WhatsApp: https://wa.me/33651104334" -ForegroundColor White
Write-Host "• Threads: https://www.threads.com/@ldn_h24" -ForegroundColor White
Write-Host "• Twitter: Supprimé" -ForegroundColor White

Write-Host "`n✨ Déploiement prêt!" -ForegroundColor Green

# Optionnel : Ouvrir le dossier dist dans l'explorateur
$openFolder = Read-Host "`nVoulez-vous ouvrir le dossier dist? (y/n)"
if ($openFolder -eq "y" -or $openFolder -eq "Y") {
    Start-Process "explorer.exe" -ArgumentList "dist"
}

Write-Host "`n📖 Consultez DEPLOYMENT_GUIDE_HOSTINGER.md pour plus de détails" -ForegroundColor Yellow

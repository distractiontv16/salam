# Script de Build avec Vérifications
# Usage: .\build-with-checks.ps1

Write-Host "🔍 Vérification de la configuration avant le build..." -ForegroundColor Cyan

# Vérification de la configuration Formspree
$formspreeConfig = Get-Content "src\config\formspree.ts" -Raw
if ($formspreeConfig -match "YOUR_FORM_ID") {
    Write-Host "⚠️  ATTENTION: Configuration Formspree incomplète!" -ForegroundColor Yellow
    Write-Host "   Le formulaire de contact ne fonctionnera pas correctement." -ForegroundColor Yellow
    Write-Host "   Consultez FORMSPREE_SETUP_GUIDE.md pour configurer Formspree." -ForegroundColor Yellow
    Write-Host ""
    
    $continue = Read-Host "Voulez-vous continuer le build malgré tout? (y/n)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        Write-Host "❌ Build annulé. Configurez d'abord Formspree." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✅ Configuration Formspree détectée" -ForegroundColor Green
}

# Vérification des dépendances
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

# Vérifications post-build
Write-Host "`n🔍 Vérifications post-build:" -ForegroundColor Cyan

# Vérification des fichiers essentiels
$essentialFiles = @("dist/index.html", "dist/favicon.svg", "dist/robots.txt")
foreach ($file in $essentialFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file" -ForegroundColor Green
    } else {
        Write-Host "❌ $file manquant" -ForegroundColor Red
    }
}

# Vérification des assets
if (Test-Path "dist/assets") {
    $assetCount = (Get-ChildItem "dist/assets").Count
    Write-Host "✅ $assetCount fichiers dans dist/assets" -ForegroundColor Green
} else {
    Write-Host "❌ Dossier dist/assets manquant" -ForegroundColor Red
}

Write-Host "`n📋 Prochaines étapes:" -ForegroundColor Cyan
Write-Host "1. Uploadez le contenu du dossier 'dist' vers Hostinger" -ForegroundColor White
Write-Host "2. Testez le site déployé" -ForegroundColor White
Write-Host "3. Vérifiez particulièrement le formulaire de contact" -ForegroundColor White

if ($formspreeConfig -match "YOUR_FORM_ID") {
    Write-Host "`n⚠️  N'oubliez pas de configurer Formspree après le déploiement!" -ForegroundColor Yellow
}

Write-Host "`n✨ Prêt pour le déploiement!" -ForegroundColor Green

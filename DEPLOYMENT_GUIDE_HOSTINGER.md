# Guide de Déploiement sur Hostinger

## Résumé des Modifications Effectuées

### Liens Réseaux Sociaux Mis à Jour
✅ **LinkedIn** : `https://www.linkedin.com/in/abdou-saibou`
✅ **WhatsApp** : `https://wa.me/33651104334`
✅ **Threads** : `https://www.threads.com/@ldn_h24` (remplace Instagram)
✅ **Twitter** : Complètement supprimé

### Configuration Formspree
🔧 **Formulaire de Contact** : Configuré avec les hooks Formspree officiels
⚠️ **Action Requise** : Vous devez configurer votre compte Formspree (voir FORMSPREE_SETUP_GUIDE.md)

### Fichiers Modifiés
1. `src/components/hero/SocialLinks.tsx` - Composant principal des liens sociaux
2. `src/contexts/ContentContext.tsx` - Contexte de contenu pour la section Contact
3. `src/components/ui/ContactForm.tsx` - Formulaire de contact avec Formspree
4. `src/config/formspree.ts` - Configuration Formspree
5. `initial-data.json` - Données de configuration
6. `contenu-complet-site-web.txt` - Documentation

## Étapes de Déploiement sur Hostinger

### 1. Préparation des Fichiers
✅ **Build de Production Créé** : Le dossier `dist/` contient tous les fichiers optimisés pour la production.

⚠️ **IMPORTANT - Configuration Formspree Requise** :
Avant le déploiement, vous DEVEZ configurer Formspree :
1. Consultez le fichier `FORMSPREE_SETUP_GUIDE.md`
2. Créez votre compte Formspree
3. Obtenez votre ID de formulaire
4. Mettez à jour `src/config/formspree.ts`
5. Reconstruisez l'application avec `npm run build`

### 2. Connexion à Hostinger

#### Option A : Via le Gestionnaire de Fichiers Hostinger
1. Connectez-vous à votre compte Hostinger
2. Accédez au **Gestionnaire de Fichiers** (File Manager)
3. Naviguez vers le dossier `public_html` de votre domaine
4. Supprimez tous les anciens fichiers du portfolio (si existants)
5. Uploadez tout le contenu du dossier `dist/` vers `public_html`

#### Option B : Via FTP/SFTP
1. Utilisez un client FTP comme FileZilla
2. Connectez-vous avec vos identifiants Hostinger :
   - **Hôte** : Votre domaine ou l'IP fournie par Hostinger
   - **Utilisateur** : Votre nom d'utilisateur FTP
   - **Mot de passe** : Votre mot de passe FTP
   - **Port** : 21 (FTP) ou 22 (SFTP)
3. Naviguez vers le dossier `public_html`
4. Uploadez tout le contenu du dossier `dist/`

### 3. Structure des Fichiers à Uploader
```
public_html/
├── index.html
├── favicon.svg
├── robots.txt
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   ├── images/
│   └── autres fichiers...
└── images/
    └── profil.jpg
```

### 4. Configuration DNS (si nécessaire)
- Assurez-vous que votre domaine pointe vers les serveurs Hostinger
- Les enregistrements A doivent pointer vers l'IP de votre hébergement

### 5. Vérification Post-Déploiement

#### Tests à Effectuer :
1. **Accès au site** : Vérifiez que le site se charge correctement
2. **Liens sociaux** : Testez tous les nouveaux liens :
   - LinkedIn : `https://www.linkedin.com/in/abdou-saibou`
   - WhatsApp : `https://wa.me/33651104334`
   - Threads : `https://www.threads.com/@ldn_h24`
3. **Responsive** : Testez sur mobile et desktop
4. **Performance** : Vérifiez les temps de chargement
5. **Formulaire de contact** : Testez l'envoi de messages

### 6. Optimisations Recommandées

#### Configuration .htaccess (optionnel)
Créez un fichier `.htaccess` dans `public_html` pour :
```apache
# Compression GZIP
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache des fichiers statiques
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Redirection HTTPS (si SSL activé)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 7. Maintenance Future

#### Pour les Mises à Jour :
1. Effectuez les modifications en local
2. Exécutez `npm run build`
3. Uploadez le nouveau contenu du dossier `dist/`
4. Testez les modifications

#### Sauvegarde :
- Gardez une copie locale du code source
- Sauvegardez régulièrement via Hostinger

## Informations Techniques

- **Framework** : React 18.3.1 avec Vite 6.2.5
- **Styling** : Tailwind CSS 3.4.1
- **Icons** : Lucide React + React Icons
- **Animations** : Framer Motion 11.15.0
- **Taille du Build** : ~400KB (JS) + ~46KB (CSS)

## Support

En cas de problème :
1. Vérifiez les logs d'erreur dans Hostinger
2. Consultez la documentation Hostinger
3. Contactez le support Hostinger si nécessaire

---

**Déploiement effectué le** : [Date du déploiement]
**Version** : 2.0
**Dernière mise à jour des liens sociaux** : [Date actuelle]

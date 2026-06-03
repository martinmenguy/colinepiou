# Coline — Hypnothérapeute

Site vitrine React + Vite, déployé automatiquement sur GitHub Pages.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Ouvre ensuite http://localhost:5173 dans ton navigateur.

## Structure du projet

```
src/
  components/
    Layout.jsx      ← Enveloppe commune (header + footer)
    Header.jsx/.css ← Menu de navigation
    Footer.jsx/.css ← Pied de page
  pages/
    Accueil.jsx/.css    ← Page d'accueil
    QuiSuisJe.jsx/.css  ← Page "Qui suis-je ?"
    Contact.jsx/.css    ← Page de contact
  App.jsx         ← Routage
  main.jsx        ← Point d'entrée
  index.css       ← Tokens CSS globaux
public/
  logo-beige.png  ← Logo pour le header
  logo-bleu.png   ← Logo pour le footer
```

## Personnalisation

### Remplacer les polices
Dans `index.css`, changer les lignes :
```css
--font-title: 'Cormorant Garamond', ...;  /* → 'Amoresa' */
--font-body:  'Jost', ...;                /* → 'Codec Pro' */
```
Et dans `index.html`, mettre à jour le lien Google Fonts ou importer les fichiers locaux.

### Ajouter votre photo (page Qui suis-je ?)
Placer votre photo dans `public/photo-coline.jpg` puis dans `QuiSuisJe.jsx`, remplacer le bloc `about-intro__image-placeholder` par :
```jsx
<img src="/photo-coline.jpg" alt="Coline, hypnothérapeute" />
```

### Activer le formulaire de contact
1. Créer un compte sur https://formspree.io
2. Créer un nouveau formulaire
3. Copier l'ID (ex: `xwkgabcd`)
4. Dans `Contact.jsx`, remplacer `YOUR_FORM_ID` par votre ID

### Déployer avec son propre domaine (OVH)
1. Dans OVH, créer un enregistrement DNS CNAME :
   - `www` → `votre-pseudo.github.io`
2. Dans le repo GitHub, ajouter un fichier `public/CNAME` contenant :
   ```
   www.votre-domaine.fr
   ```
3. Dans GitHub : Settings → Pages → Custom domain → entrer `www.votre-domaine.fr`
4. Activer "Enforce HTTPS"

## Déploiement automatique

Chaque `git push` sur `main` déclenche automatiquement le build et le déploiement.
Activer dans GitHub : Settings → Pages → Source → **GitHub Actions**

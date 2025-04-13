
```markdown
# Application Web - Point de Contrôle
https://express-checkpoint-theta.vercel.app/
## Description

Ce projet est une application web simple développée avec **Express.js**. Elle comprend trois pages principales :

- **Accueil**
- **Nos services**
- **Nous contacter**

Chaque page est accessible via une barre de navigation et stylisée avec du **CSS**. L'accès à l'application est **restreint aux heures de travail** : du lundi au vendredi, de 9h à 17h.

## Fonctionnalités

- 🧭 **Navigation simple** entre les pages via une barre de navigation.
- ⏰ **Middleware personnalisé** pour restreindre l’accès aux heures de travail.
- 🎨 **Pages stylisées** avec du CSS.
- 🛠️ Utilisation optionnelle d’un moteur de template (comme EJS ou Pug).

## Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [CSS](https://developer.mozilla.org/fr/docs/Web/CSS)
- [EJS](https://ejs.co/) *(optionnel)*

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/nom-du-projet.git
   cd nom-du-projet
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Démarrez le serveur :
   ```bash
   npm start
   ```

4. Accédez à l'application dans votre navigateur à l'adresse :
   ```
   http://localhost:3000
   ```

## Structure du projet

```
/project-root
│
├── public/
│   └── accueil.css
    └── contact.css
    └── service.css
   └── style.css
├── src/
|    ├──srcipt
|        └── main.js
│
├── src/                  # si vous utilisez un moteur de template
│   ├── accueil.js
│   ├── services.js
│   └── contact.js
│
├── middleware/
│   └── server.js
│
├── app.js
└── README.md
```

## Middleware : Restriction horaire

Un middleware personnalisé vérifie que la requête est faite durant les **heures de travail**. Si ce n'est pas le cas, l'utilisateur reçoit un message lui indiquant que l'application est fermée.

## Auteur

- Amara gboko
- 

---

**Note :** Ce projet a été réalisé dans le cadre d’un point de contrôle.
```

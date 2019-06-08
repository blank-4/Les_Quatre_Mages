# Projet Mots Mêlés

### Documentation Technique

Les technos et outils utilisés :
  - **Node.js**
    - **Runtime JavaScript**.
    - **Moteur V8** ( By Chrome ).
  - **Express.js**
    - Framework **Node.js**.
    - Permet le développement facilité d'applications basées sur des serveurs, donc souvent des sites webs dynamiques et non statiques.
  - **Jade**
    - Moteur de template souvent utilisé lors de développement d'applications server-sided.
    - Énormes avantages face à l'**HTML** de base.
      - Les balises **HTML** de base sont simplifiées.
      - L'utilisation de langages de développements tels que **PHP** ou **JavaScript** s'en retrouvent simplifiés.
        - ( Notamment lorsqu'il est question de modifier la vue ( donc la page ) à l'aide de ces langages ).
  - **Vue.js**
    - Framework **JavaScript**.
    - Permet de dynamiser un peu plus les informations sur les applications.
    - Permet de renvoyer des feedbacks instantanés en mettant à jour la page à l'aide de messages d'erreurs ou de popups.
  - **JavaScript**
  - **CSS**

Les modules nécessaires au fonctionnement d'**Express.js** :
  - **BodyParser**
  - **CookieParser**
  - **Debug**

Les modules importants :
  - **Passport.js**
    - Permet de gérer les sessions utilisateur ( Connexion, Déconnexion, Inscription )
  - **Bcrypt.js**
    - Permet de hash les mots de passe utilisateur ( Les crypter ) afin de les rendre illisible
    - Permet aussi de comparer les mots de passes entrés avec les mots de passe stockés en base de donnée pour voir s'ils correspondent ou pas
  - **Mongoose**
    - Permet de gérer les connexion aux bases de données
  - **Jade / Pug**
    - Au choix, c'est la même chose, seule la syntaxe diffère légèrement et **Pug** est vraisemblablement plus récent que **Jade**
    - Permet d'afficher les pages simplement comme le ferait un fichier avec extension **.html**

Les modules dispensables :
  - **Chalk**
    - Permet de colorer les messages qui apparaissent dans la console.
      - Peut permettre d'y voir plus clair dans les logs en affichant les erreurs en rouge et les succès en vert dans la console par exemple.
  - **SweetAlert2**
    - Permet d'afficher des alerts assez stylés lorsque l'on veut avertir un utilisateur pour une quelconque raison.
      - Ceci dit, nous n'avons pas réussi à le faire marcher tel que nous le souhaitions.

### Documentation Utilisateur

#### Installation

Première étape :
- Copier le lien du repository.
- Ouvrez votre terminal si vous êtes sous **Mac OS** ou toute distribution **Linux**.
  - Si vous êtes sous **Windows**, installez **[Git for Windows](https://gitforwindows.org/)**.
- Enfin, entrez cette commande : **git clone**.
  - Puis collez le lien du repository précédé de la commande **git clone**.
  - Appuyez sur Entrer.

Seconde étape :
- Installez **Node.js** sur votre OS, cherchez sur google comment l'installer correctement, cela peut varier selon le système d'exploitation.
  - Sous **Windows** il s'agira simplement d'un exetucable ( .exe ) à lancer.
- Pour finir, installez MongoDB, cherchez encore sur google comment l'installer correctement, cela peut varier selon le système d'exploitation.
  - Sous **Windows** il s'agira simplement d'un exetucable ( .exe ) à lancer.

Troisième étape :
- Rendez-vous dans le repository que vous avez cloné depuis **GitHub** ( se référer à la première étape ).
- Une fois dedans, faites un clique droit à la racine du dossier.
  - ( Dans **Les_Quatre_Mages/** )
  - Puis ouvrez un terminal dans ce dossier.
- Une fois le terminal ouvert, entrez la commande suivante : **npm install --save**.
  - Ceci va installer toute les dépendances nécessaires au bon fonctionnement de l'application.
- Une fois l'installation terminée, il se peut que vous rencontriez des erreurs.
  - Les éventuelles raisons :
    - Les modules ( ou packages ) sont devenus obsolètes.
    - Les modules ( ou packages ) sont devenus incompatibles.
    - Votre installation Node.js est corrompue ou s'est mal passée.
    - Les modules ( ou packages ) doivent être mis à jour.
    - Une erreur de syntaxe ou autre se trouve dans **package.json** ou **package-lock.json**.
  - Quoi qu'il en soit, si vous avez une erreur, celle-ci sera explicitée dans la console, ainsi vous pourrez rechercher une solution sur **Google**.
- Une fois l'installation terminée, et qu'aucune erreur figure dans votre console, entrez la commande suivante : **npm start**.
  - Cette commande va permettre de démarrer votre application en l'hébergeant temporairement en local ( dans votre machine ).
  - Votre application sera alors accessible à l'adresse suivante : **localhost:3000** dans votre navigateur.
  - Si la commande échoue :
    - Il se peut qu'il y ait une erreur de syntaxe quelque part, celle-ci sera explicitée dans la console.
    - Il se peut qu'il y ait un conflit de syntaxe, un module ( ou package ) qui ne prend pas en charge la syntaxe ES6 ou autre.
    - Il se peut qu'il y ait un oubli de ponctuation quelque part, ou à contrario une ponctuation qui ne devrait pas être présente à l'endroit explicité.
- Pour finir, rendez-vous à l'adresse indiquée plus haut : **localhost:3000** dans le navigateur de votre choix pour accéder l'application.
  - Si un chargement infini a lieu, vérifiez bien qu'il n'y a pas d'erreur dans la console.
  - S'il n'y a pas d'erreur, vérifiez bien que la connexion à la base de donnée s'est bien passée.
    - Si la connexion à la base de donnée a échoué :
      - Il se peut que votre installation de MongoDB s'est mal passée.
      - Il se peut que votre service MongoDB n'est tout simplement pas démarré.

### Sources
- [Node.js](https://nodejs.org/en/download/)
- [Express.js](https://expressjs.com/fr/)
- [Passport.js](http://www.passportjs.org/docs/)
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [MongoDB](https://docs.mongodb.com/manual/?_ga=2.201815633.1738048068.1560019004-1635155969.1560019004)
- [Vue.js](https://vuejs.org/v2/guide/)
- [Jade](http://jade-lang.com/)

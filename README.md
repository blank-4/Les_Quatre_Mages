# Projet Mots Mêlés

### Fonctionnalités
- __L'utilisateur arrive sur la page d'accueil sur laquelle on a une explication du jeu. La page d'accueil devra contenir :__
  - Un bouton menant au jeu ( Fait )
    - ( Bouton play dans la page d'accueil )
    - ( Le jeu est jouable seulement lorsque l'utilisateur est connecté )
  - Un bouton menant à la page des scores ( Fait )
    - ( Bouton scores dans le menu qui est une sidebar apparaissant à droite )
  - Un bouton menant à la page de connexion ( Fait )
    - ( Bouton connexion dans le menu qui est une sidebar apparaissant à droite )
    - ( Le bouton apparaît seulement si l'utilisateur est déconnecté )
  - Un bouton menant à la page d'inscription ( Fait )
    - ( Bouton inscription dans le menu qui est une sidebar apparaissant à droite )
    - ( Le bouton apparaît seulement si l'utilisateur est déconnecté )
  - Si l'utilisateur est connecté :
    - Un bouton menant à la page profil ( Fait )
      - ( Bouton profil dans le menu qui est une sidebar apparaissant à droite )
    - Un bouton menant à ses scores ( Fait )
      - ( Bouton scores dans le menu qui est une sidebar apparaissant à droite )
      - ( Tout les scores de tout le monde seront accessibles sur une seule et même page avec des onglets pour chaque difficulté. Si l'utilisateur est connecté, son score sera mis en valeur )
    - Un bouton permettant de se déconnecter ( Fait )
      - ( Bouton déconnexion dans le menu qui est une sidebar apparaissant à droite )
      - ( Le bouton apparait seulement si l'utilisateur est connecté )


- __Difficulté :__
  - Difficulté facile ( Fait )
  - Difficulté moyenne ( Fait )
  - Difficulté difficile ( Fait )
  - Chaque diffificulté devra contenir :
    - Une grille de taille différente
    - Un multiplicateur de score différent


- __La page du jeu devra contenir :__
  - Une grille de lettres mélangées
  - Un espace où seront affichés les mots à trouver
  - Un espace affichant le score actuel
  - Un espace affichant les 3 meilleurs scores dans la difficulté jouée
  - Un bouton pour retourner à la page d'accueil
  - Si l'utilisateur est connecté :
    - Un bouton menant à la page profil
    - Un bouton menant à ses scores
    - Un bouton permettant de se déconnecter


- __La page des scores devra contenir :__
  - Tout les scores dans toutes les difficultés ( Fait )
    - ( Bouton score dans le menu qui est une sidebar apparaissant à droite )
  - Si l'utilisateur est connecté :
    - Un bouton menant à la page profil ( Fait )
      - ( Bouton profil dans le menu qui est une sidebar apparaissant à droite )
    - Un bouton menant à ses scores ( Fait )
      - ( Onglet mes scores sur la page des scores )
    - Un bouton permettant de se déconnecter ( Fait )
      - ( Bouton déconnexion dans le menu qui est une sidebar apparaissant à droite )
      - ( Le bouton apparait seulement si l'utilisateur est connecté )
    - Mettre ses scores en valeur ( Fait )
      - ( Les scores de l'utilisateur apparaissent sur fond jaune dans le tableau des scores )
  - Bonus : Filtrer les scores ( ex: du plus élevé au plus bas )
    - ( Les scores apparaissent de façons décroissante grâce aux filtres mongodb )


- __La page de connexion devra contenir :__
  - Un champ nom d'utilisateur ( Fait )
  - Un champ mot de passe ( Fait )
  - Un bouton connexion ( Fait )
  - Un bouton inscription ( Fait )
    - ( Lien vers la page d'inscription si l'utilisateur n'a pas de compte )
  - Si l'utilisateur s'est connecté avec succès, rediriger vers la page d'accueil ou de jeu ( Fait )
  - Si la connexion a échoué, envoyer un message indiquant l'erreur, ou une alerte, etc.. ( Fait )
    - ( Message sur fond rouge apparaîtra sur la page de connexion pour signaler une erreur )


- __La page d'inscription devra contenir :__
  - Un champ nom d'utilisateur ( Fait )
  - Un champ adresse email ( Fait )
  - Un champ mot de passe ( Fait )
  - Un bouton inscription ( Fait )
  - Si l'utilisateur s'est inscrit avec succès, rediriger vers page d'accueil ou de jeu
  - Si l'inscription a échoué, envoyer un message indiquant l'erreur, ou une alerte, etc.. ( Fait )


- __La page profile devra contenir :__
  - Toutes les informations du formulaire
  - Un bouton pour éditer les informations
  - Un bouton valider le changement ( Fait )
  - Un bouton pour annuler l'édition des informations ( Fait )
  - Si l'utilisateur a édité ses informations avec succès, envoyer un message de succès
  - Si l'utilisateur a édité ses informations mais qu'une erreur a lieu, envoyer un message indiquant l'erreur, ou une alerte, etc..


## Note ( ??/20 )
### Code & documentation ( ?/5 )
- Commentaires
- Documentation technique
- Documentation utilisateur
- Conventions et lisibilité
- Git & Github
### Fonctionnalités ( ?/5 )
- Connexion, Déconnexion, Inscription, Éditer
- Jouabilité
- Mots trouvés, Mots à trouver
- Scores
- Difficultés
### Back-End ( ?/3 )
- Pattern MVC
- Routes & Pertinence
- Middlewares
- Frameworks
- ORM
### Front-End ( ?/3 )
- UI & UX
- API
- Pattern MVVM
- Framework
- Responsive
### Presentation ( ?/4 )
- Slides
- Distribution du temps de parole
- Présentation du site
- Aisance à l'oral
- Réponse aux questions
### Bonus ( +6 )
- Maquettes UI & UX
- Déploiement du site
- Tests unitaires

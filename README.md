Hello l'équipe ! Voici un récap du test achevé:

Stack utilisée:
J'ai utilisé Next.js avec TypeScript, Tailwind CSS, et TanStack Query pour la gestion du fetching de données.

Fonctionnement
Après avoir sélectionné une race dans le champ <select>, les cartes liées à la race choisie s'affichent, avec l'image et le nom de chaque carte.

En cliquant sur une carte, une nouvelle page s'ouvre affichant plus de détails sur celle-ci.

Un bouton est disponible pour revenir à la page précédente, utilisant router.back(), ce qui permet un retour sans rechargement complet (grâce à l'historique de navigation).

Particularités techniques
Pour utiliser correctement QueryClientProvider, j'ai dû créer un fichier spécifique :
components/provider/QueryProvider.tsx car il doit obligatoirement être utilisé côté client

Dans layout.tsx, j'entoure simplement le contenu du <body> avec mon QueryProvider pour que toute l'application puisse accéder aux fonctionnalités de TanStack Query.
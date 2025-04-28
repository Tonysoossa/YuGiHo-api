Récapitulatif du test
Stack utilisée
Next.js (avec TypeScript)

Tailwind CSS pour le style

TanStack Query pour la gestion du fetching de données

Fonctionnement
Après avoir sélectionné une race dans le champ <select>, les cartes liées à la race choisie s'affichent, avec l'image et le nom de chaque carte.

En cliquant sur une carte, une nouvelle page s'ouvre avec plus de détails sur celle-ci.

Un bouton permet de revenir à la page précédente en utilisant router.back(), ce qui permet un retour fluide sans rechargement complet.

Particularités techniques
Pour utiliser correctement QueryClientProvider, j'ai créé un fichier spécifique :
components/provider/QueryProvider.tsx
(car QueryClientProvider doit obligatoirement être utilisé côté client).

Dans layout.tsx, le contenu du <body> est enveloppé avec le QueryProvider pour permettre à toute l'application d'accéder aux fonctionnalités de TanStack Query.
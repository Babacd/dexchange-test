# Test Technique Front-End – DEXCHANGE

## 📋 Description

Ce projet est une reproduction **pixel-perfect** de 3 écrans (Auth/Register, Dashboard, Tables) à partir d'un design Figma, réalisé dans le cadre d'un test technique pour DEXCHANGE. Le projet inclut un système de design complet, un mode sombre fonctionnel, des animations fluides et une architecture modulaire.

**🔗 Demo Live:** [À déployer sur Vercel]  
**📱 Repository:** [GitHub - dexchange-test](https://github.com/Babacd/dexchange-test)

## 🚀 Installation & Lancement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/Babacd/dexchange-test
cd dexchange-test

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000] dans votre navigateur.

### Build de production

```bash
# Créer le build
npm run build

# Lancer le build
npm start
```

## 🛠️ Stack Technique

### Stack Obligatoire
- **Next.js 15** (App Router) - Framework React avec SSR
- **TypeScript** - Typage statique strict
- **Tailwind CSS v4** - Utility-first CSS avec @theme

### Librairies Optionnelles Utilisées
- **shadcn/ui** - Composants UI réutilisables (Button, Card, Badge, Table)
- **Framer Motion** - Animations et transitions fluides (Analytics Cards, Big Cards)
- **next-themes** - Support du mode Dark/Light avec détection systèm
- **Vitest** - Framework de tests unitaires rapide
- **React Testing Library** - Tests de composants React

## 📁 Structure du Projet

```
dexchange-test/
├── app/
│   ├── auth/              # Page d'authentification (Register/Login)
│   │   └── page.tsx
│   ├── dashboard/         # Page Dashboard avec Analytics Cards
│   │   ├── layout.tsx     # Layout avec sidebar et navbar
│   │   └── page.tsx       # Métriques, projets, orders overview
│   ├── table/             # Page Tables (Authors & Projects)
│   │   ├── layout.tsx     # Layout avec sidebar et navbar
│   │   └── page.tsx       # Tableaux interactifs
│   ├── layout.tsx         # Root layout avec ThemeProvider
│   └── globals.css        # Styles globaux + design tokens Tailwind v4
├── components/
│   ├── ui/                # Composants shadcn/ui (réutilisables)
│   │   ├── button.tsx     # Boutons avec variants
│   │   ├── card.tsx       # Cartes avec ombre
│   │   ├── badge.tsx      # Badges de statut
│   │   └── table.tsx      # Tableau responsive
│   ├── layout/            # Composants de mise en page
│   │   ├── navbar.tsx     # Header avec search et menu (335×39.5px)
│   │   └── sidebar.tsx    # Navigation latérale (283px, état actif)
│   ├── theme-provider.tsx # Provider next-themes
│   └── theme-toggle.tsx   # Toggle Dark/Light mode
├── lib/
│   ├── utils.ts           # Utilitaires (cn pour classNames)
│   └── data/
│       └── mock-data.ts   # Données mockées (projets, users)
├── public/
│   └── icons/             # 21 icônes PNG (money, user, client, sales...)
├── __tests__/             # Tests unitaires Vitest
│   ├── sidebar.test.tsx
│   ├── theme-toggle.test.tsx
│   └── ui-components.test.tsx
├── vitest.config.ts       # Configuration Vitest
└── vitest.setup.ts        # Setup tests avec jsdom
```

## ✨ Fonctionnalités Implémentées

### Pages
- ✅ **Page Auth** - Register/Login avec toggle, social login, formulaire
- ✅ **Dashboard** - 4 cartes métriques, tableau projets, orders overview
- ✅ **Tables** - Authors table, Projects table avec status et progress bars

### Composants Réutilisables
- ✅ `Button` - Variants (primary, secondary, ghost), tailles (sm, md, lg)
- ✅ `Card` - Container avec ombre et bordures arrondies
- ✅ `Badge` - Status online/offline
- ✅ `Table` - Tableau avec hover states
- ✅ `Sidebar` - Navigation avec états actifs
- ✅ `Navbar` - Header avec search, actions, user menu

### Design
- ✅ **Respect strict du Figma** - Couleurs (#3BD6C6), marges, typographie Inter
- ✅ **Responsive** - Desktop → Mobile (sidebar masquée, tables scrollables)
- ✅ **Dark/Light Mode** - Toggle avec next-themes
- ✅ **Animations** - Framer Motion (hover, transitions)
- ✅ **Données mockées** - JSON local dans `lib/data/mock-data.ts`

## 🎨 Design Tokens

### Couleurs
- **Brand Primary:** `#3BD6C6` (mint)
- **Brand Hover:** `#2FC1B1`
- **Background:** `#F5F7FB`
- **Card:** `#FFFFFF`
- **Border:** `#EAEFF6`

### Typographie
- **Font:** Inter (ou système)
- **H1:** 28-32px / semibold
- **Body:** 14-16px
- **Muted:** 12-13px

## 🚧 Ce que je ferais avec plus de temps

### Fonctionnalités
1. **Tests unitaires** - Vitest + React Testing Library pour les composants critiques
2. **Authentification réelle** - NextAuth.js avec providers (Google, GitHub)
3. **API Backend** - Integration avec une vraie API REST/GraphQL
4. **Gestion d'état** - Zustand ou Context API pour state management
5. **Validation de formulaires** - React Hook Form + Zod
6. **Pagination** - Pour les tableaux avec beaucoup de données
7. **Filtres & Search** - Sur les tables
8. **Skeleton Loaders** - États de chargement
9. **Error Boundaries** - Gestion des erreurs
10. **Notifications/Toasts** - Feedback utilisateur


## 📝 Notes de Développement

- Aucune librairie UI complète (MUI, AntD) utilisée ✅
- Composants 100% custom avec shadcn/ui comme base
- Design system cohérent avec tokens Tailwind
- Code TypeScript strict
- Conventions Next.js App Router respectées

## 🙏 Remerciements

Merci à l'équipe DEXCHANGE pour ce test technique intéressant !

---

**Développé par:** Babacar Diop  
**Date:** Octobre 2025  
**Temps de développement:** 7 heures

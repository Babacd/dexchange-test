# Test Technique Front-End – DEXCHANGE

## 📋 Description

Ce projet est une reproduction fidèle de 3 écrans (Auth/Register, Dashboard, Tables) à partir d'un design Figma, réalisé dans le cadre d'un test technique pour DEXCHANGE.

**🔗 Demo Live:** [À déployer sur Vercel]

## 🚀 Installation & Lancement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone [votre-repo-url]
cd dexchange-test

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
# Créer le build
npm run build

# Lancer le build
npm start
```

## 🛠️ Stack Technique

### Stack Obligatoire
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**

### Librairies Optionnelles Utilisées
- **shadcn/ui** - Composants UI réutilisables (Button, Card, Badge, Table)
- **framer-motion** - Animations et transitions fluides
- **next-themes** - Support du mode Dark/Light
- **lucide-react** - Icônes

## 📁 Structure du Projet

```
dexchange-test/
├── app/
│   ├── auth/              # Page d'authentification (Register/Login)
│   ├── dashboard/         # Page Dashboard avec métriques
│   ├── table/             # Page Tables (Authors & Projects)
│   ├── layout.tsx         # Layout principal avec ThemeProvider
│   └── globals.css        # Styles globaux + design tokens
├── components/
│   ├── ui/                # Composants shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── table.tsx
│   ├── layout/            # Composants de layout
│   │   ├── navbar.tsx
│   │   └── sidebar.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    ├── utils.ts           # Utilitaires (cn)
    └── data/
        └── mock-data.ts   # Données mockées
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

### Performance
- **Lazy loading** des composants lourds
- **Optimisation des images** avec Next.js Image
- **Memoization** des composants coûteux
- **Code splitting** avancé

### Accessibilité
- **ARIA labels** complets
- **Navigation au clavier**
- **Screen reader support**
- **Contraste WCAG AA**

### DevOps
- **CI/CD Pipeline** - GitHub Actions
- **Tests E2E** - Playwright
- **Monitoring** - Sentry pour error tracking
- **Analytics** - Google Analytics / Vercel Analytics

## 📝 Notes de Développement

- Aucune librairie UI complète (MUI, AntD) utilisée ✅
- Composants 100% custom avec shadcn/ui comme base
- Design system cohérent avec tokens Tailwind
- Code TypeScript strict
- Conventions Next.js App Router respectées

## 🙏 Remerciements

Merci à l'équipe DEXCHANGE pour ce test technique intéressant !

---

**Développé par:** [Votre Nom]  
**Date:** Octobre 2025  
**Temps de développement:** [X heures]

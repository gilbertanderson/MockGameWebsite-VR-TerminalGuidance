# Terminal Guidance - Site Map

```
                                    ┌─────────────────────┐
                                    │                     │
                                    │    HOME (/)         │
                                    │   Landing Page      │
                                    │                     │
                                    └──────────┬──────────┘
                                               │
                 ┌─────────────────────────────┼─────────────────────────────┐
                 │                             │                             │
                 │                             │                             │
      ┌──────────▼──────────┐       ┌─────────▼─────────┐       ┌──────────▼──────────┐
      │                     │       │                   │       │                     │
      │  FEATURES           │       │  GALLERY          │       │  ROADMAP            │
      │  /features          │       │  /gallery         │       │  /roadmap           │
      │                     │       │                   │       │                     │
      │ - Game Features     │       │ - Screenshots     │       │ - Development       │
      │ - Aircraft Details  │       │ - Videos          │       │   Timeline          │
      │ - Training System   │       │ - Media           │       │ - Future Features   │
      │                     │       │                   │       │ - Community Input   │
      └─────────────────────┘       └───────────────────┘       └─────────────────────┘
                 │                             │                             │
                 │                             │                             │
                 └─────────────────────────────┼─────────────────────────────┘
                                               │
                 ┌─────────────────────────────┼─────────────────────────────┐
                 │                             │                             │
      ┌──────────▼──────────┐       ┌─────────▼─────────┐       ┌──────────▼──────────┐
      │                     │       │                   │       │                     │
      │  REQUIREMENTS       │       │  DEMO             │       │  FAQ                │
      │  /requirements      │       │  /demo            │       │  /faq               │
      │                     │       │                   │       │                     │
      │ - VR Headsets       │       │ - Videos          │       │ - General           │
      │ - PC Specs          │       │ - Gameplay        │       │ - Technical         │
      │ - External Links    │       │ - Tutorials       │       │ - Gameplay          │
      │                     │       │                   │       │                     │
      └─────────────────────┘       └───────────────────┘       └─────────────────────┘
                 │                             │                             │
                 │                             │                             │
                 └─────────────────────────────┼─────────────────────────────┘
                                               │
                 ┌─────────────────────────────┼─────────────────────────────┐
                 │                             │                             │
      ┌──────────▼──────────┐       ┌─────────▼─────────┐       ┌──────────▼──────────┐
      │                     │       │                   │       │                     │
      │  ABOUT              │       │  CONTACT          │       │  PRICING            │
      │  /community             │       │  /contact         │       │  /pricing           │
      │                     │       │                   │       │                     │
      │ - Stats             │       │ - Contact Form    │       │ - Free Early Access │
      │ - Discord/Twitch    │       │ - Support Methods │       │ - Feature List      │
      │ - Contributors      │       │ - Email/Discord   │       │ - CTA               │
      │ - Guidelines        │       │ - FAQ Link        │       │                     │
      └─────────────────────┘       └───────────────────┘       └──────────┬──────────┘
                                                                            │
                                                                            │
                                                                   ┌────────▼────────┐
                                                                   │                 │
                                                                   │  CONVERSION     │
                                                                   │  Get Early      │
                                                                   │  Access         │
                                                                   │                 │
                                                                   └─────────────────┘
```

## Page Hierarchy

### Primary Navigation (10 Pages)
1. **Home** (/) - Main landing page
2. **Features** (/features) - Game features and aircraft
3. **Gallery** (/gallery) - Visual media showcase
4. **Roadmap** (/roadmap) - Development timeline
5. **Requirements** (/requirements) - System requirements
6. **Demo** (/demo) - Gameplay videos
7. **Community** (/community) - Community channels and engagement
8. **FAQ** (/faq) - Frequently asked questions
9. **Contact** (/contact) - Contact form and support
10. **Pricing** (/pricing) - Early access signup (Primary CTA)

## User Flow Paths

### Path 1: Discovery → Conversion
```
HOME → FEATURES → PRICING
```
**Goal**: Quick conversion for interested users  
**User Type**: Motivated buyer who wants to learn about features

### Path 2: Research → Decision
```
HOME → REQUIREMENTS → GALLERY → DEMO → FAQ → PRICING
```
**Goal**: Thorough evaluation before committing  
**User Type**: Careful researcher who needs full information

### Path 3: Visual Appeal → Interest
```
HOME → GALLERY → FEATURES → ROADMAP → PRICING
```
**Goal**: Visually-driven engagement  
**User Type**: User motivated by graphics and visuals

### Path 4: Support → Discovery
```
HOME → FAQ → DEMO → FEATURES → PRICING
```
**Goal**: Answer questions then showcase product  
**User Type**: Cautious user with specific concerns

### Path 5: Community Engagement
```
HOME → COMMUNITY → ROADMAP → CONTACT
```
**Goal**: Join community and provide feedback  
**User Type**: Community member or potential contributor

### Path 6: Technical Validation
```
HOME → REQUIREMENTS → DEMO → FAQ → PRICING
```
**Goal**: Verify compatibility before purchasing  
**User Type**: Technically-minded user checking specs

## Page Relationships

### Content Pages
- **Features**, **Gallery**, **Demo** → Showcase the product
- **Roadmap** → Tell the story
- **Requirements**, **FAQ** → Answer questions
- **Community** → Build engagement

### Conversion Pages
- **Pricing** → Primary conversion goal (Get Early Access)
- **Contact** → Secondary engagement (Feedback/Support)

### Support Pages
- **FAQ** → Self-service support
- **Contact** → Direct support channel
- **Requirements** → Technical validation

## Navigation Design

### Header Navigation (Fixed)
```
Logo (links to Home) | Features | Gallery | Roadmap | Requirements | Demo | Community | FAQ | Contact | [Get Started Button → Pricing]
```

### Footer Links (All Pages)
```
Logo + Copyright | Privacy | Terms | Contact/Support
```

### Cross-Page CTAs
- **All pages except Pricing** → "Get Early Access" button → Pricing page
- **Gallery** → "Experience It Yourself" → Pricing page
- **Community** → "Get Early Access" / "Contact Us" → Pricing/Contact pages
- **Roadmap** → "Share Your Ideas" → Contact page
- **Contact** → "Visit FAQ" → FAQ page

## Mobile Navigation Considerations

For mobile devices, the navigation should collapse into a hamburger menu:
```
☰ Menu
├─ Home
├─ Features
├─ Gallery
├─ Roadmap
├─ Requirements
├─ Demo
├─ Community
├─ FAQ
├─ Contact
└─ Get Started (Highlighted)
```

## SEO & URL Structure

All URLs follow a flat, semantic structure:
- `/` - Home
- `/features` - Features
- `/gallery` - Gallery
- `/roadmap` - Roadmap
- `/requirements` - Requirements
- `/demo` - Demo
- `/community` - Community
- `/faq` - FAQ
- `/contact` - Contact
- `/pricing` - Pricing

No nested routes - all pages are one level deep for simplicity and SEO optimization.

## Accessibility Navigation

All pages include:
- Skip to main content link
- Semantic navigation landmarks
- Keyboard-accessible navigation
- Active page indication (orange highlight)
- Focus indicators on all interactive elements

## Analytics Goals

### Primary Goal
- **Pricing page visits** → Early access signups

### Secondary Goals
- **Time on Features/Gallery/Demo** → Engagement depth
- **FAQ → Pricing conversion** → Objection handling success
- **Contact form submissions** → Community engagement
- **External link clicks** → Resource utilization (Flight Simulator, Dev Stream)

---

**Last Updated**: April 12, 2026  
**Version**: 2.0 (10 Pages)  
**Purpose**: Demo website for Terminal Guidance VR flight simulation game

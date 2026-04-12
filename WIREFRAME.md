# Terminal Guidance - Website Wireframe Documentation

## Overview
Terminal Guidance is a VR flight simulation game website featuring a career progression from military aviation to space exploration. The site uses a dark aerospace theme with blue and orange accent colors.

**Total Pages**: 10
- Home (Landing)
- Features
- Gallery
- Roadmap
- Requirements
- Demo
- Community
- FAQ
- Contact
- Pricing

---

## Design System

### Color Palette
- **Primary Background**: Black (#000000)
- **Secondary Background**: Zinc-900, Zinc-950
- **Primary Accent**: Blue-400, Blue-600, Indigo-700
- **Secondary Accent**: Orange-400, Orange-600, Amber-600
- **Text**: White, Gray-300, Gray-400, Gray-500
- **Borders**: Blue-900/30 opacity

**Reasoning**: Dark theme creates an aerospace/space aesthetic. Blue represents technology and aviation, while orange provides energy and warmth on hover states.

### Typography
- **Headings**: Large display sizes (text-5xl to text-8xl)
- **Body**: text-lg to text-xl for readability
- **Small text**: text-sm for metadata
- **Font weights**: Medium for headings, normal for body

**Reasoning**: Large, bold typography creates impact and confidence. Generous sizing ensures readability in VR/aerospace context.

### Motion & Transitions
- **Page transitions**: 400ms fade + slide
- **Hover states**: Scale transforms (1.05)
- **Scroll animations**: Opacity and Y-axis transforms
- **Loading overlay**: Spinning blue border spinner

**Reasoning**: Smooth transitions create seamless SPA experience similar to Space Force website. Motion adds polish without overwhelming users.

---

## Global Navigation Component

### Structure
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo Icon] TERMINAL GUIDANCE    Features Requirements Demo FAQ [Get Started Button] │
└─────────────────────────────────────────────────────────────┘
```

### Elements
1. **Logo/Brand** (Left)
   - Plane icon (blue-500)
   - Text: "TERMINAL GUIDANCE" 
   - Gradient: blue-400 → orange-400 → yellow-300
   - Links to home page

2. **Navigation Links** (Center-Right)
   - Features
   - Gallery
   - Roadmap
   - Requirements
   - Demo
   - Community
   - FAQ
   - Contact
   - Active state: Orange-400 text
   - Hover state: Blue-400 text
   - Smaller text size (text-sm) to fit all links

3. **CTA Button** (Right)
   - "Get Started"
   - Blue-to-indigo gradient
   - Hovers to orange gradient
   - Links to /pricing

### Behavior
- Fixed position at top
- 90% opacity black background with blur
- Blue border bottom
- Appears with slide-down animation
- Active page highlighted in orange

**Design Reasoning**: 
- Fixed navigation provides constant access to all pages
- CTA button prominently positioned for conversion
- Active states provide clear user orientation
- Blur effect creates depth and modern aesthetic

---

## Page 1: Home (Landing Page)

### Layout Structure
```
┌────────────────────────────────────────────────────┐
│              NAVIGATION (Fixed)                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          HERO SECTION (Full Screen)                │
│     - Background Video                             │
│     - Title, Tagline, Description                  │
│     - CTA Button                                   │
│     - Audio Toggle (Top Right)                     │
│     - Scroll Indicator (Bottom)                    │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          CAREER PROGRESSION SECTION                │
│     - Section Title                                │
│     - 4 Vehicle Cards (2x2 Grid)                   │
│       * F/A-18 Super Hornet                        │
│       * Cargo Plane                                │
│       * Helicopter                                 │
│       * Orion Spacecraft                           │
│     - Earth Background (20% opacity)               │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          CTA SECTION                               │
│     - Space Shuttle Background                     │
│     - Headline                                     │
│     - Two Buttons                                  │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FOOTER                                    │
│     - Copyright + Demo Notice                      │
│     - Three Action Buttons                         │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Section Details

#### 1. Hero Section
**Elements**:
- Background video (Space Force footage, looping, autoplay, muted)
- Gradient overlays (black → transparent, blue/orange tints)
- Audio control button (top right, orange icon, mute/unmute toggle)
- Skip to main content link (accessibility, hidden until focused)
- Main heading: "TERMINAL GUIDANCE" (gradient text)
- Tagline: "Precision is the Only Option" (orange-300, uppercase)
- Description paragraph (3 sentences about career progression)
- CTA button: "Begin Training" (blue→orange gradient)
- Scroll indicator (animated bounce, orange gradient line)

**Reasoning**:
- Full-screen hero creates immediate immersion
- Video background conveys motion and aerospace theme
- Gradient text draws eye to brand name
- Audio toggle respects user preferences (starts muted per browser standards)
- Clear hierarchy: Brand → Tagline → Description → Action
- Skip link ensures keyboard navigation accessibility
- Scroll indicator guides users to explore more

#### 2. Career Progression Section
**Elements**:
- Background: Earth from space image (opacity 20%)
- Section heading: "The Career Progression"
- Subheading explaining 1:1 scale simulation
- 4 vehicle cards in 2x2 grid (responsive to 1 column on mobile)

**Each Card Contains**:
- Aircraft image (aspect ratio 16:10)
- Gradient overlay (black → transparent)
- Stage label (blue-400, uppercase)
- Aircraft name (text-2xl/3xl)
- Description text
- Arrow icon (appears on hover, orange background)
- Click action: Opens YouTube video in new tab

**Card Hover States**:
- Card translates up (-8px)
- Image scales (1.05)
- Arrow icon fades in
- Stage label turns orange

**Reasoning**:
- Earth background reinforces space/orbital theme
- Grid layout shows clear progression path
- Clickable cards create exploration opportunity
- Hover states provide clear affordance
- External video links reduce page weight
- Stage labels establish hierarchy (Naval → Test Pilot → NASA → Artemis)

#### 3. Final CTA Section
**Elements**:
- Background: Space shuttle launch image
- Dark overlay (70% opacity)
- Heading: "Are You Ready?"
- Description paragraph
- Two buttons (side by side on desktop, stacked on mobile):
  - "Get Started" (primary, blue→orange)
  - "Watch Trailer" (secondary, blue border→orange border)

**Reasoning**:
- Dramatic imagery creates urgency
- Clear dual action: commit (Get Started) or learn more (Trailer)
- Button hierarchy through visual weight
- Reinforces space mission endpoint

#### 4. Footer
**Elements**:
- Top border (blue, low opacity)
- Left side: Logo icon + copyright + "For demo purposes only"
- Right side: Three action buttons
  - Community → LinkedIn profile
  - Compliance → WCAG documentation  
  - Education → UMGC website
- Background gradient (black → blue-950/20 → zinc-950)

**Reasoning**:
- Footer buttons provide portfolio/educational context
- Demo notice manages expectations
- Different button colors create visual interest
- Links open in new tabs (external destinations)

---

## Page 2: Features

### Layout Structure
```
┌────────────────────────────────────────────────────┐
│              NAVIGATION (Fixed)                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          HERO SECTION                              │
│     - Title: "Uncompromising Realism"              │
│     - Description                                  │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FEATURES GRID                             │
│     - 6 Feature Cards (3x2 Grid)                   │
│       1. 1:1 Scale Simulation                      │
│       2. Realistic Physics Engine                  │
│       3. VR-Optimized Controls                     │
│       4. Global Environments                       │
│       5. Mission Replay System                     │
│       6. Air Traffic Control                       │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          TECHNICAL DETAILS                         │
│     - Section Title                                │
│     - 3 Detail Blocks                              │
│       * Authentic Flight Models                    │
│       * Procedural Training                        │
│       * Orbital Mechanics                          │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FOOTER                                    │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Section Details

#### Features Grid
**Each Card Structure**:
- Icon container (gradient background, rounded)
- Feature title (text-2xl)
- Description paragraph (gray-400)
- Border: zinc-800, hovers to blue-700

**Icon Gradients**:
1. Blue-500 → Indigo-600 (Scale)
2. Orange-500 → Amber-600 (Physics)
3. Blue-600 → Blue-700 (Controls)
4. Indigo-500 → Purple-600 (Environments)
5. Orange-600 → Red-600 (Replay)
6. Blue-500 → Cyan-600 (ATC)

**Reasoning**:
- Grid creates scannable layout
- Icons provide visual anchors
- Color variation adds interest without chaos
- Gradient backgrounds tie to brand palette
- Hover border change encourages exploration

#### Technical Details
**Structure**:
- Dark background (zinc-950)
- 3 bordered sections with left accent bar
- Blue, orange, indigo accent colors
- Detailed explanatory text

**Reasoning**:
- Separate section for depth
- Left borders create visual rhythm
- Color-coded sections aid scanning
- Detailed copy satisfies technical audience

---

## Page 3: Requirements

### Layout Structure
```
┌────────────────────────────────────────────────────┐
│              NAVIGATION (Fixed)                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          HERO SECTION                              │
│     - Title: "System Requirements"                 │
│     - Subtitle                                     │
│     - Two CTA Buttons                              │
│       * Flight Simulator                           │
│       * Dev Stream                                 │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          VR HEADSETS SECTION                       │
│     - Section Title                                │
│     - 6 Headset Cards (2x3 Grid)                   │
│     - Alert Box (Hand Tracking Notice)             │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          PC SPECIFICATIONS                         │
│     - Two Columns                                  │
│       * Minimum (Orange accent)                    │
│       * Recommended (Blue accent/highlight)        │
│     - Performance Tip Box                          │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          ADDITIONAL REQUIREMENTS                   │
│     - 3 Cards                                      │
│       * Internet Connection                        │
│       * HOTAS Support                              │
│       * Audio                                      │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FOOTER                                    │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Section Details

#### Hero with CTA Buttons
**New Elements**:
- Two buttons below subtitle
- Same styling as primary buttons (blue→orange gradient)
- "Flight Simulator" and "Dev Stream" links

**Reasoning**:
- Provides reference resources upfront
- Flight Simulator sets context for similar game
- Dev Stream offers transparency/engagement

#### VR Headsets
**Card Structure**:
- Headset name (left)
- Status badge (right, color-coded)
  - Green: "Recommended"
  - Blue: "Supported"  
  - Orange: "Coming Soon"

**Alert Box**:
- Blue background/border
- Alert icon
- Heading + description
- Explains hand tracking requirement

**Reasoning**:
- Clear compatibility matrix
- Color coding for quick scanning
- Alert highlights critical requirement
- Two-column layout maximizes space

#### PC Specifications
**Side-by-Side Comparison**:
- Minimum (left, standard zinc background)
- Recommended (right, blue gradient border/background)

**Spec Fields**:
- OS, Processor, Memory, Graphics, Storage
- Small label + larger value

**Performance Tip Box**:
- Green background/border
- Checkmark icon
- RTX 4080 recommendation

**Reasoning**:
- Comparison format aids decision-making
- Visual emphasis on recommended specs (most users want best experience)
- Tip box sets expectations for optimal performance
- Structured data format ensures clarity

#### Additional Requirements
**3 Cards**:
- Internet, HOTAS, Audio
- Consistent card styling
- Blue headings

**Reasoning**:
- Separates "nice-to-have" from critical specs
- Card format maintains consistency
- Keeps page scannable

---

## Page 4: Demo

### Layout Structure
```
┌────────────────────────────────────────────────────┐
│              NAVIGATION (Fixed)                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          HERO SECTION                              │
│     - Title: "See It In Action"                    │
│     - Description                                  │
│     - Watch Full Trailer Button                    │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          VIDEO GRID                                │
│     - Section Title                                │
│     - 4 Video Cards (2x2 Grid)                     │
│       * F/A-18 Super Hornet                        │
│       * Helicopter                                 │
│       * Cargo Plane                                │
│       * Orion Spacecraft                           │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          STATS GRID                                │
│     - Section Title + Subtitle                     │
│     - 6 Feature Pills (2x3 Grid)                   │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FINAL CTA                                 │
│     - Headline                                     │
│     - Description                                  │
│     - Get Started Button                           │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FOOTER                                    │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Section Details

#### Hero Section
**Elements**:
- Gradient title (blue→orange→yellow)
- Large play button (primary CTA)
- Links to main YouTube trailer

**Reasoning**:
- Video-focused page starts with video CTA
- Play icon creates clear affordance

#### Video Grid
**Each Card**:
- Thumbnail image (aspect ratio 16:9)
- Play overlay (centered play button)
  - Blue circle, hovers to orange
- Title (text-2xl)
- Description
- "Watch on YouTube" link with external icon
- Whole card is clickable

**Hover States**:
- Image scales (1.05)
- Overlay fades from 40% to 20% opacity
- Play button color changes blue→orange
- Title text turns blue→orange

**Reasoning**:
- Large thumbnails showcase visual quality
- Play overlay creates clear video affordance
- Hover states provide feedback
- External link indication manages expectations
- Matches vehicle cards on home page for consistency

#### Stats Grid
**Structure**:
- Dark background (zinc-950)
- 6 pills in 2x3 grid
- Each pill: zinc-900 background, blue dot, feature text

**Features Listed**:
- 10,000+ hours of flight training completed
- 4 authentic vehicle simulations
- NASA-inspired orbital mechanics
- Real ATC communications
- Mission replay system
- VR hand tracking support

**Reasoning**:
- Social proof ("10,000+ hours")
- Feature highlights build confidence
- Compact format maintains scanability
- Blue dots create visual rhythm

---

## Page 5: FAQ

### Layout Structure
```
┌────────────────────────────────────────────────────┐
│              NAVIGATION (Fixed)                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          HERO SECTION                              │
│     - Title: "Frequently Asked Questions"          │
│     - Description                                  │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FAQ ACCORDION                             │
│     - 10 Q&A Items                                 │
│       (Collapsible sections)                       │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          SUPPORT SECTION                           │
│     - Title                                        │
│     - Two Action Buttons                           │
│       * View Compliance Docs                       │
│       * Contact Us                                 │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FOOTER                                    │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Section Details

#### FAQ Accordion
**Structure**:
- 10 collapsible sections
- First one open by default
- Click anywhere on question bar to toggle

**Each Item**:
- Question (text-lg/xl, clickable button)
- Chevron icon (blue, rotates 180° when open)
- Answer (gray-300, animated height expand/collapse)
- Border separators between items

**Questions Covered**:
1. VR flight experience requirement
2. Playing without VR headset
3. Time to master each vehicle
4. Multiplayer/co-op support
5. HOTAS controller requirement
6. Skipping vehicles
7. Physics realism
8. Future aircraft additions
9. Motion sickness
10. Demo/free trial

**Interaction**:
- Click question to expand/collapse
- Smooth height animation (300ms)
- Only one can be open at a time
- Keyboard accessible (Enter/Space)
- Focus ring on keyboard navigation

**Reasoning**:
- Accordion reduces visual overwhelm
- Common questions address purchase barriers
- Default-open first question gets users started
- Single-open pattern keeps page manageable
- Smooth animations feel polished

#### Support Section
**Elements**:
- Dark background (zinc-950)
- Centered content
- Two buttons (side by side):
  - "View Compliance Docs" (primary, blue→orange)
  - "Contact Us" (secondary, border)

**Reasoning**:
- Catches users who didn't find answer
- Compliance link builds trust
- Contact option provides fallback

---

## Page 6: Pricing

### Layout Structure
```
┌────────────────────────────────────────────────────┐
│              NAVIGATION (Fixed)                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          HERO SECTION                              │
│     - Title: "Get Terminal Guidance"               │
│     - Subtitle: "One-time purchase..."             │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          PRICING CARD                              │
│     - Early Access Badge                           │
│     - Strikethrough Price                          │
│     - FREE Badge                                   │
│     - Feature List (1 active, 8 strikethrough)     │
│     - Get Early Access Button                      │
│     - Guarantee Text                               │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          NEWSLETTER SECTION                        │
│     - Icon + Title                                 │
│     - Email Form                                   │
│     - Privacy Text                                 │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FAQ PREVIEW                               │
│     - Two Link Cards                               │
│       * View FAQ                                   │
│       * Contact Support                            │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FOOTER                                    │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Section Details

#### Pricing Card
**Structure**:
- Blue gradient border (emphasized)
- Blue gradient background (subtle)
- Centered content
- Max-width constraint

**Price Display**:
- "Early Access" label (blue, uppercase)
- $49.99 (strikethrough, gray)
- "FREE" (text-6xl/7xl, orange-400)
- "Free for early access! Limited time only."

**Feature List**:
- 9 features total
- Checkmark icons (all blue-600 circles)
- First feature: Normal text
- Features 2-9: Strikethrough + opacity 50%

**Features**:
1. All 4 vehicle simulations (ACTIVE)
2. Career progression system (crossed out)
3. Mission replay system (crossed out)
4. Hand tracking support (crossed out)
5. HOTAS controller support (crossed out)
6. Regular content updates (crossed out)
7. Cloud save synchronization (crossed out)
8. Achievement system (crossed out)
9. Lifetime access (crossed out)

**CTA Button**:
- "Get Early Access"
- Full width
- Blue→orange gradient
- Links to artifact/demo

**Guarantee Text**:
- Small, gray, centered
- "30-day money-back guarantee..."

**Reasoning**:
- Strikethrough price shows value
- FREE in orange creates excitement
- Limited features for early access manages expectations
- Only core feature (vehicles) available
- Visual hierarchy: Price → Features → Action
- Guarantee reduces purchase anxiety
- Blue border draws attention to entire card

#### Newsletter Section
**Elements**:
- Dark background (zinc-950)
- Bell icon (blue-400)
- Title: "Stay Updated"
- Description
- Email input field (zinc-900, blue focus ring)
- Subscribe button (blue→orange)
- Privacy notice (small, gray)
- Success state (green box with checkmark)

**Reasoning**:
- Captures leads who aren't ready to buy
- Bell icon = notification metaphor
- Privacy notice builds trust
- Success state provides feedback
- Dark background creates visual break

#### FAQ Preview
**Two Cards**:
1. "View FAQ" → links to /faq page
2. "Contact Support" → links to LinkedIn

**Styling**:
- Zinc-900 background
- Blue headings
- Hover: blue-700 border
- Focus rings for accessibility

**Reasoning**:
- Addresses remaining objections
- Internal link keeps users on site
- External contact provides escape valve

---

## Page 7: Community

### Layout Structure
```
┌────────────────────────────────────────────────────┐
│              NAVIGATION (Fixed)                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          HERO SECTION                              │
│     - Users Icon                                   │
│     - Title: "Join Our Community"                  │
│     - Description                                  │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          COMMUNITY STATS (4 Stats Grid)            │
│     - 5,000+ Active Pilots                         │
│     - 250+ Bug Reports                             │
│     - 1,200+ Feature Requests                      │
│     - 50+ Community Events                         │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          HOW TO GET INVOLVED (3 Channels)          │
│     - Discord Community                            │
│       * Icon, description, member count            │
│       * Join Discord CTA                           │
│     - Dev Streams                                  │
│       * Twitch link, weekly schedule               │
│       * Follow on Twitch CTA                       │
│     - Community Events                             │
│       * Monthly events, challenges                 │
│       * View Calendar CTA                          │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FEATURED COMMUNITY MEMBERS                │
│     - 4 Contributor Cards (2x2 grid)               │
│       * Top Contributor (Callsign: Maverick)       │
│       * Community Manager (Callsign: Tower)        │
│       * Content Creator (Callsign: Viper)          │
│       * Beta Tester (Callsign: Iceman)             │
│     - Each with role, callsign, contributions      │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          COMMUNITY GUIDELINES                      │
│     - Card with guidelines                         │
│       * Be Respectful                              │
│       * Share Knowledge                            │
│       * Give Constructive Feedback                 │
│       * Stay On Topic                              │
│       * No Toxicity                                │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          READY TO JOIN CTA                         │
│     - Title: "Ready to Join?"                      │
│     - Description                                  │
│     - Two Buttons:                                 │
│       * Get Early Access → /pricing                │
│       * Contact Us → /contact                      │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FOOTER                                    │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Section Details

#### Hero Section
**Elements**:
- Gradient background with blur orbs (blue/orange)
- Circular icon container (Users icon)
- Gradient title: "Join Our Community"
- Description about connecting with pilots

**Reasoning**:
- Users icon represents community focus
- Welcoming message encourages engagement
- Sets collaborative tone
- Differentiates from marketing pages

#### Community Stats
**4 Stats Grid**:
- Large numbers (blue→orange gradient)
- Gray labels
- 2x2 on mobile, 4 columns on desktop
- Animated on scroll-in

**Stats**:
1. 5,000+ Active Pilots
2. 250+ Bug Reports
3. 1,200+ Feature Requests
4. 50+ Community Events

**Reasoning**:
- Shows active, engaged community
- Numbers build credibility
- Multiple contribution types shown
- Encourages participation

#### How to Get Involved (3 Channels)
**Card Structure**:
- Icon in gradient circle
- Title, description
- Link/member count
- CTA button

**3 Channels**:
1. **Discord**: Main community hub, 5,247 members
2. **Dev Streams**: Weekly Twitch streams, Thursdays 7PM EST
3. **Community Events**: Monthly challenges and competitions

**Reasoning**:
- Multiple engagement options
- Clear next steps for each
- Social proof (member counts)
- Different engagement levels (casual to competitive)

#### Featured Community Members
**4 Contributor Cards**:
- Trophy icon
- Role badge (orange)
- Callsign (blue)
- Contribution description
- Orange border on hover

**Contributors**:
1. Top Contributor: Bug reporting, flight model improvements
2. Community Manager: Event organization, moderation
3. Content Creator: Tutorials, streaming
4. Beta Tester: Pre-release testing, detailed feedback

**Reasoning**:
- Celebrates community contributions
- Shows what's valued
- Creates aspiration for recognition
- Builds culture of participation

#### Community Guidelines
**5 Guidelines**:
- Be Respectful
- Share Knowledge
- Give Constructive Feedback
- Stay On Topic
- No Toxicity

**Styling**:
- Heart icon
- Blue card background
- Clear, concise rules
- Positive framing

**Reasoning**:
- Sets expectations early
- Positive tone
- Specific behaviors
- Maintains quality culture

#### Ready to Join CTA
**Two CTAs**:
1. Get Early Access (primary)
2. Contact Us (secondary)

**Reasoning**:
- Multiple conversion paths
- Primary: Purchase/download
- Secondary: Questions/engagement
- Both blue→orange gradient buttons

---

## Page 8: Gallery

### Layout Structure
```
┌────────────────────────────────────────────────────┐
│              NAVIGATION (Fixed)                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          HERO SECTION                              │
│     - Camera Icon                                  │
│     - Title: "Gallery"                             │
│     - Description                                  │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          F/A-18 SUPER HORNET SECTION               │
│     - Section Title + Description                  │
│     - 4 Screenshot Cards (2x2 grid)                │
│     - Captions on hover                            │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          C-130 HERCULES SECTION                    │
│     - Section Title + Description                  │
│     - 4 Screenshot Cards (2x2 grid)                │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          UH-60 BLACK HAWK SECTION                  │
│     - Section Title + Description                  │
│     - 4 Screenshot Cards (2x2 grid)                │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          ORION SPACECRAFT SECTION                  │
│     - Section Title + Description                  │
│     - 4 Screenshot Cards (2x2 grid)                │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          VIDEO HIGHLIGHTS SECTION                  │
│     - Section Title                                │
│     - 4 Video Cards (2x2 grid)                     │
│       * Mission Walkthrough (12:45)                │
│       * Carrier Landing Tutorial (8:20)            │
│       * VR Controls Guide (6:15)                   │
│       * Artemis II Highlight (15:30)               │
│     - Play button overlay on hover                 │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          EXPERIENCE CTA                            │
│     - Title: "Experience It Yourself"              │
│     - Description                                  │
│     - Get Early Access Button                      │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FOOTER                                    │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Section Details

#### Screenshot Sections (4 Aircraft)
**Structure**:
- Each aircraft gets dedicated section
- Title (blue→orange gradient)
- Description text
- 4 image cards in 2x2 grid
- Aspect ratio: 16:9 (video aspect)

**Image Cards**:
- Blue-950 gradient placeholder background
- ImageIcon placeholder (demo)
- Caption slides up on hover
- Orange border on hover
- Dark overlay gradient on hover

**Captions** (Examples):
- "Carrier deck takeoff at sunrise"
- "Formation flight over the Pacific"
- "Night landing approach"
- "Cockpit instrument panel detail"

**Reasoning**:
- Organized by aircraft matches features page
- Captions provide context
- Hover interaction creates engagement
- Placeholders allow for future real screenshots
- 16:9 ratio standard for screenshots

#### Video Highlights
**4 Video Cards**:
- Video icon placeholder
- Duration badge
- Title
- Play button overlay (appears on hover)
- Orange play button (CTA color)

**Reasoning**:
- Videos prove gameplay quality
- Duration helps users decide time investment
- Play button is clear affordance
- Orange = action/CTA color

#### Experience CTA
**Elements**:
- Border card (emphasized)
- Blue→orange gradient title
- Description
- Orange→blue gradient button
- Links to /pricing

**Reasoning**:
- Strong conversion opportunity
- "Screenshots can't capture..." creates urgency
- Natural next step after viewing media

---

## Page 9: Roadmap

### Layout Structure
```
┌────────────────────────────────────────────────────┐
│              NAVIGATION (Fixed)                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          HERO SECTION                              │
│     - Sparkles Icon                                │
│     - Title: "Development Roadmap"                 │
│     - Description                                  │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          PHASE 1: Early Access Launch (Q2 2026)    │
│     - Status: Current (orange pulse dot)           │
│     - 6 Features (4 complete, 2 planned)           │
│     - Checkmarks for completed                     │
│     - Clock icons for planned                      │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          PHASE 2: Expanded Training (Q3 2026)      │
│     - Status: Planned (blue dot)                   │
│     - 6 Features (all planned)                     │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          PHASE 3: Multiplayer Training (Q4 2026)   │
│     - Status: Planned (blue dot)                   │
│     - 6 Features (all planned)                     │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          PHASE 4: Extended Missions (2027)         │
│     - Status: Future (gray dot)                    │
│     - 6 Features (all future)                      │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          COMMUNITY REQUESTS                        │
│     - Title: "Community Requests"                  │
│     - 5 Top Requests (numbered)                    │
│     - Orange gradient borders                      │
│     - CTA: "Share Your Ideas" → /contact           │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          TRANSPARENCY NOTE                         │
│     - Card with commitment message                 │
│     - Disclaimer about timeline changes            │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FOOTER                                    │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Section Details

#### Phase Cards (4 Phases)
**Header Structure**:
- Status indicator dot (pulsing for current)
- Phase label + quarter badge
- Title
- Description

**Status Types**:
- **Current**: Orange dot (animated), orange badge
- **Planned**: Blue dot, blue badge
- **Future**: Gray dot, gray badge

**Feature List**:
- 2-column grid
- Checkmark (green) or clock (gray) icon
- Feature name (gray-300 if complete, gray-500 if not)

**Phase Progression**:
1. **Phase 1**: Core aircraft + career (mostly complete)
2. **Phase 2**: Additional aircraft + weather (planned)
3. **Phase 3**: Multiplayer features (planned)
4. **Phase 4**: Extended missions + editor (future)

**Reasoning**:
- Clear visual status indicators
- Realistic timelines build trust
- Feature details show depth
- Completed items prove progress
- Future plans create anticipation

#### Community Requests
**5 Cards**:
- Numbered (1-5 priority)
- Orange borders (community = action)
- Hover effect
- CTA to contact page

**Examples**:
1. "Additional helicopter variants"
2. "Full cockpit interaction with hand tracking"
3. "Dynamic campaign mode"
4. "Flight sim peripheral support"
5. "Photo mode with free camera"

**Reasoning**:
- Shows community engagement
- Validates user input
- Creates sense of ownership
- Links to contact for more input

#### Transparency Note
**Content**:
- Honest disclaimer about timelines
- Commitment to communication
- Monthly dev streams mention
- Community Discord mention

**Reasoning**:
- Manages expectations
- Builds trust through honesty
- Prevents disappointment
- Shows accountability

---

## Page 10: Contact

### Layout Structure
```
┌────────────────────────────────────────────────────┐
│              NAVIGATION (Fixed)                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          HERO SECTION                              │
│     - MessageSquare Icon                           │
│     - Title: "Contact Us"                          │
│     - Description                                  │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          CONTACT METHODS (3 Cards)                 │
│     - Email Support                                │
│       * Icon, title, description                   │
│       * support@terminalguidance.com               │
│       * "Response within 24 hours"                 │
│     - Community Discord                            │
│       * discord.gg/terminalguidance                │
│       * "Active 24/7"                              │
│     - Developer Blog                               │
│       * blog.terminalguidance.com                  │
│       * "Weekly updates"                           │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          CONTACT FORM                              │
│     - Title: "Send Us a Message"                   │
│     - Form Fields:                                 │
│       * Name (required)                            │
│       * Email (required)                           │
│       * Subject dropdown (required)                │
│         - Technical Support                        │
│         - Feedback & Suggestions                   │
│         - Bug Report                               │
│         - Feature Request                          │
│         - Business Inquiry                         │
│         - Other                                    │
│       * Message textarea (required)                │
│       * Newsletter checkbox (optional)             │
│     - Submit Button                                │
│     - Required fields notice                       │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FAQ LINK SECTION                          │
│     - Title: "Looking for Quick Answers?"          │
│     - Description                                  │
│     - Visit FAQ Button                             │
│                                                     │
├────────────────────────────────────────────────────┤
│                                                     │
│          FOOTER                                    │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Section Details

#### Contact Methods (3 Cards)
**Card Structure**:
- Icon in blue gradient circle
- Title (blue-300)
- Description (gray-400)
- Contact info (orange-400)
- Availability (gray-500)

**3 Methods**:
1. **Email Support**: Direct 1-on-1 help
2. **Discord**: Community interaction
3. **Blog**: Updates and news

**Reasoning**:
- Multiple channels for different needs
- Clear response expectations
- Icon + color coding for quick scanning
- Community option reduces support load

#### Contact Form
**Form Fields**:
- **Name**: Text input
- **Email**: Email validation
- **Subject**: Dropdown (categorizes requests)
- **Message**: Textarea (6 rows)
- **Newsletter**: Checkbox (lead capture)

**Styling**:
- Black/blue gradient background
- Blue borders with focus rings
- Full-width layout
- Accessible labels
- Clear required indicators

**Subject Options**:
1. Technical Support
2. Feedback & Suggestions
3. Bug Report
4. Feature Request
5. Business Inquiry
6. Other

**Submit Behavior**:
- Demo: Alert message (no actual send)
- Production: Would POST to API
- Blue→orange gradient button
- Send icon

**Reasoning**:
- Categorization helps routing
- Required fields ensure completeness
- Newsletter checkbox captures leads
- Full-width makes form prominent
- Blue focus rings match design system
- Demo-appropriate (alert vs real send)

#### FAQ Link Section
**Elements**:
- Centered content
- Blue heading
- Gray description
- Blue→orange CTA button to /faq

**Reasoning**:
- Reduces support load
- Self-service option
- Links to existing resource
- Natural pre-contact step

---

## Shared Components

### Page Transition System
**Mechanism**:
- AnimatePresence wrapper
- Fade + slide animation (400ms)
- Loading overlay (blurred background, spinner)
- Instant scroll to top

**Reasoning**:
- Creates SPA feel
- Loading state prevents disorientation
- Smooth transitions reduce cognitive load

### Accessibility Features
1. **Skip to main content link**
   - Hidden until focused
   - Orange background on focus
   - Jumps to #main-content

2. **Focus indicators**
   - 4px ring, blue-400
   - Applied to all interactive elements
   - Visible on keyboard navigation

3. **ARIA labels**
   - Descriptive labels on all buttons
   - "Opens in new window" notices
   - aria-expanded on accordion items

4. **Semantic HTML**
   - nav, section, article, footer tags
   - Proper heading hierarchy (h1 → h2 → h3)
   - Lists for navigation

5. **Screen reader support**
   - aria-hidden on decorative elements
   - aria-label on videos/audio
   - sr-only utility class

6. **Motion preferences**
   - Respects prefers-reduced-motion
   - Animations disabled for users who request it

**Reasoning**:
- WCAG 2.1 Level AA compliance
- Keyboard navigation for all features
- Screen reader friendly
- Inclusive design principles

---

## Responsive Behavior

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Key Adaptations
1. **Navigation**
   - Desktop: Full horizontal menu
   - Mobile: (Current implementation shows full menu)
   - Note: Could benefit from hamburger menu on mobile

2. **Hero Section**
   - Desktop: text-7xl/8xl titles
   - Mobile: text-5xl/6xl titles
   - Maintains full-screen height on all devices

3. **Card Grids**
   - Desktop: 2-3 columns
   - Mobile: Single column
   - Maintains aspect ratios

4. **Buttons**
   - Desktop: Side-by-side
   - Mobile: Stacked vertically
   - Maintains full touch targets (48px minimum)

5. **Footer**
   - Desktop: Horizontal layout
   - Mobile: Vertical stack
   - Buttons maintain spacing

**Reasoning**:
- Mobile-first approach ensures usability
- Touch targets meet accessibility guidelines
- Content hierarchy maintained across breakpoints
- Performance optimized (no separate mobile site)

---

## Design Decisions Summary

### Visual Theme
**Decision**: Dark aerospace theme with blue/orange accents
**Reasoning**: 
- Conveys space/flight simulation context
- Reduces eye strain for VR-focused audience
- Blue = technology/trust, Orange = energy/action
- Matches inspiration (Space Force website)

### Typography Scale
**Decision**: Large, bold display type
**Reasoning**:
- Creates confidence and premium feel
- Ensures readability on various devices
- Hierarchy through size (not just weight)
- Aerospace/military aesthetic = bold type

### Motion Design
**Decision**: Subtle, purposeful animations
**Reasoning**:
- SPA transitions reduce perceived load time
- Hover states provide clear affordance
- Scroll animations create depth
- Respects user motion preferences

### Navigation Pattern
**Decision**: Fixed header with inline CTA
**Reasoning**:
- Constant access to all pages
- CTA always visible (conversion)
- Active states provide orientation
- Standard pattern reduces cognitive load

### Content Structure
**Decision**: Distinct pages vs. single page
**Reasoning**:
- SEO benefits (distinct URLs)
- Manageable code organization
- Deep linking capability
- Transitions create SPA feel anyway

### Conversion Path
**Decision**: Multiple CTAs throughout
**Reasoning**:
- Hero CTA (immediate action)
- Navigation CTA (always accessible)
- Mid-page CTAs (after information)
- Pricing page (final decision)
- Removes friction at each stage

### Information Architecture
**Decision**: Progressive disclosure across 10 pages
**Reasoning**:
- **Home**: Overview and intrigue
- **Features**: Value proposition
- **Gallery**: Visual proof (screenshots/videos)
- **Roadmap**: Future vision and transparency
- **Requirements**: Technical validation
- **Demo**: Gameplay demonstration
- **FAQ**: Objection handling
- **Community**: Community engagement and social channels
- **Contact**: Support and engagement
- **Pricing**: Conversion
- Each page builds toward either purchase (Pricing) or engagement (Contact)

---

## Technical Implementation Notes

### Performance Optimizations
1. **Lazy-loaded images** on scroll-in cards
2. **Video optimization** (muted, playsinline for mobile)
3. **Code splitting** by route
4. **Animation optimization** (GPU-accelerated transforms)

### SEO Considerations
1. **Semantic HTML** throughout
2. **Meta tags** for social sharing (Open Graph, Twitter Cards)
3. **Descriptive alt text** on all images
4. **Meaningful URLs** (/features, /requirements, etc.)

### Browser Support
1. **Modern browsers** (Chrome, Firefox, Safari, Edge)
2. **Fallbacks** for older browsers (no video = static image)
3. **Progressive enhancement** approach

### Asset Management
1. **External images** (Unsplash CDN)
2. **External videos** (YouTube, Space Force CDN)
3. **Local audio** (imported MP3)
4. **Optimized loading** (preload critical assets)

---

## Conclusion

The Terminal Guidance website is designed to:
1. **Immerse** visitors in the aerospace theme immediately
2. **Educate** about the product features and requirements
3. **Build confidence** through visual proof and technical details
4. **Convert** with clear CTAs and removed friction
5. **Provide accessibility** for all users
6. **Create delight** through motion and polish
7. **Engage community** through Discord, Twitch, and community events
8. **Foster collaboration** through guidelines and featured contributors

With 10 comprehensive pages, the site provides multiple paths to conversion while supporting different user journeys - from quick conversion (Home → Features → Pricing) to thorough research (Home → Gallery → Roadmap → Requirements → Demo → FAQ → Pricing) to community engagement (Home → Community → Roadmap → Contact).

Each design decision supports the goal of presenting a premium VR simulation experience while maintaining accessibility and performance standards.

---

**Wireframe Version**: 2.0  
**Last Updated**: April 12, 2026  
**Total Pages**: 10  
**Design System**: Dark aerospace theme with blue/orange accents

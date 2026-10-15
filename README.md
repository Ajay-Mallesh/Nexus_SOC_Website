# Crypto_Top Website - Multi-Voltage ASIC Design Documentation Portal

A professional, multi-page website for the **Multi-Voltage Crypto Core: RTL to GDSII** project documentation. This is a comprehensive reference portal for a 32nm multi-voltage cryptographic accelerator ASIC design.

## Project Overview

**Multi-Voltage Crypto Core** (Crypto_Top) is a complete RTL-to-GDSII design flow reference that demonstrates:
- **32nm CMOS Technology** with ~600K instances pre-synthesis
- **Dual-voltage architecture** (0.95V high-performance / 0.75V low-power)
- **Complete design flow** from RTL through physical design to signoff
- **Industry-standard methodologies** and tools (Synopsys Design Compiler, ICC2)

## Website Features

### Navigation Structure
- **Home**: Project overview and specifications
- **Input Files**: RTL, UPF, SDC constraints
- **Scripts**: Complete automation flows (Synthesis, Floorplanning, Placement, CTS, Routing, Signoff, DRV/Setup Fixes)
- **Shapes**: Floorplan designs (A Shape, Y Shape)
- **MCMM Constraints**: Multi-corner multi-mode timing setup
- **Manual**: PDF and website documentation links
- **Xtra Files**: Additional resources (coming soon)

### Design Highlights

#### Multi-Voltage Architecture
- **High-Performance Domain (0.95V)**: Main datapath and computational engines
- **Low-Power Domain (0.75V)**: Control logic and peripherals
- Safe voltage-domain crossing with level shifters
- UPF-based power intent integration

#### Complete Design Flow
1. **RTL Design**: 128-bit cryptographic accelerator with SPN architecture
2. **Synthesis**: Multi-voltage synthesis with DFT insertion
3. **Floorplanning**: Core-aware floorplan with voltage areas
4. **Power Planning**: Multi-domain mesh PDN
5. **Placement**: Congestion-aware optimization
6. **Clock Tree Synthesis**: Low-skew clock distribution with level shifting
7. **Routing**: Timing and SI-driven routing
8. **Signoff**: Parasitic extraction and PrimeTime analysis

#### ECO Techniques
- Automated cell upsizing for max transition fixes
- Buffer insertion for max capacitance fixes
- Dynamic voltage-area generation

## File Structure

```
crypto_top Website/
├── index.html                 # Main website (all pages integrated)
├── css/
│   └── styles.css             # Professional styling with responsive design
├── js/
│   └── script.js              # Navigation and page management
├── pages/                     # (Optional) Individual page templates
└── README.md                  # This file
```

## Design & Styling

### Color Scheme
- **Primary**: Deep blue (#1a1a2e)
- **Secondary**: Navy (#16213e)
- **Accent**: Slate blue (#0f3460)
- **Highlight**: Crimson red (#e94560)

### Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Sticky Navigation**: Easy access to all sections
- **Smooth Animations**: Professional fade-in transitions
- **Professional Typography**: Segoe UI with clean hierarchy
- **Accessible Layout**: Proper semantic HTML structure

### Responsive Breakpoints
- **Desktop**: Full layout with side-by-side content
- **Tablet (≤1024px)**: Optimized grid columns
- **Mobile (≤768px)**: Hamburger menu, single column layout
- **Small Mobile (≤480px)**: Simplified navbar and text sizes

## Getting Started

### Quick Start
1. Open `index.html` in a web browser
2. Navigate using the horizontal navbar
3. Explore all pages and sections

### Local Development
```bash
# No build process required - this is a static website
# Simply open index.html in your browser or use a local server:

# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server .

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

## Content Sections

### Home Page
- Project title and overview
- Technology specifications table
- Project architecture and voltage domains
- Multi-voltage design challenges
- Copyright and legal information

### Input Files
- **RTL**: 128-bit cryptographic accelerator design
- **UPF**: Multi-voltage power intent specification
- **SDC**: Synthesis and physical design timing constraints

### Scripts
- **Synthesis**: Synopsys Design Compiler flow with DFT
- **Floorplan-to-Powerplan**: Physical design initialization
- **Placement**: Placement optimization setup
- **Clock Tree Synthesis**: CTS for multi-voltage design
- **Routing**: Timing-driven routing with SI awareness
- **Signoff**: Parasitic extraction and STA handoff
- **DRV Fixes**: Cell upsizing and buffer insertion
- **Setup Fixes**: Voltage area creation and floorplan iteration

### Shapes
- **A Shape**: Core floorplan initialization and design
- **Y Shape**: Floorplan iteration and congestion analysis

### Other Sections
- **MCMM Constraints**: Multi-corner multi-mode timing analysis
- **Manual**: Links to PDF and website documentation
- **Xtra Files**: Additional resources (coming soon)

## Technology Stack

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid
- **JavaScript (Vanilla)**: Navigation, page switching, and interactivity

## Compatibility

### Browsers
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Operating Systems
- Windows 10/11
- macOS
- Linux
- iOS/Android (mobile browsers)

## Features

### Navigation
- **Sticky Navbar**: Always accessible horizontal navigation
- **Submenu Support**: Dropdown menus for nested pages
- **Mobile Menu**: Hamburger menu on smaller screens
- **Hash-based Routing**: Clean URLs without server-side routing

### User Experience
- **Smooth Scrolling**: Elegant scroll behavior throughout
- **Responsive Images**: Proper scaling on all devices
- **Professional Footer**: Contact info, social links, and project metadata
- **Clear Hierarchy**: Well-organized content with proper heading levels

### Accessibility
- **Semantic HTML**: Proper document structure
- **Color Contrast**: High contrast for readability
- **Responsive Design**: Mobile-friendly layout
- **Link Previews**: Clear indication of external links

## Customization

### Changing Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --primary-color: #1a1a2e;
  --secondary-color: #16213e;
  --accent-color: #0f3460;
  --highlight-color: #e94560;
  /* ... more colors ... */
}
```

### Adding New Pages
1. Add new `<div class="page" id="new-page">` to index.html
2. Add corresponding navbar link with `data-page="new-page"`
3. Content will automatically be handled by JavaScript navigation

### Modifying Navigation
Edit navbar items in `index.html`:
```html
<li>
    <a href="#page-id" data-page="page-id">Page Name</a>
</li>
```

## Project Information

**Author**: Ajay Mallesh  
**Reviewer**: Gemini Pro 3.1 & Ajay Mallesh  
**Version**: 1.1.0  
**Date**: 15/07/2026

**Email**: ajaymalavalli912@gmail.com  
**LinkedIn**: www.linkedin.com/in/ajaymallesh  
**GitHub**: https://github.com/Ajay-Mallesh

## License

© 2026 Ajay Mallesh. This project is open-source and released for educational and non-commercial community use.

## Legal Disclaimer

The methodologies, TCL examples, UPF constructs, synthesis flows, timing constraints and physical implementation strategies described in this documentation are intended exclusively for educational and research purposes.

The author assumes no responsibility for: silicon failure, timing closure loss, LVS/DRC violations, power collapse, EM degradation, tape-out delay, or fabrication loss arising from improper application of the concepts described herein.

## References

- **GitHub Repository**: https://github.com/Ajay-Mallesh/crypro_top_Project_Files
- **PDF Manual**: Available in repository
- **Website Manual**: https://ajay-mallesh.github.io/crypro_top_manual_website/

## Support

For questions, issues, or contributions:
- Visit the GitHub repository
- Contact the author via email or LinkedIn
- Review the comprehensive documentation in the manual sections

---


## Changelog

### [1.1.0] - 15/07/2026

#### Added
- Added a new footer project promotion link for the Multi-Voltage Crypto Core website.
- Added a dedicated Xtra Files resource section describing macro and port physical location extraction workflows.

#### Changed
- Updated the site metadata and changelog to version `1.1.0` with date `15/07/2026`.

### [1.0.0] - 14/07/2026

#### Added
- Integrated a live database-backed global visitor counter component driven by CountAPI cloud infrastructure.
- Added a fail-safe client-side fallback mechanism using `localStorage` to ensure the layout remains functional even when browsing offline.
- Implemented **MCMM Constraints** (Multi-Corner Multi-Mode) structural links to the primary navigation logic.
- Implemented an immersive, cyberpunk hardware engineering console popup window overlay that triggers on every fresh page initialization and browser reload event.
- Added a highly visible, lightweight backdrop overlay blur effect (`backdrop-filter: blur(4px)`) featuring a precisely tuned 20% opacity tint mask to ensure the background website remains distinctly visible behind the active modal layout frame.
- Added a strict single-line text layout with decorative cyber bullet markers (`■`) to anchor primary informational site statements without structural breaks.
- Created a dynamic, infinite CSS monospaced typewriter effect loop (`typeLetterByLetterContinuous`) that slowly types out terminal text from left to right at an authentic hardware reading pace before cleanly resetting.
- Integrated hardware-inspired metadata frame elements like the `[ SYS_READY ]` console tracker text flag to establish an authentic ASIC design testing dashboard environment.
- Implemented an isolated 3-row CSS Grid layout engine on the emblem links (`.emblem-footer-link`) to cleanly separate text content from structural image containers.
- Introduced ambient wireframe tracking visibility to the HUD bounding target vector corners (`.hud-corner`), giving them an initial silver outline (`rgba(203, 213, 225, 0.5)`) prior to cursor hover interactions.
- Added a permanent crimson drop-shadow glow effect (`text-shadow: 0 0 10px rgba(233, 69, 96, 0.5)`) to the interactive footer captions during active mouse hover states.
- **Horizontal Contributor Registry**: Implemented a dedicated flexbox row wrapper layout engine (`.contributors-grid`) to display multi-engineer peer credits side-by-side in a clean, centralized workspace presentation.
- **Micro-Interaction Feedback**: Integrated hardware-accelerated asset response animations (`transform: scale(1.15)`) on the link layers during active mouse cursor hover states.

#### Changed
- Shifted away from unstable, external image-rendering widgets to a clean, lightweight HTML plain-text layout (`.counter-digits`) for maximum stability and asset load performance.
- Configured custom padding logic (`String().padStart(6, '0')`) to preserve a classic, uniform 6-digit layout dashboard profile (`000001`) without relying on blurry pixel-art image files.
- Repositioned the live visitor counter to sit directly underneath the social icons inside the **CONTACT** grid column block to prevent footer text layout crowding.
- Restructured counter container design from a circular capsule to a crisp, glowing square badge profile (`border-radius: 8px`) matching the native dimensions of the contact brand icons.
- Enhanced layout visibility using high-contrast variables: deep-dark container background (`#0f111a`), neon-pink accent outline (`#e94560`), and a sharp glowing green flashing status pulse indicator.
- Redesigned the welcome modal interface from a standard rounded web card to a sharp, zero-radius, matte-finish industrial hardware command block.
- Updated the logo image pointer path from `.jpg` to the matching original `.jpeg` filename to restore instant asset resolution.
- Expanded structural margin spacing between the primary hardware image frame and the typographical content panel (`margin-bottom: 45px !important`) to eliminate element clipping and force clear vertical breathing room.
- Re-engineered the typing loading tagline container with an explicit block layout and strict left-side alignment (`margin-left: 0; text-align: left;`) to anchor character growth perfectly from the left margin without dynamic center shifting.
- Upgraded the text design to a high-contrast dual-tone style, splitting the site title into white and crimson text variations while injecting custom drop-shadow styling highlights (`text-shadow`).
- Replaced the large bottom textual "Close" button block with a sleek, minimalist floating close command icon (`✕`) in the upper-right dashboard frame corner featuring a smooth hover rotation animation transform.
- Upgraded the baseline color of the regional Kannada text script strings (`.emblem-footer-text`) from low-contrast dim gray (`#5f6685`) to full-spectrum crisp white (`#ffffff`) to ensure thin font strokes are completely visible against the dark console backdrop.
- Expanded the physical display canvas dimensions of the tactical emblem graphics (`.emblem-footer-img`) from a restricted `90px × 60px` ratio to an authoritative `110px × 75px` hardware presentation frame.
- Scaled up the upper metadata tag attributes (`::before`) from a cramped `0.6rem` scale to a matching `0.85rem` monospaced layout format while updating its base state color to a high-contrast light silver (`#cbd5e1`).
- Altered the terminal cursor bracket (`.terminal-prefix`) to display a static, un-hidden crimson color state (`#e94560`) by default to enhance instant data tracking before link selection.
- Boosted the primary footer container top padding boundaries from `30px` to `60px` (`padding: 60px 40px 30px 40px !important`) to generate deep vertical separation between main workspace projects and the hardware footer block.
- **Asset Viewport Re-engineering**: Upgraded the asset tracking bounding box to a precise hardware clipping window (`width: 22px; height: 22px; overflow: hidden;`) to isolate structural components from raw asset elements.
- **Typography Alignment Balance**: Standardized row item element tracking gaps down to a strict `4px` layout value inside `.contributor-item` blocks for immediate alignment proximity with the text labels.

#### Fixed
- Fixed critical `ERR_NAME_NOT_RESOLVED` layout-breaking exceptions caused by the completely offline `counter.moe` DNS endpoint.
- Fixed a rendering issue where dynamic third-party script-injected banner widgets threw document exceptions and crashed footer paragraph flex layout constraints during local environment testing (`file:///`).
- Resolved a cache-persistence bug during development by switching to a brand new database namespace string, forcing a pristine and authentic start from `000001` upon production launch.
- Suppressed script-generated promotional tracking URLs using strict structural CSS overrides (`display: none !important`).
- Fixed an overflow layout issue across diverse desktop configurations by expanding container width allowances up to `680px`, ensuring text rows sit locked strictly on a single layout line.
- Resolved a duplicate border overlapping artifact by isolating the sharp single accent border to the logo graphic itself while vaporizing inherited canvas outlines on the parent logo container wrapper.
- Implemented a smart `@media` layout fallback mechanism for tablet and small-screen mobile viewports to prevent narrow layout text clipping on compact, portrait displays.
- Patched a critical text wrap collision bug where enlarged English strings (e.g., `"Kadamba Emblem"`) would break onto two rows and directly overlap the top edges of the image container.
- Resolved text crowding constraints by increasing the emblem frame wrapper's bottom margin to `14px` and introducing an explicit `10px` top margin, establishing clean breathing room around the larger typography blocks.
- **Icon Compression Flattening**: Hardened physical rendering dimensions (`min-width`, `max-width`, `min-height`, `max-height`) to completely halt the flexible viewport squeezing and horizontal distortion occurring on the graphics.
- **Asset Text Overflow Padding**: Resolved a deep horizontal phantom gap layout defect by implementing a negative pixel offset shift tracking margin (`margin-left: -58px`), successfully realigning the visible blue logo square flush against the end of the engineer's name strings.

**Last Updated**: 15/07/2026  
**Website Version**: 1.1.0

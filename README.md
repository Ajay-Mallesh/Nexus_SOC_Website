# Multi-Voltage Nexus SoC

An interactive documentation website for a **32 nm, triple-voltage Nexus system-on-chip**, covering its architecture and RTL-to-GDSII physical-design methodology.

The design reference describes three voltage domains—**1.05 V, 0.85 V, and 0.78 V**—and a post-synthesis scale of approximately **200K standard cells**. It is intended for ASIC and physical-design learning and reference.

## Website contents

- **Home** — project overview, technology specifications, voltage-domain introduction, block diagram, prerequisites, and legal information.
- **RTL, UPF, and SDC** — RTL architecture, power intent, and synthesis timing constraints.
- **Synthesis, Floorplan, and Placement** — implementation flow stages and related scripts.
- **CTS** — 12-clock architecture summary, clock-group details, CTS architecture, and H-tree visualization.
- **Routing and Signoff** — routing, parasitic extraction, PrimeTime analysis, and timing closure material.
- **MCMM, DRV Fixes, and Setup/Hold Fixes** — timing scenarios and ECO repair references.
- **Manual and Xtra Files** — project documentation and physical-design helper-script resources.
- **About Us** — contributor profiles and experience.

## Technology and methodology

The website documents a multi-voltage ASIC methodology that includes:

- Three-domain power intent and voltage-area planning
- RTL-to-GDSII implementation flow
- 12-clock timing constraints and multi-corner, multi-mode analysis
- H-tree clock-tree synthesis
- Timing-driven routing and signoff
- Maximum-transition/capacitance and setup/hold ECO strategies

The documented tool references include Synopsys Design Compiler, ICC2, PrimeTime, and StarRC. The site also lists SAED32 `.db` libraries and NDM technology libraries as design-flow prerequisites; these libraries are not included in this website repository.

## Run locally

This is a static website and does not require a build step or package installation.

1. Clone or download this repository.
2. Open `index.html` in a browser, or serve the directory locally:

   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000`.

The website uses hash-based navigation. A local web server is recommended to ensure browser behavior matches deployment. The realtime visitor counter contacts CountAPI and requires an internet connection; if the service is unavailable, the page remains usable and the counter may not update.

## Project layout

```text
v1.0.0/
├── index.html                 # Website pages and project documentation
├── css/
│   └── styles.css             # Responsive layout, diagrams, and visual styling
├── js/
│   └── script.js              # Navigation, page routing, and UI interactions
├── images/                    # Logos, profile, and footer emblem assets
├── README.md
└── site.webmanifest
```

## Related projects

- [CRYPTO CORE](https://ajay-mallesh.github.io/crypro_top_website/)
- [MV MACRO ENGINE](https://ajay-mallesh.github.io/mv_macro_engine_website/)

## Project resources

- **Project files:** [Nexus_SOC_Project_Files](https://github.com/Ajay-Mallesh/Nexus_SOC_Project_Files)
- **Author:** Ajay Mallesh
- **Contributors:** Aviraj Dhale, M Praveen Kumar, and Venkatesh Vattem
- **Contact:** [Email](mailto:ajaymalavalli912@gmail.com) · [LinkedIn](https://www.linkedin.com/in/ajaymallesh)

## Educational use and disclaimer

This project is provided for educational and non-commercial community use. The documented methodologies, Tcl examples, UPF constructs, synthesis flows, timing constraints, and physical-implementation strategies are for educational and research purposes. EDA commands and flows may vary by tool version, process, technology files, and signoff methodology. Validate all flows and results in the intended environment; the project authors assume no responsibility for design or fabrication outcomes.

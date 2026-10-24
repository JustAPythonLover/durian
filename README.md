# 🍈 TADASHI — AI-Powered Non-Destructive Durian Quality Classification
### *Tadashi NiCv-Dr-Sorter evo Gen1* | Conveyor Sorting System & Real-Time Web Simulation

[![Live Demo](https://img.shields.io/badge/Live%20Simulation-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://durian-omega.vercel.app/)
[![Autodesk Fusion 360](https://img.shields.io/badge/3D%20CAD%20Model-Autodesk%20A360-E51937?style=for-the-badge&logo=autodesk&logoColor=white)](https://a360.co/3QATuCF)
[![Case Competition](https://img.shields.io/badge/Case%20Competition-Chulalongkorn%20IOIC%202025-blue?style=for-the-badge)](docs/TADASHI_PROPOSAL.md)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#license)

> **TADASHI** is an automated, non-destructive durian quality sorting solution developed for durian packing facilities (*Lhong*) and agricultural exporters. By fusing **Shortwave Near-Infrared (SWNIR) Spectroscopy (900–1700 nm)** with **Multi-Angle Computer Vision (CV)**, TADASHI assesses internal pulp ripeness (Dry Matter %, Sugar Level °Brix) and external defects with **95% accuracy** at an industrial throughput of **1,200 durians/hour** (over 3.3× faster than manual human sorters).

---

## 📌 Table of Contents
- [Executive Overview](#-executive-overview)
- [The Problem: Why Durian Quality Matters](#-the-problem-why-durian-quality-matters)
- [The TADASHI Solution](#-the-tadashi-solution)
- [Sorting & Classification Logic](#-sorting--classification-logic)
- [Interactive Web Simulation](#-interactive-web-simulation)
- [System Architecture & Sensor Fusion](#-system-architecture--sensor-fusion)
- [Hardware & Bill of Materials (BOM)](#-hardware--bill-of-materials-bom)
- [Competitor Benchmarking](#-competitor-benchmarking)
- [Business Model & Financial Projections](#-business-model--financial-projections)
- [Repository Structure & Project Documentation](#-repository-structure--project-documentation)
- [Getting Started / Running Locally](#-getting-started--running-locally)
- [Team Members & Credits](#-team-members--credits)
- [Academic References](#-academic-references)

---

## 🌟 Executive Overview

Thailand is the world's leading exporter of fresh durians, generating over **$3.7 Billion USD annually**. However, premature harvesting of immature durians (*ทุเรียนอ่อน*) has severely damaged market confidence, causing Thai export market share in China to plummet from **68% to 57%** and triggering a **30% drop in export prices** over two years.

**TADASHI** solves this multi-million dollar challenge through an end-to-end sorting station comprising:
1. **The Physical Industrial System (`Tadashi NiCv-Dr-Sorter evo Gen1`):** An inline conveyor assembly enclosed in an optical dark chamber with 4x halogen sources, SWNIR reflectance probe, machine vision cameras, and a downstream pneumatic diverter gate.
2. **The Edge AI Pipeline:** On-device machine learning executing PLSR/LDA chemometrics and the **DuNet-12** convolutional neural network with 0 cloud latency.
3. **The Embedded Operator Interface & Web Simulation (`/web`):** A lightweight, real-time touchscreen interface providing live acceptance/rejection metrics, quality analytics, sample inspection streams, and one-click CSV export.

---

## 🚨 The Problem: Why Durian Quality Matters

### 1. Macro-Level Crisis in Thai Durian Exports
- **Export Dominance:** Durian generates Thailand's highest agricultural fruit export value ($3.7B+ USD/yr, +181% growth over 5 years).
- **Market Share Erosion:** Thai market share in China plummeted from **68% (2023)** to **57% (2024)**, while competitor Vietnam surged to $3.3B USD in exports.
- **Price Collapse:** Average export prices dropped **30% over 2 years (2024–2026)** due to reputational loss from premature harvesting.
- **The "Immature Durian" Trap:** Immature Monthong durians ($\text{Dry Matter} < 32\%$) cut too early **will never ripen**. When shipped to export markets, they remain rock-hard, unpalatable, and inedible, causing widespread consumer boycotts.

### 2. Micro-Level Operational Bottlenecks at Lhong (Exporters)
- **Subjective Human Tapping:** Sorters tap individual thorns using a rattan stick to listen to acoustic hollow resonance. Field accuracy is only **~65%**, heavily prone to worker fatigue and human error.
- **Throughput Bottlenecks:** Manual sorters can inspect only ~360 durians/hour.
- **Massive Financial Penalties:** A single 40-ft refrigerated container rejected by customs due to immature fruit results in a direct catastrophic loss of **฿5,000,000 THB (~$140,000 USD)**.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           THE LHONG PAIN POINT                          │
│                                                                         │
│  Manual Stick Tapping        65% Accuracy      360 durians / hour       │
│  High Labor Fatigue    ───►  Human Error  ───► ฿5,000,000 Loss / Rejection│
│  Subjective Sound Hearing    High OPEX         Eroding Buyer Trust      │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 The TADASHI Solution

TADASHI transforms manual, subjective grading into a deterministic, data-driven edge-computing device:

```
[ Infeed Conveyor (20 cm/s) ]
            │
            ▼
┌───────────────────────────────────────────────────────────┐
│               TADASHI BLACK BOX ENCLOSURE                 │
│                                                           │
│    [4x Halogen Illumination]    [SWNIR Probe 900-1700nm]  │
│              │                               │            │
│              ▼                               ▼            │
│       Computer Vision                   Spectrometer      │
│     (Multi-Angle Scan)               (Absorbance Spectra) │
│              │                               │            │
│              ▼                               ▼            │
│         DuNet-12 CNN                    PLSR & LDA        │
│   (External Defects & Shape)         (DM% & Brix TSS)     │
└─────────────────────────────┬─────────────────────────────┘
                              │
                              ▼
                  [ Edge Fusion Inference ]
                              │
               ┌──────────────┴──────────────┐
               ▼                             ▼
         [ APPROVED ]                  [ NEGLECTED ]
      • Ripe (DM 30–38%)            • Immature (DM < 32%)
      • Unripe (Export Ready)       • External / Pest Defect
      Pass to Export Packaging      Pneumatically Diverted
```

- **95% Overall Accuracy:** Dual-modality sensor fusion eliminates single-sensor blind spots.
- **1,200 Durians / Hour:** Inspects 1 fruit every 3 seconds (3.3× faster than human workers).
- **100% Offline Edge Inference:** Operates at remote packhouses without requiring internet connectivity or incurring cloud latency.
- **Non-Destructive Testing:** No incisions, no punctures, zero post-inspection fruit spoilage.

---

## 🎯 Sorting & Classification Logic

TADASHI classifies every fruit into one of four biological categories and automatically commands the physical divert gate:

| Class | Dry Matter (% DM) | Sugar Level (°Bx) | Status | Operational Action |
|---|---|---|---|---|
| **Ripe** (สุก) | 30.0% – 38.0% | 28.0 – 36.0 °Bx | <span style="color:#2bb5a6; font-weight:bold;">APPROVED</span> | Ready for rapid retail or premium domestic sale. |
| **Unripe** (แก่จัด / ยังไม่สุก) | 24.0% – 31.0% ($\text{DM} \ge 32\%$ benchmark) | 18.0 – 26.0 °Bx | <span style="color:#2bb5a6; font-weight:bold;">APPROVED</span> | **Ideal Export Tier:** Reaches optimal eating ripeness during maritime transit to China/EU. |
| **Immature** (อ่อน / ยังไม่โต) | 18.0% – 25.0% ($\text{DM} < 32\%$) | 10.0 – 18.0 °Bx | <span style="color:#e05638; font-weight:bold;">NEGLECTED</span> | **Pneumatically Rejected:** Will never ripen; legally banned from export consignments. |
| **Defect** (มีตำหนิ / แมลงเจาะ) | 12.0% – 28.0% | 5.0 – 22.0 °Bx | <span style="color:#e05638; font-weight:bold;">NEGLECTED</span> | **Pneumatically Rejected:** Fungal rot, fruit borer boreholes, or severe asymmetry. |

---

## 💻 Interactive Web Simulation

The web interface in this repository (`web/`) replicates the **5×8" embedded operator touchscreen** mounted directly to the *Tadashi NiCv-Dr-Sorter evo Gen1* chassis.

👉 **Try the Live Simulation:** [https://durian-omega.vercel.app/](https://durian-omega.vercel.app/)

```
┌────────────────────────────────────────────────────────┐
│  Tadashi NiCv-Dr-Sorter  evo Gen1             ● Output │
├────────────────────────────────────────────────────────┤
│  OVERVIEW                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │    Total     │  │   Approved   │  │  Neglected   │  │
│  │      10      │  │      6       │  │      4       │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                        │
│  ANALYSIS                                              │
│  ┌──────────────┬──────────────┬──────────────┬──────┐ │
│  │ Accept: 60%  │ Defect: 10%  │ Avg DM: 27.8%│ 22°Bx│ │
│  └──────────────┴──────────────┴──────────────┴──────┘ │
│                                                        │
│  CURRENT DETECTION                  Sample #10         │
│  Time: 25 Oct 2026  02:15:30                           │
│  Maturity: [ RIPE ]                 [ Durian Graphic ] │
│  Dry Matter: 34.2%                                     │
│  Sugar Level: 31.5 °Brix                               │
├────────────────────────────────────────────────────────┤
│  [ Clear Data ]     [ Simulate ]       [ Export CSV ]  │
└────────────────────────────────────────────────────────┘
```

### Key UI Features:
1. **Real-Time KPI Cards:** Instant dynamic counters for Total, Approved, and Neglected durians with pop animations.
2. **Quality Analytics Dashboard:** Continuously computes Acceptance Rate (%), Defect Rate (%), Average Dry Matter (%), and Average Sugar Level (°Bx).
3. **Detection Inspector:** Displays current fruit ID, exact inspection timestamp, color-coded maturity badge, and biochemical parameters.
4. **Monte Carlo Simulation Engine:** Generates realistic harvest sample distributions with biological variance across all four categories.
5. **CSV Exporting:** Generates structured, timestamped CSV files logging individual samples and summary statistics for packhouse record-keeping.
6. **Keyboard Controls:** Press `Space` or `S` to simulate the next fruit; press `Esc` to close modals.

---

## ⚙️ System Architecture & Sensor Fusion

### 1. Shortwave Near-Infrared (SWNIR) Spectroscopy (900–1700 nm)
- Measures diffuse reflectance spectra through the durian's thick carpel wall.
- **Key Absorption Bands:**
  - $960\text{--}980\text{ nm}$ & $1450\text{ nm}$: Second and first overtones of $O-H$ stretching (moisture content).
  - $1190\text{--}1210\text{ nm}$: Second overtone of $C-H$ stretching (carbohydrates & starch-to-sugar hydrolysis).
- **PLSR (Partial Least Squares Regression):** Predicts continuous Dry Matter % and Brix sugar content.
- **LDA (Linear Discriminant Analysis):** Discretizes maturity stages.

### 2. Computer Vision & DuNet-12 Deep Neural Network
- High-resolution multi-angle camera feed inside a dark enclosure illuminated by 4x halogen lamps.
- **DuNet-12 CNN:** Identifies:
  - Asymmetric or deformed locules ("banana durians").
  - Pest entrance boreholes (*Conogethes punctiferalis*, *Mudaria magniplaga*).
  - Surface lesions, mold, and rot (*Phytophthora palmivora*).

### 3. Edge Inference Engine
- Fully localized deployment running on an embedded industrial processor.
- **Zero Internet Dependency:** Ensures 100% operational uptime at farm gates in Chanthaburi, Trat, Chumphon, and Yala.

---

## 🛠️ Hardware & Bill of Materials (BOM)

The physical system was modeled in Autodesk Fusion 360.  
👉 **Interactive 3D CAD Assembly:** [https://a360.co/3QATuCF](https://a360.co/3QATuCF)  
👉 **Downloadable CAD File:** [`docs/cad/NIR-Proj.f3z`](docs/cad/NIR-Proj.f3z)

| Component | Function / Specification | Unit Cost (THB) |
|---|---|---|
| **NIR Sensor** | Shortwave NIR sensor probe (900–1700 nm) | ฿93,000 |
| **QA / Warranty Buffer** | Pre-delivery multi-point sensor calibration | ฿10,000 |
| **Conveyor Belt System** | 20 cm/s industrial sorting belt | ฿5,000 |
| **Assembly & Testing** | Mechanical fabrication and wiring | ฿4,000 |
| **Embedded Edge Processor** | Industrial SBC running DuNet-12 & chemometrics | ฿2,500 |
| **Touchscreen Monitor** | 5×8" operator dashboard display | ฿2,500 |
| **Industrial Wiring** | Shielded harnesses, power converters, relays | ฿2,500 |
| **Machine Vision Camera** | Multi-angle high-speed RGB camera | ฿2,000 |
| **Aluminium Enclosure** | Light-tight dark enclosure with optical shielding | ฿1,000 |
| **Directional Halogen Lamps (4x)**| Broad-spectrum visible/NIR illumination sources | ฿400 |
| **Total Cost of Goods Sold (COGS)** | **Complete Conveyor Sorting Station** | **฿122,900** |

---

## 📊 Competitor Benchmarking

| Feature / Metric | TADASHI | Manual Human Sorter | ARDA CT-Scan | LWNIR Conveyor | $\mu$PAD Paper Sensor |
|---|---|---|---|---|---|
| **Inspection Modality** | **SWNIR + CV / DuNet-12** | Stick acoustic tapping | X-Ray CT scanning | Long-wave NIR | Chemical assay strip |
| **Inspection Scope** | **Internal + External** | Internal (subjective) | Internal only | Internal only | Internal only |
| **Accuracy** | **95%** | ~65% | 95% | 85% | 90% |
| **Throughput Speed** | **Fast (1,200/hr, 3s/unit)** | Slow (~360/hr, 10s/unit) | Fast | Fast | Very Slow |
| **Destructive?** | **Non-Destructive** | Non-Destructive | Non-Destructive | Non-Destructive | Semi-Destructive |
| **Unit Capital Cost** | **฿240,000 THB** | Low initial / High OPEX | ~฿2,000,000 THB | ฿500,000–฿1,000,000 | Low unit / High recurring |
| **24/7 Reliability** | **High (No fatigue)** | Degrades with fatigue | High maintenance | Moderate | Chemical degradation |

---

## 💰 Business Model & Financial Projections

### Pricing & Margins
- **B2B Hardware Retail Price:** ฿240,000 THB / unit (sold to Lhong packing facilities).
- **COGS per Unit:** ฿122,900 THB.
- **Gross Profit per Unit:** ฿117,100 THB.
- **Gross Margin:** **48.79%** (~100% markup on manufacturing cost).
- **Annual Maintenance Contract (AMC):** ฿6,145 THB / year.
- **Break-Even Period:** **2.4 Years**.

### 3-Year Financial Forecast (THB)

| Financial Metric | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| **Gross Revenue** | ฿6,194,160 | ฿12,683,280 | ฿25,661,520 |
| **COGS** | (฿5,899,200) | (฿11,798,400) | (฿23,596,800) |
| **Gross Profit** | ฿294,960 | ฿884,880 | ฿2,064,720 |
| **Total OPEX** | (฿250,000) | (฿340,000) | (฿460,000) |
| **EBITDA** | ฿44,960 | ฿544,880 | ฿1,604,720 |
| **Net Profit** | **฿35,968** | **฿435,904** | **฿1,283,776** |

---

## 📁 Repository Structure & Project Documentation

```
.
├── index.html                           # Embedded display UX/UI for Tadashi NiCv-Dr-Sorter evo Gen1
├── style.css                            # Responsive CSS styling optimized for 5x8" & desktop
├── app.js                               # Sorting simulation logic, statistical engine & CSV generator
├── durian.png                           # Fruit asset graphic
├── README.md                            # Comprehensive project overview & documentation
└── docs/                                # Full project documentation & assets
    ├── TADASHI_PROPOSAL.md              # Complete case competition proposal & business plan
    ├── FINANCIAL_MODEL.md               # Unit economics, BOM, OPEX & 3-year revenue forecast
    ├── SYSTEM_ARCHITECTURE.md           # NIR + CV optical physics, DuNet-12 & edge inference specs
    ├── RESEARCH_REFERENCES.md           # Literature review & academic paper summaries
    ├── Finance.csv                      # Raw financial spreadsheet
    ├── Durian_Classification_Pitch_Deck.pdf # Official 16-page case competition slide deck
    ├── cad/
    │   └── NIR-Proj.f3z                 # Autodesk Fusion 360 3D CAD assembly archive
    └── research/                        # Peer-reviewed research papers (PDFs)
        ├── Identification_and_quantification_of_quality_of_in.pdf
        ├── A_Review_of_Research_Progress_on_Durian_Maturity_Identification_Technology (2).pdf
        ├── Acoustic.pdf
        └── imageprocessing.pdf
```

---

## 🚀 Getting Started / Running Locally

No build tools, bundlers, or heavy dependencies are required. The web simulation runs on vanilla modern JavaScript, HTML5, and CSS3.

### Option 1: Direct Browser Launch
Simply double-click or open `index.html` in any modern web browser (Chrome, Safari, Edge, Firefox).

### Option 2: Local HTTP Server (Python)
```bash
# Clone the repository
git clone https://github.com/JustAPythonLover/durian.git
cd durian

# Start a local static server
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

### Option 3: Deploy to Vercel / GitHub Pages
- **Vercel:** Import this repository directly into Vercel. Zero configuration needed; root `index.html` is served automatically.
- **GitHub Pages:** Go to **Settings > Pages > Source** and select the `main` branch.

---

## 👥 Team Members & Credits

Project developed for the **เจ๊งก่อนจบ IOIC 2025** Startup Case Competition at **Chulalongkorn University**.

| Name | Role | Department / Faculty |
|---|---|---|
| **Siraphop Kamhangkhumphol** (Sense) | Software & UI Engineer, Customer Impact, Presenter | Robotics & AI Engineering, Chulalongkorn University |
| **Thanavit Wongsoonthorn** (Focus) | Team Lead, Market Research, Business Model, Presenter | Electrical Engineering, Chulalongkorn University |
| **Worranai Nagasawa** (Wong) | Lead Researcher, Technical Architecture, Presenter | ICE (Information & Communication Engineering), Chulalongkorn University |
| **Thavinthorn Ngaoprommin** (Pooh) | 3D Mechanical Design & Conveyor Architecture | Mechanical Engineering, Chulalongkorn University |
| **Sorrawit Sramoon** | Financial Modeling & Business Solutions | BBA, Faculty of Commerce & Accountancy, Chulalongkorn University |

---

## 📚 Academic References

1. **Pitak, L., Ditcharoen, S., Maraphum, K., & Posom, J.** (2026). *Identification and quantification of the quality of intact durian fruits using NIR spectroscopy.* Engineering and Applied Science Research, 53(1), 61–73. [DOI: 10.64960/easr.2026.262620](https://doi.org/10.64960/easr.2026.262620)
2. **Ji, X., & Leau, Y.-B.** (2025). *A Review of Research Progress on Durian Maturity Identification Technology.* 2025 IEEE 5th International Conference on Computer Communication and Artificial Intelligence (CCAI), 108–113. [DOI: 10.1109/ccai65422.2025.11189295](https://doi.org/10.1109/ccai65422.2025.11189295)
3. **Thipsrirach, Y., Kosacka-Olejnik, M., & Poonikom, K.** (2023). *Classification of durian maturity using a convolutional neural network.* Engineering and Applied Science Research, 50(3), 233–243.
4. **Ditcharoen, S., et al.** (2023). *Improving the non-destructive maturity classification model for durian fruit using near-infrared spectroscopy.* Artificial Intelligence in Agriculture, 7, 35–43. [DOI: 10.1016/j.aiia.2023.02.002](https://doi.org/10.1016/j.aiia.2023.02.002)
5. **Li, P., et al.** (2023). *Portable LWNIR and SWNIR spectroscopy with pattern recognition technology for accurate and nondestructive detection of hidden mold infection in citrus.* Microchemical Journal, 193, 109203.

---

## 📄 License
This project is released under the [MIT License](LICENSE).

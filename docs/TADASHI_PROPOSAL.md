# TADASHI: AI-Powered Non-Destructive Durian Quality Classification
## Official Project Proposal & Business Plan

> **Competition / Event:** เจ๊งก่อนจบ IOIC 2025 | Chulalongkorn University  
> **Team Name:** TADASHI  
> **Project Name:** AI-Powered Non-Destructive Durian Quality Classification  
> **Product Designation:** Tadashi NiCv-Dr-Sorter evo Gen1  
> **Live Web Simulation:** [https://durian-omega.vercel.app/](https://durian-omega.vercel.app/)  
> **3D CAD Model (Autodesk Fusion 360):** [https://a360.co/3QATuCF](https://a360.co/3QATuCF)

---

## 1. Executive Summary

**TADASHI** is an automated, non-destructive durian quality sorting system designed for Thai durian packing facilities (*Lhong*) and agricultural exporters. By combining **Shortwave Near-Infrared (SWNIR) Spectroscopy (900–1700 nm)** with **Multi-Angle Computer Vision (CV)** powered by deep learning (**DuNet-12**), TADASHI evaluates both internal biochemical ripeness (Dry Matter %, Brix sweetness) and external morphological defects with **95% accuracy** at an operational speed of **1,200 durians/hour** (over 3.3× faster than manual human sorters).

TADASHI addresses the catastrophic issue of premature (*immature / ทุเรียนอ่อน*) durians entering the export supply chain, which caused Thai durian prices to collapse by 30% over two years and damaged Thailand's market share in China.

---

## 2. Team Members & Roles

| Member | Faculty & Major | Academic Year | Role & Responsibilities | Contact |
|---|---|---|---|---|
| **Thanavit Wongsoonthorn** (Focus) | Faculty of Engineering (Electrical) | Year 2 | Team Lead, Situational Analysis, Market Research, Business Model, Marketing, Presenter | `thanavit.wongsoonthorn@gmail.com` / 081-147-3708 |
| **Worranai Nagasawa** (Wong) | Faculty of Engineering (ICE - Information & Communication Engineering) | Year 2 | Lead Researcher, Technical Architecture, Paper Reviewer, Presenter | `tdsngs@gmail.com` / 081-147-3708 |
| **Siraphop Kamhangkhumphol** (Sense) | Faculty of Engineering (Robotics & AI) | Year 2 | Customer Segmentation, Value Proposition, Customer Impact, Software/Web UI Developer, Presenter | `sensebest2@gmail.com` / 092-645-4151 |
| **Thavinthorn Ngaoprommin** (Pooh) | Faculty of Engineering (Mechanical) | Year 2 | Product 3D Design, Mechanical Structure & Conveyor Assembly | `6730239521@student.chula.ac.th` / 082-478-2553 |
| **Sorrawit Sramoon** (BBA) | Faculty of Commerce & Accountancy (BBA) | Year 1 | Financial Modeling, Unit Economics, Business Solution | `sorrawitsm@gmail.com` / 092-230-5111 |

### Team Superpowers & Experience
- Top 5 Finalist & Fast-track consideration for internship from Skilio.
- Start Up for Better Society Hackathon (Inspire for Better Society Award & Top 8 National Finalist).
- Super AI Engineer SS4, POSN Computer Olympiad, advanced AI/Data/Robotics engineering projects.
- Deep cross-disciplinary synergy combining Robotics, AI, Electrical, Mechanical, and Business/Finance disciplines.

---

## 3. Problem Statement & Market Pain Points

### Macro-Level: Collapse of Export Price & Market Share
- **Durian Export Value:** $3.7B+ USD annually — the highest export value fruit for Thailand (+181% growth over 5 years).
- **The Crisis:**
  - Average Thai durian export price dropped **30% over 2 years (2024–2026)**.
  - Thai durian market share in China dropped from **68% (2023) to 57% (2024)**.
  - Vietnam has surged as a formidable competitor, exporting **$3.3 billion** in durians to China in 2024.
- **Root Cause:** Quality inconsistency — primarily **immature durians (ทุเรียนอ่อน, Dry Matter < 32%)** harvested prematurely to capture early-season high prices. Once cut immature, a Monthong durian **will never ripen**, arriving at Chinese consumers hard, tasteless, and inedible, inflicting severe reputational damage on the "Thai Durian" brand.

### Micro-Level: Pain Points for Lhong (Export Packing Houses)
- **High Human Error & Inconsistency:** Traditional sorting relies on tapping durians with a rattan stick and listening to hollow acoustic resonance. Accuracy is merely **~65%**, heavily dependent on worker fatigue and subjectivity.
- **Labor Constraints:** Human sorters process only **~360 durians/hour** over 8-hour shifts with high wage and turnover costs.
- **Catastrophic Rejection Costs:** A single shipping container rejected at Chinese customs due to immature durian causes a financial loss exceeding **฿5,000,000 THB (~$140,000 USD)** per incident.

---

## 4. Market Opportunity & Target Segmentation

```
Global Durian Market (2030 Projected): $45 Billion+
Thailand Annual Export Value: $3.7 Billion+
```

### Customer Segmentation Matrix

| Customer Segment | Pain Point | Willingness to Pay | Product Fit | Priority Phase |
|---|---|---|---|---|
| **Lhong (Large-scale Exporters)** | **High**: Severe financial risk from export rejection (DM < 32%), labor dependency, inconsistent manual grading. | **High**: Avoids ฿5M container rejection penalties. | **Very High**: Full conveyor system (CV + NIR + automated diverter). | **Phase 1 (Primary Target)** |
| **Supermarket Chains** | **Medium**: Cannot guarantee ripeness to end consumers; high return rates. | **High**: Willing to pay to protect premium brand tier. | **High**: Standalone/handheld testing solution. | **Phase 2 (Expansion)** |
| **Wholesale Hubs (Talaad Thai, Si Mum Muang)** | **High**: Huge daily throughput with speed bottlenecks. | **Medium**: Cost-sensitive but eager for throughput gains. | **Medium**: Inline sorting units. | **Phase 2 (Expansion)** |
| **Durian Farmers / Orchards** | **Medium**: Want fair selling prices based on actual fruit grade. | **Low**: Capital expenditure constraints. | **Medium**: Prefer traditional farm-gate selling. | Low |
| **Local Vendors / Street Stalls** | **Medium**: Avoid customer complaints but small sales volume. | **Low**: Very price sensitive. | **Low**: Not economically viable. | Low |

---

## 5. Technology Solution & Innovation

TADASHI implements a multi-modal hardware and edge-AI architecture:

```
[ Infeed Conveyor (20 cm/s) ]
            │
            ▼
┌───────────────────────────────────────────────┐
│              TADASHI BLACK BOX                │
│                                               │
│  [Halogen Illumination]   [SWNIR Probe 900-1700nm]│
│            │                        │         │
│            ▼                        ▼         │
│     Computer Vision             Spectrometer  │
│       (RGB Multi-Angle)         (Absorbance)  │
│            │                        │         │
│            ▼                        ▼         │
│       DuNet-12 CNN             PLSR & LDA     │
│   (External Defects/Shape)     (DM% & Brix)   │
└───────────────────────┬───────────────────────┘
                        │
                        ▼
            [ Edge Fusion Inference ]
                        │
         ┌──────────────┴──────────────┐
         ▼                             ▼
   [ APPROVED ]                  [ NEGLECTED ]
   • Ripe (DM 30-38%)            • Immature (DM < 32%)
   • Unripe / Mature             • External/Internal Defect
   • Pass through                • Pneumatic Pusher Diverts
```

### Key Technical Pillars:
1. **Shortwave NIR (SWNIR) Spectroscopy (900–1700 nm):**
   - Interrogates molecular bonds ($O-H$, $C-H$, $N-H$) within durian pulp non-destructively through the pericarp/rind.
   - **Partial Least Squares Regression (PLSR):** Quantifies Dry Matter % (DM) and Total Soluble Solids (°Brix).
   - **Linear Discriminant Analysis (LDA):** Classifies ripeness into distinct physiological tiers.
2. **Computer Vision & DuNet-12 CNN:**
   - Multi-angle machine vision cameras inside a light-sealed dark enclosure with constant 4x halogen illumination.
   - Deep CNN architecture trained on curated durian image datasets to classify symmetry, shape deformities, rind rot, and pest boreholes (*Conogethes punctiferalis* / fruit borer).
3. **On-Device Edge Computing:**
   - Inference runs entirely on local hardware attached to the sorter.
   - **Zero internet connection required**, 0 cloud latency, 100% resilient for remote agricultural packhouses in Chanthaburi, Rayong, Trat, Chumphon, and Yala.
4. **Pneumatic Separation Mechanism:**
   - Automated pneumatic pusher gate fires in synchrony with conveyor timing to physically divert rejected durians onto a secondary return line.

---

## 6. Competitive Advantage Matrix

| Feature / Metric | TADASHI | Manual Human Tapping | ARDA CT-Scan | LWNIR Conveyor | $\mu$PAD Paper Sensor |
|---|---|---|---|---|---|
| **Technology** | **SWNIR + CV / DuNet-12** | Human stick acoustic tapping | Industrial X-Ray / CT | Long-wave NIR | Chemical assay strip |
| **Inspection Scope** | **Internal + External** | Internal only (subjective) | Internal only | Internal only | Internal only |
| **Classification Accuracy** | **95%** | ~65% | 95% | 85% | 90% |
| **Throughput Speed** | **Fast (1,200/hr, 3s/unit)** | Slow (~360/hr, 10s/unit) | Fast | Fast | Very Slow |
| **Destructive?** | **Non-destructive** | Non-destructive | Non-destructive | Non-destructive | Semi-destructive (juice extract) |
| **Capital Cost (THB)** | **฿240,000 THB** | Low initial / High OPEX | ~฿2,000,000 THB | ฿500,000–฿1,000,000 | Low unit / High recurring |
| **Reliability** | **24/7 continuous operation** | Worker fatigue, sick days | High maintenance | Moderate | High reagent variability |

---

## 7. Business Model & Financial Overview

### Revenue Streams
1. **Hardware Sales (B2B):** ฿240,000 THB per unit sold to Lhong packing facilities.
2. **Annual Maintenance Contract (AMC):** ฿6,145 THB/year per machine (covers calibration, optical sensor cleaning, hardware warranty).
3. **Future Expansion (SaaS / Telemetry):** Cloud dashboard subscription for multi-facility enterprise exporters tracking yield analytics across harvest seasons.

### Cost Structure & Unit Economics
- **Unit Selling Price:** ฿240,000 THB
- **Cost of Goods Sold (COGS):** ฿122,900 THB (89% hardware components, 11% assembly & QA)
- **Gross Profit per Unit:** ฿117,100 THB
- **Gross Margin:** **48.79%** (~100% markup on COGS)
- **Break-Even Period:** **2.4 Years**

### 3-Year Financial Forecast Summary

| Metric | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| **Sales Target (Units)** | ~16 – 48 units | ~32 – 96 units | ~64 – 192 units |
| **Gross Revenue** | ฿6,194,160 THB | ฿12,683,280 THB | ฿25,661,520 THB |
| **COGS** | ฿5,899,200 THB | ฿11,798,400 THB | ฿23,596,800 THB |
| **Gross Profit** | ฿294,960 THB | ฿884,880 THB | ฿2,064,720 THB |
| **Total OPEX** | ฿250,000 THB | ฿340,000 THB | ฿460,000 THB |
| **EBITDA** | ฿44,960 THB | ฿544,880 THB | ฿1,604,720 THB |
| **Net Profit** | ฿35,968 THB | ฿435,904 THB | ฿1,283,776 THB |

---

## 8. Development Progress & Roadmap

- [x] **Market Research & Regulatory Validation:** Study of Thai Ministry of Agriculture standards for durian export (minimum Monthong dry matter threshold $\ge 32\%$).
- [x] **Academic Research Review:** Comprehensive review of NIR, acoustic, and machine vision papers for durian grading.
- [x] **Mechanical 3D CAD Design:** Full enclosure, conveyor, optical mounts, and reject gate modeled in Autodesk Fusion 360 ([https://a360.co/3QATuCF](https://a360.co/3QATuCF)).
- [x] **AI Model Pipeline Architecture:** PLSR and LDA chemometrics combined with DuNet-12 CNN.
- [x] **Interactive Simulation Dashboard:** Production-ready real-time operator UI deployed on Vercel ([https://durian-omega.vercel.app/](https://durian-omega.vercel.app/)).
- [ ] **Phase 1 Pilot Deployment (Chanthaburi):** Deploy first commercial pilot unit at partner Lhong in Chanthaburi during Eastern harvest season.
- [ ] **Phase 2 Geographic Expansion:** Follow harvest south to Chumphon and Yala; explore Vietnam cross-border trade.
- [ ] **Phase 3 Product Extension:** Develop lightweight portable handheld NIR device for supermarket chains and orchard gate inspectors.

---

## 9. Academic References

1. **Li, P., et al.** (2023). Portable LWNIR and SWNIR spectroscopy with pattern recognition technology for accurate and nondestructive detection of hidden mold infection in citrus. *Microchemical Journal*, 193, 109203.
2. **Ditcharoen, S., et al.** (2023). Improving the non-destructive maturity classification model for durian fruit using near-infrared spectroscopy. *Artificial Intelligence in Agriculture*, 7, 35–43.
3. **Pitak, L., Ditcharoen, S., Maraphum, K., & Posom, J.** (2026). Identification and quantification of the quality of intact durian fruits using NIR spectroscopy. *Engineering and Applied Science Research*, 53(1), 61–73.
4. **Ji, X., & Leau, Y.-B.** (2025). A Review of Research Progress on Durian Maturity Identification Technology. *2025 IEEE 5th International Conference on Computer Communication and Artificial Intelligence (CCAI)*, 108–113.
5. **Thipsrirach, Y., Kosacka-Olejnik, M., & Poonikom, K.** (2023). Classification of durian maturity using a convolutional neural network. *Engineering and Applied Science Research*, 50(3), 233–243.

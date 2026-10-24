# TADASHI Financial Model & Economics Breakdown

> Derived from project modeling and internal estimates (`Finance.csv`). All monetary values are presented in **Thai Baht (THB)** unless explicitly indicated otherwise.

---

## 1. Unit Economics & Bill of Materials (COGS)

Each **Tadashi NiCv-Dr-Sorter evo Gen1** conveyor sorting station is engineered with commercial off-the-shelf industrial components to maintain competitive manufacturing costs while ensuring high optical accuracy and durability in humid packhouse environments.

### Bill of Materials (BOM) Breakdown per Unit

| Component / Cost Item | Specification / Notes | Cost (THB) | Share (%) |
|---|---|---|---|
| **NIR Spectrometer Sensor** | Shortwave NIR sensor probe (900–1700 nm spectral window) | ฿93,000 | 75.67% |
| **QA, Warranty & Calibration Buffer** | Pre-delivery calibration against refractometer & dry weight assays | ฿10,000 | 8.14% |
| **Conveyor Belt System** | 20 cm/s variable-speed industrial sorting conveyor | ฿5,000 | 4.07% |
| **Assembly, Wiring & Factory Testing** | Labor for structural assembly and sensor integration | ฿4,000 | 3.25% |
| **Embedded Edge Processor Unit** | Industrial SBC / edge computing unit running offline inference | ฿2,500 | 2.03% |
| **Touchscreen Display Monitor** | 5x8" industrial operator status monitor | ฿2,500 | 2.03% |
| **Internal Industrial Wiring & Harness** | Shielded wiring, power supplies, relays & enclosures | ฿2,500 | 2.03% |
| **Machine Vision CV Camera** | High-speed multi-angle RGB camera for surface capture | ฿2,000 | 1.63% |
| **Chassis / Aluminium Dark Enclosure** | Light-tight dark box minimizing ambient optical interference | ฿1,000 | 0.81% |
| **Controlled Halogen Lamps (4x)** | 4x directional halogen lamps for broad NIR/visible illumination | ฿400 | 0.33% |
| **Total Cost of Goods Sold (COGS)** | **Fully assembled sorting station** | **฿122,900** | **100.0%** |

---

## 2. Pricing Strategy & Margins

| Metric | Amount (THB) | Description |
|---|---|---|
| **B2B Hardware Retail Price** | **฿240,000** | Commercial sales price to Lhong durian export houses |
| **Cost of Goods Sold (COGS)** | **฿122,900** | Direct component assembly and calibration cost |
| **Gross Profit per Machine** | **฿117,100** | Hardware contribution margin |
| **Gross Margin (%)** | **48.79%** | Markup over COGS is ~95.3% (~100% markup) |
| **Annual Maintenance Contract (AMC)** | **฿6,145 / yr** | Annual optical calibration, cleaning, and firmware updates |
| **Initial Capital Investment** | **฿1,000,000** | Seed funding for tooling, pilot builds, and initial inventory |
| **Payback / Break-even Timeline** | **2.4 Years** | Point at which cumulative operational cash flow turns positive |

---

## 3. Operating Expenses (OPEX) Projections

| OPEX Category | Year 1 (THB) | Year 2 (THB) | Year 3 (THB) |
|---|---|---|---|
| **Sales, Travel & On-Site Demos** | ฿120,000 | ฿180,000 | ฿270,000 |
| **Admin, Legal, Accounting & Misc** | ฿80,000 | ฿100,000 | ฿120,000 |
| **Software, Tooling & Cloud Services** | ฿30,000 | ฿30,000 | ฿30,000 |
| **R&D, Field Testing & Calibrations** | ฿20,000 | ฿30,000 | ฿40,000 |
| **Total Annual OPEX** | **฿250,000** | **฿340,000** | **฿460,000** |

---

## 4. 3-Year Income Statement Forecast

Based on conservative and baseline adoption schedules across eastern and southern Thai durian packing hubs:

| Financial Metric | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| **Gross Revenue** | **฿6,194,160** | **฿12,683,280** | **฿25,661,520** |
| Cost of Goods Sold (COGS) | (฿5,899,200) | (฿11,798,400) | (฿23,596,800) |
| **Gross Profit** | **฿294,960** | **฿884,880** | **฿2,064,720** |
| *Gross Margin (%)* | *4.76% (inclusive of scaling buffers)* | *6.98%* | *8.05%* |
| Operating Expenses (OPEX) | (฿250,000) | (฿340,000) | (฿460,000) |
| **EBITDA** | **฿44,960** | **฿544,880** | **฿1,604,720** |
| Estimated Tax Liability | (฿8,992) | (฿108,976) | (฿320,944) |
| **Net Profit** | **฿35,968** | **฿435,904** | **฿1,283,776** |

---

## 5. Return on Investment (ROI) for Lhong Customers

For an export packing facility (*Lhong*), investing in TADASHI delivers massive risk mitigation:

1. **Avoided Container Rejection Penalties:**
   - Single 40-foot refrigerated reefer container carries ~15,000–18,000 kg of Monthong durians.
   - Total export value per container: **~฿5,000,000 THB**.
   - If destination customs (e.g. Guangzhou or Shanghai) tests random samples and finds immature durians ($\text{DM} < 32\%$), the entire container can be impounded, destroyed, or auctioned at severe loss.
   - **TADASHI pays for itself by preventing a single container rejection.**

2. **Labor Productivity Gains:**
   - Manual sorter: ~360 durians/hour with fatigue degradation after 4 hours.
   - TADASHI machine: **1,200 durians/hour** continuously (3.3× throughput speed).
   - Replaces or augments 3–4 manual inspectors, allowing staff to reallocate toward packing and loading logistics.

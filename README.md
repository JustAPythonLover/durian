# 🍈 Durian Classifier — Web Simulation
### Tadashi NiCv-Dr-Sorter evo Gen1

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=flat&logo=vercel)](https://durian-omega.vercel.app/)

A real-time web simulation representing the operator display for **Tadashi NiCv-Dr-Sorter evo Gen1**, an automated durian quality sorting system (NIR spectroscopy + Computer Vision) developed for the Chulalongkorn University Case Competition.

The system inspects durians to accept export-quality fruit and reject immature or defective fruit.

🔗 **Live Demo:** [https://durian-omega.vercel.app/](https://durian-omega.vercel.app/)  
🔗 **3D CAD Model:** [Autodesk Fusion 360](https://a360.co/3QATuCF)

---

## 🖥️ What the Web Shows

The interface simulates the 5×8" embedded touchscreen monitor on the sorting machine:

### 1. Overview Counters
- **Total:** Total number of durians scanned.
- **Approved:** Fruits that passed inspection (**Ripe** or **Unripe** with acceptable Dry Matter).
- **Neglected:** Fruits rejected by the system (**Immature** or **Defect**).

### 2. Quality Analysis
- **Acceptance Rate (%):** Percentage of approved fruits out of total scanned.
- **Defect Rate (%):** Percentage of rejected defective fruits.
- **Avg Dry Matter (%):** Running average of fruit dry matter content (export standard $\ge 32\%$).
- **Avg Sugar Level (°Bx):** Running average sweetness level in degrees Brix.

### 3. Current Detection Panel
- **Sample Number:** Current item counter (`Sample #...`).
- **Timestamp:** Real-time date and timestamp of detection.
- **Maturity Badge:** Color-coded classification tag:
  - `Ripe` — Approved for retail/immediate consumption.
  - `Unripe` — Approved for export (ripens during transit).
  - `Immature` — **Rejected** (will not ripen properly).
  - `Defect` — **Rejected** (surface defects, pest damage, deformity).
- **Dry Matter & Sugar Level:** Numerical values for the current fruit.
- **Fruit Visualizer:** Animated graphic triggered on each new detection.

### 4. Interactive Controls
- **Simulate (`Space` or `S`):** Simulates scanning the next durian with realistic statistical variations.
- **Clear Data:** Resets all counters and session records with confirmation modal.
- **Export:** Downloads all logged detection records as a timestamped `.csv` file.

---

## 🚀 Running Locally

No installation or build tools required:

1. Clone the repository:
   ```bash
   git clone https://github.com/JustAPythonLover/durian.git
   cd durian
   ```
2. Open `index.html` directly in your browser, or serve with Python:
   ```bash
   python -m http.server 8000
   ```

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).

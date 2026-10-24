# TADASHI System Architecture & Technical Specifications

> **Product:** Tadashi NiCv-Dr-Sorter evo Gen1  
> **Classification Modality:** Dual-Modal Shortwave Near-Infrared (SWNIR) Spectroscopy + Multi-Angle Computer Vision (CV)  
> **Deployment Target:** Inline Conveyor Sorting Stations in Agricultural Packhouses (*Lhong*)  
> **Interactive Live Simulation:** [https://durian-omega.vercel.app/](https://durian-omega.vercel.app/)  
> **3D CAD Assembly:** [https://a360.co/3QATuCF](https://a360.co/3QATuCF)

---

## 1. Physical & Mechanical Architecture

The sorting station consists of an inline conveyor passing through an optical isolation chamber ("The Black Box").

```
  Fruit Infeed
      ───►
 ┌────────────────────────────────────────────────────────┐
 │                    THE BLACK BOX                       │
 │  (Light-Tight Aluminium Radiation-Insulated Enclosure) │
 │                                                        │
 │     [4x Directional Halogen Lamps (Broadband NIR)]     │
 │                           │                            │
 │           [SWNIR Sensor]  │  [High-Res CV Camera]      │
 │                 │         ▼            │               │
 │                 └────► [Durian] ◄──────┘               │
 │                           │                            │
 └───────────────────────────┼────────────────────────────┘
                             │
            Conveyor Belt Speed: 20 cm / second
                             │
                             ▼
         ┌───────────────────┴───────────────────┐
         │       Decision & Pneumatic Gate       │
         ├───────────────────┬───────────────────┤
         ▼                   ▼                   ▼
    [APPROVED]          [NEGLECTED]         [NEGLECTED]
   • Ripe               • Immature (DM<32%) • Defect / Pest
   Pass to Packing     Pushed to Line B    Pushed to Line B
```

### Key Mechanical Specifications:
- **Conveyor Belt Speed:** $20\text{ cm/s}$ ($0.2\text{ m/s}$), providing sufficient transit time for continuous optical integration while achieving a throughput of **1,200 fruits/hour** (3 seconds/durian).
- **Dark Enclosure Chamber:** Constructed with extruded aluminium framing and black matte shielding to eliminate ambient packing house lighting variability (fluorescent flicker, natural sunlight).
- **Illumination Source:** 4× high-stability directional tungsten-halogen lamps positioned to illuminate the durian surface uniformly across the $400\text{--}1700\text{ nm}$ band.
- **Pneumatic Separation Gate:** High-speed pneumatic piston actuator triggered by downstream pulse signals when a durian is flagged as **Immature** or **Defect**.

---

## 2. Spectroscopic Pipeline (Internal Biochemical Assessment)

Durians have thick pericarp rinds ($10\text{--}25\text{ mm}$) covered in dense pyramidal spines. SWNIR spectroscopy is uniquely suited because photons in the shortwave near-infrared band ($900\text{--}1700\text{ nm}$) penetrate biological tissue deeper than visible light.

### Optical Spectrum & Absorption Bands:
- **Wavelength Band:** $900\text{--}1700\text{ nm}$ (Shortwave NIR).
- **Key Absorption Regions:**
  - $960\text{--}980\text{ nm}$ and $1450\text{ nm}$: Second and first overtones of $O-H$ stretching (moisture content / free water).
  - $1190\text{--}1210\text{ nm}$: Second overtone of $C-H$ stretching (carbohydrate & lipid matrix).
  - $1400\text{--}1480\text{ nm}$: Combination bands associated with sucrose, glucose, and fructose accumulation.

### Chemometric Algorithms:
1. **Spectral Pre-processing:**
   - Standard Normal Variate (SNV) and Multiplicative Scatter Correction (MSC) to suppress physical light scattering caused by uneven thorn geometries.
   - Savitzky-Golay first and second derivatives to enhance resolve overlapping spectral features.
2. **Partial Least Squares Regression (PLSR):**
   - Continuously predicts **Dry Matter % ($\text{DM}$)** and **Total Soluble Solids ($\text{TSS} / ^\circ\text{Brix}$)**.
   - Thai export standard threshold: $\text{DM} \ge 32\%$ for Monthong cultivars (*Durio zibethinus Murr.*).
3. **Linear Discriminant Analysis (LDA):**
   - Discretizes the continuous chemical estimates into discrete harvest maturities: *Immature*, *Unripe*, and *Ripe*.

---

## 3. Computer Vision Pipeline (External Morphology & Defects)

While spectroscopy probes internal pulp chemistry, machine vision inspects outward visual defects and geometrical symmetry.

```
       [Raw RGB Frame]
              │
              ▼
    [Background Subtraction]
  (Masking conveyor surface)
              │
              ▼
   [Feature Extraction CNN]
          DuNet-12
              │
   ┌──────────┴──────────┐
   ▼                     ▼
[Morphology]         [Defect Detection]
• Symmetry Index     • Pest Boreholes (Fruit borer)
• Thorn Curvature    • Fungal Rot / Phytophthora
• Shape Aspect Ratio • Mechanical Scrapes & Cracks
```

### DuNet-12 Deep Neural Network:
- Optimized lightweight convolutional architecture designed for low-power edge deployment.
- Detects external disqualifiers:
  - Asymmetric or "banana-shaped" locules (market devaluation).
  - Surface entrance holes of durian seed borer (*Mudaria magniplaga*) or fruit borer (*Conogethes punctiferalis*).
  - Mold or stem rot (*Phytophthora palmivora*).

---

## 4. On-Device Edge Computing & Decision Fusion

To operate reliably in rural packhouses without fiber internet or reliable cloud connections, TADASHI runs **100% offline edge inference**:

- **Hardware Unit:** Industrial embedded single-board computer (SBC) with dedicated NPU / hardware tensor acceleration.
- **Fusion Logic:**
  ```python
  def classify_durian(cv_output, nir_output):
      # Rule 1: Visual Defect Override
      if cv_output.defect_detected or cv_output.symmetry_score < 0.60:
          return ("Defect", "Neglected")
      
      # Rule 2: Immature Durian Quarantine (Strict Export Standard)
      if nir_output.dry_matter < 32.0 or nir_output.maturity == "Immature":
          return ("Immature", "Neglected")
      
      # Rule 3: Approved Export-Ready Durians
      if nir_output.maturity == "Unripe":
          return ("Unripe", "Approved")  # Will ripen during shipping
      
      if nir_output.maturity == "Ripe":
          return ("Ripe", "Approved")    # Ready for immediate local/air-freight sale
  ```

---

## 5. Web Simulation Interface (`web/`)

The repository includes a web-based simulation representing the physical machine's 5×8" touchscreen interface.

### Architecture:
- **`index.html`:** Semantic DOM layout mimicking the industrial operator console.
- **`style.css`:** Mobile-responsive design optimized for standard desktop browsers as well as 480×768 embedded screens. Includes smooth CSS status transitions, pulse badges, and glassmorphic modal prompts.
- **`app.js`:**
  - Implements a statistical Monte Carlo generator modeling real harvest distributions:
    - **Ripe:** ~35% ($\text{DM}: 30\text{--}38\%$, Sugar: $28\text{--}36 ^\circ\text{Bx}$)
    - **Unripe:** ~30% ($\text{DM}: 24\text{--}31\%$, Sugar: $18\text{--}26 ^\circ\text{Bx}$)
    - **Immature:** ~20% ($\text{DM}: 18\text{--}25\%$, Sugar: $10\text{--}18 ^\circ\text{Bx}$)
    - **Defect:** ~15% ($\text{DM}: 12\text{--}28\%$, Sugar: $5\text{--}22 ^\circ\text{Bx}$)
  - Computes running aggregates: Total, Approved, Neglected, Acceptance %, Defect %, Average Dry Matter, Average Sugar Level.
  - Dynamically synthesizes and triggers download of timestamped RFC-4180 compliant CSV logs.
  - Keyboard shortcuts: `Space` or `S` to simulate next fruit; `Esc` to dismiss modal.

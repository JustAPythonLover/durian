# Academic Research & Scientific Literature Review

> A synthesis of scientific foundations, non-destructive evaluation (NDE) methodologies, and peer-reviewed literature supporting the **TADASHI** durian classification platform.

---

## 1. Executive Summary of Research Findings

Traditional methods for testing durian ripeness in Thailand rely almost exclusively on human sensory judgment:
1. **Acoustic Tapping:** Tapping individual thorns with a rattan stick and listening for dull vs hollow resonance.
2. **Visual Inspection:** Observing thorn tip color, stem flexibility, and groove elasticity.
3. **Destructive Sampling:** Cutting an incision (triangular plug) into the carpel to sample dry matter and sugar directly.

Scientific literature demonstrates that:
- **Acoustic tapping accuracy is highly variable** (~65% in field conditions) and collapses under worker fatigue.
- **Destructive sampling ruins the fruit** for premium export and introduces infection pathways for rot.
- **Shortwave Near-Infrared (SWNIR) Spectroscopy (900–1700 nm)** successfully penetrates the thick, spiky Monthong durian peel to measure internal pulp water-sugar transformations non-destructively.
- **Computer Vision (CNNs)** provides automated, repeatable external defect and symmetry grading, complementing spectroscopic data.

---

## 2. Key Academic Citations & Annotated Reviews

### [1] Identification and Quantification of the Quality of Intact Durian Fruits Using NIR Spectroscopy
- **Authors:** Lakkana Pitak, Sirirak Ditcharoen, Kanvisit Maraphum, Jetsada Posom
- **Published in:** *Engineering and Applied Science Research*, 53(1), 61–73 (2026). [DOI: 10.64960/easr.2026.262620](https://doi.org/10.64960/easr.2026.262620)
- **PDF Available:** [`docs/research/Identification_and_quantification_of_quality_of_in.pdf`](research/Identification_and_quantification_of_quality_of_in.pdf)
- **Key Contributions:**
  - Evaluated intact Monthong (*Durio zibethinus Murr.*) fruits across distinct harvest maturities.
  - Proved that NIR diffuse reflectance spectra across $900\text{--}1700\text{ nm}$ correlate directly with internal Dry Matter (DM) and Total Soluble Solids (TSS).
  - Validated that Partial Least Squares Regression (PLSR) achieves high determination coefficients ($R^2 > 0.85$) for dry matter prediction through thick pericarp walls without fruit destruction.

### [2] A Review of Research Progress on Durian Maturity Identification Technology
- **Authors:** X. Ji, Y.-B. Leau
- **Published in:** *2025 IEEE 5th International Conference on Computer Communication and Artificial Intelligence (CCAI)*, pp. 108–113 (2025). [DOI: 10.1109/ccai65422.2025.11189295](https://doi.org/10.1109/ccai65422.2025.11189295)
- **PDF Available:** [`docs/research/A_Review_of_Research_Progress_on_Durian_Maturity_Identification_Technology (2).pdf`](research/A_Review_of_Research_Progress_on_Durian_Maturity_Identification_Technology%20(2).pdf)
- **Key Contributions:**
  - Exhaustive comparative analysis of non-destructive testing modalities: Acoustic resonance, Near-Infrared, Machine Vision, Electronic Nose (volatile organic compounds), and X-Ray CT scanning.
  - Concluded that single-modality inspection has distinct blind spots: acoustic methods miss localized defects; machine vision cannot see internal pulp biochemistry; NIR alone does not quantify external pest boreholes.
  - **Proposed that multi-modal fusion of NIR and Computer Vision represents the most commercially viable, accurate, and cost-effective frontier for industrial packhouse sorters.**

### [3] Classification of Durian Maturity Using a Convolutional Neural Network
- **Authors:** Y. Thipsrirach, M. Kosacka-Olejnik, K. Poonikom
- **Published in:** *Engineering and Applied Science Research*, 50(3), 233–243 (2023). [Link](https://ph01.tci-thaijo.org/index.php/easr/article/view/251591)
- **PDF Available:** [`docs/research/imageprocessing.pdf`](research/imageprocessing.pdf)
- **Key Contributions:**
  - Designed deep convolutional neural networks (CNNs) trained on photographic images of durian fruit under controlled illumination.
  - Extracted geometric and textural indicators (thorn apex coloration, inter-thorn furrow patterns, carpel protrusion contours).
  - Demonstrated that deep CNN classifiers achieve $>90\%$ accuracy in categorizing maturity classes based on surface morphology.

### [4] Acoustic Resonance Testing for Durian Ripeness
- **Subject:** Vibration and acoustic response analysis in durian maturity detection.
- **PDF Available:** [`docs/research/Acoustic.pdf`](research/Acoustic.pdf)
- **Key Contributions:**
  - Evaluated mechanical impulse response (natural frequency shifts as internal air gaps form between carpel wall and ripe aril pulp).
  - Documented why acoustic tapping suffers from high false-positive rates when tested on thick-skinned cultivars or cold-stored fruits, emphasizing the need for optical spectral confirmation.

### [5] Improving the Non-Destructive Maturity Classification Model for Durian Fruit Using Near-Infrared Spectroscopy
- **Authors:** S. Ditcharoen, P. Sirisomboon, K. Saengprachatanarug, et al.
- **Published in:** *Artificial Intelligence in Agriculture*, 7, 35–43 (2023). [DOI: 10.1016/j.aiia.2023.02.002](https://doi.org/10.1016/j.aiia.2023.02.002)
- **Key Contributions:**
  - Developed advanced chemometric calibration pipelines using Linear Discriminant Analysis (LDA) and Support Vector Machines (SVM).
  - Demonstrated that standardizing baseline scatter noise improves prediction robustness against fruit curvature and spine density.

---

## 3. How TADASHI Implements These Findings

The engineering of **TADASHI NiCv-Dr-Sorter evo Gen1** directly synthesizes these academic findings into an industrial solution:

1. **Dual-Modal Synergy:** Instead of choosing between acoustics, vision, or optics, TADASHI fuses **Shortwave NIR spectroscopy (Pitak et al., Ditcharoen et al.)** with **Computer Vision CNNs (Thipsrirach et al., Ji & Leau)**.
2. **Controlled Optical Environment:** By housing sensors within an optical dark box with 4x halogen sources, ambient lighting noise is eliminated, satisfying the pre-processing requirements documented in spectroscopic literature.
3. **Threshold Calibration:** The software strictly enforces the regulatory export threshold ($\text{DM} \ge 32\%$), preventing premature harvesting practices from undermining export consignments.

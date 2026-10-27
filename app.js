// ===== DURIAN CLASSIFIER APP =====
// Tadashi NiCv-Dr-Sorter evo Gen1

(function () {
  'use strict';

  // ===== STATE =====
  const state = {
    records: [],
    sampleCounter: 0,
  };

  // ===== DOM REFS =====
  const dom = {
    totalCount: document.getElementById('totalCount'),
    approvedCount: document.getElementById('approvedCount'),
    neglectedCount: document.getElementById('neglectedCount'),
    sampleNumber: document.getElementById('sampleNumber'),
    timeValue: document.getElementById('timeValue'),
    maturityBadge: document.getElementById('maturityBadge'),
    dryMatterValue: document.getElementById('dryMatterValue'),
    sugarLevelValue: document.getElementById('sugarLevelValue'),
    durianImage: document.getElementById('durianImage'),
    btnClear: document.getElementById('btnClear'),
    btnSimulate: document.getElementById('btnSimulate'),
    btnExport: document.getElementById('btnExport'),
    clearModal: document.getElementById('clearModal'),
    btnCancelClear: document.getElementById('btnCancelClear'),
    btnConfirmClear: document.getElementById('btnConfirmClear'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage'),
    statTotal: document.getElementById('statTotal'),
    statApproved: document.getElementById('statApproved'),
    statNeglected: document.getElementById('statNeglected'),
    acceptanceRate: document.getElementById('acceptanceRate'),
    defectRate: document.getElementById('defectRate'),
    avgDryMatter: document.getElementById('avgDryMatter'),
    avgSugarLevel: document.getElementById('avgSugarLevel'),
  };

  // ===== CONSTANTS =====
  // Tadashi NiCv-Dr-Sorter classification categories:
  // - Mature: Approved export grade (NIR Dry Matter >= 32.0% per TAS 3-2556, CV Clear)
  // - Immature: Neglected (NIR Dry Matter < 32.0% unripe / premature fruit)
  // - Defect: Neglected (CV flagged external defect, pests, mold, deformity)
  const CLASSIFICATION_TYPES = ['Mature', 'Immature', 'Defect'];
  const APPROVED_TYPES = ['Mature'];
  const NEGLECTED_TYPES = ['Immature', 'Defect'];

  // ===== HELPERS =====
  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  function formatDateTime(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day} ${month} ${year}  ${hours}:${minutes}:${seconds}`;
  }

  function formatDateTimeCSV(date) {
    return date.toISOString().replace('T', ' ').substring(0, 19);
  }

  // Generate realistic durian data based on packhouse sorting distribution
  function generateDurianData() {
    // Weight distribution: Mature 70%, Immature 15%, Defect 15%
    const rand = Math.random();
    let classification;
    if (rand < 0.70) classification = 'Mature';
    else if (rand < 0.85) classification = 'Immature';
    else classification = 'Defect';

    let dryMatter, sugarLevel;

    switch (classification) {
      case 'Mature':
        // Thai standard TAS 3-2556 for Monthong: DM >= 32.0%
        dryMatter = randomBetween(32.0, 38.5);
        sugarLevel = randomBetween(14.0, 22.0); // Firm export brix stage
        break;
      case 'Immature':
        // Below legal maturity standard (DM < 32.0%)
        dryMatter = randomBetween(20.0, 31.4);
        sugarLevel = randomBetween(8.0, 14.0);
        break;
      case 'Defect':
        // External defect flagged by CV (DM can vary across harvested fruit)
        dryMatter = randomBetween(26.0, 35.0);
        sugarLevel = randomBetween(10.0, 20.0);
        break;
    }

    return {
      classification,
      dryMatter: Math.round(dryMatter * 10) / 10,
      sugarLevel: Math.round(sugarLevel * 10) / 10,
    };
  }

  // ===== ANIMATION HELPERS =====
  function animateCounter(element) {
    element.classList.remove('updated');
    // Force reflow
    void element.offsetWidth;
    element.classList.add('updated');
  }

  function showToast(message) {
    dom.toastMessage.textContent = message;
    dom.toast.classList.add('show');
    setTimeout(() => dom.toast.classList.remove('show'), 2500);
  }

  // ===== UPDATE UI =====
  function updateAnalysis() {
    const total = state.records.length;
    if (total === 0) {
      dom.acceptanceRate.innerHTML = '0<span class="tile-unit">%</span>';
      dom.defectRate.innerHTML = '0<span class="tile-unit">%</span>';
      dom.avgDryMatter.innerHTML = '--<span class="tile-unit">%</span>';
      dom.avgSugarLevel.innerHTML = '--<span class="tile-unit">°Bx</span>';
      return;
    }

    const approved = state.records.filter(r => APPROVED_TYPES.includes(r.classification)).length;
    const defects = state.records.filter(r => r.classification === 'Defect').length;
    const avgDM = state.records.reduce((sum, r) => sum + r.dryMatter, 0) / total;
    const avgSL = state.records.reduce((sum, r) => sum + r.sugarLevel, 0) / total;

    dom.acceptanceRate.innerHTML = `${Math.round((approved / total) * 100)}<span class="tile-unit">%</span>`;
    dom.defectRate.innerHTML = `${Math.round((defects / total) * 100)}<span class="tile-unit">%</span>`;
    dom.avgDryMatter.innerHTML = `${avgDM.toFixed(1)}<span class="tile-unit">%</span>`;
    dom.avgSugarLevel.innerHTML = `${avgSL.toFixed(1)}<span class="tile-unit">°Bx</span>`;
  }

  function updateOverviewCounts() {
    const total = state.records.length;
    const approved = state.records.filter(r => APPROVED_TYPES.includes(r.classification)).length;
    const neglected = state.records.filter(r => NEGLECTED_TYPES.includes(r.classification)).length;

    dom.totalCount.textContent = total;
    dom.approvedCount.textContent = approved;
    dom.neglectedCount.textContent = neglected;

    animateCounter(dom.totalCount);
    animateCounter(dom.approvedCount);
    animateCounter(dom.neglectedCount);

    updateAnalysis();
  }

  function updateCurrentDetection(record) {
    // Sample number
    dom.sampleNumber.textContent = `Sample #${record.sampleId}`;

    // Time
    dom.timeValue.textContent = formatDateTime(record.timestamp);

    // Classification badge
    dom.maturityBadge.textContent = record.classification;
    dom.maturityBadge.className = 'maturity-badge ' + record.classification.toLowerCase();
    // Trigger pop animation
    dom.maturityBadge.classList.add('pop');
    setTimeout(() => dom.maturityBadge.classList.remove('pop'), 500);

    // Values
    dom.dryMatterValue.textContent = record.dryMatter.toFixed(1);
    dom.sugarLevelValue.textContent = record.sugarLevel.toFixed(1);

    // Image animation
    dom.durianImage.classList.remove('new-detection');
    void dom.durianImage.offsetWidth;
    dom.durianImage.classList.add('new-detection');
  }

  // ===== SIMULATE DETECTION =====
  function simulateDetection() {
    state.sampleCounter++;
    const data = generateDurianData();

    const record = {
      sampleId: state.sampleCounter,
      timestamp: new Date(),
      classification: data.classification,
      maturity: data.classification, // Backward compatibility
      dryMatter: data.dryMatter,
      sugarLevel: data.sugarLevel,
    };

    state.records.push(record);
    updateOverviewCounts();
    updateCurrentDetection(record);
  }

  // ===== CLEAR DATA =====
  function clearAllData() {
    state.records = [];
    state.sampleCounter = 0;

    // Reset overview
    dom.totalCount.textContent = '0';
    dom.approvedCount.textContent = '0';
    dom.neglectedCount.textContent = '0';

    updateAnalysis();

    // Reset current detection
    dom.sampleNumber.textContent = '--';
    dom.timeValue.textContent = 'Waiting for detection...';
    dom.maturityBadge.textContent = '--';
    dom.maturityBadge.className = 'maturity-badge';
    dom.dryMatterValue.textContent = '--';
    dom.sugarLevelValue.textContent = '--';

    closeModal();
    showToast('All data has been cleared');
  }

  // ===== EXPORT CSV =====
  function exportCSV() {
    if (state.records.length === 0) {
      showToast('No data to export');
      return;
    }

    const headers = ['Sample ID', 'Timestamp', 'Classification', 'Dry Matter (%)', 'Sugar Level (°Brix)', 'Status'];
    const rows = state.records.map(r => [
      r.sampleId,
      formatDateTimeCSV(r.timestamp),
      r.classification,
      r.dryMatter,
      r.sugarLevel,
      APPROVED_TYPES.includes(r.classification) ? 'Approved' : 'Neglected',
    ]);

    let csvContent = headers.join(',') + '\n';
    rows.forEach(row => {
      csvContent += row.join(',') + '\n';
    });

    // Summary footer
    const total = state.records.length;
    const approved = state.records.filter(r => APPROVED_TYPES.includes(r.classification)).length;
    const neglected = state.records.filter(r => NEGLECTED_TYPES.includes(r.classification)).length;
    csvContent += '\n';
    csvContent += `Summary\n`;
    csvContent += `Total,${total}\n`;
    csvContent += `Approved,${approved}\n`;
    csvContent += `Neglected,${neglected}\n`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `durian_classification_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);

    showToast(`Exported ${total} records to CSV`);
  }

  // ===== MODAL =====
  function openModal() {
    dom.clearModal.classList.add('active');
  }

  function closeModal() {
    dom.clearModal.classList.remove('active');
  }

  // ===== EVENT LISTENERS =====
  dom.btnClear.addEventListener('click', openModal);
  dom.btnCancelClear.addEventListener('click', closeModal);
  dom.btnConfirmClear.addEventListener('click', clearAllData);
  dom.btnExport.addEventListener('click', exportCSV);
  dom.btnSimulate.addEventListener('click', simulateDetection);

  // Click outside modal to close
  dom.clearModal.addEventListener('click', function (e) {
    if (e.target === dom.clearModal) closeModal();
  });

  // Keyboard
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === ' ' || e.key === 's') {
      e.preventDefault();
      simulateDetection();
    }
  });

  // ===== INITIAL SEED =====
  // Pre-populate with some demo data
  function seedDemoData() {
    const now = new Date();
    for (let i = 0; i < 10; i++) {
      state.sampleCounter++;
      const data = generateDurianData();
      const timestamp = new Date(now.getTime() - (10 - i) * 60000); // 1 min apart
      state.records.push({
        sampleId: state.sampleCounter,
        timestamp,
        classification: data.classification,
        maturity: data.classification,
        dryMatter: data.dryMatter,
        sugarLevel: data.sugarLevel,
      });
    }

    updateOverviewCounts();
    // Show the last record as current
    const lastRecord = state.records[state.records.length - 1];
    updateCurrentDetection(lastRecord);
  }

  seedDemoData();

})();
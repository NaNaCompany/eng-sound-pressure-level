export const tool={
  "id": "E091",
  "slug": "eng-sound-pressure-level",
  "title": "음압 레벨 계산기",
  "title_en": "Sound Pressure Level Calculator",
  "category": "음향",
  "category_en": "Acoustics",
  "fields": [
    {
      "key": "p",
      "label": "실효 음압 p_rms",
      "label_en": "RMS sound pressure p_rms",
      "dimension": "pressure",
      "example": 0.2,
      "constraint": "positive",
      "display_unit": "Pa",
      "display_value": "0.2"
    },
    {
      "key": "pref",
      "label": "기준 실효 음압 p_ref",
      "label_en": "Reference RMS pressure p_ref",
      "dimension": "pressure",
      "example": 2e-05,
      "constraint": "positive",
      "display_unit": "Pa",
      "display_value": "2e-05"
    }
  ],
  "result_label": "음압 레벨 L_p",
  "result_label_en": "Sound pressure level L_p",
  "result_dimension": "decibel",
  "formula": "L_p = 20 log₁₀(p_rms/p_ref)",
  "purpose": "기준 실효 음압에 대한 음압 레벨 계산",
  "purpose_en": "Calculate sound pressure level relative to an explicit reference pressure.",
  "assumptions": "p_rms,p_ref>0. 공기 중 예제 기준은 20 μPa다. 수중 등 다른 기준과 혼용하지 않는다. A 가중·청력 영향·전력비·소음 노출량은 계산하지 않는다.",
  "assumptions_en": "Required: positive RMS and reference pressures. The air example uses 20 μPa; other environments may use another reference. A-weighting, hearing effects, power ratios and noise exposure are excluded.",
  "sources": [
    {
      "label": "NIST · Guide to the SI · Chapter 8.7",
      "url": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-8"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-sound-pressure-level/",
  "repository": "https://github.com/NaNaCompany/eng-sound-pressure-level",
  "output_unit": "db"
};

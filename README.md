# 음압 레벨 계산기

기준 실효 음압에 대한 음압 레벨 계산

- Plan ID: E091
- App: https://nanalab.kr/eng-sound-pressure-level/
- Repository: https://github.com/NaNaCompany/eng-sound-pressure-level
- Formula: `L_p = 20 log₁₀(p_rms/p_ref)`
- Output: 음압 레벨 L_p

## Model

p_rms,p_ref>0. 공기 중 예제 기준은 20 μPa다. 수중 등 다른 기준과 혼용하지 않는다. A 가중·청력 영향·전력비·소음 노출량은 계산하지 않는다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `80`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.

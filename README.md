<div align="center">

<img src="assets/Group.png" width="90" alt="Payoo logo" />

<h1>Payoo — Mobile Financial Services (MFS) Demo</h1>

<!-- Static badges (no repo required) -->

<a href="#"><img alt="site" src="https://img.shields.io/badge/site-static-blue?style=for-the-badge&logo=html5&logoColor=white" /></a>
<a href="#"><img alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /></a>
<a href="#"><img alt="tailwind" src="https://img.shields.io/badge/tailwindcss-v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" /></a>
<a href="#"><img alt="daisyui" src="https://img.shields.io/badge/daisyUI-v5-5A0EF8?style=for-the-badge" /></a>
<a href="#"><img alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /></a>
<a href="#"><img alt="localStorage" src="https://img.shields.io/badge/storage-localStorage-ff9800?style=for-the-badge" /></a>
<a href="#"><img alt="backend" src="https://img.shields.io/badge/backend-none-lightgrey?style=for-the-badge" /></a>


<!-- Live demo (replace placeholders after publishing) -->

<a href="https://CodePoint-46615.github.io/Payoo-MFS-Website/"><img alt="live" src="https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-2ea44f?style=for-the-badge&logo=github" /></a>

</div>

---

## Abstract

Payoo is a static, client-side web application that simulates a Mobile Financial Services (MFS) experience. It demonstrates user login, balance display, and core financial interactions (Add Money, Cash Out, Transfer Money, Pay Bill, Get Bonus) with simplified client-side validation and mock session handling via `localStorage`. The system has no backend and is intended solely for educational and demonstration purposes.


## Features
- Login UI (client-only; no real authentication)
- Mock session via `localStorage` (`isLoggedIn` flag)
- Dashboard with Available Balance
- Actions:
  - Add Money (validates 11-digit bank account and 4-digit PIN)
  - Cash Out (validates 11-digit agent number, sufficient balance, 4-digit PIN)
  - Transfer Money (validates 11-digit account, sufficient balance, 4-digit PIN)
  - Pay Bill (validates biller account, sufficient balance, 4-digit PIN)
  - Get Bonus (applies 20% bonus with a valid coupon on non-zero balance)
  - Transaction History list (in-memory, rendered on demand)
  - Logout (clears `localStorage` session flag and redirects)

## Tech Stack
- HTML5
- Tailwind CSS (via CDN, v4)
- DaisyUI (via CDN, v5)
- Font Awesome (icons via CDN)
- Vanilla JavaScript
- Browser `localStorage` for mock session gating
- Git for version control

## System Requirements
- No server runtime required (pure static files). For consistent relative paths, a simple static server is recommended when testing locally.

## Project Structure
```
Payoo-MFS-Website/
├─ index.html                 # Login page (root)
├─ view/
│  └─ home.html               # Post-login dashboard and feature UI
├─ assets/
│  ├─ Group.png               # Logo (referenced in UI)
│  ├─ bg.png                  # Background image (login)
│  ├─ wallet1.png, send1.png, money1.png, bonus1.png, purse1.png, transaction1.png
│  └─ JS/
│     ├─ login.js             # Login logic, sets mock session, redirects to home
│     ├─ home.js              # Action handlers and transaction rendering
│     ├─ toogle.js            # Section toggling utilities
│     └─ tailwind.config.js   # Present but unused (CDN Tailwind v4)
└─ README.md                  # This document
```

## Demo Credentials
These credentials are intentionally hard-coded in the client for demonstration only. Do not reuse in production.

- Login (index.html)
  - Mobile Number: `12345678910`
  - PIN: `1234`
  - On success: sets `localStorage.isLoggedIn = "true"` and redirects to `view/home.html`.

- Operational PINs (home.html actions)
  - Add Money: PIN `1234`
  - Cash Out: PIN `1234`
  - Transfer Money: PIN `1234`
  - Pay Bill: PIN `1234`

- Bonus Coupon
  - Valid Coupon: `payoo25`
  - Effect: Adds a 20% bonus to current Available Balance (if balance > 0)

## Security Notes and Limitations
- Client-only authentication (insecure): All logic and credentials are visible in the browser developer tools.
- No backend or persistent storage: Balance and transactions are not persisted across reloads (except the `isLoggedIn` flag for navigation).
- Minimal validation: Intended to illustrate front-end flows only.
- Educational use only: Do not deploy this as-is for real financial operations.

## Acknowledgements
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [Font Awesome](https://fontawesome.com/)



---

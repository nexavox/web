# Aiden Intelligence Matrix — Design System

This document outlines the design tokens, brand identity, color palette, and typography system for the **AIDEN: AI Data Network UI** project, extracted from its Stitch configuration.

---

## 1. Brand Identity & Visual Style

* **Theme Name:** Aiden Intelligence Matrix
* **Aesthetic:** Tech-Brutalist Editorial
* **Target Audience:** Data scientists, AI researchers, and developers who value dense, high-fidelity information systems with premium aesthetic execution.
* **Design Philosophy:** A "digital machine room" curated like a luxury tech journal. It features visible structural grids, sharp modular bento-box layouts, and high-contrast glowing elements set against deep matte obsidian surfaces.

---

## 2. Color System

The system is optimized for dark modes, using a hierarchical obsidian-like depth scheme. Color is used purposefully as a luminescent highlight rather than decoration.

### 2.1 Core Palette

| Token | Role / Use Case | Hex Value | Color Preview |
| :--- | :--- | :--- | :--- |
| `background` | Deepest canvas background (Void) | `#131313` | ![#131313](https://placehold.co/15x15/131313/131313.png) |
| `void-black` | Pure black base for depth layering | `#000000` | ![#000000](https://placehold.co/15x15/000000/000000.png) |
| `primary` | Primary cyan accent (Data & active status) | `#a4e6ff` | ![#a4e6ff](https://placehold.co/15x15/a4e6ff/a4e6ff.png) |
| `primary_container` | Glow highlight / main accent | `#00d1ff` | ![#00d1ff](https://placehold.co/15x15/00d1ff/00d1ff.png) |
| `secondary` | Secondary purple (Categorical / AI status) | `#ecb2ff` | ![#ecb2ff](https://placehold.co/15x15/ecb2ff/ecb2ff.png) |
| `secondary_container` | Secondary accent container | `#cf5cff` | ![#cf5cff](https://placehold.co/15x15/cf5cff/cf5cff.png) |
| `tertiary` | Tertiary magenta accent | `#ffceee` | ![#ffceee](https://placehold.co/15x15/ffceee/ffceee.png) |
| `tertiary_container` | Tertiary accent container | `#ffa2e7` | ![#ffa2e7](https://placehold.co/15x15/ffa2e7/ffa2e7.png) |
| `grid-line` | Structural grid lines & borders | `#1A1A1A` | ![#1A1A1A](https://placehold.co/15x15/1A1A1A/1A1A1A.png) |
| `text-muted` | Low-emphasis body text | `#888888` | ![#888888](https://placehold.co/15x15/888888/888888.png) |

### 2.2 Surface Elevation & Containers

| Token | Hex Value | Color Preview |
| :--- | :--- | :--- |
| `surface-dim` | `#131313` | ![#131313](https://placehold.co/15x15/131313/131313.png) |
| `surface-elevated` | `#121212` | ![#121212](https://placehold.co/15x15/121212/121212.png) |
| `surface_container_lowest` | `#0e0e0e` | ![#0e0e0e](https://placehold.co/15x15/0e0e0e/0e0e0e.png) |
| `surface_container_low` | `#1c1b1b` | ![#1c1b1b](https://placehold.co/15x15/1c1b1b/1c1b1b.png) |
| `surface_container` | `#201f1f` | ![#201f1f](https://placehold.co/15x15/201f1f/201f1f.png) |
| `surface_container_high` | `#2a2a2a` | ![#2a2a2a](https://placehold.co/15x15/2a2a2a/2a2a2a.png) |
| `surface_container_highest`| `#353534` | ![#353534](https://placehold.co/15x15/353534/353534.png) |
| `surface_bright` | `#3a3939` | ![#3a3939](https://placehold.co/15x15/3a3939/3a3939.png) |

### 2.3 Structural / Content Interaction Colors

* **On-Surface:** `#e5e2e1`
* **On-Surface-Variant:** `#bbc9cf`
* **Outline:** `#859399`
* **Outline-Variant:** `#3c494e`
* **Error:** `#ffb4ab`
* **Error-Container:** `#93000a`
* **On-Error:** `#690005`

---

## 3. Typography System

The typography is built around extreme scale variations and a sharp contrast between **Inter** (humanist/structural readability) and **JetBrains Mono** (technical detail readout).

| Type Token | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-xl` | Inter | `120px` | `800` (Extra Bold) | `110px` | `-0.04em` |
| `headline-lg` | Inter | `64px` | `700` (Bold) | `72px` | `-0.02em` |
| `headline-lg-mobile`| Inter | `40px` | `700` (Bold) | `44px` | `-0.02em` |
| `headline-md` | Inter | `32px` | `660` (Semi Bold) | `40px` | — |
| `body-lg` | Inter | `18px` | `400` (Regular) | `28px` | — |
| `body-md` | Inter | `16px` | `400` (Regular) | `24px` | — |
| `label-mono` | JetBrains Mono | `12px` | `500` (Medium) | `16px` | `0.08em` |
| `caption-bold` | Inter | `11px` | `700` (Bold) | `14px` | — |

---

## 4. Spacing, Shapes & Layout

### 4.1 Spacing Scale

* **Grid Margin:** `2rem` (32px)
* **Grid Gutter:** `1px` (for thin structural border stitching)
* **Stack Small (`stack-sm`):** `0.5rem` (8px)
* **Stack Medium (`stack-md`):** `1.5rem` (24px)
* **Stack Large (`stack-lg`):** `4rem` (64px)

### 4.2 Layout System
* **Grid Structure:** 12-column fluid grid on desktop, shifting to a single-column 4-column stack on mobile.
* **Border Stitching:** Avoid traditional card margins; instead, bento-box panels share standard 1px borders (`#1A1A1A`) to form a unified grid mesh.
* **Shapes:** Strictly **Sharp (0px radius)** corner styling on all boxes, buttons, inputs, and components. Curved elements are rejected to maintain technical, brutalist styling.

---

## 5. Component Guidelines

* **Bento Cards:** Standard modules. Framed with a 1px border (`#1A1A1A`), utilizing `#0A0A0A` for card body background. On hover, the border glows with the Cyan accent.
* **Buttons:** Solid Cyan (`#00D1FF`) with black text for primary actions. Outlined with no fill for secondary actions. Absolutely no rounded corners.
* **Status Indicators:** Pulsing `8px` square status dots utilizing Cyan or Purple neon accents to signal active computational states.

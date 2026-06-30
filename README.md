# Energy Chatbot Demo Landing Page

A small React landing page for a fictional energy-sector chatbot concept. The project demonstrates frontend structure, simple user interactions, and Google Tag Manager event tracking.

Event tracking was validated in Google Tag Manager Preview Mode and Google Analytics 4 Realtime using Chrome. Safari may restrict analytics requests because of browser privacy protection.

## Live Demo
https://gtm-energy-chatbot-demo.vercel.app

## Purpose

This project was created as a compact junior developer portfolio/demo project. It shows:

- React component structure
- Responsive page layout
- Basic form handling
- FAQ accordion interaction
- Google Tag Manager installation
- Custom `dataLayer` events for analytics tracking

## Tech stack

- React
- Vite
- JavaScript
- CSS
- Google Tag Manager

## Main features

- Responsive landing page
- Energy-sector chatbot product concept
- Hero section with CTA buttons
- Feature cards
- FAQ accordion
- Demo request form
- Custom GTM data layer events

## Tracked events

| Event name | Triggered by | Parameters |
|---|---|---|
| `start_demo_click` | User clicks “Start demo” | `section`, `button_text` |
| `brochure_download_click` | User clicks “Download brochure” | `section`, `button_text` |
| `faq_open` | User opens an FAQ item | `section`, `faq_question` |
| `demo_request_submit` | User submits the demo request form | `section`, `form_name` |

## Google Tag Manager setup

The GTM container snippet is included in `index.html`.

Before publishing, replace the placeholder container ID:

```html
GTM-XXXXXXX
```

with your own GTM container ID.

Recommended GTM configuration:

### Data layer variables

| GTM variable name | Data layer variable name |
|---|---|
| `DLV - section` | `section` |
| `DLV - button_text` | `button_text` |
| `DLV - faq_question` | `faq_question` |
| `DLV - form_name` | `form_name` |

### Custom event triggers

| Trigger name | Event name |
|---|---|
| `CE - start_demo_click` | `start_demo_click` |
| `CE - brochure_download_click` | `brochure_download_click` |
| `CE - faq_open` | `faq_open` |
| `CE - demo_request_submit` | `demo_request_submit` |

### Optional GA4 event tags

Create GA4 event tags for each custom event if you have a GA4 property. Otherwise, use GTM Preview Mode to validate that the events fire correctly.

## How to run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## How to build

```bash
npm run build
```

## How to test GTM events

1. Open Google Tag Manager.
2. Click **Preview**.
3. Enter the local or deployed website URL.
4. Click the page buttons, open FAQ items, and submit the form.
5. Confirm that these events appear:
   - `start_demo_click`
   - `brochure_download_click`
   - `faq_open`
   - `demo_request_submit`


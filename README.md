# Dikshant Prajapati - Cybersecurity Portfolio

A modern, responsive, and sleek personal portfolio website designed for a cybersecurity professional. It features a dark terminal-inspired aesthetic with neon accents, interactive project cards, and a simulated secure communications contact form.

## Live Demo
Check out the live website: [https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME](https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME) *(Replace with your actual GitHub Pages link)*

## Features
- **Cybersecurity Aesthetic:** Dark terminal theme with neon accent colors.
- **Dynamic Hero Section:** Typewriter effect showcasing professional titles.
- **Skill Breakdown:** Structured overview of programming languages, operating systems, tools, and core domains.
- **Project Showcase:** Highlights real projects including the Hybrid Network Intrusion Detection System and News Intelligence Engine.
- **Continuous Learning Section:** Callouts for TryHackMe pathways and Hack The Box (HTB) lab training.
- **Interactive Contact Form:** Client-side input validation simulating secure communications.

## Project Structure

- `index.html` - The main structure of the page, containing all semantic sections.
- `style.css` - Custom styles, layout variables, and responsive design rules.
- `script.js` - Client-side logic for the typewriter effect, sticky navigation, mobile menu, and form validation.

## How to Run Locally

You don't need complex build tools to run this portfolio. Since it's built with HTML, CSS, and Vanilla JS, you can run it directly using any local web server.

### Option 1: Using Python
If you have Python installed, start a simple server from the project directory:
python -m http.server 8000
Then, open your browser and navigate to http://localhost:8000.

### Option 2: Using Node.js / NPX
If you have Node.js installed, use the `serve` package:
npx serve .

### Option 3: Antigravity IDE / VS Code Live Server
Open the project folder inside your Antigravity IDE or Visual Studio Code, use a built-in preview extension, or right-click `index.html` and select **Open with Live Server**.

## Customization Guide

- **Theme Colors:** Modify the CSS variables in the `:root` pseudo-class at the top of `style.css` (e.g., `--accent-primary`).
- **Typewriter Text:** Change the text that appears in the hero section's typewriter animation by editing the array variable at the top of `script.js`.
- **Content & Links:** Update `index.html` to modify your biography, add new skills, or update your GitHub, LinkedIn, TryHackMe, and HTB links.
- **Form Submission:** The contact form currently simulates a transmission. To make it functional, integrate a service like Formspree or Web3Forms by changing the `<form>` `action` attribute in `index.html`.

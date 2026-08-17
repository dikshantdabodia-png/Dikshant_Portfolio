# Dikshant Prajapati - Cybersecurity Portfolio

A modern, responsive, and sleek personal portfolio website designed for a cybersecurity professional. It features a dark terminal-inspired aesthetic with neon accents, interactive project cards, and a simulated secure communications contact form.

## Project Structure

- `index.html` - The main structure of the page, containing all the semantic sections.
- `style.css` - Custom styles, layout variables, and responsive design rules.
- `script.js` - Client-side logic for the typewriter effect, sticky navigation, mobile menu, and form validation.

## How to Run Locally

You don't need any complex build tools to run this portfolio. Since it's built with HTML, CSS, and Vanilla JS, you can run it directly using any local web server.

### Option 1: Using Python
If you have Python installed, you can start a simple server from the project directory:
```bash
python -m http.server 8000
```
Then, open your browser and navigate to `http://localhost:8000`.

### Option 2: Using Node.js / NPX
If you have Node.js installed, you can use the `serve` package:
```bash
npx serve .
```

### Option 3: VS Code Live Server
If you use Visual Studio Code, you can install the "Live Server" extension, right-click on `index.html`, and select "Open with Live Server".

## Customization Guide

- **Theme Colors:** You can easily change the neon accent colors by modifying the CSS variables in the `:root` pseudo-class at the top of `style.css` (e.g., `--accent-primary`).
- **Typewriter Text:** To change the text that appears in the hero section's typewriter animation, edit the `textArray` variable at the top of `script.js`.
- **Content:** Update `index.html` to modify your biography, add new skills, or change the details of your projects. Ensure FontAwesome icon classes (e.g., `fa-shield-alt`) match your new content.
- **Form Submission:** The contact form currently simulates a transmission. To make it functional, you can integrate a service like Formspree or Web3Forms by changing the `<form>` `action` attribute in `index.html` and removing the `e.preventDefault()` logic in `script.js`.

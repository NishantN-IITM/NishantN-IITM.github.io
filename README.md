# Nishant Narsale — Research Portfolio

Premium responsive research portfolio built with plain HTML, CSS and JavaScript. No framework or build process is required.

## Folder structure

```text
research-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── research/
    ├── certificates/
    └── Nishant_Narsale_CV.pdf   ← add your CV here
```

## What to customize

Before publishing, edit `index.html` and replace:
- workshop titles, organizers, dates and certificate links
- conference presentation titles, venues, years and presentation type
- LinkedIn URL
- CV file
- research images / figures
- any project links you want to add

The website already includes:
- research-focused landing page
- project cards with GitHub links
- workshops timeline
- conference presentation section
- technical skills
- CV download button
- responsive mobile navigation
- dark/light mode toggle
- IIT Madras / Applied Mechanics positioning

## Deploy on GitHub Pages

### Recommended: personal website

Create a GitHub repository named:

`NishantN-IITM.github.io`

Then:

1. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets` folder.
2. Commit the files to the `main` branch.
3. Open the repository.
4. Select **Settings**.
5. Select **Pages** from the left sidebar.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Select branch **main** and folder **/(root)**.
8. Click **Save**.
9. Wait for the deployment to finish.

Your website should then be available at:

`https://NishantN-IITM.github.io/`

### Alternative: project repository

If you name the repository `research-portfolio`, the address will normally be:

`https://NishantN-IITM.github.io/research-portfolio/`

## Add your CV

Put your PDF in the `assets` folder with exactly this filename:

`Nishant_Narsale_CV.pdf`

The **Download CV** button will then work automatically.

## Add research figures

Place images inside:

`assets/research/`

Then add them to the relevant cards using normal HTML `<img>` tags.

## Important

The IIT Madras wording on the site is a personal academic affiliation presentation, not an official IIT Madras website. Do not use institutional logos unless you have permission to use them.

## Local preview

You can double-click `index.html` to preview it, or use:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

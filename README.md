# My Portfolio

## Features

- Dark/light mode with local preference saving
- Mobile-friendly navigation, sticky header and scroll progress
- Selected project cards, category filtering and detailed case-study popups
- Experience timeline, skills, education and certifications
- Working email, GitHub, LinkedIn and resume links
- Contact form that opens the visitor's email app with a prefilled draft (no backend)
- Keyboard-friendly dialog, reduced-motion support, semantic headings and responsive layouts
- Easy to maintain with one central data file, `data.js`

## Preview locally

Double-click `index.html` to open it in a browser. Or, from this directory, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages — straightforward method

1. Sign in to [GitHub](https://github.com), create a new **public** repository named `portfolio` (or another name).
2. Upload **the contents of this folder** to the root of that repository. Keep `index.html`, `styles.css`, `script.js`, `data.js`, `assets/` and `.nojekyll` in their original relative positions.
3. Commit the files to the `main` branch.
4. In the repository open **Settings → Pages → Build and deployment**, select **Deploy from a branch**.
5. Choose **main** and **/(root)**, then click **Save**.
6. Your site will be available at `https://Preet287.github.io/portfolio/` if your repository is named `portfolio` under the account `Preet287`. GitHub Pages may take a few minutes to publish.

**Optional personal domain:** configure the domain under Settings → Pages and add DNS records as GitHub instructs. Do not add a `CNAME` file until you own and configure the domain.

**Optional root URL:** if you name the repository `Preet287.github.io`, the homepage will be `https://Preet287.github.io/` instead. Paths are relative and work with either setup.

## Editing the website

| What you want to change | File |
| --- | --- |
| Project descriptions, tags, work history, numbers, certifications | `data.js` |
| Main headings, about section, contact details, social URLs | `index.html` |
| Theme, layout, typography, animation, mobile styling | `styles.css` |
| Filtering, theme toggle, modal, contact form behavior | `script.js` |
| Downloadable resume | `assets/Preetkumar_Patel_Resume.pdf` |
| Browser icon / sharing preview | `assets/favicon.svg`, `assets/social-preview.svg` |

### Add a project

Open `data.js`. Under `projects`, add another object with a unique `id`, `number`, `category`, `categoryLabel`, `date`, `title`, `headline`, `description`, `stack`, `visual` and `details`. Available categories: `ai`, `data`, `automation`. Available visual styles: `rag`, `azure`, `automation`. Keep existing data syntax valid, including commas.

### Add actual GitHub repositories

The resume does not include URLs for each project; rather than inventing links, the site currently opens complete case-study popups. When you publish project repositories, you can add their URLs to each project's data and create a link inside `renderProjects()` or `openProject()` in `script.js`. The GitHub profile link already works.

### Update the contact form

The form uses `mailto:` because GitHub Pages does not run a server. It validates your name, email, and message, then launches the visitor's configured email app; the visitor must press **Send** there. If you want messages to arrive without opening email, integrate a service such as Formspree or a serverless function and update the form's submit handler. Never put private API keys into public GitHub Pages JavaScript.

### Update resume and details

The provided resume is copied from the attached PDF as-is. Replace `assets/Preetkumar_Patel_Resume.pdf` when you update it. Current website content follows that resume, which lists B.Tech at Parul University; it does **not** insert unverified current education, work status, employment dates or individual project repo URLs.

### Assets and privacy

- `social-preview.svg` is a designed illustration rather than a personal photo. You can replace it with an image when you want.
- Google Fonts are loaded from Google's CDN. If offline they fall back to system fonts.
- Theme preference is stored only in browser localStorage.
- This is static hosting and does not collect visitor analytics or store contact messages.
- Your public resume includes a telephone number; consider removing it from the PDF if you prefer not to publish it.

## Structure

```text
portfolio/
├── index.html
├── styles.css
├── data.js
├── script.js
├── README.md
├── .nojekyll
└── assets/
    ├── favicon.svg
    ├── social-preview.svg
    └── Preetkumar_Patel_Resume.pdf
```

## License

The code is provided to the portfolio owner to use and modify. Resume and personal content belong to the owner.

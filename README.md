# Ginnie Ma — personal academic website

Ready-to-publish static files for https://ginniema.github.io.

## Publish on GitHub Pages

1. Sign in to the GitHub account named `ginniema`.
2. Create a **public** repository named exactly `ginniema.github.io`. If it already exists, review its contents before replacing anything.
3. Upload the **contents** of this folder to the repository root. `index.html` should be at the top level, alongside `assets/`, `research/`, `teaching/`, and `talks/`. Do not upload the ZIP itself or wrap these files in an additional folder.
4. In **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.
5. GitHub will publish the site at https://ginniema.github.io. Publication can take up to 10 minutes. No custom-domain entry, domain purchase, or DNS configuration is required.

The `.nojekyll` file tells GitHub to serve the prepared static files directly. Keep it in the repository root when pushing with Git. If uploading through the web interface, you can create this empty file there if your computer hides it.

## Editing

Edit `index.html` for About, `research/index.html` for Research, `teaching/index.html` for Teaching, and `talks/index.html` for Talks. Shared styling lives in `styles.css`; the original AcademicPages theme is in `assets/css/main.css`.

The original CV and unpublished fellowship information are excluded from this export. This package contains only the current public site and no repository history.

Theme and font licenses are preserved in `licenses/`.

Official instructions: https://docs.github.com/en/pages/quickstart

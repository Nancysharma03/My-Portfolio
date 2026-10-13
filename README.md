# Nancy Portfolio update

Replace `src/App.jsx` with `App.jsx`, `src/App.css` with `App.css`, and `src/index.css` with `index.css` from this package. Keep `src/main.jsx`; it should import `./index.css`.

## Public assets expected
- `public/images/nancy-profile.png` — your portrait
- `public/Nancy_Sharma_JAVA_FULL_STACK_ENGINEER.pdf` — Java resume
- `public/Nancy_Sharma_SoftwareEngineer_DataAnalyst.pdf` — analytics resume

If your actual PDF filenames differ, update the two paths in the `PROFILE` object at the top of App.jsx. Use exact filenames, including underscores, spaces and capitalization.

The profile image path is exact and case-sensitive. Project images currently use illustrative Unsplash images; replace each `image` value in the `projects` array with a real screenshot when you have one. Live demo URLs are intentionally blank until deployed.

Run `npm run dev` from the folder containing package.json.

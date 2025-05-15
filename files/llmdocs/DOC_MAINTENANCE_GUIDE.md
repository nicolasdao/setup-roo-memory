# `llmdocs/` Maintenance Guide

Maintain the files in `./llmdocs/` folder in this exact order:

1. `./llmdocs/STACK.md`
2. `./llmdocs/FILES.md`
3. `./llmdocs/FEATURES.md`
4. `./llmdocs/LOOK_AND_FEEL.md`
5. `./llmdocs/IMPORTANT_NOTES.md`

And finally the `./CHANGELOG.md` located in the project's root directory.

* **Additional notes**:
1. Each document may reference or build on those listed before it.
2. **Creation**: If a file is missing, generate the full structure.
3. **Update**: If present, only modify relevant sections:
  * Add new items
  * Update changed content
  * Remove deleted entries

---

### `STACK.md`

* **If absent**: create with these sections (in order):

  * TOC
  * Overview
  * Runtimes & Languages
  * Frameworks & Libraries
  * APIs & Protocols
  * Data Storage
  * Cloud Services
  * Messaging & Eventing
  * Communication Channels

* **If present**: update only changed sections or append new ones.

---

### `FILES.md`

* Use `STACK.md > Runtimes & Languages` to infer which dependency and build folders to ignore.

* **If absent**, create with:

  * TOC
  * **Files**: output of a `tree` command excluding language- and framework-specific dependency/output folders.
  * For each file:

    * `Type`: one of {Page, Component, Utility, Route, Service, Data, Config, Test, Theme, Style, Localization, Encryption, Environment, Documentation, Stack, Assets}
    * `Creation date`: first commit or inferred
    * `Description`: role and purpose
    * `Dependencies`: other files or libraries

* **If present**, update by:

  * Adding new files
  * Removing deleted files
  * Modifying details (type, description, dependencies)
  * Regenerating the tree output

* **Questions this document must be able to answer**:

  1. What is the full file structure of the source directory?
  2. Which files are Pages? Components? Services?
  3. Which files configure environment variables?
  4. Which files store localization/internationalization data?
  5. Which files handle routing (e.g., `routes.js`, `app.router.ts`)?
  6. Where are test files and what types of tests are implemented?
  7. Which files contain the project's theme or design tokens?
  8. What are the main configuration files (e.g., `tsconfig.json`, `vite.config.js`)?
  9. Are there build or bundler outputs that should be excluded?
  10. What files are auto-generated and should be ignored?
  11. Are there any hidden files with logic (e.g., `.eslintrc`, `.roo/`)?
  12. What are the oldest files (e.g., by first commit)?
  13. Which files depend on third-party libraries?
  14. Which files are tightly coupled and often change together?
  15. Are there any files handling encryption or sensitive logic?
  16. What files provide helper/utility functions?
  17. Which files define the project’s entry points?
  18. Which files directly relate to the stack declared in `STACK.md`?
  19. Which files are shared across features?
  20. Which files appear orphaned or unused?

---

### `FEATURES.md`

* **If absent**, create with:

  * TOC
  * For each feature:

    * Creation date
    * Description
    * Dependencies
    * Files (with brief roles)

* **If present**, update by adding, modifying, or removing features accordingly.

* **Questions this document must be able to answer**:

  1. What are the core features delivered by this project?
  2. When was each feature introduced?
  3. What user needs or use cases does each feature address?
  4. What files implement or support each feature?
  5. What dependencies are required for each feature to work?
  6. Are features toggled via environment variables or config?
  7. Which features are user-facing vs backend-only?
  8. What is the data flow for each feature?
  9. Are there any permissions or roles tied to features?
  10. Is the feature always active or conditional?
  11. Is the feature part of an MVP or roadmap item?
  12. How do features relate to external services?
  13. Are any features deprecated or under rework?
  14. How are edge cases handled per feature?
  15. What tests validate each feature?
  16. Are there known limitations per feature?
  17. Which features are reusable or shared across contexts?
  18. Does this feature require localization or regional logic?
  19. Are any features monetized or gated?
  20. What business logic does each feature encapsulate?

---

### `LOOK_AND_FEEL.md`

* **If absent**, create with:

  * TOC
  * For each guideline:

    * `Category`: one of {Look, Feel, Tone, Color palette}
    * Subsection (e.g., Typography, Animation)
    * Description
    * Affected Components (UI or flows impacted)

* **If present**, update by refining or removing outdated rules or adding new ones.

* **Questions this document must be able to answer**:

  1. What are the main colors in the palette?
  2. Where is the color palette defined in code?
  3. What fonts are used, and where are they configured?
  4. How is typography structured (e.g., headings, body, captions)?
  5. Are there light and dark themes? How are they toggled?
  6. Are shadows, border radii, or spacing tokens defined?
  7. What design tokens are used (and where)?
  8. Are there animation principles (e.g., easing, duration)?
  9. Are transitions smooth, instant, or reactive?
  10. Which UI components follow custom guidelines?
  11. Are any design libraries used (e.g., Tailwind, Material UI)?
  12. What are the default UI states (loading, error, success)?
  13. Are there accessibility guidelines (e.g., color contrast)?
  14. How does navigation behave (e.g., page transitions)?
  15. Is there a mobile vs desktop layout difference?
  16. What tone of voice or brand feel should the UI convey?
  17. Are there specific gestures or motion interactions?
  18. Is the design minimalist, playful, corporate, etc.?
  19. What elements reflect the brand’s identity?
  20. What files or tokens should never be changed without a review?

---

### `IMPORTANT_NOTES.md`

* **If absent**, create with:

  * TOC
  * For each note:

    * Creation date
    * Description (context and rationale)
    * Files (relevant roles)

* **If present**, update similarly (add, edit, or remove).

* **Questions this document must be able to answer**:

  1. Are there known limitations or architectural tradeoffs?
  2. Are any parts of the system brittle or hard to refactor?
  3. Are there sections of code that must not be deleted?
  4. What design decisions had hidden implications?
  5. What legacy elements must be preserved (and why)?
  6. Are there manual steps required during deployment?
  7. What files are sensitive to ordering or loading sequences?
  8. What parts of the app were hard to debug historically?
  9. What features are blocked by tech constraints?
  10. Are there gotchas when running locally vs in prod?
  11. Are there any dev-only hacks or monkey patches?
  12. What requires elevated permissions to change?
  13. What must be coordinated across teams before altering?
  14. Are there race conditions or async pitfalls?
  15. Are there third-party services that often break?
  16. What areas are planned to be replaced or removed soon?
  17. What file should always be opened first by new devs?
  18. Are there components or APIs in experimental status?
  19. What things break silently if misconfigured?
  20. Are there pending decisions that affect the architecture?

---

### `CHANGELOG.md` (follows *Keep a Changelog* + SemVer)

* **File structure**:
  1. **Header** (create if missing):

     ```markdown
     # Changelog

     All notable changes here.  
     Adheres to SemVer.
     ```

  2. **Unreleased section** (create if missing):

     ```markdown
     ## [Unreleased]

     ### Added
     * ...

     ### Changed
     * ...

     ### Fixed
     * ...

     ### Removed
     * ...
     ```

  3. **Releases** (append when version is bumped):

     ```markdown
     ## [X.Y.Z] – YYYY-MM-DD

     ### Added
     * ...

     ### Changed
     * ...

     ### Fixed
     * ...

     ### Removed
     * ...

     ### Notes
     * ... (optional)
     ```

  4. **Link references** (update with each release):

     ```markdown
     [Unreleased]: repo/compare/vX.Y.Z...HEAD  
     [X.Y.Z]: repo/releases/tag/vX.Y.Z  
     ```

* Append new entries to `[Unreleased]` under the correct heading.
* On release:
  * Copy `[Unreleased]` to a new version section
  * Clear `[Unreleased]`
  * Use SemVer rules:
    * MAJOR = breaking change
    * MINOR = new feature
    * PATCH = fix/improvement
* Always preserve each file’s exact Markdown structure and concise tone.

* **Questions this document must be able to answer**:

  1. What version are we currently on?
  2. What new features were added since the last release?
  3. What bugs or issues were fixed?
  4. What breaking changes have occurred?
  5. What dependencies were upgraded or removed?
  6. What files or modules changed significantly?
  7. Were there internal refactors or optimizations?
  8. What architectural changes were introduced?
  9. Were any features removed or deprecated?
  10. What API changes were made (new endpoints, params)?
  11. Were performance improvements made?
  12. Were tests or CI/CD workflows updated?
  13. Were environment variables or secrets changed?
  14. Were there accessibility or UX enhancements?
  15. Were documentation or developer guides updated?
  16. Was any experimental code introduced or removed?
  17. Are there migration steps for this version?
  18. What git tags/releases match the change?
  19. Is this release safe to roll back?
  20. Are there known issues not fixed in this version?


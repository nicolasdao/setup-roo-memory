How to maintain `FILES.md`:

* Use `STACK.md > Runtimes & Languages` to infer which dependency and build folders to ignore.

* Ignore files in the following folders:
   * `./llmdocs/`

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
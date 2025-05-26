How to maintain `CHANGELOG.md`:

* Ignore files in the following folders:
   * `./llmdocs/`

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


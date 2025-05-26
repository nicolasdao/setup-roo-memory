How to maintain `IMPORTANT_NOTES.md`:

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
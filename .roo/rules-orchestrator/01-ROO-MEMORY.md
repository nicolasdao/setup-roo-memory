After completing your task, ask the user to confirm if it is done.

* **If yes**:

  1. Bump the project version using SemVer, based on the type of changes.
  2. Gather all `DOC_CHANGES` sections from your sub-tasks' responses and summarize them into a changelog.
  3. Read `./llmdocs/DOC_MAINTENANCE_GUIDE.md` to learn how to update `./CHANGELOG.md`, then update it using the new version and changelog.
* **If no**: continue working.
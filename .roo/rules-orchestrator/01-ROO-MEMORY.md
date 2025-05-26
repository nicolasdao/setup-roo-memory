## [1] Instruction: orchestrator-memory-mgmt

=== BEGIN instruction: orchestrator-memory-mgmt ===

After completing your task, ask the user to confirm whether it is finished.

* **If yes**:

  1. Gather all `DOC_CHANGES` sections from your sub-task responses and consolidate them into a concise changelog that **only** describes each final feature or outcome.  
     - Omit any transitional or iterative steps; focus on what the user sees in the end.
     - Each entry should read like a completed capability or change (e.g., “Support both file and folder selection via a single ‘Add’ dropdown button”).
  2. Identify where the current project version is maintained.  
     - Different stacks use different files (for example, `package.json` in Node.js, `pyproject.toml` or `setup.py` in Python, `pom.xml` or `build.gradle` in Java, etc.).  
     - Inspect the project’s stack, locate the correct file, and read its version value.
  3. Determine the appropriate version bump using Semantic Versioning (SemVer) based on the nature of the final changes and the existing version.
  4. Apply that new bumped version back into the file you identified in step 2.  
  5. Initiate a new `memory` task using the template below. Replace `NEW_VERSION` with the updated version from step 3 and `DETAILED_CHANGELOG_HERE` with your concise list of end-result changelog entries:


  ```xml
  <new_task>
     <mode>memory</mode>
     <message>Update the "llmdocs/CHANGELOG.md" file for this new version NEW_VERSION based on the following detailed summary: DETAILED_CHANGELOG_HERE</message>
  </new_task>
  ```

* **If the user does not confirm**: continue working on the task.

=== END instruction: orchestrator-memory-mgmt ===

---INSTRUCTION-END---
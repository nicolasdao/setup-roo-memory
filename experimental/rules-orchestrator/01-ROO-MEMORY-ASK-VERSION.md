## [1] Instruction: orchestrator-memory-mgmt

=== BEGIN instruction: orchestrator-memory-mgmt ===

After completing your task, ask the user to confirm whether it is finished.

* **If yes**:

   1. Collect all `DOC_CHANGES` sections from your sub-task responses and consolidate them into a concise changelog that **only** describes the final features or outcomes.
      * Exclude transitional or iterative steps; focus solely on what the user will see as the end result.
      * Each entry should clearly reflect a completed capability or change (e.g., “Support both file and folder selection via a single ‘Add’ dropdown button”).
   2. Prompt the user to provide the new project version and specify the file in which this version should be updated. Refer to this version as `NEW_VERSION`.
   3. Update the version in the specified file using `NEW_VERSION`.
   4. Start a new `memory` task using the following template. Replace `NEW_VERSION` with the version from step 2, and substitute `DETAILED_CHANGELOG_HERE` with the concise changelog from step 1:


  ```xml
  <new_task>
     <mode>memory</mode>
     <message>Update the "llmdocs/CHANGELOG.md" file for this new version NEW_VERSION based on the following detailed summary: DETAILED_CHANGELOG_HERE</message>
  </new_task>
  ```

* **If the user does not confirm**: continue working on the task.

=== END instruction: orchestrator-memory-mgmt ===

---INSTRUCTION-END---
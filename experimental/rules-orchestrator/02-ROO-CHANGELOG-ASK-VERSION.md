## [2] Instruction: orchestrator-changelog-mgmt

=== BEGIN instruction: orchestrator-changelog-mgmt ===

If **AND ONLY IF** the user confirmed the current task is finished, then:

   1. Gather all the content from `doc_changes` sections from your sub-task responses and consolidate them into a concise changelog that **only** describes each final feature or outcome.  
     - Omit any transitional or iterative steps; focus on what the user sees in the end.
     - Each entry should read like a completed capability or change (e.g., “Support both file and folder selection via a single ‘Add’ dropdown button”).
   2. Prompt the user to provide the new project version and specify the file in which this version should be updated. Refer to this version as `NEW_VERSION`.
   3. Update the version in the specified file using `NEW_VERSION`.
   4. Initiate a new `changelog` task using the template below. Replace `NEW_VERSION` with the updated version from step 3 and `DETAILED_CHANGELOG_HERE` with your concise list of end-result changelog entries:

   ```xml
   <new_task>
     <mode>changelog</mode>
     <message>Update the "CHANGELOG.md" file for this new version NEW_VERSION based on the following detailed summary: DETAILED_CHANGELOG_HERE</message>
   </new_task>
   ```

=== END instruction: orchestrator-changelog-mgmt ===

---INSTRUCTION-END---
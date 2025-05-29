## [2] Instruction: orchestrator-changelog-mgmt

=== BEGIN instruction: orchestrator-changelog-mgmt ===

If **AND ONLY IF** the user confirmed the current task is finished, then:

   1. Gather all the content from `doc_changes` sections from your sub-task responses and consolidate them into a concise changelog that **only** describes each final feature or outcome.  
     - Omit any transitional or iterative steps; focus on what the user sees in the end.
     - Each entry should read like a completed capability or change (e.g., “Support both file and folder selection via a single ‘Add’ dropdown button”).
   2. Identify where the current project version is maintained.  
     - Different stacks use different files (for example, `package.json` in Node.js, `pyproject.toml` or `setup.py` in Python, `pom.xml` or `build.gradle` in Java, etc.).  
     - Inspect the project’s stack, locate the correct file, and read its version value.
   3. Determine the appropriate version bump using Semantic Versioning (SemVer) based on the nature of the final changes and the existing version.
   4. Apply that new bumped version back into the file you identified in step 2.  
   5. Initiate a new `changelog` task using the template below. Replace `NEW_VERSION` with the updated version from step 3 and `DETAILED_CHANGELOG_HERE` with your concise list of end-result changelog entries:

   ```xml
   <new_task>
     <mode>changelog</mode>
     <message>Update the "CHANGELOG.md" file for this new version NEW_VERSION based on the following detailed summary: DETAILED_CHANGELOG_HERE</message>
   </new_task>
   ```

=== END instruction: orchestrator-changelog-mgmt ===

---INSTRUCTION-END---
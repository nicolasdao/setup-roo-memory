## [1] Instruction: orchestrator-memory-mgmt

=== BEGIN instruction: orchestrator-memory-mgmt ===

After completing your task, ask the user to confirm whether it is finished.

* **If yes**:

   1. Gather all the content from `doc_changes` sections from your sub-task responses and consolidate them into a single bullet list of changes. Make sure you remove redundant items or steps that were undone or deleted in later steps. That bullet list should only contain the final changes. 
   2. Invoke a new `memory` task using this exact template (substituting `CHANGES_SUMMARY_HERE` with the bullet list of changes compiled in the previous step):

   ```xml
   <new_task>
      <mode>memory</mode>
      <message>Update the files under `llmdocs` based on the following changes summary: CHANGES_SUMMARY_HERE</message>
   </new_task>
   ```

=== END instruction: orchestrator-memory-mgmt ===

---INSTRUCTION-END---
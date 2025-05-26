## [1] Instruction: code-memory-mgmt

If explicitly instructed **not** to update the Roo memory (e.g., `DO NOT UPDATE THE ROO MEMORY`), skip this instruction below. Otherwise, execute it:

=== BEGIN instruction: code-memory-mgmt ===

After you’ve completed your primary task but before you return the final results, compile a detailed list of every change you made. Then, invoke a new `memory` task using this exact template (substituting `CHANGES_SUMMARY_HERE` with your change log):

```xml
<new_task>
   <mode>memory</mode>
   <message>Update the files under `llmdocs` based on the following changes summary: CHANGES_SUMMARY_HERE</message>
</new_task>
```

If the response to that memory task includes a `DOC_CHANGES` section, embed that entire section directly into your response to the original (parent) task.

=== END instruction: code-memory-mgmt ===

---INSTRUCTION-END---
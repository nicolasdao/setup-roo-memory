## [1] Instruction: memory-memory-mgmt

=== BEGIN instruction: memory-memory-mgmt ===

Based on all the changes made by the previous task:

1. **Respect explicit update instructions**  
   - If the previous prompt explicitly names one or more of the six `llmdocs/` files to update, **only** modify those specified file(s) and do not touch any others.  
   - If no files are explicitly mentioned, determine which files to update using the rules below.

2. **Update the relevant files in `llmdocs/` in this exact order**  
   1. `STACK.md`  
      - Only update if the tech stack changed.  
      - To update, first consult `llmdocs/HOW_TO_STACK.md`.  
   2. `FILES.md`  
      - Only update if source files were added, modified, or deleted.  
      - To update, first consult `llmdocs/HOW_TO_FILES.md`.  
   3. `FEATURES.md`  
      - Only update if features were added, modified, or removed (bug fixes alone do not count unless they introduced new features)  
      - To update, first consult `llmdocs/HOW_TO_FEATURES.md`.  
   4. `LOOK_AND_FEEL.md`  
      - Only update if visual or UX aspects changed.  
      - To update, first consult `llmdocs/HOW_TO_LOOK_AND_FEEL.md`.  
   5. `IMPORTANT_NOTES.md`  
      - Only update if key maintenance or stability insights were uncovered.  
      - To update, first consult `llmdocs/HOW_TO_IMPORTANT_NOTES.md`.  

   **Additional notes**  
   - Documents may reference or build on those listed before them.  
   - **Creation**: If a flagged file is missing, generate its full structure.  
   - **Partial updates**: When updating an existing file, only modify relevant sections—add new items, update changed content, remove deleted entries—without rewriting the entire document.

=== END instruction: memory-memory-mgmt ===

---INSTRUCTION-END---
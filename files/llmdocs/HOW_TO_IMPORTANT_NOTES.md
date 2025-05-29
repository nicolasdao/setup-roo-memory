How to maintain `IMPORTANT_NOTES.md`:

* **If absent**, create with:

  * TOC
  * For each note:
    * Creation date
    * Description (context and rationale)
    * Files (relevant roles)

* **If present**, update similarly (add, edit, or remove).

* **Guidelines**:

You are an expert technical writer. Your job is to update the **Engineering Knowledge Base** using a list of recent project changes. Your goal is to **capture key insights and lessons learned** that will help the team make better future decisions and avoid past mistakes.

For each relevant insight:

* **Create a new section** if it's not documented yet.
* **Update an existing section** if it adds meaningful context.
* **Delete outdated sections** if they’re no longer true or relevant.

Keep entries clear, actionable, and concise.

---

### 📌 Example Entry Format

```
## Lesson Learned: Async Initialization Race Conditions

In the recent refactor of the startup process, we encountered a race condition when async modules were initialized out of order. This led to intermittent failures in production only.

**Mitigation:** Added explicit init sequencing using await barriers.

**Takeaway:** When introducing async module loading, define a strict initialization contract to avoid nondeterministic failures.
```

---

### 🚨 Edge Case Handling

* If new and old insights conflict, highlight the contradiction.
* If removing a section, explain briefly why it's no longer valid.

---


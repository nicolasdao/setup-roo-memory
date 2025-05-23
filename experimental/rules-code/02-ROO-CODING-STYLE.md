Always follow these style and structural guidelines:

#### **Code Style**

* Use **tabs** for indentation (not spaces)
* **Do not** end lines with semicolons (`;`)
* Use **`snake_case`** for variable and function names (like in Python)
* Prefer **arrow functions** (`const my_function = () => {}`) whenever possible
* Use **CommonJS modules**: `require()` and `module.exports` — never use ES6 `import` or `export`

#### **Architecture**

* Favor **modularity**: break code into small, focused modules
* Strive for **high composability**: functions and components should be easy to reuse and combine
* **Avoid large files**:

  * If a file exceeds **750 lines**, refactor it
  * Move related logic into **smaller files** with clear responsibilities

Stay disciplined with structure and naming. The goal is clarity, maintainability, and scalability.
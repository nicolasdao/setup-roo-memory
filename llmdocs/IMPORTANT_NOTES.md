# Important Notes

## Table of Contents
- [Robust `.roomodes` File Handling](#robust-roomodes-file-handling)

## Robust `.roomodes` File Handling

- `Creation date`: 26/05/2025 (inferred)
- `Description`: The `manageRoomodesFile` function in [`index.js`](index.js) now includes comprehensive error handling and validation for the `.roomodes` file. This ensures that even if the target `.roomodes` file is corrupted or malformed, the system can gracefully recover by overwriting it with a valid source file. Additionally, it prevents the accidental duplication of the "memory" mode within the `customModes` array, ensuring configuration integrity. Developers should be aware of the fallback mechanism and the console warnings/messages related to mode duplication or invalid JSON parsing.
- `Files`:
    - [`index.js`](index.js): Contains the `manageRoomodesFile` function.
    - [`.roomodes`](.roomodes): The primary configuration file.
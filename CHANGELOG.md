# Changelog

All notable changes here.  
Adheres to SemVer.

## [Unreleased]

<!-- Omit empty headings -->
### Added
*

### Changed
*

### Fixed
*

### Removed
*

## [0.7.0] - 2025-05-29

### Added
* Added a prominent **WARNING** to [`README.md`](README.md:1) advising users to manually configure the AI models for the new `memory` and `changelog` custom modes to realize potential cost savings.

### Changed
* Updated [`README.md`](README.md:1) to document the new `🧠 Memory` and `📝 Changelog` custom modes, their purpose (leveraging cost-effective AI models for specialized tasks), and the updated project workflow where documentation generation now precedes [`CHANGELOG.md`](CHANGELOG.md:0) updates.

### Fixed
*

### Removed
*

## [0.6.1] - 2025-05-29

### Changed
* Configured ESLint for the project using the modern [`eslint.config.js`](eslint.config.js:1) format, compatible with ESLint v9+. This replaced the older [`.eslintrc.json`](.eslintrc.json:0) format and was updated to use CommonJS syntax to prevent Node.js warnings.

### Fixed
* Resolved a `no-prototype-builtins` linting error in [`index.js`](index.js:281) by updating `hasOwnProperty` to `Object.hasOwn()`.

## [0.6.0] – 2025-05-26

### Added
* ...

### Changed
* ...

### Fixed
* Fixed an incorrect `fileRegex` value in the `.roomodes` for the custom mode `memory`.

### Removed
* ...

## [0.5.0] – 2025-05-26

### Added
* ...

### Changed
* Enhanced `manageRoomodesFile` in [`index.js`](index.js) to intelligently merge the 'memory' custom mode into existing target `.roomodes` files, with robust error handling and appropriate console feedback. Falls back to direct copy if target doesn't exist.
* Updated `version` in [`package.json`](package.json) from "0.4.0" to "0.5.0".

### Fixed
* ...

### Removed
* ...

## [0.4.0] – 2025-05-26

### Added
* Comprehensive project documentation with the creation of:
  * `llmdocs/STACK.md`: Details the project's technology stack.
  * `llmdocs/FILES.md`: Outlines the project's file structure.
  * `llmdocs/FEATURES.md`: Describes key features like "Idiomatic Roo System Prompt Management" and "Custom Memory Mode."
  * `llmdocs/IMPORTANT_NOTES.md`: Includes notes such as "Cost Optimization with Memory Mode."

### Changed
* Updated and reformatted the 'Why this project' section in `README.md` for clarity and completeness, detailing idiomatic Roo integration and the custom 'memory' mode.
* Updated `version` in `package.json` from "0.3.0" to "0.4.0".

### Fixed
* ...

### Removed
* ...

[Unreleased]: repo/compare/v0.7.0...HEAD
[0.7.0]:      repo/releases/tag/v0.7.0
[0.6.1]:      repo/releases/tag/v0.6.1
[0.6.0]:      repo/releases/tag/v0.6.0
[0.5.0]:      repo/releases/tag/v0.5.0
[0.4.0]:      repo/releases/tag/v0.4.0
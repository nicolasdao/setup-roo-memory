# Changelog

All notable changes here.  
Adheres to SemVer.

## [Unreleased]

### Added
* ...

### Changed
* ...

### Fixed
* ...

### Removed
* ...

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

[Unreleased]: repo/compare/v0.5.0...HEAD
[0.5.0]: repo/releases/tag/v0.5.0
[0.4.0]: repo/releases/tag/v0.4.0
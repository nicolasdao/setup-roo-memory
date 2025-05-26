# CHANGELOG.md Maintenance (for LLMs)

## 1. Scope
- **Ignore**: any files under `./llmdocs/`.
- **Track**: source code, config, docs (outside `llmdocs/`), public assets.

## 2. File Structure

### 2.1 Header (top of file)
```markdown
# Changelog

All notable changes here.  
Adheres to SemVer.
````

### 2.2 Unreleased (always immediately after header)

```markdown
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
```

### 2.3 Release Sections (append in chronological order)

```markdown
## [X.Y.Z] - YYYY-MM-DD

<!-- Omit empty headings -->
### Added
* 

### Changed
* 

### Fixed
* 

### Removed
* 

### Notes  (optional)
* 
```

### 2.4 Link References (bottom of file)

```markdown
[Unreleased]: https://github.com/<org>/<repo>/compare/vX.Y.Z...HEAD
[X.Y.Z]:      https://github.com/<org>/<repo>/releases/tag/vX.Y.Z
```

## 3. Release Workflow

1. **Cut release**: choose new SemVer version.
2. **Move** non-empty lists from `[Unreleased]` into new `## [X.Y.Z] - YYYY-MM-DD`.
3. **Clear** moved entries under `[Unreleased]`.
4. **Update** link refs (replace old `vX.Y.Z`).
5. **Tag** commit `vX.Y.Z`.

## 4. SemVer Rules

* **MAJOR** (X.0.0): breaking changes
* **MINOR** (.Y.0): new features, non-breaking improvements
* **PATCH** (.0.Z): bug fixes, small tweaks

## 5. Style Guidelines

* Use hyphen `-` (not en-dash) between version and date.
* Dates in ISO format: `YYYY-MM-DD`.
* Do **not** log the version bump itself.
* One bullet per logical change; keep entries concise.

## 6. Release Checklist

* Current version?
* New features added?
* Bugs fixed?
* Breaking changes?
* Dependencies changed?
* Significant modules modified?
* Refactors or optimizations?
* Architectural/API changes?
* Performance improvements?
* CI/CD or test updates?
* Env var/secret changes?
* UX/accessibility enhancements?
* Documentation updates?
* Migration steps?
* Rollback safety?
* Known issues remaining?
# Features

## Table of Contents
* [Overview](#overview)
* [Custom Modes](#custom-modes)
* [Documentation Workflow](#documentation-workflow)

## Overview
This document details the key features of the project, including custom modes and the documentation generation workflow.

## Custom Modes
The project leverages custom modes to provide specialized functionalities.
*   **🧠 Memory Mode**:
    *   **Creation date**: Inferred
    *   **Description**: Specializes in creating and maintaining comprehensive documentation based on the project's codebase and structure. This mode ensures that project documentation remains accurate and up-to-date with code changes.
    *   **Dependencies**: Project codebase, file system access.
    *   **Files**: `llmdocs/STACK.md`, `llmdocs/FILES.md`, `llmdocs/FEATURES.md`, `llmdocs/LOOK_AND_FEEL.md`, `llmdocs/IMPORTANT_NOTES.md`, `llmdocs/HOW_TO_*.md`
*   **📝 Changelog Mode**:
    *   **Creation date**: Inferred
    *   **Description**: Focuses on maintaining an accurate and concise changelog based on recent changes. It ensures that all significant modifications are recorded, providing a clear history of project evolution.
    *   **Dependencies**: Project codebase, `CHANGELOG.md`.
    *   **Files**: `CHANGELOG.md`, `llmdocs/HOW_TO_CHANGELOG.md`

## Documentation Workflow
The documentation workflow has been updated to ensure that documentation is generated and updated before the `CHANGELOG.md` file. This ensures that the changelog accurately reflects the documented state of the project.
*   **Description**: Documentation is now generated and updated prior to any `CHANGELOG.md` updates. This ensures that the changelog accurately reflects the documented state of the project, providing a consistent and reliable record of changes.
*   **Dependencies**: Memory Mode, Changelog Mode.
*   **Files**: `llmdocs/*`, `CHANGELOG.md`
# setup-roo-memory

This is an npx utility that helps set up extra documentation files that act as basic memory for your coding project in VS Code when using Roo Code (https://roocode.com/) as your agentic coding tool. This project is inspired by the `Memory Bank Project by GreatScottyMac` (https://github.com/GreatScottyMac/roo-code-memory-bank). To learn more about why I created this project instead of using that one, please refer to the `Why this project` section.

To use it, simply run `npx setup-roo-memory` in your project's root.

# Table of contents

> * [What this command does](#what-this-command-does)
> * [What this will do to your agentic coder](#what-this-will-do-to-your-agentic-coder)
> * [Why this project](#why-this-project)
> * [How to customize the memory behavior?](#how-to-customize-the-memory-behavior)
> * [LICENSE](#license)

## What this command does

*   Creates additional custom rules for the standard Roo modes (Orchestrator, Architect, Code, and Ask). This is done via the hidden folder `.roo/` which simply defines additional system prompts for each of the standard Roo modes. These additional system prompts instruct each agent to either read the documentation in the `llmdocs/` folder or to maintain it when they have finished doing their work. To learn more about the ability to customize Roo's custom modes, please refer to the official Roo doc at https://docs.roocode.com/features/custom-modes#mode-specific-instructions-via-filesdirectories.
*   Creates a new `llmdocs/` folder to store the documentation that Roo will maintain on your behalf.
*   Creates a new `./CHANGELOG.md` file in the project's root if it does not exist yet. If it already exists, nothing happens. This file keeps track of the changes in each version of your project.

## What this will do to your agentic coder

The extra system prompts located in the `.roo` folder will instruct each standard Roo mode to read the documentation inside the `./llmdocs/` folder to learn about the context of your project and will also maintain this documentation when they are done with their changes. When the Orchestrator is done with all its changes (all sub-tasks completed) and you have explicitly confirmed all is good (the Orchestrator will ask you), then the Orchestrator will bump the version of your project using the SemVer convention (https://semver.org/) and then summarize all the changes to document them in the `./CHANGELOG.md` file. This is kind of cool as typical tools usually use git diff to populate the changelog while an LLM will be better at really detailing changes and be better at automatically determining how to bump the version (major vs minor vs patch).

## Why this project

This project is inspired by the `Memory Bank Project by GreatScottyMac` (https://github.com/GreatScottyMac/roo-code-memory-bank). That project was amazing at walking me through the way Roo works and how it can be configured. The reasons for creating this alternative project include:

*   The finding that its installation could be leaner.
*   The finding that its documentation could be improved (something that might be fixed today).
*   The personal preference for a different memory structure, as experimentation showed my own file structure worked better for my projects.
*   The point that `set-roo-memory` uses a more idiomatic Roo way to add system prompts to existing modes.
*   The point that `set-roo-memory` adds a custom `memory` mode for focused memory management and potential cost optimization.

This is a matter of taste and opinion, and if you find that there is a better way to instruct your LLM, please go ahead. You can easily do that by following the instructions in the `How to customize the memory behavior?` section.

## How to customize the memory behavior?

If you feel you have a better way to document changes, then it is very easy to change the instructions for each Roo mode. Simply open the `.roo` folder and under each custom mode folder (e.g., `rules-code` for the Code mode), either rewrite the system prompt in the `01-ROO-MEMORY.md` file, or if you simply want to add more details, add a new file (name it whatever you want, but just keep in mind that the way the system prompts are concatenated is by using the files in alphabetical order). As for the files under the `llmdocs/` folder, the [`DOC_MAINTENANCE_GUIDE.md`](files/llmdocs/DOC_MAINTENANCE_GUIDE.md:1) contains the instructions the LLM must follow to manage all that content. If you feel you want to structure the documentation differently, simply update that document.

As for the new `🧠 Memory` custom mode, it was created and configured via the `.roomodes` file. To learn more about this file, please refer to the original Roo Code documentation at https://docs.roocode.com/features/custom-modes.

## LICENSE

This project is licensed under the MIT License. See the [`LICENSE.md`](LICENSE.md:1) file for details.
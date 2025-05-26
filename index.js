#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); // chalk@4.1.2 for CommonJS

// --- Configuration ---
const IGNORED_FILES = ['.DS_Store'];

// --- Helper Functions ---

/**
 * Recursively copies files and directories, reporting changes.
 * @param {string} src - Source path.
 * @param {string} dest - Destination path.
 * @param {object} options - Options object.
 * @param {boolean} options.override - Whether to override existing files.
 * @param {string} options.baseSrcForReporting - Base source path for reporting relative paths (unused here but good for generic helpers).
 * @param {string} options.baseDestForReporting - Base destination path for reporting relative paths.
 * @param {object} options.report - Report object to mutate { added: string[], overridden: string[], existingSkipped: string[] }.
 * @returns {object} - The mutated report object.
 */
function copyRecursiveSync(src, dest, {
    override = true,
    baseDestForReporting = dest, // Paths in report will be relative to this
    report = { added: [], overridden: [], existingSkipped: [] }
} = {}) {
    if (!fs.existsSync(src) || IGNORED_FILES.includes(path.basename(src))) {
        return report;
    }

    const stats = fs.statSync(src);
    const isDirectory = stats.isDirectory();

    if (isDirectory) {
        const relativeDestDirPath = path.relative(baseDestForReporting, dest);
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
            // Add directory to report if it's not the base reporting directory itself
            if (relativeDestDirPath && !report.added.includes(relativeDestDirPath + '/')) {
                report.added.push(relativeDestDirPath + '/');
            }
        }
        fs.readdirSync(src).forEach((childItemName) => {
            if (IGNORED_FILES.includes(childItemName)) return;
            copyRecursiveSync(
                path.join(src, childItemName),
                path.join(dest, childItemName),
                { override, baseDestForReporting, report }
            );
        });
    } else { // Is a file
        const relativeDestFilePath = path.relative(baseDestForReporting, dest);
        if (fs.existsSync(dest)) {
            if (override) {
                fs.copyFileSync(src, dest);
                if (!report.overridden.includes(relativeDestFilePath)) {
                    report.overridden.push(relativeDestFilePath);
                }
                // If it was previously marked as added (e.g. parent dir created, then file), remove from added
                const addedIndex = report.added.indexOf(relativeDestFilePath);
                if (addedIndex > -1) report.added.splice(addedIndex, 1);

            } else {
                if (!report.existingSkipped.includes(relativeDestFilePath)) {
                    report.existingSkipped.push(relativeDestFilePath);
                }
            }
        } else {
            const destDir = path.dirname(dest);
            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir, { recursive: true });
                const relativeParentDirPath = path.relative(baseDestForReporting, destDir);
                if (relativeParentDirPath && !report.added.includes(relativeParentDirPath + '/')) {
                    report.added.push(relativeParentDirPath + '/');
                }
            }
            fs.copyFileSync(src, dest);
            if (!report.added.includes(relativeDestFilePath)) {
                report.added.push(relativeDestFilePath);
            }
        }
    }
    return report;
}

// --- Main Logic Functions ---

function manageRooFolder(sourceRooDir, targetRooDir) {
    console.log(chalk.cyan('\nProcessing .roo/ folder...'));
    if (!fs.existsSync(sourceRooDir)) {
        console.log(chalk.yellow(`Source .roo/ directory (${sourceRooDir}) not found. Skipping.`));
        return;
    }

    const report = { added: [], overridden: [], existingSkipped: [] };
    const isNewFolder = !fs.existsSync(targetRooDir);

    if (isNewFolder) {
        fs.mkdirSync(targetRooDir, { recursive: true }); // Ensure .roo itself is created
    }

    copyRecursiveSync(sourceRooDir, targetRooDir, {
        override: true,
        baseDestForReporting: targetRooDir, // Report paths relative to target .roo/
        report
    });

    // Sort for consistent output
    report.added.sort((a,b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
    report.overridden.sort((a,b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));


    if (isNewFolder) {
        console.log(chalk.green('A new .roo/ folder has been created.'));
        if (report.added.length > 0) {
            console.log(chalk.dim('Contents:'));
            report.added.forEach(item => console.log(chalk.dim(`  ${item}`)));
        } else {
            // This case should ideally not happen if sourceRooDir has content
            const actualContents = fs.readdirSync(targetRooDir);
            if (actualContents.filter(f => !IGNORED_FILES.includes(f)).length === 0) {
                 console.log(chalk.dim('  (empty or contains only ignored files)'));
            } else {
                 console.log(chalk.dim('  (populated, listing via report)'));
                 // Fallback or re-list if report.added is unexpectedly empty
            }
        }
    } else {
        if (report.added.length === 0 && report.overridden.length === 0) {
            console.log(chalk.green('.roo/ folder is already up to date.'));
        } else {
            console.log(chalk.yellow('.roo/ folder updated.'));
            if (report.added.length > 0) {
                console.log(chalk.dim('New items added:'));
                report.added.forEach(item => console.log(chalk.dim(`  ${item}`)));
            }
            if (report.overridden.length > 0) {
                console.log(chalk.dim('Items overridden:'));
                report.overridden.forEach(item => console.log(chalk.dim(`  ${item}`)));
            }
        }
    }
}

function manageLlmdocsFolder(sourceLlmdocsDir, targetLlmdocsDir) {
    console.log(chalk.cyan('\nProcessing llmdocs/ folder...'));
    if (!fs.existsSync(sourceLlmdocsDir)) {
        console.log(chalk.yellow(`Source llmdocs/ directory (${sourceLlmdocsDir}) not found. Skipping.`));
        return;
    }

    const report = { added: [], overridden: [], existingSkipped: [] };
    const isNewFolder = !fs.existsSync(targetLlmdocsDir);

    if (isNewFolder) {
        fs.mkdirSync(targetLlmdocsDir, { recursive: true }); // Ensure llmdocs itself is created
    }

    copyRecursiveSync(sourceLlmdocsDir, targetLlmdocsDir, {
        override: false, // Do not override existing files
        baseDestForReporting: targetLlmdocsDir, // Report paths relative to target llmdocs/
        report
    });
    
    report.added.sort((a,b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    if (isNewFolder) {
        console.log(chalk.green('A new llmdocs/ folder has been created.'));
        if (report.added.length > 0) {
            console.log(chalk.dim('Contents:'));
            report.added.forEach(item => console.log(chalk.dim(`  ${item}`)));
        } else {
            const actualContents = fs.readdirSync(targetLlmdocsDir);
            if (actualContents.filter(f => !IGNORED_FILES.includes(f)).length === 0) {
                 console.log(chalk.dim('  (empty or contains only ignored files)'));
            } else {
                 console.log(chalk.dim('  (populated, listing via report)'));
            }
        }
    } else {
        if (report.added.length === 0) {
            console.log(chalk.green('llmdocs/ folder checked, no missing files to add.'));
        } else {
            console.log(chalk.yellow('llmdocs/ folder updated.'));
            console.log(chalk.dim('New items added:'));
            report.added.forEach(item => console.log(chalk.dim(`  ${item}`)));
        }
    }
}

function manageChangelogFile(targetChangelogFile) {
    console.log(chalk.cyan('\nProcessing CHANGELOG.md...'));
    if (!fs.existsSync(targetChangelogFile)) {
        fs.writeFileSync(targetChangelogFile, '', 'utf8');
        console.log(chalk.green('A new CHANGELOG.md file has been created.'));
    } else {
        console.log(chalk.yellow('CHANGELOG.md already exists.'));
    }
}

function manageRoomodesFile(sourceFile, targetFile) {
    console.log(chalk.cyan('\nProcessing .roomodes file...'));
    if (!fs.existsSync(sourceFile)) {
        console.log(chalk.yellow(`Source .roomodes file (${sourceFile}) not found. Skipping.`));
        return;
    }
    fs.copyFileSync(sourceFile, targetFile);
    console.log(chalk.green('.roomodes file copied.'));
}

// --- Main Execution ---
function main() {
    try {
        console.log(chalk.bold.blue('Roo Memory Setup Initializing...'));

        // __dirname is the directory of the currently executing script (i.e., .../setup-roo-memory/index.js)
        // This is correct for finding `./files` relative to the script, even when run via npx.
        const sourceFilesDir = path.join(__dirname, 'files');
        const targetDir = process.cwd(); // Target project's root directory

        const sourceRooDir = path.join(sourceFilesDir, '.roo');
        const sourceLlmdocsDir = path.join(sourceFilesDir, 'llmdocs');
        const sourceRoomodesFile = path.join(sourceFilesDir, '.roomodes');

        const targetRooDir = path.join(targetDir, '.roo');
        const targetLlmdocsDir = path.join(targetDir, 'llmdocs');
        const targetChangelogFile = path.join(targetDir, 'CHANGELOG.md');
        const targetRoomodesFile = path.join(targetDir, '.roomodes');

        manageRooFolder(sourceRooDir, targetRooDir);
        manageLlmdocsFolder(sourceLlmdocsDir, targetLlmdocsDir);
        manageChangelogFile(targetChangelogFile);
        manageRoomodesFile(sourceRoomodesFile, targetRoomodesFile);

        console.log(chalk.bold.green('\nSetup complete!'));

    } catch (error) {
        console.error(chalk.red.bold('\nAn error occurred during setup:'));
        console.error(chalk.red(error.message));
        if (error.stack) {
            console.error(chalk.dim(error.stack));
        }
        process.exit(1);
    }
}

main();
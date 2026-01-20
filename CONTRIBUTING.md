# Contributing to Atomix CSS

Thank you for your interest in contributing to Atomix CSS! We appreciate your help in improving this CSS framework.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Style Guides](#style-guides)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please report any unacceptable behavior.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/atomix-css.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Make your changes
6. Test your changes
7. Commit and push
8. Submit a pull request

## Project Structure

Atomix CSS follows the ITCSS (Inverted Triangle CSS) architecture:

```
styles/
├── 01-settings/     # Configuration variables
├── 02-tools/        # Functions and mixins
├── 03-generic/      # Normalize, resets, etc.
├── 04-elements/     # Unclassed HTML elements
├── 05-objects/      # OOCSS objects
├── 06-components/   # Component styles
└── 99-utilities/    # Utility classes
```

## Development Workflow

### Setting Up the Development Environment

1. Ensure you have Node.js installed
2. Run `npm install` to install dependencies
3. Run `npm run watch` to compile SCSS and watch for changes

### Building the Project

- To build uncompressed CSS: `npm run build`
- To build minified CSS: `npm run build:min`
- To build both: `npm run build:all`

### Making Changes

1. Identify the appropriate ITCSS layer for your changes
2. Follow the existing naming conventions
3. Ensure your changes are responsive and accessible
4. Test your changes across browsers if possible

## Style Guides

### SCSS Guidelines

- Use kebab-case for file and class names
- Follow BEM methodology for class naming
- Use meaningful variable names
- Comment complex code sections
- Keep files focused and modular

### Naming Convention

- SCSS files: `_component-name.scss`
- Classes: `.c-component-name` (for components), `.u-util-name` (for utilities)
- Variables: `$variable-name`
- Mixins: `@mixin mixin-name`

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Ensure your code follows the project's style guidelines
3. Increase the version number in package.json following semver if appropriate
4. Assign a maintainer to review your PR
5. Wait for approval before merging

## Questions?

If you have any questions, feel free to open an issue to discuss what you want to work on.

Thank you for contributing!
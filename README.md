# Atomix CSS Framework

Atomix CSS is a modern, standalone CSS framework extracted from the Atomix Design System. It follows the ITCSS (Inverted Triangle CSS) architecture for scalable and maintainable CSS.

## Shohojdhara CSS Philosophy: SEM + BIO

We believe CSS should be Scalable, Extensible, and Maintainable (SEM) — the three pillars that make components solid, flexible, and future-proof.

To achieve this, Atomix follows the BIO strategy, combining the strengths of:

- **BEM** – Block Element Modifier naming for clarity
- **ITCSS** – Inverted Triangle CSS for scalable architecture
- **OOCSS** – Object-Oriented CSS for reusability

This combination provides a structured, future-ready CSS approach that avoids the pitfalls of utility-first shortcuts, while keeping styles clean, modular, and easy to maintain.

## Features

- **ITCSS Architecture**: Well-structured CSS architecture for scalability
- **Component-Based**: Comprehensive collection of pre-built components
- **Responsive**: Built-in responsive design with breakpoints
- **Accessible**: Accessibility-first approach with proper focus states
- **Dark Mode Ready**: Supports both light and dark themes
- **Customizable**: Highly configurable through Sass variables
- **Modern CSS**: Utilizes modern CSS features like CSS custom properties

## Installation

You can install Atomix CSS via npm:

```bash
npm install @shohojdhara/atomix-css
```

Or include it directly in your HTML:

```html
<link rel="stylesheet" href="https://unpkg.com/@shohojdhara/atomix-css/atomix-styles.min.css">
```

## Usage

To use the framework in your project, import the main stylesheet:

```scss
@import '~@shohojdhara/atomix-css/atomix-styles.css';
```

Or if you're using the source SCSS files:

```scss
@import '~@shohojdhara/atomix-css/styles/index';
```

## Building from Source

To build the CSS from source:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Compile SCSS to CSS:
   ```bash
   npm run build
   ```

3. Watch for changes during development:
   ```bash
   npm run watch
   ```

## Architecture

Atomix CSS follows the ITCSS methodology:

- **Settings (01)**: Configuration variables and settings
- **Tools (02)**: Functions and mixins
- **Generic (03)**: Reset and base styles
- **Elements (04)**: Unclassed HTML elements
- **Objects (05)**: Abstract patterns and layouts
- **Components (06)**: Specific UI components
- **Utilities (99)**: Helper classes with high specificity

## Customization

The framework is highly customizable. You can override any settings by defining your own variables before importing the framework:

```scss
// Define your custom settings
$primary: #your-color;
$font-family-base: 'Your Font', sans-serif;

// Then import the framework
@import '~@shohojdhara/atomix-css/styles/index';
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Limon Khan - [GitHub](https://github.com/Shohojdhara) | [LinkedIn](https://linkedin.com/in/limonkhan)

---

Built with ❤️ by Limon Khan
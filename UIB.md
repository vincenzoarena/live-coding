## [11.10](./jan/11-01) HTML intro

### intro

- History of HTML
- HTML document and the browser
- Defining the user

### Code Editor

- Setting up VSCode
- File directories
- Extensions (live server, prettier)
- Keyboard shortcuts

### Examining the boilerplate

- `<!DOCTYPE html>`
- meta tags
- Character set
- `<html>` is the root element
- `<head>`, `<body>`, `<title>`

### Content and Running

- Anatomy of an element (opening tag, content, closing tag)
- `<h1>` - `<h6>`, `<p>`
- Running our file locally and globally
- Commenting with <!-- [comment] -->
- The importance of clean, indented code

### HTML Text Formatting

---

## [12.10](./jan/12-01) HTML/CSS intro

### HTML Tables

- Tables header `<th>`, table row `<tr>` , table data `<td>`

### live server

- Extension installation
- Definition and Usage

### Lists: Indentation and Family

- `<ol>`, `<ul>`, `<li>`
- Changing presentation with `list-style-type`
- Descendent combinator
- Understanding nesting, parent - child relationship

### Hyperlinks

- Anchoring with `<a>`
- Linking pages
- ID linking
- Web links

### HTML `<nav>` Tag

- Definition and Usage

### HTML Iframes

- Iframe Syntax

### Introducing Style

- Writing CSS inline, internally and externally
- Anatomy of a declaration (selector, declaration, property, value)
- The `<link>` tag
- Commenting with `\*[comment]*\`

### Debugging with dev tools

- Debugging our CSS
- Modifying values

### Color in CSS

- Using keywords, RGB, RGBA, hex

---

## [13.1](./jan/13-01) HTM/CSS intro part two

### Understanding the cascade, specificity and inheritance

- Conflicting rules
- Specificity - selecting by element, class, ID

### Classes and IDs

- Targeting a unique element with the `id` attribute
- Targeting a group of elements with the `class` attribute

#### practice

---

## [17.10](./jan/17-01) CSS intro part 3

### Css Grouping Selectors

- Combining multiple selectors with `,`

### Hyperlinks

- Sending emails with `mailto:`

### Font Family

- Getting more fonts: Google fonts and css `@import` directive
- Providing fallbacks: font stack values for `font-family`

### Font Sizing

- Setting text size with `font-size`
- Relative to root: `rem` sizing and the `:root` selector

### Color in CSS

- Using keywords, RGB, RGBA, hex
- Transparency and opacity

### Backgrounds Images

- `background-image` is for decoration not content
- `background-size`, `background-repeat`, `no-repeat`
- Setting multiple attributes with `background` shortcut

### Modeling Boxes

- Setting box width with `box-sizing: border-box;`
- Spacing out our boxes - `margin` is for outside, `padding` for inside
- Reset me softly - `* {margin: 0; padding:0; box-sizing: border-box;}`
- Margins, paddings, width and height on inline elements
- Changing boxes with css `display` and `inline`, `block` and `inline-block`

### CSS Borders

- border-width ,border-style,border-color
- shorthand properties
- border-radius

### Text Formatting

- color, letter-spacing , word-spacing
- line-height , text-align, text-indent
- text-decoration , text-transform

### Css assignment

---

## [18.10](./jan/18-01) CSS intro

### Font Sizing

- Relative to parent: `em` sizing and nesting
- Setting the base size:
  `:root { font-size: 62.5% }` and decimal `rem`s (1.2rem = 12px)

### Font Family

- Pre Installed System fonts: css `font-family: <font-name>`

### Stylish Text

- Thicker text with css `font-weight`, choosing font weights on google fonts
- Italics with css `font-style`
- Underline and line-through with css `text-decoration`
- Changing case with css `text-transform`

### Pseudo Classes

- Introducing state pseudo class
- Coloring links with `:hover`, `:active` and `:visited`
- Using MDN to locate additional selectors, combinators, elements and rules

### CSS units

- `px` and `%`
- `em` vs `rem`
- Use cases for the different units

### Using Images

- Introducing the `<img>` tag
- Framing our image with `border`
- Controlling corners with `border-radius`
- Using float (strictly with image and text)

### Positioning

- Understanding positioning - `static`, `relative`, `absolute`, `fixed`, `sticky`
- Position offsets - `top`, `bottom`, `right`, `left`
- Layering boxes with `z-index`

### Fancy Shapes

- Creating shapes using the the `border` property -
- Transforming shapes: `transform`, `rotate()`, `scale()`

---

## [19.10](https://github.com/FbW-WD21-E11/live-coding/tree/main/jan/19-01) CSS selectors

### HTML/Css assignment

### Css selectors

#### Basic selectors

- Universal selector `*`
- Type selector (Element selector)
- ID selector
- Class selector
- attribute selectors

#### Grouping selectors

- selector list "Combining multiple selectors with `,`"

#### Combinators

- Descendant combinator
- Child combinator
- General sibling combinator
- Adjacent sibling combinator
- Column combinator

#### Pseudo

- Pseudo classes `:hover`, `:visited`, `:focus` ,`:active`, `:checked`
- pseudo child selectors: `:nth-child()

### Forms and Dynamic Data

- Searching - `<form>`, `<input>`

---

## [20.01](./jan/20-01) Pseudo classes and elements

### Review

### CSS Variables:

Defining in `:root { --[name]: [value] }`

### pseudo elements VS pseudo classes

#### pseudo elements

- `::after` `::before `
- `::first-letter`
- `::placeholder` for styling `placeholder` text
- Using MDN to locate additional selectors, combinators, elements and rules

### CSS units

- `vh` and `vw`
- Use cases for the different units

#### Presentation pseudo classes and elements

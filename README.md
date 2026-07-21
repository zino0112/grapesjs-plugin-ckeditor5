# GrapesJS Plugin CKEditor 5

A GrapesJS plugin that replaces the default Rich Text Editor with **CKEditor 5** running inside a modal dialog.

The plugin allows you to integrate your own CKEditor 5 custom build and edit GrapesJS components using the full CKEditor experience.

## Features

* Replace the default GrapesJS Rich Text Editor with CKEditor 5
* Edit content in a modal dialog
* Supports any CKEditor 5 custom build
* Pass any CKEditor configuration directly to the editor
* Supports tables
* Supports images
* Supports image resize
* Supports image alignment
* Supports code blocks
* Supports highlights
* Supports custom CKEditor plugins
* Synchronizes edited content back to GrapesJS components

---

# Requirements

This plugin requires:

* GrapesJS
* A CKEditor 5 custom build

The CKEditor build **must expose** the global `ClassicEditor` object.

Example:

```html
<script src="ckeditor5/build/ckeditor.js"></script>
```

---

# Installation

## Browser

```html
<script src="https://unpkg.com/grapesjs"></script>
<script src="ckeditor5/build/ckeditor.js"></script>
<script src="dist/grapesjs-plugin-ckeditor5.min.js"></script>
```

---

# Usage

```javascript
const editor = grapesjs.init({
    container: "#gjs",

    plugins: [
        "gjs-plugin-ckeditor5"
    ],

    pluginsOpts: {
        "gjs-plugin-ckeditor5": {
            options: {
                toolbar: {
                    items: [
                        "heading",
                        "|",
                        "bold",
                        "italic",
                        "underline",
                        "link",
                        "bulletedList",
                        "numberedList",
                        "insertTable",
                        "insertImage",
                        "undo",
                        "redo"
                    ]
                }
            }
        }
    }
});
```

---

# Plugin Options

The plugin accepts the following configuration options.

| Option     | Type     | Default  | Description                                                                                      |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------------------ |
| `position` | `string` | `"left"` | Toolbar position. Reserved for future use. Supported values: `"left"`, `"center"` and `"right"`. |
| `options`  | `object` | `{}`     | CKEditor configuration object passed directly to `ClassicEditor.create()`.                       |

## Example

```javascript
pluginsOpts: {
    "gjs-plugin-ckeditor5": {
        position: "left",
        options: {
            language: "en",
            toolbar: {
                items: [
                    "heading",
                    "bold",
                    "italic"
                ]
            }
        }
    }
}
```

---

# CKEditor Options

The `options` property is passed directly to:

```javascript
ClassicEditor.create(element, options);
```

This means **any valid CKEditor configuration** supported by your custom build can be used.

## language

```javascript
options: {
    language: "en"
}
```

---

## toolbar

Configure the editor toolbar.

```javascript
options: {
    toolbar: {
        items: [
            "heading",
            "|",
            "fontColor",
            "fontSize",
            "fontFamily",
            "fontBackgroundColor",
            "alignment",
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "link",
            "bulletedList",
            "numberedList",
            "horizontalLine",
            "|",
            "outdent",
            "indent",
            "|",
            "blockQuote",
            "insertTable",
            "|",
            "undo",
            "redo",
            "highlight",
            "codeBlock",
            "insertImage"
        ],
        shouldNotGroupWhenFull: true
    }
}
```

---

## table

Configure table editing.

```javascript
options: {
    table: {
        contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableCellProperties",
            "tableProperties"
        ]
    }
}
```

---

## image

Configure image styles, toolbar and resize options.

```javascript
options: {
    image: {
        styles: [
            {
                name: "alignLeft",
                title: "Align left",
                icon: "left"
            },
            {
                name: "alignCenter",
                title: "Align center",
                icon: "center"
            },
            {
                name: "alignRight",
                title: "Align right",
                icon: "right"
            }
        ],

        toolbar: [
            "imageStyle:alignLeft",
            "imageStyle:alignCenter",
            "imageStyle:alignRight",
            "|",
            "toggleImageCaption",
            "imageTextAlternative",
            "|",
            "imageResize"
        ],

        resizeUnit: "%",

        resizeOptions: [
            {
                name: "resizeImage:original",
                value: null,
                label: "Original"
            },
            {
                name: "resizeImage:25",
                value: "25",
                label: "25%"
            },
            {
                name: "resizeImage:50",
                value: "50",
                label: "50%"
            },
            {
                name: "resizeImage:75",
                value: "75",
                label: "75%"
            }
        ]
    }
}
```

---

## licenseKey

Provide your CKEditor license key when using Premium Features.

```javascript
options: {
    licenseKey: "<YOUR_LICENSE_KEY>"
}
```

Leave empty when using a GPL build.

---

# Supported Toolbar Items

Depending on your CKEditor build, you can use toolbar items such as:

* heading
* fontColor
* fontBackgroundColor
* fontFamily
* fontSize
* alignment
* bold
* italic
* underline
* strikethrough
* link
* bulletedList
* numberedList
* outdent
* indent
* blockQuote
* insertTable
* horizontalLine
* insertImage
* imageResize
* imageStyle
* toggleImageCaption
* imageTextAlternative
* highlight
* codeBlock
* undo
* redo

Custom toolbar items provided by your own CKEditor plugins are also supported.

---

# How It Works

When editing a text component:

1. GrapesJS opens a modal dialog.
2. CKEditor 5 is initialized inside the modal.
3. The selected component HTML is loaded into the editor.
4. Clicking **Save** updates the GrapesJS component.
5. The modal is closed automatically.

Before saving, the plugin also cleans up several CKEditor-specific elements, including:

* CKEditor table wrappers
* Horizontal line widgets
* Temporary fake selection elements

This helps keep the generated HTML clean and compatible with GrapesJS.

---

# Browser Support

Compatible with modern browsers supported by both GrapesJS and CKEditor 5.

---

# License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

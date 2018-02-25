# ghost-helper-foreach-middle

Recognize and handle middle element of an array in [Ghost](https://github.com/tryghost/ghost/) themes.

```handlebars
{{#foreach-middle array}}
    {{#if isMiddle}}
        <span class="middle">Middle element</span>
    {{else}}
        <span>Other element</span>
    {{/if}}
{{/foreach-middle}}
```

You can also use `isFirst`, `isLast`, `total`, `index` vars.

## Installation

1. Clone the code into `your_ghost_installation/content/apps/ghost-helper-foreach-middle` directory
2. Install the app - [installing guide](https://github.com/TryGhost/Ghost/wiki/Apps-Getting-Started-for-Ghost-Devs#installing)
3. Restart Ghost
4. Enjoy.

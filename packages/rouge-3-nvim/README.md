# rouge-3-nvim

Neovim colorscheme generated from the Rouge 3 palette (`@rouge/palette`). The
color choices mirror `packages/rouge-3/rouge-3.ts` so the VS Code theme and
this one stay in sync.

## Install

With [lazy.nvim](https://github.com/folke/lazy.nvim), pointing at this
subdirectory of a local clone:

```lua
{
  dir = "~/github.com/josefaidt/rouge-theme/packages/rouge-3-nvim",
  name = "rouge3",
  priority = 1000,
  config = function()
    vim.cmd.colorscheme("rouge3")
  end,
}
```

Or just copy `colors/rouge3.lua` into your own `colors/` directory.

## Regenerating

```
bun run build
```

Edits go in `scripts/generate.ts` (highlight groups) or
`packages/palette/palette.ts` (the underlying colors) - `colors/rouge3.lua`
is generated output, not hand-edited.

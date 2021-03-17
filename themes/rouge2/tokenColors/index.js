const theme = require('../theme')
const { opac } = theme
module.exports = [
  {
    name: 'Comment',
    scope: ['comment', 'punctuation.definition.comment', 'unused.comment', 'wildcard.comment'],
    settings: {
      fontStyle: 'italic',
      // foreground: '#64727d',
      foreground: theme.bg_light,
    },
  },
  {
    name: 'Constant',
    scope: 'constant',
    settings: {
      foreground: theme.peach_light,
    },
  },
  {
    name: 'Entity & Function',
    scope: ['entity', 'entity.name.function'],
    settings: {
      foreground: theme.rouge_light,
    },
  },
  {
    name: 'Entity Name',
    scope: ['entity.name'],
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: 'Entity Name Type',
    scope: ['entity.name.type'],
    settings: {
      foreground: theme.rouge_light,
    },
  },
  {
    name: 'Invalid',
    scope: 'invalid',
    settings: {
      // foreground: '#bbb',
      // foreground: '#e41',
    },
  },
  {
    name: 'Keyword',
    scope: 'keyword',
    settings: {
      foreground: theme.purple_light,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Operators',
    scope: 'keyword.operator',
    settings: {
      foreground: theme.purple_light,
      // foreground: theme.green_light,
      fontStyle: 'regular',
    },
  },
  {
    name: '`New` Operator',
    scope: 'keyword.operator.new',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: '`This` Variable',
    scope: 'variable.language.this',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'Object Keys',
    scope: ['meta.object-literal.key'],
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  {
    name: 'Meta',
    scope: 'meta.function.expression',
    settings: {
      foreground: theme.purple_light,
    },
  },
  {
    name: 'Variable',
    scope: 'variable',
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: 'Support',
    scope: 'support',
    settings: {
      foreground: opac(theme.grapple, 90),
    },
  },
  {
    name: 'Support Functions',
    scope: 'support.function',
    settings: {
      foreground: theme.rouge_light,
    },
  },
  {
    name: 'Support Variables *.length',
    scope: 'support.variable',
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: 'Support Objects *.length',
    scope: 'support.variable',
    settings: {
      foreground: opac(theme.grapple, 90),
    },
  },
  {
    name: 'Punctuation',
    scope: 'punctuation',
    settings: {
      foreground: theme.purple_light,
    },
  },
  {
    name: 'Punctuation - Definitions (curly brackets)',
    scope: 'punctuation.definition',
    settings: {
      foreground: theme.purple_light,
    },
  },
  {
    name: 'Meta Punctuation',
    scope: 'meta.brace',
    settings: {
      foreground: theme.purple_light,
    },
  },
  {
    name: 'Punctuation - Accessors',
    scope: 'punctuation.accessor',
    settings: {
      foreground: theme.purple_light,
    },
  },
  {
    name: 'Punctuation - Terminators',
    scope: 'punctuation.terminator',
    settings: {
      foreground: theme.purple_light,
    },
  },
  {
    name: 'Punctuation - Separator',
    scope: 'punctuation.separator',
    settings: {
      foreground: theme.purple_light,
    },
  },
  {
    name: '[HTML] Entity Attributes',
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: opac(theme.grapple, 90),
      fontStyle: 'italic',
    },
  },
  {
    name: '[HTML] Entity',
    scope: ['entity.name.tag', 'entity.name.tag.other.html'],
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: '[HTML/SVG] - Metadata',
    scope: ['text.html meta.element.metadata.svg'],
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  {
    name: '[JSON] Property Keys',
    scope: 'support.type.property-name.json',
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  {
    name: '[SHELL] Source',
    scope: 'source.shell',
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  {
    name: 'Storage',
    scope: 'storage',
    settings: {
      foreground: theme.purple_light,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Storage Type Function',
    scope: 'storage.type.function.arrow',
    settings: {
      foreground: theme.purple_light,
      fontStyle: 'regular',
    },
  },
  {
    name: 'String',
    scope: ['string', 'punctuation.definition.string'],
    settings: {
      foreground: theme.green,
    },
  },
  {
    name: 'Params',
    scope: ['variable.parameter', 'meta.parameter'],
    settings: {
      foreground: theme.berry,
      // foreground: theme.rouge,
    },
  },
  {
    name: '[CSS] Property Names',
    scope: ['support.type.property-name.css', 'support.type.property-name.scss'],
    settings: {
      foreground: theme.bg_lighter,
      // foreground: theme.rouge,
    },
  },
  {
    name: '[CSS] Property Values',
    scope: [
      'support.constant.property-value.css',
      'meta.property-value.css',
      'source.css support.constant',
      'source.css keyword.other.unit',
    ],
    settings: {
      foreground: theme.green,
      fontStyle: 'none',
      // foreground: theme.rouge,
    },
  },
  {
    name: '[CSS] Property Values Constant Punctuation',
    scope: ['punctuation.definition.constant.css'],
    settings: {
      foreground: theme.green,
      fontStyle: 'none',
      // foreground: theme.rouge,
    },
  },
  {
    name: '[CSS] Entity',
    scope: 'entity.name.tag.css',
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: '[CSS] Entity, Attribute',
    scope: 'entity.other.attribute-name.class.css',
    settings: {
      foreground: opac(theme.grapple, 90),
      fontStyle: 'none',
    },
  },
  {
    name: '[CSS] Support',
    scope: 'source.css support',
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  {
    name: '[YAML] Entity',
    scope: 'source.yaml entity.name.tag',
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: '[HTML] - Brackets for tags: < and >',
    scope: [
      'punctuation.definition.tag.html',
      'punctuation.definition.tag.begin.html',
      'punctuation.definition.tag.end.html',
      'meta.scope.between-tag-pair.html',
    ],
    settings: {
      foreground: theme.bg_light,
    },
  },
  {
    name: '[XML] - Brackets for tags: < and >',
    scope: [
      'punctuation.definition.tag.xml',
      'punctuation.definition.tag.begin.xml',
      'punctuation.definition.tag.end.xml',
      'meta.scope.between-tag-pair.xml',
    ],
    settings: {
      foreground: theme.bg_light,
    },
  },
  {
    name: '[XML] - Attributes',
    scope: ['entity.other.attribute-name.localname.xml', 'text.xml entity.other'],
    settings: {
      fontStyle: 'italic',
      foreground: opac(theme.grapple, 90),
    },
  },
  {
    name: '[XML] - Entity',
    scope: ['text.xml entity.name'],
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: '[JS/JSX] - Properties',
    scope: [
      'meta.object-literal.key',
    ],
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  {
    name: '[JS/JSX] - React Tag Names',
    scope: ['source.js entity.name.tag.js', 'source.jsx entity.name.tag.js', 'entity.name.tag.js'],
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: '[JS/JSX] - Custom React Tag Names',
    scope: [
      'source.js support.class.component',
      'source.jsx support.class.component',
      'support.class.component.js',
    ],
    settings: {
      // foreground: theme.rouge,
      foreground: theme.rouge_light,
    },
  },
  {
    name: '[JS/JSX] - React Brackets < or >',
    scope: [
      'source.js punctuation.definition.tag.begin',
      'source.js punctuation.definition.tag.end',
      'source.jsx punctuation.definition.tag.begin',
      'source.jsx punctuation.definition.tag.end',
      'punctuation.definition.tag.begin.js',
      'punctuation.definition.tag.end.js',
    ],
    settings: {
      foreground: theme.bg_light,
    },
  },
  {
    name: '[JS/JSX] - React Tag Attributes',
    scope: [
      'source.js entity.other.attribute-name',
      'source.jsx entity.other.attribute-name',
      'entity.other.attribute-name.js meta.tag.attributes.js',
      'entity.other.attribute-name.js',
    ],
    settings: {
      foreground: opac(theme.grapple, 90),
      fontStyle: 'italic',
    },
  },
  {
    name: '[JS/JSX] - React Tag Property Keys',
    scope: [
      'source.js meta.jsx.children meta.object-literal.key',
      'source.jsx meta.jsx.children meta.object-literal.key',
    ],
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  {
    name: '[JS/JSX] - React Tag Property Values',
    scope: [
      'source.js meta.tag variable.other.readwrite',
      'source.jsx meta.tag variable.other.readwrite',
    ],
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: '[JS/JSX] - React Style Tag Text',
    scope: ['source.js meta.jsx.children', 'source.jsx meta.jsx.children'],
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  {
    name: '[Svelte] Entity',
    scope: ['source.svelte entity.name.tag'],
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: '[Svelte] - Component Tag Names',
    scope: [
      'support.class.component.svelte',
    ],
    settings: {
      // foreground: theme.rouge,
      foreground: theme.rouge_light,
    },
  },
  {
    name: '[MARKDOWN] - Heading Name Section',
    scope: [
      'entity.name.section.markdown',
      'markup.heading.setext.1.markdown',
      'markup.heading.setext.2.markdown',
    ],
    settings: {
      foreground: theme.rouge_dark,
      fontStyle: 'bold',
    },
  },
  {
    name: '[MARKDOWN] - Paragraph',
    scope: ['meta.paragraph.markdown'],
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  {
    name: '[MARKDOWN] - Quote Paragraph',
    scope: 'markup.quote.markdown meta.paragraph.markdown',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: '[MARKDOWN] - Inline Code',
    scope: 'markup.inline.raw.string.markdown',
    settings: {
      foreground: theme.green,
    },
  },
  {
    name: '[MARKDOWN] - Emphasis Bold',
    scope: ['markup.bold.markdown', 'markup.bold.markdown punctuation.definition.bold.markdown'],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    name: '[MARKDOWN] - Emphasis Italic',
    scope: 'markup.italic.markdown',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: '[MARKDOWN] - Link/Image Title',
    scope: [
      'string.other.link.title.markdown',
      'string.other.link.description.markdown',
      'string.other.link.description.title.markdown',
    ],
    settings: {
      foreground: theme.rouge_light,
    },
  },
  {
    name: '[MARKDOWN] - Link Address',
    scope: ['markup.underline.link.markdown', 'markup.underline.link.image.markdown'],
    settings: {
      foreground: theme.accent_light,
    },
  },
  {
    name: '[MARKDOWN] - Meta Chars in Paragraphs',
    scope: ['meta.paragraph.markdown meta.other'],
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  {
    scope: ['markup.error'],
    settings: {
      foreground: opac(theme.berry_dark, 85),
    },
  },
  {
    scope: ['markup.inserted'],
    settings: {
      foreground: theme.green,
    },
  },
  {
    scope: ['markup.deleted'],
    settings: {
      foreground: opac(theme.berry_dark, 85),
    },
  },
  {
    scope: ['markup.changed'],
    settings: {
      foreground: opac(theme.grapple, 90),
    },
  },
]

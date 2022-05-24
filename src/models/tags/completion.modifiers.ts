import CompletionItem from '../../interfaces/completion.interface';

const modifierCompletions: CompletionItem = {
  prefix: '@null',
  items: [
    'attr_safe',
    'censor',
    'currency',
    'decrypt',
    'encrypt',
    'form_prep',
    'json',
    'length',
    'limit',
    'number_format',
    'ordinal',
    'raw_content',
    'replace',
    'rot13',
    'spellout',
    'trim',
    'url',
    'url_decode',
    'url_encode',
    'url_slug'
  ]
};

export default modifierCompletions;
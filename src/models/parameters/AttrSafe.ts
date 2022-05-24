import CompletionItem from '../../interfaces/completion.interface';

const ATTR_SAFE: CompletionItem = {
  prefix: 'attr_safe',
  items: [
    'double_encode',
    'end_char',
    'limit',
    'unicode_punctuation'
  ]
};

export default ATTR_SAFE;
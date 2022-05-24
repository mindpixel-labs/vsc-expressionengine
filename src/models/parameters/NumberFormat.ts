import CompletionItem from '../../interfaces/completion.interface';

const NUMBER_FORMAT: CompletionItem = {
  prefix: 'number_format',
  items: [
    'decimals',
    'decimal_point',
    'thousands_separator'
  ]
};

export default NUMBER_FORMAT;
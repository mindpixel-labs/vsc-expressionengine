import CompletionItem from '../../interfaces/completion.interface';

const DECRYPT: CompletionItem = {
  prefix: 'decrypt',
  items: [
    'encode',
    'key'
  ]
};

export default DECRYPT;
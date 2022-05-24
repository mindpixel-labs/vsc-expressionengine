import CompletionItem from '../../interfaces/completion.interface';

const REPLACE: CompletionItem = {
  prefix: 'replace',
  items: [
    'case_sensitive',
    'find',
    'regex',
    'replace'
  ]
};

export default REPLACE;
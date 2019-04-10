import CompletionItem from '../interfaces/completion.interface';

const ParameterNextEntry: CompletionItem = {
  prefix: 'exp:channel:next_entry',
  items: [
    'category',
    'category_group',
    'channel',
    'entry_id',
    'show_expired',
    'show_future_entries',
    'status',
    'url_title'
  ]
};

export default ParameterNextEntry;
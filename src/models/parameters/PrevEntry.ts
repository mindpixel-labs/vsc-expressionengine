import CompletionItem from '../../interfaces/completion.interface';

const PrevEntry: CompletionItem = {
  prefix: 'exp:channel:prev_entry',
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

export default PrevEntry;
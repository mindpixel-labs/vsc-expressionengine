import CompletionItem from '../../interfaces/completion.interface';

const MonthLinks: CompletionItem = {
  prefix: 'exp:channel:month_links',
  items: [
    'channel',
    'limit',
    'sort',
    'show_expired',
    'show_future_entries',
    'status'
  ]
};

export default MonthLinks;
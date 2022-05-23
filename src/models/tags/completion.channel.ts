import CompletionItem from '../../interfaces/completion.interface';

const channelCompletions: CompletionItem = {
  prefix: 'exp:channel:',
  items: [
      'entries',
      'info',
      'next_entry',
      'prev_entry',
      'categories',
      'category_archive',
      'category_heading',
      'month_links',
      'calendar',
      'form'
  ]
};

export default channelCompletions;
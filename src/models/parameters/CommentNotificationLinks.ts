import CompletionItem from '../../interfaces/completion.interface';

const COMMENT_NOTIFICATION_LINKS: CompletionItem = {
  prefix: 'exp:comment:notification_links',
  items: [
    'entry_id',
    'exclude_guests'
  ]
};

export default COMMENT_NOTIFICATION_LINKS;
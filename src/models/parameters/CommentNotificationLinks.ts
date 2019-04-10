import CompletionItem from '../../interfaces/completion.interface';

const CommentNotificationLinks: CompletionItem = {
  prefix: 'exp:comment:notification_links',
  items: [
    'entry_id',
    'exclude_guests'
  ]
};

export default CommentNotificationLinks;
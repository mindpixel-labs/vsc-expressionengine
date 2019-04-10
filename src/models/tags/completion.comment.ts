import CompletionItem from '../../interfaces/completion.interface';

const CommentCompletions: CompletionItem = {
  prefix: 'exp:comment:',
  items: [
    'entries',
    'form',
    'notification_links'
  ]
};

export default CommentCompletions;
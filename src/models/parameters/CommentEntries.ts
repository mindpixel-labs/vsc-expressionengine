import CompletionItem from '../../interfaces/completion.interface';

const CommentEntries: CompletionItem = {
  prefix: 'exp:comment:entries',
  items: [
    'author_id',
    'channel',
    'comment_id',
    'dynamic',
    'entry_id',
    'entry_status',
    'limit',
    'orderby',
    'paginate',
    'paginate_base',
    'show_expired',
    'sort',
    'status',
    'url_title'
  ]
};

export default CommentEntries;
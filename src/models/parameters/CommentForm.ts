import CompletionItem from '../../interfaces/completion.interface';

const CommentForm: CompletionItem = {
  prefix: 'exp:comment:form',
  items: [
    'entry_id',
    'preview',
    'url_title',
    'channel',
    'form_class',
    'form_id',
    'return'
  ]
};

export default CommentForm;
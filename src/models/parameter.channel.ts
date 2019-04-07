import CompletionItem from '../interfaces/completion.interface';

const ParameterChannel: CompletionItem = {
  prefix: 'exp:channel:entries',
  items: [
    'channel',
    'entry_id',
    'author_id',
    'backspace'
  ]
};

export default ParameterChannel;
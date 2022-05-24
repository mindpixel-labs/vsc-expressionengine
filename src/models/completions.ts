import expCompletions from './tags/completion.exp';
import channelCompletions from './tags/completion.channel';
import commentCompletions from './tags/completion.comment';
import layoutCompletions from './tags/completion.layout';

const COMPLETIONS:Array<any> = [
  expCompletions,
  channelCompletions,
  commentCompletions,
  layoutCompletions
];

export default COMPLETIONS;
import CompletionItem from '../../interfaces/completion.interface';

const Calendar: CompletionItem = {
  prefix: 'exp:channel:calendar',
  items: [
    'leading_zeroes',
    'month',
    'year',
    'show_future_entries',
    'start_day',
    'switch'
  ]
};

export default Calendar;
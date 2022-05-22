import { helper } from '@ember/component/helper';

export default helper(function formatDate(args) {
  return new Date(args).toLocaleString(navigator.language, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

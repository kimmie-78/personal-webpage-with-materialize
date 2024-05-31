import data from './data.json';
import handlebars from 'vite-plugin-handlebars';

export default {
  base : '/responsive_cv/',   // <-- add this
  plugins: [handlebars({
      context : data   // add this
  })],
};
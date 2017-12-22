import { h, render } from 'preact';
import { Gallery } from './components/gallery.jsx';

const data = require('json-loader!yaml-loader!../gallery.yaml');

document.title = data.title || 'Image Gallery';

render(<Gallery {...data} />, document.body);

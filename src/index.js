import { h, render } from 'preact';
import { Gallery } from './components/gallery.jsx';
import configuration from './configuration';

document.title = configuration.title || 'Image Gallery';
render(<Gallery {...configuration} />, document.body);

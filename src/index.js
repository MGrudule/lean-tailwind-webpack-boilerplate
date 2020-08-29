import './style.css';

import './render_pass';
import './anime_settings';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
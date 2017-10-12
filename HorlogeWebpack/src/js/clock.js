'use strict';

import format from 'date-fns/format';
import { getRandomIntInclusive } from './random';

class Clock {
    constructor(parentElt) {
        this.parentElt = parentElt;
    }
    update() {
        var r = getRandomIntInclusive(0, 255);
        var g = getRandomIntInclusive(0, 255);
        var b = getRandomIntInclusive(0, 255);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        document.body.style.color = 'rgb(' + (255 - r) + ', ' + (255 - g) + ', ' + (255 - b) + ')';
        this.parentElt.innerHTML = format(new Date(), 'HH:mm:ss');
    }
    start() {
        this.update();
        setInterval(this.update.bind(this), 1000);
    }
}



export default Clock;

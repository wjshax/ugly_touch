import { Type } from '@angular/core';

export abstract class Media {
    private el: HTMLElement;
    public status: string;
    events: string[];
    typeName: string;
    constructor(elType: Type<HTMLElement>, typeName: string) {
        this.el = new elType();
        this.typeName = typeName;
        this.addEventListeners();
    }
    cloneEl() {
        return this.el.cloneNode();
    }
    getEl() {
        return this.el;
    }
    setUrl(url) {
        let el: any;
        el = this.el;
        el.url = url;
        this.status = 'url added';
    }
    abstract stateChanges(e): void;

    addEventListeners() {
        const handle = this.stateChanges.bind(this);
        for (const event of this.events) {
            this.el.addEventListener(event, handle);
        }
    }
}

export class Audio extends Media {
    constructor(typeName: string) {
        super(HTMLAudioElement, typeName);

    }
    stateChanges(e) {

    }
}

export class Video extends Media {
    constructor(typeName: string) {
        super(HTMLVideoElement, typeName);
    }
    stateChanges(e) {

    }
}

export class Image extends Media {
    width: number;
    height: number;
    events = [
        'load',
        'error'
    ];
    constructor(typeName: string) {
        super(HTMLImageElement, typeName);
        this.status = 'new';
    }
    stateChanges(e) {
        const type = e.type;
        if (type === 'load') {
            this.status = 'loaded';
        } else if (type === 'error') {
            this.status = 'loadError';
        } else {
            console.error('Media：Image收到未能识别的事件类型:' + type);
        }
    }
}

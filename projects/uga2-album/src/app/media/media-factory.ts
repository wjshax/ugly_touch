import { PSingleton } from 'ug-lib';
import { Media, Video, Audio, Image } from './media';
import { Type } from '@angular/core';

export class MediaFactory extends PSingleton {
    private mediaMap: Map<string, Type<Media>>;
    constructor() {
        super(MediaFactory);

        this.mediaMap = new Map()
            .set('GIF', Image)
            .set('PNG', Image)
            .set('JPEG', Image)
            .set('APNG', Image)
            .set('WEBP', Image)

            .set('OGG', Video)
            .set('WEBM', Video)
            .set('MP4', Video)

            .set('MP3', Audio)
            .set('WAV', Audio)
            .set('OGG', Audio);
    }

    createMedia(type: string) {
        type = type.toUpperCase();
        // let mediaType: any;
        const mediaType = this.mediaMap.get(type);
        if (mediaType === undefined) {
            return undefined;
        }
        return new mediaType(type);
    }

    checkMedia(type: string) {
        const mediaType = this.mediaMap.get(type);
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.name;
    }
}

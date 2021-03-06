import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export const Messages = {
    PlayerStateChanged: 'PLAYER_STATE_CHANGED',
    CurrentlyPlayingChanged: 'CURRENTLY_PLAYING_CHANGED',
    QueueUpdated: 'QUEUE_UPDATED',
    VolumeChanged: 'VOLUME_CHANGED',
};

@Injectable()
export class SocketService {
    private _ws$: WebSocketSubject<any>;

    constructor() {
        this._ws$ = webSocket(`ws://${location.host}/api/socket`);
        this.ws$.subscribe((msg) => console.debug(msg));
    }

    get ws$() {
        return this._ws$.asObservable();
    }
}

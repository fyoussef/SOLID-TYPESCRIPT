
import AbstractLinkShareButton from "./AbstractLinkShareButton"
import EventHandler from "./EventHandler"

export default class ShareButtonInstagram extends AbstractLinkShareButton {

    url: string

    constructor(eventHandler: EventHandler, clazz: string, url : string) {
        super(eventHandler, clazz, url)
    }

    createLink(): string {
        return this.url
    }


}
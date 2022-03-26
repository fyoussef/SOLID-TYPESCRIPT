import AbstractShareButton from "./AbstractShareButton";
import ShareButtonInstagram from "./ShareButtonInstagram";
import ShareButtonPrint from "./ShareButtonPrint";
import DOMEventHandler from "./DOMEventHandler";

const eventHandler = new DOMEventHandler()

const instagram: AbstractShareButton = new ShareButtonInstagram(eventHandler, ".btn-instagram", "https://instagram.com.br/fyoussef")
instagram.bind()

const print: AbstractShareButton = new ShareButtonPrint(eventHandler, ".btn-print")
print.bind()
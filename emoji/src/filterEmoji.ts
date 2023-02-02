import {EmojiType} from './EmojiType';
import emojiList from "./assets/emojiList.json";

const MAX_RESULTS = 30;

export const filterEmoji = (searchText: string, maxResults = MAX_RESULTS): EmojiType[] => {
    return emojiList.filter((emoji) => {
        if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
        if (emoji.keywords.includes(searchText)) {
            return true;
        }
        return false;
    }).slice(0, maxResults);
}
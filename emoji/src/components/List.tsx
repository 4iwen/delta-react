import emojiListJson from '../assets/emojiList.json'
import {EmojiType} from "../EmojiType";
import {useEffect} from "react";

interface EmojiResultProps {
    emojiData: EmojiType[];
}

function List({emojiData}: EmojiResultProps) {

    return (
        <div className="List">

        </div>
    )
}

export default List;
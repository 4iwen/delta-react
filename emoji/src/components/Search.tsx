import {filterEmoji} from "../filterEmoji";
import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {EmojiType} from "../EmojiType";

interface SearchInputProps {
    setFilteredEmoji: Dispatch<SetStateAction<EmojiType[]>>;
}

function Search({setFilteredEmoji}: SearchInputProps) {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilteredEmoji(filterEmoji(event.currentTarget.value));
    }

    return (
        <div className="Search">
            <input type="text" placeholder="Search"  onChange={handleOnChange}/>
        </div>
    )
}

export default Search;
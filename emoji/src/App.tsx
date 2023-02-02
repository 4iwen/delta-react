import React, {useState} from 'react'
import './App.css'
import Search from "./components/Search";
import Header from "./components/Header";
import List from "./components/List";
import {filterEmoji} from "./filterEmoji";
import {EmojiType} from './EmojiType';


function App() {
    const [filteredEmoji, setFilteredEmoji] = useState<EmojiType[]>(filterEmoji(""));

    return (
        <div className="App">
            <Header/>
            <Search setFilteredEmoji={setFilteredEmoji}/>
            <List emojiData={filteredEmoji}/>
        </div>
    )
}

export default App

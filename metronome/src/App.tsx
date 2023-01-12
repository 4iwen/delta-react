import {useRef, useState, useEffect} from 'react'
import './App.css'
import click1 from './assets/click1.wav'
import click2 from './assets/click2.wav'

const click1Audio = new Audio(click1)
const click2Audio = new Audio(click2)

function App() {
    const [bpm, setBpm] = useState<number>(120)
    const [playing, setPlaying] = useState<boolean>(false)

    useEffect(() => {
        let timer: number | null = null;

        let counter = 1;

        if (playing) {
            timer = setInterval(() => {

                if (counter === 1) {
                    click1Audio.play()
                    console.log('click1');
                } else {
                    click2Audio.play();
                    console.log('click2');
                }

                counter++;

                if (counter > 4) {
                    counter = 1;
                }

            }, (60 / bpm) * 1000);
        }

        return () => timer && clearInterval(timer);

    }, [playing, bpm])

    const stopStartHandler = () => {
        setPlaying(!playing)
    }

    return (
        <div className="metronome">
            <div className="bpm-slider">
                <div>{bpm} BPM</div>
                <input type="range" min="60" max="240" value={bpm}
                       onChange={event => setBpm(parseInt(event.target.value, 10))}/>
            </div>
            <button onClick={stopStartHandler}>
                {playing ? 'Stop' : 'Start'}
            </button>
        </div>
    )
}

export default App

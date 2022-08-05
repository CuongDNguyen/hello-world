import { useState } from "react";
import Song from "./Song";

export interface SongType {
    title: string,
    artist: string,
    votes: number
}

const SongList = () => {

    const [visible, setVisible] = useState<boolean>(true);
    const [song1, setSong1] = useState<SongType>({ title: "Cuong Song", artist: "Cuong", votes: 0 })
    const [song2, setSong2] = useState<SongType>({ title: "Scrum F Victory Song", artist: "Scrum F", votes: 0 })

    const initialSongs: SongType[] = [
        { title: "Cuong Song", artist: "Cuong", votes: 0 },
        { title: "Scrum F Victory Song", artist: "Scrum F", votes: 0 },
        { title: "Bicycle Race", artist: "Queen", votes: 0 }
    ]
    const [listOfSongs, setListOfSongs] = useState(initialSongs);

    // const voteForSong1 = () => {
    //     setSong1({...song1, votes: song1.votes + 1})
    // }

    // const voteForSong2 = () => {
    //     setSong2({...song2, votes: song2.votes + 1})
    // }

    const voteForSong = (position: number) => {
        const newList = [...listOfSongs];
        newList[position] = { ...newList[position], votes: newList[position].votes + 1 }
        setListOfSongs(newList);
    }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return <div>
        {
            visible && <ul>
                {
                    listOfSongs.map((nextSong, position) => {
                        return <Song key={position} song={nextSong} voteFunction={() => voteForSong(position)} />
                    })
                }
            </ul>
        }
        <button onClick={toggleVisibility}> {visible ? "Hide songs" : "Show songs"}</button>
    </div>
}

export default SongList;
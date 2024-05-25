import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleEditing() {
        setIsEditing((isEditing) => !isEditing);
    }
    function handleEditPlayerName(event) {
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input onChange={handleEditPlayerName} type="text" value={playerName} required />
    }

    return (
        <li>
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
        </li >
    );
}
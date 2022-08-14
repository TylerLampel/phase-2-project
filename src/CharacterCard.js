import React from "react";

function CharacterCard({ character, handleDeleteCharacter }){

    const { id, name, species, gender, status, image, } = character


    return (
        <div>
            <br />
            <br />
            
            <img
                src={image}
                alt={name}
                className="character-avatar"
            />
            <h2>{name}</h2>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Status: {status}</p>
                <br />
            <button onClick= {() => handleDeleteCharacter(id)} className="del-btn">Delete Character</button>
        </div>
    )
}

export default CharacterCard;
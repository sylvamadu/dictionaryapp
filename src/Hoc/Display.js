import React from 'react';
import {GiSpeaker} from 'react-icons/gi';

function Display({wordList}) {
    
    let playSound = (url) => {
        new Audio(url).play()
    }
    
    // const audio = wordList  && wordList[0].phonetics[0].audio
    
    
    // console.log(audio)
  return (
    <div className="word-display">
    {
    wordList?.map((item,index) => (
        <div key={index}>
            <div className="top-info">
                <h2>{item.word} </h2> 
                <GiSpeaker className='speaker'  />
            </div>
            <span>{item.phonetic}</span>
            <div className="meaning">
                <p>Meanings</p>
                <div className="section-meanings">
                    {
                        item.meanings.map((section,index) => (
                            <div className="part-defined" key={index}>
                                <h3>{section.partOfSpeech}</h3>
                                <div className="indepth-definitions">
                                    {
                                        section.definitions.map((part,index) =>(
                                            <div className="each-definition" key={index}>
                                                <h4>{part.definition}</h4>
                                                {part.example && <p>Example: {part.example}</p>}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    ))

    }
  </div>
  )
}

export default Display
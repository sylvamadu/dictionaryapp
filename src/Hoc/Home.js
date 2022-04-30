import React,{useState,useEffect} from 'react';
import Display from './Display';
import Search from './Search';
import axios from 'axios';
import Loader from './Loader';
import Random from './Random';


function Home() {

    const[text, setText] = useState('')
    const[wordList, setWordList] = useState([])
    const[randomList, setRandomList] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[suggestionList, setSuggestionList] = useState([])
  
    

    useEffect(()=>{
        //fetch data from API
        axios.get(`https://random-words-api.vercel.app/word`)
        .then(response => {
            setIsLoading(false);
            console.log(response.data);
            setRandomList(response.data);
        })
        .catch(err => console.log(err.message));
    },[])

    const handleOnchange =(e)=>{
        setText(e.target.value);

        //if empty set suggestion list to empty
        if(!text || text === '' ){
            setSuggestionList([])
            return
        }
        else if(text.length > 0 || text){
            axios.get(`https://api.datamuse.com/sug?s=${text}`)
            .then(response => {
                setSuggestionList(response.data);
            })
            .catch(err => console.log(err.message));
        } 
        console.log(suggestionList)
          
    }
 
    console.log(suggestionList)

    //get the value of each clicked suggested item
    const getItem =(word)=>{
        setText(word);
        setSuggestionList([]);
        console.log(text);
    }
    const handleSubmit =(e)=>{
        //prevent reloading
        e.preventDefault()

        //check if any text exists
        
        setWordList([])
        if(!text) return
        if(text){
            setWordList([]);
            setSuggestionList([]);
        } 
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
        .then(response => {
            setWordList(response.data);
        })
        .catch(err => console.log(err.message))
        setText('');
        setSuggestionList([]);
        console.log(text);
        console.log(wordList)
    }

    return (
        <div className="home">
            <h2 className='title'>my dictionary app</h2>
            <Search handleOnchange={handleOnchange} text={text} handleSubmit={handleSubmit}/>
            <div className='suggestion'>
                <ul>
                    {
                        suggestionList?.map((item,index) => (
                            <li key={index} onClick = {(e)=>getItem(item.word)}>{item.word}</li>
                        ))
                    }
                </ul>
            </div>
            {isLoading && <Loader />}
            {wordList.length <= 0 && randomList?.map((item,index) =>(
                <Random key={index} {...item}/>
            ))}
            <Display wordList ={wordList} />
        </div>
    )
}

export default Home

import React,{useEffect} from 'react'
import axios from 'axios'

function Books() {
    let Books=[]
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/books')
    //     .then(resp=>{
    //         console.log(resp.data)
    //         Books=resp.data
    //     }).catch(err=>{
    //         console.log(err)
    //     })
        
    // },[])

    function showAllBooks(){
        axios.get('http://localhost:3000/books')
        .then(resp=>{
            console.log(resp.data)
            Books=resp.data
        }).catch(err=>{
            console.log(err)
        })
        console.log(Books)
    }

    return (
        <div>
            <button onClick={showAllBooks}>Show All</button> 
            <ul className="BooksNames">
                {
                    Books.length != 0 ? <li key={Books.id}>{Books.id} {Books.name} {Books.Author}</li> : null
                }
            </ul>
        </div>
    )
}

export default Books

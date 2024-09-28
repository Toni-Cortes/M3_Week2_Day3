import {useState, useEffect} from 'react'
import axios from 'axios'

function AllBooksPage() {

    const [books,setBooks] = useState([])

    useEffect(()=>{

        axios.get('http://localhost:5005/books')
        .then((allBooks)=>{
            console.log(allBooks.data)
            setBooks(allBooks.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    
  return (
    <div>
      {books.map((oneBook)=>{
        return(
            <div key={oneBook._id} style={{marginTop:'70px'}}>

                <h2>Title: {oneBook.title}</h2>
                <h4>{oneBook.author.name}</h4>
                <h4>{oneBook.author.country}</h4>

                <h6>{oneBook.genre.name}</h6>
                <p>Pages Number: {oneBook.pageNumbers}</p>

            </div>
        )
      })}
    </div>
  )
}

export default AllBooksPage

import React, { useState } from "react";
import axios from 'axios';

function App() {
    //create a hook
    const [book, setBook] = useState()
    //create api hook
    const [apiKey, setApikey] = useState("AIzaSyDAHtSMIvpUKu0lEjtRH6i7a45w5S9zdVY")
    //create a hook for result 
    const [apiRes, setApires] = useState([])


    const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`


    const handleChange = (e) => {
        console.log(e.target.value);
        setBook(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(book);

        axios.get(searchUrl).then(res => {
            console.log(res.data.items)
            setApires(res.data.items);
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <div className="jumbotron text-center bg-info">
                <h1 className="display-3 text-warning" style={{ textShadow: '2px 2px 2px #444' }}>Welcome to my googlebook react</h1>
            </div>
            <div className="input-group mb-3">
                <input
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Search for"
                    type="text"
                />
                <div className="input-group-append">
                    <button
                        onClick={handleSubmit}
                        className="btn btn-outline-secondary"
                    >
                        submit
                        </button>
                </div>
            </div>
            <div className="row">
                {apiRes.map(book => (
                    <div
                        key={book.id}
                        className="card col-xs-6 col-sm-4 col-md-3 col-lg-2 mt-5 mb-5"
                        style={{ width: "18rem", margin: "0 10px" }}
                    >
                        <a href={book.volumeInfo.previewLink}>
                            <img
                                className="card-img-top mb-3"
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt="Card image cap"
                            />
                        </a>
                        <div
                            className="card-body"
                            style={{ position: "relative" }}
                        >
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default App;

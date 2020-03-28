import React from "react";

function App() {

    const handleChange = (e) => {
        console.log(e.target.value);

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
                        onClick={"handleSubmit"}
                        className="btn btn-outline-secondary"
                    >
                        submit
                        </button>
                </div>
            </div>
        </div>

    )
}

export default App;

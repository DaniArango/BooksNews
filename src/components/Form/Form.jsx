import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import './Form.scss'

const Form = () => {
    let navigate = useNavigate()
    const [btnDisable, setBtnDisable] = useState(true)
    const [msg, setMessage] = useState("")
    const [visible, setVisible] = useState(true)
    const [data, setData] = useState({
        title: "",
        body: "",
        img: "",
        url:"",

    })

    const initialState = {
        title: "",
        body: "",
        img: "",
        url:"",
    };


    const clearState = () => {
        setData({ ...initialState })
    };

    useEffect(() => {
        if (data.title.length < 1 || data.body.length < 1 || data.img.length < 1 || data.url.length < 1 ) {
            setMessage("Thanks To Your Help")
            setBtnDisable(true)
        } else {
            setMessage(null)
            setBtnDisable(false)
        }
    }, [data]);

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data:" + data.title + " " + data.body + " " + data.img + " " + data.url);
        localStorage.setItem("data", JSON.stringify(data))
        clearState();
        setTimeout(() => {
            navigate("/")
        }, 3000);
        setVisible(false)
    };

    return (

        <>
        <div className='Form'> <h2 className='titleform'>New Publications Entry Form</h2>
            <span className='textform'>¡Remeber! You must fill in all fields!</span>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Title"
                    value={data.title}
                    onChange={handleInputChange}
                    name="title"
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Author"
                    value={data.body}
                    onChange={handleInputChange}
                    name="body"
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Image"
                    value={data.img}
                    onChange={handleInputChange}
                    name="img"
                />
                <br />
                <br />
                <input type="text"
                    placeholder="URL"
                    value={data.url}
                    onChange={handleInputChange}
                    name="url"
                />
                <br />
                <br />
                <button className='button' type='submit' disabled={btnDisable}>
                    Send 
                </button>
            </form>
            <p>{visible ? msg : <p>Your news item has been created successfully <i>NewsBooks</i>
            </p>}
            </p>
        </div>
        
        </>
    );
};

export default Form

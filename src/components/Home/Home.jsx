import React from 'react'
import News from './News/News'

const Home = () => {
    return (
        <div>

            <h2 className='hometext'> Welcome</h2>
            <br></br>
            <p>...In your Prophet Diary, you can find the best new arrivals!... <br /><strong>Enjoy</strong></p>
            <News />

        </div>
    )
}

export default Home
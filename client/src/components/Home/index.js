import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import homeback from '../../assets/homeback.jpg'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
 const tag_line1=[..."Learn Today"]
 const tag_line2=[..."Teach Tomorrow"]
 const tag_line3=[..."ExpertGuru"]
 useEffect(() => {
  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)
}, [])
  return (<>
    <div className='container home-page'>
      
      <div className='text-zone'>
      
      <h1>
      
          <AnimatedLetters
              letterClass={letterClass}
              strArray={tag_line3}
              idx={10}
            /></h1>
          <h1>
          <AnimatedLetters
              letterClass={letterClass}
              strArray={tag_line1}
              idx={10}
            />
            </h1>
            <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={tag_line2}
              idx={0}
            />
          </h1>
          <h2>
            Feel free to contact us for any query
          </h2>
          <h1>Demo made by 
            Adamya kumar
          </h1>
            
          

      </div>
    </div>
    </>
  )
}

export default Home
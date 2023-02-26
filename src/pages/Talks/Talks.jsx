import React from 'react'
import { Link } from 'react-router-dom'
import './Talks.scss'
import Screenshot1 from './images/Screenshot1.png'
import Screenshot2 from './images/Screenshot2.png'
import Screenshot3 from './images/Screenshot3.png'
import Screenshot4 from './images/Screenshot4.png'
import Screenshot5 from './images/Screenshot5.png'
import Screenshot6 from './images/Screenshot6.png'

const Talks = () => {
  return (
    <section className='Talks container'>
      
      <div className='title'>
          <h2>Talks</h2>
      </div>

      <article>
        <div id='archive' className='col-md-7'>
          <ul className='list-wrapper'>
            <li>
              <Link to={'https://cinemavyu.netlify.app'} target="blank"  className='list-item'>
                  <img width={150} src={Screenshot1} alt="img" />
                  <div className='wrapper'>
                    <div className='date'>Najot Ta'lim</div>
                    <div className='title'>Vyu Movie</div>
                  </div>
              </Link>
            </li>
          </ul>
          <ul className='list-wrapper'>
            <li>
              <Link to={'https://youminew.netlify.app'} target="blank" className='list-item'>
                <img width={150} src={Screenshot2} alt="img" />
                <div className='wrapper'>
                    <div className='date'>Najot Ta'lim</div>
                    <div className='title'>YouMi</div>
                </div>
              </Link>
            </li>
          </ul>
          <ul className='list-wrapper'>
            <li>
              <Link to={'https://abdulloh-anketolog.netlify.app'} target="blank" className='list-item'>
                <img width={150} src={Screenshot3} alt="img" />
                <div className='wrapper'>
                  <div className='date'>Najot Ta'lim</div>
                  <div className='title'>Anketolog</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'https://abdullohmytodolist.netlify.app'} target="blank" className='list-item'>
                  <img width={150} src={Screenshot4} alt="img" />
                  <div className='wrapper'>
                    <div className='date'>Najot Ta'lim</div>
                    <div className='title'>TodoList</div>
                  </div>
              </Link>
            </li>
          </ul>
          <ul className='list-wrapper'>
            <li>
              <Link to={'https://pokemon-pikachu.netlify.app'} target="blank" className='list-item'>
                <img width={150} src={Screenshot5} alt="img" />
                <div className='wrapper'>
                  <div className='date'>Najot Ta'lim</div>
                  <div className='title'>Pokemons</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'https://abdulloh-11-product.netlify.app'} target="blank" className='list-item'>
                  <img width={150} src={Screenshot6} alt="img" />
                  <div className='wrapper'>
                    <div className='date'>Najot Ta'lim</div>
                    <div className='title'>Product</div>
                  </div>
              </Link>
            </li>
          </ul>
        </div>
        
        <div className='sticky col-md-4'>
            <h6>NEWSLETTER</h6>
            <p>Subscribe to <Link to={'https://t.me/ImMcdonald'} className="tg">@lazyprogrammer</Link> telegram channel where I share my new courses, articles, talks and more.</p>
        </div>
      </article>

    </section>
  )
}

export default Talks
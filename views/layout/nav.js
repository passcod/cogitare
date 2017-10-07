import Inferno from 'inferno'
import { Link } from '../util/links'

export function Nav () {
  return (
    <nav className='navbar navbar-expand-sm navbar-light sticky-top'>
      <Link className='navbar-brand' href='/'>
        <img alt='Cogitare' src='/assets/icon.svg' height='64' />
      </Link>

      <ul className='navbar-nav mr-auto'>
        <li className='nav-item collapse navbar-collapse'>
          <Link className='nav-link' href='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' href='/random'>Random</Link>
        </li>
        <li className='nav-item collapse navbar-collapse'>
          <Link className='nav-link text-info' href='/nano'>NaNoWriMo</Link>
        </li>
      </ul>

      <ul className='navbar-nav middle-brand'>
        <li className='nav-item collapse navbar-collapse'>
          <Link className='nav-link' href='/'>
            <span className='under'>Cogitare</span>
            <span className='over'>Prompts, seeds, and plots</span>
          </Link>
        </li>
      </ul>

      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className='nav-link' href='http://dicere.cogitare.nz/docs'>Docs</Link>
        </li>
        <li className='nav-item collapse navbar-collapse'>
          <Link className='nav-link' href='http://dicere.cogitare.nz/docs#bots'>Bots</Link>
        </li>
      </ul>

      <Link className='btn btn-outline-success my-2 my-sm-0 ml-3' href='http://dicere.cogitare.nz'>Admin</Link>
    </nav>
  )
}

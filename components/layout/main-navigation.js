import Link from 'next/link';

import Logo from './logo';

import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* wrap with <a></a> because <Logo /> is not a text, but a component */}
        {/* if Link around some text, it creates <a></a> automatically (can see it below) */}
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

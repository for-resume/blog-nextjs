import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpg"
          alt="An image showing Anton"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Anton</h1>
      <p>
        I blog about webdevelopment - especially frontend framework like React.
      </p>
    </section>
  );
}

export default Hero;

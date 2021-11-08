import Image from 'next/image';
import classes from './hero.module.css';
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/home.jpg"
          alt="home"
          width={500}
          height={500}
        />
      </div>
      <h1>Hi, Iam Sameh</h1>
      <p>I love Software Developpment</p>
    </section>
  );
};

export default Hero;

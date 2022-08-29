import Label from '../Label'
import iconPersonality from '../../assets/icon-personlaity.svg';
import iconHome from '../../assets/icon-home.svg';
import iconStudies from '../../assets/icon-studies.svg';
import iconBirthday from '../../assets/icon-birthday.svg';

import '../styling/About.sass'

function About() {
  return (
    <section className="about container">
      <header>
        <h2 className="about__header">Help a brother</h2>
      </header>
      <article>
        <p className="about__text">
          Saied is a spectacular youngman, father of 2 beautiful kittens and a
          heavy emoji user. He loves <strong>basketball</strong> 🏀,
          <strong>marshal arts</strong>{" "}
          🥋, <strong>cosplaying</strong> 🎀 and <strong>film-making</strong> 🎥 .
        </p>
        <p className="about__text">
          Due to his <strong>increase in testosterone</strong> 😔 and after
          certain events last year, Saied is in a great(disparate) need for a
          girlfriend and you might be the one 🤗.
        </p>
        <p className="about__text">
          What makes it win-win situation you might wonder? For Saied, hormone
          imbalance is bad and we've seen enough of him already. For you, actually
          not much. He will truly <strong>love you</strong> 😍️,{" "}
          <strong>entertain you</strong> ✨ and{" "}
          <strong>get you sausage patties</strong> 🌯.
        </p>
        <p className="about__text">
          There is still a lot to know about him. That's for your first date. You
          might be the next lucky queen. 😁
        </p>
      </article>

      <div className="about__basic-info">
        <Label src={iconStudies} title="FCIS Ain Shams University" alt="Study"/>
        <Label src={iconHome} title="Ain Shams, Cairo" alt="Home town"/>
        <Label src={iconPersonality} title="INTP-A Pro Max" alt="Personality"/>
        <Label src={iconBirthday} title="6th June 2001 (BC)" alt="Birthday"/>
      </div>

      <div className="requirements">
        <h2 className="about__header">Requirements</h2>
        <p>Literally nothing. Apply if you're not a dude.</p>
      </div>
    </section>
  );
}

export default About;

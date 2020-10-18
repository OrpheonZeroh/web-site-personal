import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.png'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Often sharing in technology events strengthening good relationships
            and networking. I like to share what I know and add value to the
            community. And more to those new to this beautiful career as a
            software developer.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Here are some repositories of what I know, repositories with
            architectures ddd, docker, javascript, python, terraforms and lately
            that i'm practicing Golang. I was considered a backend developer
            with a heart for Devops and obviously working in this area as an
            SRE. I have no limits in terms of technologies, I consider myself
            self-taught and in terms of what best applies to the
            <a href="https://github.com/OrpheonZeroh/"> project</a>.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h4>Jonathan Albert Adamson Gondola Software engineer</h4> <br/>

          <p align="justify">
            Currently I work as a fullstack Analyst looking at issues of both fronted (angular) and backend (javascript,
            java and python), implementer of new requirements and problem solver for an international banking entity in
            Latin America. Addressing communication problems between serveless micro services in systems based on ddd,
            cqrs and mesh services architectures. I consider myself a resilient, understanding, cheerful and adaptable
            person to changes. In addition to being collaborative and teaching or collaborating in what is possible of
            course self-taught. I like performing in what I do, working collaboratively, being recognized and feeling
            that I add value to each of the places where I work.
            I started studying a degree in computer science engineering specializing in the area of ​​networks and
            telecommunications. But once working in this area, I wanted new challenges and to learn other things. So I
            decided to dive into software development. I started with small projects as an application for compensatory
            times and support for existing applications, so I helped my employer implement the CI / CD cycle for two
            environments with technologies like docker, gitlab rancher and kubernetes (DEV and QA). And in what I am
            learning I like more and more the area of ​​Devops infrastructures and systems design. so in the future I
            would like to be an architect of multi-scale solutions for global solutions and maybe set up my startup.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/4lberts_9"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/OrpheonZeroh/"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

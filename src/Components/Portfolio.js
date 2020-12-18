import React, { Component } from 'react';
import RactPlayer from 'react-player';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Quelques vidéos de bleach pour decouvrir l'univers du mangas</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="item-wrap portfolio-item">
                <RactPlayer
                  style={{display: 'inline-block'}}
                  key={1}
                  url={"https://www.youtube.com/watch?v=ofvaakyqiF4"} 
              />
              <h3>All Bleach Openings Crunchyroll</h3>
              </div>
              <div className="item-wrap portfolio-item">
              <RactPlayer
                style={{display: 'inline-block'}}
                key={2}
                url={"https://www.youtube.com/watch?v=xdKANH06-QM"} 
              />
              <h3>TOUT CE QUE VOUS DEVEZ SAVOIR SUR BLEACH ! de Afro Roshi</h3>
              </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;

import { faAngleDoubleDown, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import ProjectsCards from './ProjectsCards';

function Projects() {
  function handleScrollNext() {
    document.getElementById('cards-list').scrollBy(360, 0);
  } 
  function handleScrollPrev() {
    document.getElementById('cards-list').scrollBy(-360, 0);
  }
  return (
    <section className="projects">
      <div className="container">
        <div className="row" >
          <div className="col-12">
            <div className="projects-head">
              <h1>Vá além da POLI!</h1>
              <p>Conheça nossos projetos</p>
              <FontAwesomeIcon icon={faAngleDoubleDown} width="128"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-relative" >
        <div className="projects-cards" id="cards-list">
          <ul className="projects-cards-list">
            <li className="projects-cards-items">
              <ProjectsCards src='img/rocket-icon.svg'
                title='Garagem de Startups'>
                  Criação de um projeto real utilizando os famosos métodos de
                  desenvolvimento de produtos em startups.
              </ProjectsCards> 
            </li>
            <li className="projects-cards-items">
              <ProjectsCards src="img/team-icon.svg"
                title="Capacitação Interna">
                  Trilhas de capacitação e evolução pessoal e técnica dos nossos
                  membros, baseadas nos três perfis mais comuns de fundadores.
              </ProjectsCards>
            </li>
            <li className="projects-cards-items">
              <ProjectsCards src="/img/calendar-icon.svg"
                title="Eventos">
                  Fontes de inspiração e motivação para membros e para os
                  politécnicos. Apresentamos um caminho alternativo para a carreira
                  tradicional
              </ProjectsCards>
            </li>
          </ul>

        </div>
        <FontAwesomeIcon onClick={handleScrollPrev} id="projects-prev" icon={faChevronLeft} width="16" className="project-previous" />
        <FontAwesomeIcon onClick={handleScrollNext} id="projects-next" icon={faChevronRight} width="16" className="project-next" />
      </div>
    </section>
  )
}

export default Projects;
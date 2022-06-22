import React from 'react'
import './home.css'
import skill1 from "../images/teamSpirit.jpg"
import skill2 from "../images/analytique.jpg"
import skill3 from "../images/agile.png"
import profil from "../images/profil1.png"
import { useTypewriter} from 'react-simple-typewriter'

const Home = () => {
  
    const {text} = useTypewriter({
        words: ['Ingenieur logiciel', 'Project Manager', 'Data analyste'],
        loop: {},
        
      })


  return (
    <section className='hero' id='home'>
        <div className='conatiner  f_flex top'>
               <div className="left top">
                   <h3>BIENVENUE SUR MON PORTFOLIO</h3>
                   <h1>
                       Hi, Mon nom est <span>Kouame Ulrich Nobel</span>{" "}
                   </h1>
                   <h2>Je suis 
                   <span> {text}</span>
                    </h2>
                    <p>Ingénieur logiciel et data analyste de profession, je suis développeur , intégrateur de solution
                       Microsoft azure data analytique, business Intelligent. Mon esprit analytique, l’autonomie et le
                       sens de l’initiative contribueront au succès des missions qui me seront attribuées. Je recherche
                       actuellement un emploi dans le domaine de l’informatique applicatif et de la transformation
                       digitale afin de créer de la valeur ajoutée et de faire valoir mes compétences.
                    </p>
                    <div className="hero_btn d_flex">
                        <div className="col_1">
                            <h4>COMPTES MEDIA SOCIAUX</h4>
                            <div className="button">
                                <button className="btn-shadow">
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button className="btn-shadow">
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button className="btn-shadow">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                            </div>
                        </div>
                        <div className='col_2'>
                            <h4>APTITUDES</h4>
                            <button className="btn-shadows">
                                <img src={skill1} alt="" />
                            </button>
                            <button className="btn-shadows">
                                <img src={skill2} alt="" />
                            </button>
                            <button className="btn-shadows">
                                <img src={skill3} alt="" />
                            </button>
                        </div>
                    </div>
               </div>
            <div className="right">
                <div className='right_img'>
                   <img src={profil} alt="Kouame ulrich" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
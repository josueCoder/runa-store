import React from 'react';
import '../styles/Nosotros.css';
const Nosotros = () => {
    return ( <>
    <section className='nosotros'>
    <div className='nosotros-container'>
        <h1 className='nosotros-title'>Nosotros</h1>
        <p className='nosotros-about'>A través de la web Runa Store se busca brindar un espacio de veta de productos como: calzado, ropa, accesorios hecho en Perú, donde podemos apreciar, moda, cultura y un espacio para promocionar productos. Runa Store es una web que responde a la demanda de un sector con gran potencial. Las secciones de la web incluyen ropa, accesorios, reviews, contactos, marcas, otros.</p>
        <h2 className='nosotros-subtitle'>Nuestra Historia</h2>
        <p className='nosotros-about'>El portal nace a partir del trabajo realizado por los estudiantes del Bootcamp Desarrollo Web Full Stack, una iniciativa de CodiGo y esHoy </p>
        
        <section className="staff">
            <div className="staff__container-title">
                <h2 className='nosotros-subtitle'>Nuestro Equipo</h2>
            </div>
            <div className="staff__all">

            <article className="staff__article">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" src="https://i.postimg.cc/2yvPzhxf/Whats-App-Image-2022-03-30-at-12-36-37-PM.jpg" alt="Writhney Lazo"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Writhney Lazo</h3>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" width="70px" src="https://i.pinimg.com/originals/06/86/7b/06867b5651569ee604ad62bc7120649f.jpg" alt="Febe Chacon"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Febe Chacon</h3>
                   </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" src="https://i.pinimg.com/originals/06/86/7b/06867b5651569ee604ad62bc7120649f.jpg" alt="Moises Arrieta"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Moises Arrieta</h3>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" width="70px" src="https://avatars.githubusercontent.com/u/64298891?v=4" alt="Robert Quilca"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Robert Quilca</h3>
                   </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" width="70px" src="https://i.pinimg.com/originals/06/86/7b/06867b5651569ee604ad62bc7120649f.jpg" alt="Rody Ccoyllo"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Rody Ccoyllo</h3>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" src="https://media-exp1.licdn.com/dms/image/C4D03AQGIukU6tM56gQ/profile-displayphoto-shrink_800_800/0/1641773283959?e=1654128000&v=beta&t=Blh6SbZycyhKP6ciEvuFeMurQx2cB50QhKKOzwCPn1w" alt="Victoria Lavarello"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Victoria Lavarello</h3>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" width="70px" src="https://i.pinimg.com/originals/06/86/7b/06867b5651569ee604ad62bc7120649f.jpg" alt="Ruben Puerta"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Ruben Puerta</h3>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
    
            </div>
        </section>
    
    
    </div>
</section>
    </> );
}
 
export default Nosotros;
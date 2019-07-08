import React from 'react';
import AppContext from './AppContext';
import './Home.css';
import News from './News'


var news=[]

class Home extends React.Component {
    static contextType = AppContext;
    render() {
        news=this.context.noticias.filter(noticia => noticia.tipo === 'news');
        return (
            <div className="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-6">
                            <img src="assets/ChaseField.jpg" className="shop-image img img-raised" alt="falta img"></img>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {news.map(noticia => <News noticia={noticia} key={noticia.id} />)}
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default Home;
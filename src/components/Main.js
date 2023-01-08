import Hero from "./Hero";
import CardMajor from "./Card-major";
import law from './../assets/law.jpg';
import medical from './../assets/medical.jpg';
import engineer from './../assets/engineer.jpg';

const Main = () => {
    return (
        <div>
            <Hero/>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Major</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-2 col-sm">
                        <CardMajor title="Law" image={law}/>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm">
                        <CardMajor title="Pre-Medical" image={medical}/>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm">
                        <CardMajor title="Engineer" image={engineer}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
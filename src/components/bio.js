import React, {Component} from 'react';

class Bio extends Component{
    render(){
        return(
            <div className="bio">
                <div className="photo-container">
                    <img src={this.props.photo} alt="Miranda" className="miranda-photo"></img>
                </div> 
                <div className="bio-container">
                    Fetter grüne, du Laub,
                    Am Rebengeländer
                    Hier[mein Fenster herauf!] 1
                    Gedrängter quellet,
                    Zwillingsbeeren, und reifet
                    Schneller und glänzend[voller] 2!
                        Euch brütet der Mutter Sonne
                    Scheideblick, euch umsäuselt
                    Des holden Himmels
                    Fruchtende Fülle;
                    Euch kühlet des Mondes
                    Freundlicher Zauberhauch,
                    Und euch betauen, ach!
                        Aus diesen Augen
                    Der ewig belebenden Liebe
                    Voll schwellende Tränen.
                </div>
            </div>
        );
    }
}

export default Bio;
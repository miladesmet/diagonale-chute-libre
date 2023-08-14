import React from "react";



export const ContactMentionsFooter = () => {
    return (
      <div className=" flex flex-col justify-center items-center">
            <img className="my-10" src="./src/assets/logo.png" alt="Diagonale Chute Libre" />
        
            <b>Diagonale Chute Libre </b>
            <p className="text-center">  11 chemin du bouès<br/>
            Sigoyer,<br/>
            Provence-Alpes-Côte d’Azur,<br/>
            05130, FRANCE<br/> </p>
            <address className="my-10">
                <div className="flex flex-col justify-center items-center">
                    <a className="mb-5" href="tel:+33660831284">06 60 83 12 84</a> 
                    <a className="mb-10" href="mailto:diagonalechutelibre@gmail.com">diagonalechutelibre@gmail.com</a>
                 </div>
                <div className="flex flex-row justify-center items-center">
                    <a href="https://www.facebook.com/DiagonaleChuteLibre/"><img className="max-h-16" src="./src/assets/facebook.png" /></a>
                    <a href="https://www.instagram.com/diagonalechutelibre/"><img className="max-h-16" src="./src/assets/instagram.png" /></a>
                </div>
            </address>
            <b>Mentions Légales</b>
            <p className="text-center"> SIRET: 423 769 991 00070<br/>
            Code APE: 926C<br/>
            TVA - VAT: FR49 423 769 991<br/></p>
            
      </div>
    );
  };
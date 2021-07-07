import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";


const FooterPage = () => {
  return (
    <div>    
      
    <MDBFooter color="white" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
         Made with <span></span>♥ By <a href="https://www.sanketpatil.me/"> Sanket Patil </a> 
        </MDBContainer>
      </div>
    </MDBFooter>

    </div>    


  );
}

export default FooterPage;
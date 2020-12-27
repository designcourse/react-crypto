import React from "react";
import { MDBContainer, MDBFooter, MDBIcon } from "mdbreact";


const FooterPage = () => {
  return (
    <div>    

    <MDBContainer >
    <form>

      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"></input>
        </div>
      </div>
      
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
        </div>
      </div>

    </form>
    </MDBContainer>
      
    <MDBFooter color="white" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
         Made with ♥ By <a href="https://www.sanketpatil.me/"> Sanket Patil </a> 
        </MDBContainer>
      </div>
    </MDBFooter>

    </div>    


  );
}

export default FooterPage;
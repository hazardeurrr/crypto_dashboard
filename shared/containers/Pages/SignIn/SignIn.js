import React from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Checkbox from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import FirebaseLoginForm from '../../FirebaseForm/FirebaseForm';
import authAction from '@iso/redux/auth/actions';
import appAction from '@iso/redux/app/actions';
import Auth0 from '../../Authentication/Auth0/Auth0';
import {
  signInWithGoogle,
  signInWithFacebook,
} from '@iso/lib/firebase/firebase.authentication.util';
import SignInStyleWrapper from './SignIn.styles';
import secretKey from './secretKey';

const { login } = authAction;
const { clearMenu } = appAction;

export default function SignIn() {
  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.Auth.idToken);

  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);


 


  function handleLogin(e, token = false) {
    if(e != null) e.preventDefault();    

    if(foo === secretKey){
      if (token) {
        dispatch(login(token));
      } else {
        dispatch(login());
      }
      dispatch(clearMenu());
      history.push('/dashboard');
    } else {
      console.log("ACCESS DENIED")
    }
  }
  let { from } = location.state || { from: { pathname: '/dashboard' } };

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let foo = params.get('query');

  handleLogin()

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            DASHBOARD CRYPTO BY CRYPTANALYST
          </div>
          <div className="isoSignInForm">
            <form>
             

              <div className="isoInputWrapper isoLeftRightComponent">
               
                <Button type="primary" onClick={event =>  window.location.href='https://academy.cryptanalyst.fr/'}>
                  Débloquez l'accès sur academy.cryptanalyst.fr
                </Button>
              </div>

              {/* <p className="isoHelperText">
              </p> */}
            </form>

            </div>
            {/* 
            <div className="isoInputWrapper isoOtherLogin">
              <Button
                onClick={signInWithFacebook}
                type="primary"
                className="btnFacebook"
              >
                <IntlMessages id="page.signInFacebook" />
              </Button>
              <Button
                onClick={signInWithGoogle}
                type="primary"
                className="btnGooglePlus"
              >
                <IntlMessages id="page.signInGooglePlus" />
              </Button>

              <Button
                onClick={() => {
                  Auth0.login();
                }}
                type="primary"
                className="btnAuthZero"
              >
                <IntlMessages id="page.signInAuth0" />
              </Button>

              <FirebaseLoginForm
                history={history}
                login={(token) => dispatch(login(token))}
              />
            </div>
            <div className="isoCenterComponent isoHelperWrapper">
              <Link to="/forgotpassword" className="isoForgotPass">
                <IntlMessages id="page.signInForgotPass" />
              </Link>
              <Link to="/signup">
                <IntlMessages id="page.signInCreateAccount" />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </SignInStyleWrapper>
  );
}

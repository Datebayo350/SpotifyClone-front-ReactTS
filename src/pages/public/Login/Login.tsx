
import { spotifyLoginAndAuthorization } from '../../../__slices/user';
import { Button } from 'primereact/button';
import { useDispatch} from 'react-redux';
import SpotifyLogo from '../../../assets/SpotifyLogo.svg';

const Login = () => {
 
  const dispatch = useDispatch();
  const spotifyConnection = () => {

    dispatch(spotifyLoginAndAuthorization(''));

  };
  
  const spotifyIcon = () => {
    return (
      <img className="max-h-2rem
      md:max-h-4rem md:max-w-full" src={SpotifyLogo} alt="icôn spotify" />
    )
  };
  const content = (
    <main className=" w-full h-screen flex flex-column align-items-center justify-content-center">
      <div className="title-container flex align-items-center">
        <span className="m-2 max-h-4rem">
          {spotifyIcon()}
        </span>
        <h1 className="text-base
        md:text-4xl
        lg:text-5xl"> Connexion avec Spotify </h1>
      </div>
        <Button className='spotify-button text-base border-transparent 
        md:text-2xl md:w-3 md:p-3' label="Se connecter" onClick={spotifyConnection}/>
    </main>
  );

  return content;
};
            

export default Login;
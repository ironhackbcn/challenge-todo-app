import React from "react";
import auth from "./auth-service"; // Importamos funciones para llamadas axios a la API
const { Consumer, Provider } = React.createContext();


// HOC para crear Consumer
// el componente withAuth recibe un componente como argumento y nos devuelve un componente con el mismo componente dentro de un <Consumer /> con las propiedades user e isLoggedin (state), y los métodos login, signup y logout (this)
const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {/* El componente <Consumer> provee un callback que recibe el "value" con el objeto Providers */}
          {({ login, signup, user, logout, isLoggedin }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// Provider
class AuthProvider extends React.Component {
  state = { isLoggedin: false, user: null, isLoading: true, message: "", cards:"" };

  componentDidMount() {
    // luego de que se monte el componente, llama a auth.me() que nos devuelve el usuario y setea los valores para loguearlo
    auth
      .me()
      .then((res) => {
        if (res.email) {
          this.setState({ isLoggedin: true, user: res, isLoading: false });
        }
      })
      .catch((err) =>
        this.setState({
          isLoggedin: false,
          user: null,
          isLoading: false,
          message: err.message,
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    // luego de que se actualice el componente, verificamos si el estado anterior es diferente al actual, y de ser así traemos los datos del usuario y modificamos el estado
    if (prevState.isLoggedin !== this.state.isLoggedin) {
      auth
        .me()
        .then((res) => {
          if (res.email && this.state.isLoggedin) {
            this.setState({ isLoggedin: true, user: res, isLoading: false });
          }
        })
        .catch((err) =>
          this.setState({
            isLoggedin: false,
            user: null,
            isLoading: false,
            message: err.message,
          })
        );
    }
  }

  signup = async (user) => {
    //Desestructuramos el email y el password de (user)

    
    const {username, email , password}=user
    //Invocamos a auth y usamos su método signup, le pasaremos email y password

    try {
      const user= await auth.signup({username, email, password});
      console.log('holiiiii2',user.data);
      this.setState({isLoggedin:true, user})
    } catch (error) {
      console.log(error)
    }


    //Seteamos la respuesta en el state y creamos un catch en el que guarde los mensajes de error (response.status, response.statusText, response.data.errorMessage) en un objeto 
  };

  login = async (user) => {
    //Desestructuramos el email y el password de (user)
    const {email, password}=user;
    //Invocamos a auth y usamos su método login, le pasaremos email y password

    try {
      const user= await auth.login({email, password});
      this.setState({isLoggedin:true, user})
    } catch (error) {
      console.log(error)
    }

    //Seteamos la respuesta en el state y creamos un catch en el que guarde los mensajes de error (response.status, response.statusText, response.data.errorMessage) en un objeto.
  };

  logout = async() => {
    //Llamamos al método logout de auth
    try {
      await auth.logout();
      this.setState({ isLoggedin: false, user: null });
    } catch (error) {
      console.log(error);
    }
    //Seteamos la respuesta en el state y creamos un catch en el que guarde los mensajes de error (response.status, response.statusText, response.data.errorMessage)en un objeto.
 
  };

  



  render() {
    // destructuramos isLoading, isLoggedin y user de this.state y login, logout y signup de this

    const { isLoading, isLoggedin, user } = this.state;
    const { login, logout, signup } = this;
    return isLoading ?(
      
      // si está loading, devuelve un <div> y sino devuelve un componente <Provider> con un objeto con los valores: { isLoggedin, user, login, logout, signup}
      // el objeto pasado en la prop value estará disponible para todos los componentes <Consumer>
   
      <div>Loading</div>
    ):(
      //Sino, importamos el Provider y le pasamos los value de isLoggedin, user, login, logout, signup 
      <Provider value={{isLoggedin, user, login, logout, signup}}>
        {/* //Le pasamos los props.children         */}
        {this.props.children}
      
      </Provider>
      //Le pasamos los props.children

    )
       
     
    
     /*<Provider> "value={}" datos que estarán disponibles para todos los componentes <Consumer> */
  }
}

export { Consumer, withAuth };

export default AuthProvider;

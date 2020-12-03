import React, { Component } from "react";
// import Navbar from "../components/Navbar/Navbar";
// import AddCard from "../components/AddCard";
import { withAuth } from "../lib/AuthProvider";
// import Prof from "../lib/prof-service";
import { Link } from "react-router-dom";
// import EditCard from "../pages/EditCard";



class Profile extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
      cards: [],
      user: props.user,
      image: "",
      userId: props.user._id,
    };
  }

//   componentDidMount() {
//      return Prof.cardList(this.state.user._id)
//       .then((resp) => {
//          console.log(resp)
//         this.setState({
//           cards: resp,
//         });
//       })
//       .catch((err) => console.log(err));
//   }

//   handleFileUpload = async (event) => {
//     //console.log("the file to be uploaded is: ", event.target.files[0]);

//     const uploadData = new FormData();

//     uploadData.append("image", event.target.files[0]);

//     try {
//       const res = await Prof.handleUpload(uploadData);

//       // console.log("response is", res);

//       this.setState({ image: res.secure_url });
//     } catch (error) {
//       console.log("while uploading", error);
//     }
//   };

//   handlePhotoSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const author = this.state.user._id;
//       const image = this.state.image;
      
//       const res = await Prof.addPhoto({ image, author });

      
//       this.setState({ image: "" });
      
//       window.location.reload();
//     } catch (error) {
//       console.log("while adding the image error", error);
//     }
//   };

//   delete(e, card) {
//     // console.log(this.state.user._id);
//     Prof.deleteCard(card.eachCard._id, this.state.userId);
//     // console.log("props del profile", this.props);
//     //this.props.history.push("/profile");
//     window.location.reload();
//   }

//   edit() {
//     Prof.editCard();
//   }

  render() {

    
    return (
      <>
        
        <div className="profile">
          <div className="userInfo">
            <h1> {this.state.user.username}'s Profile</h1>

            <div className="profPic">
              <img src={this.state.user.image} alt="profile" />
              <form onSubmit={this.handlePhotoSubmit}>
                <div className="selectProfPic">
                  <label for="profPicUpload">Select a new picture</label>
                  <input
                    id="profPicUpload"
                    type="file"
                    name="image"
                    onChange={(event) => this.handleFileUpload(event)}
                  />
                </div>
                <button class="profPicButton" type="submit">
                  Upload that picture
                </button>
              </form>
              </div>
              
              {/* <AddCard user={this.state.user} {...this.props}></AddCard> */}
            
          </div>
          <div className="UserCards">
            {this.state.cards &&
              this.state.cards.map((eachCard) => {
                return (
                  //<h1>{eachCard.name}</h1>

                  <div className="cardDiv" key={eachCard._id}>
                    <img src={eachCard.image} alt="peine" />
                    <h1>{eachCard.name}</h1>
                    <button class="customCardButton" onClick={(e) => this.delete(e, { eachCard })}>
                      Delete
                    </button>
                    <Link  to={`/editCard/${eachCard._id}`}>
                      <button class="customCardButton">Edit</button>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Profile);

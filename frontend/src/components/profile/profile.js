import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";

class Profile extends React.Component {

  componentDidMount() {
    this.props.getUserListings(this.props.currentUser.id)
  }

  render(){
      const {currentUser, listings} = this.props;
      let userRecipes = [];
      listings.forEach((listing) => {
          if(listing.author_id === currentUser.id){
              userRecipes.push(listing)
          }
      })
      return (
        <div className="profile-outer">
          <div>
            <div>
              {userRecipes.length === 0 ? (
                <div className="no-recipe-outer">
                  <div className="username-no-recipe">
                    <p className="p-username-no-recipe">
                      Welcome {currentUser.username}
                    </p>
                  </div>
                  <div className="detail-no-recipe">
                    <div className="not-detail">
                      <p className="p-not-detail">
                        You have not created any recipe yet. Please click below
                        to create your own recipe.
                      </p>
                    </div>
                    <div className="link-create-profile">
                      <Link to="/recipes/new" className="l-create-recipe">
                        Create Recipe
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="yes-recipe-outer">
                  <div>
                    <p>Welcome {currentUser.username}</p>
                  </div>
                  <div>
                    <p>Your Recipe</p>
                  </div>
                  {userRecipes.map((listing, index) => (
                    <div key={index + "b"} className="user-recipe">
                      <Link
                        to={`/recipes/${listing._id}`}
                        className="link-profile"
                      >
                        <div className="profile-recipe-title-image">
                          <div className="div-image-profile">
                            <img
                              src={listing.picture}
                              alt="food-pic"
                              className="images-profile"
                            ></img>
                          </div>
                          <div className="listing-title-profile">
                            <p className="title-profile">{listing.title}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
  }
}

export default Profile;
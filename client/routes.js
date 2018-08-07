import React, { Component } from "react";
import { SingleRecipe, HomePage, Login, SignUp } from "./components";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter, Switch } from "react-router";
import { me, gotRecipes } from "./store";

class Routes extends Component {
  componentDidMount() {
    this.props.loadUserData();
    this.props.gotRecipes();
  }

  render() {
    return (
      <div className="router-container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route path="/recipes/:recipeId" component={SingleRecipe} />
          {/* <Route path="/recipes" component={} /> */}
          <Route exact path="/new-user" component={SignUp} />
          {/* <Route path="/cuisines" component={} /> */}
          {/* <Route path="/cuisines/:cuisineId" component={} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

const mapDispatchToProps = dispatch => ({
  gotRecipes: () => dispatch(gotRecipes()),
  loadUserData: () => dispatch(me())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
);

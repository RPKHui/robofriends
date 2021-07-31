import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import { connect } from "react-redux";
import { isRobotLoading } from "../redux/robots/robots.selectors";
import { createStructuredSelector } from "reselect";
import { filterRobots, fetchRobotsStart } from "../redux/robots/robots.actions";

const App = ({ loading, fetchRobotsStart, filterRobots }) => {
  useEffect(() => {
    fetchRobotsStart();
  }, [fetchRobotsStart]);

  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    filterRobots(searchField);
  }, [searchField, filterRobots]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  if (loading) {
    return <h1 className="tc">Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchRobotsStart: () => dispatch(fetchRobotsStart()),
  filterRobots: (search) => dispatch(filterRobots(search)),
});

const mapStateToProps = createStructuredSelector({
  loading: isRobotLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

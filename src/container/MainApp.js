import React, {PropTypes} from 'react';
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import { getSites } from '../helpers/searchHelper.js';
import SitesDisplay from '../components/SitesDisplay';

export default class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: this.props.sites,
      categories: this.props.categories,
      keyWord: '',
      showSites: []
    };
   this.onChange = this.onChange.bind(this);
  }
  onChange(event){
    event.preventDefault();
    const _keyword = event.target.value;
    let _showSites = getSites(_keyword,this.state.categories, this.state.sites);
    this.setState({showSites: _showSites, keyWord: _keyword });
  }

  render () {
        return (
          <div className="container-fluid">
            <Header />
              <div className="myContainer jumbotron">
                <TextInput
                  name="search"
                  label="Search"
                  value={this.state.keyWord}
                  onChange={this.onChange}
                />
                <div>
                  <SitesDisplay showSites={this.state.showSites} />
                </div>
            </div>
            <Footer />
        </div>
        );
      }
    }


  MainApp.propTypes = {
    sites: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
  };

import React from 'react';
import { connect } from 'react-redux';
import {getFiches} from '../actions/ficheActions';

const fiche = (props) => {
  return (
    <div>
        <p>TTkkdest</p>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      fiche: state.myFiche.fiche
    }
}

export default connect(mapStateToProps, getFiches)(fiche);
import React from 'react';
import { connect } from 'react-redux';
import {getFiches} from '../actions/ficheActions';

const fiche = (props) => {
  return (
    <div>
        <p>test1
          2
          
        </p>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      fiche: state.myFiche.fiche
    }
}

export default connect(mapStateToProps, getFiches)(fiche);
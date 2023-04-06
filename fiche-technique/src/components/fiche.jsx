import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {getFiches} from '../actions/ficheActions';

const fiche = () => {
 
  return (
    <Fragment>
        
    </Fragment>
  )
}

const mapStateToProps = (state) => {
    return {
      fiche: state.myFiche.fiche
    }
}

export default connect(mapStateToProps, { getFiches })(fiche);
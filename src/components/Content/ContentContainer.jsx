import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { contentThunkCreator, changePhotosThunk } from '../../Redux/content-reducer'
import { Content } from './Content'


const ContentContainer = (props) => {

  useEffect(()=>{
    props.contentThunkCreator()
  }, [])

  return (
    <div className='Content-Container'>
      <Content photos={props.state.contentPage.photos}
              changePhotosThunk={props.changePhotosThunk}/>
    </div>
  );
}

let mapStateToProps = (state)=>{

  return {
    state: state,
  }
}

export default connect (mapStateToProps, { contentThunkCreator, changePhotosThunk })(ContentContainer)
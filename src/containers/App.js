// react
import { connect } from 'react-redux'

import LibraryList from '../components/applications/LibraryList/LibraryList';

const mapStateToProps = (state) => {
  return {
    libraries: state.libraries,
    selectedLibraryId: state.selectedLibrary.id
  };
};

export default connect(mapStateToProps)(LibraryList);

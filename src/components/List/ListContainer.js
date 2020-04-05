import { connect } from "react-redux";
import List from "./List";
import { getColumnsForList } from "../../redux/columnsRedux";
import { createAction_addColumn } from "../../redux/columnsRedux";

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredList = state.lists.filter(list => list.id == id);
  const listParams = filteredList[0] || {};
  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title =>
    dispatch(
      createAction_addColumn({
        // payload
        listId: props.match.params.id,
        title,
      })
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(List);

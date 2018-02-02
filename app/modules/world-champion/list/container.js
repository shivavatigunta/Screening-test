import { connect } from "react-redux";
import { 
	toggleChampionListIsPageLoading, 
	getChampionListPageAsync, 
	toggleChampionListIsQuerying,
	queryChampionListAsync
} from "../actions";
import List from "./index";

//Mapping states(which are required)
const mapStateToProps = state => ({
  isChampionListPageLoading: state.champion.isChampionListPageLoading,
  championListPageError: state.champion.championListPageError, 
  championListLimit: state.champion.championListLimit,
  championListOffset: state.champion.championListOffset,
  championList: state.champion.championList,
  isQueryingChampionList: state.champion.isQueryingChampionList, 
  queryChampionListError: state.champion.queryChampionListError
});

//Mapping actions(which are required)
const mapDispatchToProps = ({
  toggleChampionListIsPageLoading,
  getChampionListPageAsync,
  toggleChampionListIsQuerying,
  queryChampionListAsync
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
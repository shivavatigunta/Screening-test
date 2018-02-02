import { connect } from "react-redux";
import { 
	toggleRaceListTopperIsPageLoading, 
	getRaceListTopperPageAsync,
	getSeasonChampionAsync
} from "../actions";
import List from "./index";

//Mapping states(which are required)
const mapStateToProps = state => ({ 
  isRaceListTopperPageLoading: state.race.isRaceListTopperPageLoading,
  raceListTopperPageError: state.race.raceListTopperPageError, 
  raceListTopperList: state.race.raceListTopperList,
  seasonChampion: state.race.seasonChampion 
});

//Mapping actions(which are required)
const mapDispatchToProps = ({
  toggleRaceListTopperIsPageLoading,
  getRaceListTopperPageAsync,
  getSeasonChampionAsync
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
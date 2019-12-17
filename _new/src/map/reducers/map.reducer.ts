import { IAction } from '../../shared/action';
import update from 'immutability-helper';
import {
  LOADINGDONE,
  SETCONTENT,
  SETDETAILSERVICE
} from '../actions/map.actions';
import { DemoData } from '../../assets/data/dataType';

export interface IState {
  laoding: boolean;
  content: Array<DemoData>;
  detailedService: DemoData;
}

const initialState: IState = {
  laoding: true,
  content: [],
  detailedService: {}
};

export const Map = (state: IState = initialState, action: IAction<any>) => {
  switch (action.type) {
    case LOADINGDONE:
      return update(state, {
        laoding: { $set: false }
      });

    case SETCONTENT:
      return update(state, {
        content: { $set: action.payload }
      });

    case SETDETAILSERVICE:
      return update(state, {
        detailedService: { $set: action.payload }
      });

    default:
      return state;
  }
};
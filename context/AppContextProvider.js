import HistoricoManutencaoProvider from '../hooks/HistoricoManutencaoContext';
import { combineContexts } from './combineContexts';

const providers = [HistoricoManutencaoProvider];
export const AppContextProvider = combineContexts(providers);

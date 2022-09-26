import HistoricoManutencaoProvider from '../hooks/HistoricoManutencaoContext';
import { combineContexts } from './combineContexts';

export const AppContextProvider = combineContexts(HistoricoManutencaoProvider);

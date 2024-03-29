import {generatePath} from 'react-router-dom'

interface SwitchRoutes {
  root: string;
  list: string;
  details: string;
  listCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  details: "/detail/:id",
  listCharacter: "/listCharacter",
};

interface Routes extends Omit<SwitchRoutes, "details">{
  details: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  details: id => generatePath(switchRoutes.details, {id}),
}


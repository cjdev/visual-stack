import './global';

// modules that do not need qualification. i.e., the components
// they export can be scoped to VisualStack.<component>
export * from './components/Button';
export * from './components/Spinner';

// modules that need scoping. i.e. the components they
// export need to be scoped to VisualStack.<module>.<component>
import * as BlankSlate from './components/BlankSlate';
import * as Form from './components/Form';
import * as List from './components/List';
import * as MenuBar from './components/MenuBar';
import * as Modal from './components/Modal';
import * as PageHeader from './components/PageHeader';
import * as Panel from './components/Panel';
import * as SideNav from './components/SideNav';

export {
  BlankSlate,
  Form,
  List,
  MenuBar,
  Modal,
  PageHeader,
  Panel,
  SideNav,
};


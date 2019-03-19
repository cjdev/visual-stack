import React from "react";
import {Demo, Snippet} from '../../../components/Demo';
import Select from '@cjdev/visual-stack/lib/components/Select';
import {Body, Header, Panel} from '@cjdev/visual-stack/lib/components/Panel';


const PanelComponent =({header, children}) => (
  <Panel>
    {header ? <Header>{header}</Header> : null}
    <Body>
    {children}
    </Body>
  </Panel>
);

export default () =>
  <Demo srcFile="/samples/src/containers/Components/Docs/select.js">
    { snippets => {
      return (
        <div>
          <PanelComponent header="Dropdown powered by React Select">
            A full list supported props can be found at: <a href="https://react-select.com/home">react-select.com</a>
            {/* s1:start */}
            <Select
              options={[
                {value: 'chocolate', label: 'Chocolate'},
                {value: 'strawberry', label: 'Strawberry'},
                {value: 'vanilla', label: 'Vanilla'},
              ]}/>
            {/* s1:end */}
            <Snippet tag="s1" src={snippets}/>
          </PanelComponent>
          <PanelComponent header="Select with error">
            {/* s2:start */}
            <Select
              options={[
                {value: 'chocolate', label: 'Chocolate'},
                {value: 'strawberry', label: 'Strawberry'},
                {value: 'vanilla', label: 'Vanilla'},
              ]}
              error="something truthy here"/>
            {/* s2:end */}
            <Snippet tag="s2" src={snippets}/>
          </PanelComponent>
          <PanelComponent header="Disabled select">
            {/* s3:start */}
            <Select
              options={[
                {value: 'chocolate', label: 'Chocolate'},
                {value: 'strawberry', label: 'Strawberry'},
                {value: 'vanilla', label: 'Vanilla'},
              ]}
              disabled={true}/>
            {/* s3:end */}
            <Snippet tag="s3" src={snippets}/>
          </PanelComponent>
        </div>
      );
    }}
  </Demo>;

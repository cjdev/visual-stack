import React from 'react';
import {Body, Header, Panel} from '@cjdev/visual-stack/lib/components/Panel';
import {Demo, Snippet} from '../../../components/Demo';
import {Button} from '@cjdev/visual-stack/lib/components/Button';
import {AccountIcon, CodeIcon} from '@cjdev/visual-stack/lib/components/Icons';

export default () =>
    <Demo srcFile="/samples/src/containers/Components/Docs/button.js">
    { snippets => {
      return (
        <div>
          <Panel>
            <Header>
              <b>New</b> Platform Buttons (in progress)
            </Header>
            <Body>
              { /* s3:start */ }
              <Button type="solid-primary">Solid Primary</Button>
              <Button type="solid-secondary">Solid Secondary</Button>
              <Button type="outline-primary">Outline Primary</Button>
              <Button type="outline-secondary">Outline Secondary</Button>
              <Button type="rounded-solid">+</Button>
              <Button type="rounded-outline">–</Button>
              <Button type="icon"><AccountIcon /></Button>
              <Button type="text">Text</Button>
              <Button type="text"><CodeIcon /> Icon and Text</Button>
              <Button type="text-link">Text Link</Button>
              { /* s3:end */ }
              <Snippet tag="s3" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>
              Disabled States
            </Header>
            <Body>
            { /* s4:start */ }
            <Button type="solid-primary" disabled>Disabled</Button>
            <Button type="solid-primary" className="disabled">Disabled using className</Button>
            <Button type="solid-secondary" disabled>Disabled</Button>
            <Button type="outline-primary" disabled>Disabled</Button>
            <Button type="outline-secondary" disabled>Disabled</Button>
            <Button type="icon" disabled><AccountIcon /></Button>
            <Button type="text" disabled>Text</Button>
            <Button type="text-link" disabled>Text Link</Button>
            { /* s4:end */ }
            <Snippet tag="s4" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>
              Button Sizing
            </Header>
            <Body>
            { /* s1:start */ }
            <Button type="primary" large={true}>Large</Button>
            { /* s1:end */ }
            <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>
              Default Buttons [Deprecated]
            </Header>
            <Body>
              { /* s2:start */ }
              <Button type="primary">Primary</Button>
              <Button type="success">Success</Button>
              <Button type="info">Info</Button>
              <Button type="default">Default</Button>
              <Button type="warning">Warning</Button>
              <Button type="danger">Danger</Button>
              { /* s2:end */ }
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;


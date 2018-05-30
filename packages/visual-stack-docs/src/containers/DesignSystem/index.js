import React from 'react';

import { PageHeader, PageTitle } from '@cjdev/visual-stack/lib/components/PageHeader';
import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
import { Table, THead, TBody, Tr, Th, Td } from '@cjdev/visual-stack/lib/components/Table';
import './index.css';

const DesignSystem = () =>
<div>

  <PageHeader>
    <PageTitle>Design System</PageTitle>
  </PageHeader>
  <PageContent>

    <h1>Headings</h1>
    <Table>
      <THead>
        <Tr>
          <Th>Element Name</Th>
          <Th>Preview</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Heading 1</Td>
          <Td><h1>Heading 1</h1></Td>
        </Tr>
        <Tr>
          <Td>Heading 2</Td>
          <Td><h2>Heading 2</h2></Td>
        </Tr>
        <Tr>
          <Td>Heading 3</Td>
          <Td><h3>Heading 3</h3></Td>
        </Tr>
        <Tr>
          <Td>Heading 4</Td>
          <Td><h4>Heading 4</h4></Td>
        </Tr>
        <Tr>
          <Td>Heading 5</Td>
          <Td><h5>Heading 6</h5></Td>
        </Tr>
        <Tr>
          <Td>Heading 6</Td>
          <Td><h6>Heading 6</h6></Td>
        </Tr>
      </TBody>
    </Table>

<br /><br /><br /><br />

    <h1>Inline Text Elements</h1>
    <Table>
      <THead>
        <Tr>
          <Th>Element Name</Th>
          <Th>Preview</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Bold</Td>
          <Td><b>Bold</b></Td>
        </Tr>
        <Tr>
          <Td>Italic</Td>
          <Td><i>Italic</i></Td>
        </Tr>
        <Tr>
          <Td>Emphasis</Td>
          <Td><em>Emphasis</em></Td>
        </Tr>
        <Tr>
          <Td>Link</Td>
          <Td><a href="#" title="Link">Link</a></Td>
        </Tr>
        <Tr>
          <Td>Strong</Td>
          <Td><strong>Strong</strong></Td>
        </Tr>
        <Tr>
          <Td>Small</Td>
          <Td><small>Small</small></Td>
        </Tr>
        <Tr>
          <Td>Abbr</Td>
          <Td><abbr>Abbr</abbr></Td>
        </Tr>
        <Tr>
          <Td>Timestamp</Td>
          <Td><time>12:00 PM</time></Td>
        </Tr>
        <Tr>
          <Td>Inline Code</Td>
          <Td><code>Inline Code</code></Td>
        </Tr>
        <Tr>
          <Td>Preformatted Code</Td>
          <Td><pre><code>First line of code
Second line of code</code></pre></Td>
        </Tr>
        <Tr>
          <Td>Keyboard Shortcuts</Td>
          <Td><kbd>ctrl + C</kbd></Td>
        </Tr>
      </TBody>
    </Table>

<br /><br /><br /><br />

    <h1>Block Elements</h1>
    <Table>
      <THead>
        <Tr>
          <Th>Element Name</Th>
          <Th>Preview</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Paragraph</Td>
          <Td><p>This is a paragraph.</p></Td>
        </Tr>
        <Tr>
          <Td>Preformatted Text</Td>
          <Td><pre>This is a block of preformatted text.</pre></Td>
        </Tr>
        <Tr>
          <Td>Address</Td>
          <Td><address>Address Element<br />1234 Main St. Suite 100<br />City, State, Zip<br />Country</address></Td>
        </Tr>
        <Tr>
          <Td>Image</Td>
          <Td><img className="docs-img-placeholder" alt="Alt Text" title="Image Title" /></Td>
        </Tr>
        <Tr>
          <Td>Horizontal Rule</Td>
          <Td><hr /></Td>
        </Tr>
        <Tr>
          <Td>Blockquote</Td>
          <Td><blockquote>This is a blockquote.</blockquote></Td>
        </Tr>
        <Tr>
          <Td>Ordered List</Td>
          <Td>
            <ol>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ol>
          </Td>
        </Tr>
        <Tr>
          <Td>Unordered List</Td>
          <Td>
            <ul>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
          </Td>
        </Tr>
        <Tr>
          <Td>Definition List</Td>
          <Td>
            <dl>
              <dt>Definition Term 1</dt>
              <dd>Description Details</dd>
            </dl>
            <dl>
              <dt>Definition Term 2</dt>
              <dd>Description Details</dd>
            </dl>
          </Td>
        </Tr>
        <Tr>
          <Td>Figure</Td>
          <Td><figure>Figure</figure></Td>
        </Tr>
        <Tr>
          <Td>Figcaption</Td>
          <Td><figcaption>Figcaption</figcaption></Td>
        </Tr>
      </TBody>
    </Table>

<br /><br /><br /><br />

    <h1>Form Elements</h1>
    <Table>
      <THead>
        <Tr>
          <Th>Element Name</Th>
          <Th>Preview</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Button</Td>
          <Td><button>Button</button></Td>
        </Tr>
        <Tr>
          <Td>Checkbox</Td>
          <Td>
            <input type="checkbox" checked />
            <br />
            <input type="checkbox" />
          </Td>
        </Tr>
        <Tr>
          <Td>Color</Td>
          <Td><input type="color" /></Td>
        </Tr>
        <Tr>
          <Td>Date</Td>
          <Td><input type="date" /></Td>
        </Tr>
        <Tr>
          <Td>Datetime</Td>
          <Td><input type="datetime" /></Td>
        </Tr>
        <Tr>
          <Td>Datetime Local</Td>
          <Td><input type="datetime-local" /></Td>
        </Tr>
        <Tr>
          <Td>Fieldset with Legend</Td>
          <Td>
            <fieldset>
              <legend>Legend</legend>
              <label for="field">Label</label>
              <input id="field" />
            </fieldset>
          </Td>
        </Tr>
        <Tr>
          <Td>File</Td>
          <Td><input type="file" /></Td>
        </Tr>
        <Tr>
          <Td>Label</Td>
          <Td><label>Label</label></Td>
        </Tr>
        <Tr>
          <Td>Month</Td>
          <Td><input type="month" /></Td>
        </Tr>
        <Tr>
          <Td>Number</Td>
          <Td><input type="number" min="0" max="15" step="3" /></Td>
        </Tr>
        <Tr>
          <Td>Password</Td>
          <Td><input type="password" /></Td>
        </Tr>
        <Tr>
          <Td>Progress</Td>
          <Td><progress max="100" value="50"></progress></Td>
        </Tr>
        <Tr>
          <Td>Radio</Td>
          <Td>
            <input type="radio" checked />
            <br />
            <input type="radio" />
          </Td>
        </Tr>
        <Tr>
          <Td>Range</Td>
          <Td><input type="range" /></Td>
        </Tr>
        <Tr>
          <Td>Reset</Td>
          <Td><input type="reset" /></Td>
        </Tr>
        <Tr>
          <Td>Search</Td>
          <Td><input type="search" /></Td>
        </Tr>
        <Tr>
          <Td>Select</Td>
          <Td>
            <select>
              <option>Option</option>
              <option>Option</option>
              <option>Option</option>
            </select>
          </Td>
        </Tr>
        <Tr>
          <Td>Select Optgroups</Td>
          <Td>
            <select>
              <optgroup label="Optgroup Label 1">
                <option>Option</option>
                <option>Option</option>
                <option>Option</option>
              </optgroup>
              <optgroup label="Optgroup Label 2">
                <option>Option</option>
                <option>Option</option>
                <option>Option</option>
              </optgroup>
            </select>
          </Td>
        </Tr>
        <Tr>
          <Td>Submit</Td>
          <Td><input type="submit" /></Td>
        </Tr>
        <Tr>
          <Td>Tel</Td>
          <Td><input type="tel" /></Td>
        </Tr>
        <Tr>
          <Td>Text Input</Td>
          <Td><input type="text" placeholder="Text Input" /></Td>
        </Tr>
        <Tr>
          <Td>Textarea</Td>
          <Td><textarea></textarea></Td>
        </Tr>
        <Tr>
          <Td>Time</Td>
          <Td><input type="time" /></Td>
        </Tr>
        <Tr>
          <Td>URL</Td>
          <Td><input type="url" /></Td>
        </Tr>
        <Tr>
          <Td>Week</Td>
          <Td><input type="week" /></Td>
        </Tr>
      </TBody>
    </Table>

<br /><br /><br /><br />

    <h1>Components</h1>
    <div className="section">
      <div className="card">
        <div className="card-section">
          <div className="card-header">
            <h1 className="card-title">Card Title</h1>
          </div>
          <div className="card-body">
            <p>Body Text</p>
          </div>
          <div className="card-footer">
            Footer
          </div>
        </div>
      </div>
    </div>


  </PageContent>

</div>;

export default DesignSystem;

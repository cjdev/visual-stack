import React from 'react';

import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
import { PageHeader, PageTitle } from '@cjdev/visual-stack/lib/components/PageHeader';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import './index.css';

const DesignSystem = () =>
  <div>
    <PageHeader>
      <PageTitle>Design System</PageTitle>
    </PageHeader>
    <PageContent>

      <div className="page-header">
        <div className="">
          <h1 className="page-header-title">Design System - In Progress</h1>
        </div>
      </div>


      <div className="section">
        <div className="">
          <div className="card">
            <div className="card-section">
              <div className="card-header">
                <h1 className="card-title">Account Settings</h1>
              </div>
              <div className="card-body">
                <div className="input-container">
                  <label>Organization Name</label>
                  <input className="" type="text" />
                </div>
                <div className="input-container">
                  <label>Street Address</label>
                  <input className="" type="text" />
                </div>
                <div className="input-container">
                  <label>City</label>
                  <input className="" type="text" />
                </div>
                <div className="input-container">
                  <label>State</label>
                  <select>
                    <option>Select State</option>
                  </select>
                </div>
                <div className="input-container">
                  <label>Zip</label>
                  <input className="" type="text" />
                </div>
                <div className="input-container">
                  <button className="solid-primary-btn lrg-btn">Save</button>
                </div>
              </div>
              <div className="card-footer">
                Footer
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="section">
        <div className="">
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
      </div>



      <div className="page-header">
        <div className="">
          <h1 className="page-header-title">Typography</h1>
        </div>
      </div>


      <Panel>
        <Header>
          Headings
        </Header>
        <Body>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </Body>
      </Panel>

      <Panel>
        <Header>
          Inline Elements
        </Header>
        <Body>
          <a href="#" title="Link">Link</a>
          <br />

          <em>Emphasis</em>
          <br />

          <strong>Strong</strong>
          <br />

          <small>Small</small>
          <br />

          <abbr>Abbr</abbr>
          <br />

          <time>12:00 PM</time>
          <br />

          <code>Inline Code</code>
          <br />

          <pre><code>one line of code

second line of code

long line of code long line of code long line of code long line of code long line of code long line of code long line of code long line of code long line of code</code></pre>

          <i>Italic</i>
          <br />

          <kbd>ctrl + C</kbd>
          <br />

          <b>Bold</b>
          <br />

          <span>Span</span>

          <br />

        </Body>
      </Panel>



      <Panel>
        <Header>
          Form Elements
        </Header>
        <Body>

          <form>
            <label>Label</label>
            <br />
            <input type="button" placeholder="Text Input" />
            <br />
            <input type="checkbox" /><label>Checkbox</label>
            <br />
            <input type="color" />
            <br />
            <input type="date" />
            <br />
            <input type="datetime" />
            <br />
            <input type="email" />
            <br />
            <input type="file" />
            <br />
            <input type="image" />
            <br />
            <input type="month" />
            <br />
            <input type="number" />
            <br />
            <input type="password" />
            <br />
            <input type="radio" />
            <br />
            <input type="range" />
            <br />
            <input type="search" />
            <br />
            <input type="submit" />
            <br />
            <br />
            <input type="tel" />
            <br />
            <input type="text" placeholder="Text Input" />
            <br />
            <input type="time" />
            <br />
            <input type="url" />
            <br />
            <input type="week" />
            <br />
            <button>Button</button>
            <br />
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
            <br />
            <textarea>Textarea</textarea>
            <br />
            <progress></progress>
            <br />
            <meter></meter>
            <br />
            <fieldset>Fieldset</fieldset>
            <br />
            <legend>Legend</legend>

          </form>



          <hr />






          <hr />

          <h1>Block Elements</h1>

          <article>article</article>
          <section>section</section>
          <nav>nav</nav>
          <aside>aside</aside>
          <header>header</header>
          <footer>footer</footer>
          <main></main>

          <hr />

          <h1>Content</h1>

          <p>This is a paragraph.</p>

          <hr></hr>

          <pre>This is a block of preformatted text.</pre>

          <blockquote>This is a blockquote.</blockquote>

          <ol>
            <li>Ordered List Item</li>
            <li>Ordered List Item</li>
            <li>Ordered List Item</li>
          </ol>

          <ul>
            <li>Unordered List Item</li>
            <li>Unordered List Item</li>
            <li>Unordered List Item</li>
          </ul>

          <br />

          <dl>
            <dt>Definition Term</dt>
            <dd>Description Details</dd>
          </dl>

          <br />

          <figure>Figure</figure>

          <br />

          <figcaption>Figcaption</figcaption>

          <br />

          <address>Address Element<br />1234 Main St. Suite 100<br />City, State, Zip<br />Country</address>

          <br />

          <img alt="" />

          <hr />

          <table>
            <thead>
              <tr>
                <th>Heading</th>
                <th>Heading</th>
                <th>Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Value</td>
                <td>Value</td>
                <td>Value</td>
              </tr>
            </tbody>
          </table>

          <hr />




          <hr />

        </Body>
      </Panel>
    </PageContent>
  </div>;

export default DesignSystem;

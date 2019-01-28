import React from 'react';

import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
import { PageHeader, PageTitle, PageHeaderSection } from '@cjdev/visual-stack/lib/components/PageHeader';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Button } from '@cjdev/visual-stack/lib/components/Button';
import {
  Table,
  THead,
  TBody,
  Tr,
  Th,
  Td,
} from '@cjdev/visual-stack/lib/components/Table';
import './index.css';

const Layouts = () =>
  <div>
    <PageHeader>
      <PageTitle>Layouts</PageTitle>
      <PageHeaderSection>Test to see that Right Aligned is not cut off</PageHeaderSection>
    </PageHeader>
    <PageContent>
    
      <Panel>
        <Header>
          Application Layout
        </Header>
        <Body>
          ApplicationLayout includes the SideNav component and necessary CSS to render a full page application.
        </Body>
      </Panel>
        
      <Panel>
        <Body>
          <h2>Headings and Paragraphs</h2>
        	<Table>
        		<THead>
        			<Tr>
        				<Th width="180">Element</Th>
        				<Th>Example</Th>
      				</Tr>
        		</THead>
        		<TBody>
        			<Tr>
        				<Td>H1</Td>
        				<Td><span className="h1">Heading 1</span></Td>
      				</Tr>
        			<Tr>
        				<Td>H2</Td>
        				<Td><span className="h2">Heading 2</span></Td>
      				</Tr>
        			<Tr>
        				<Td>H3</Td>
        				<Td><span className="h3">Heading 3</span></Td>
      				</Tr>
        			<Tr>
        				<Td>H4</Td>
        				<Td><span className="h4">Heading 4</span></Td>
      				</Tr>
        			<Tr>
        				<Td>H5</Td>
        				<Td><span className="h5">Heading 5</span></Td>
      				</Tr>
        			<Tr>
        				<Td>H6</Td>
        				<Td><span className="h6">Heading 6</span></Td>
      				</Tr>
        			<Tr>
        				<Td>Paragraph</Td>
        				<Td><p>This is a paragraph.</p></Td>
      				</Tr>
	        	</TBody>
        	</Table>
        	
          <h2>Inline Text Elements</h2>
        	<Table>
        		<THead>
        			<Tr>
        				<Th width="180">Element</Th>
        				<Th>Example</Th>
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
								<Td><abbr title="Abbreviation">Abbr</abbr></Td>
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
								<Td>Keyboard Shortcuts</Td>
								<Td><kbd>ctrl + C</kbd></Td>
							</Tr>
	        	</TBody>
        	</Table> 
        	
          <h2>Block Elements</h2>
					<Table>
						<THead>
							<Tr>
								<Th width="180">Element</Th>
								<Th>Preview</Th>
							</Tr>
						</THead>
						<TBody>
							<Tr>
								<Td>Paragraph</Td>
								<Td><p>This is a paragraph.</p></Td>
							</Tr>
							<Tr>
								<Td>Preformatted Code</Td>
								<Td><pre><code>First line of code. 
								   Second line of code</code></pre></Td>
							</Tr>
							<Tr>
								<Td>Preformatted Text</Td>
								<Td><pre>This is a block of preformatted text.</pre></Td>
							</Tr>
							<Tr>
								<Td>Address</Td>
								<Td>
									<address>
										<b>Commission Junction</b><br />
										1234 Main St. Suite 100<br />
										City, State, Zip<br />
										Country
									</address>
								</Td>
							</Tr>
							<Tr>
								<Td>Image</Td>
								<Td><img alt="Alt Text" title="Image Title" /></Td>
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
										<li>List Item
											<ol>
												<li>List Item</li>
												<li>List Item</li>
												<li>List Item</li>
											</ol>
										</li>
										<li>List Item</li>
									</ol>
								</Td>
							</Tr>
							<Tr>
								<Td>Unordered List</Td>
								<Td>
									<ul>
										<li>List Item</li>
										<li>List Item
											<ul>
												<li>List Item</li>
												<li>List Item</li>
												<li>List Item</li>
											</ul>
										</li>
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
					
	        <h2>Form Elements</h2>
        	<Table>
        		<THead>
        			<Tr>
        				<Th width="180">Element</Th>
        				<Th>Example</Th>
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
			          	<input type="checkbox" checked /><label>Label</label>
			          	<input type="checkbox" /><label>Label</label>
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
        				<Td>Email</Td>
        				<Td><input type="email" value="visualstack@cj.com" /></Td>
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
        				<Td><input type="number" value="123456" /></Td>
      				</Tr>
        			<Tr>
        				<Td>Password</Td>
        				<Td><input type="password" placeholder="************" /></Td>
      				</Tr>
        			<Tr>
        				<Td>Progress</Td>
        				<Td><progress max="100" value="50"></progress></Td>
      				</Tr>
        			<Tr>
        				<Td>Radio</Td>
        				<Td>
			          	<input type="radio" checked /><label>Label</label>
			          	<input type="radio" /><label>Label</label>
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
        				<Td><input type="search" placeholder="What are you searching for?" /></Td>
      				</Tr>
        			<Tr>
        				<Td>Select</Td>
        				<Td>
	        				<select name="select">
									  <option>Select Option</option>
			          		<optgroup label="Option Group">
										  <option>Option</option>
										  <option>Option</option>
										  <option>Option</option>
			          		</optgroup>
									</select>
								</Td>
      				</Tr>
        			<Tr>
        				<Td>Submit</Td>
        				<Td><input type="submit" value="Submit" /></Td>
      				</Tr>
        			<Tr>
        				<Td>Tel</Td>
        				<Td><input type="tel" value="(123) 456-7890" /></Td>
      				</Tr>
        			<Tr>
        				<Td>Text</Td>
        				<Td><input type="text" placeholder="Placeholder text" /></Td>
      				</Tr>
        			<Tr>
        				<Td>Textarea</Td>
        				<Td><textarea placeholder="Enter text..."></textarea></Td>
      				</Tr>
        			<Tr>
        				<Td>Time</Td>
        				<Td><input type="time" value="03:00 PM" /></Td>
      				</Tr>
        			<Tr>
        				<Td>URL</Td>
        				<Td><input type="url" placeholder="http://www.cj.com" /></Td>
      				</Tr>
        			<Tr>
        				<Td>Week</Td>
        				<Td><input type="week" /></Td>
      				</Tr>
        			<Tr>
        				<Td>Disabled Text Input</Td>
        				<Td><input type="text" placeholder="Disabled Text Input" disabled /></Td>
      				</Tr>
	        	</TBody>
        	</Table>
        </Body>
      </Panel>
      
      
      <Panel>
        <Body>
					<div className="vs-grid-wrapper">
	        	<h2 className="h3">Organization Information</h2>
		        <div className="vs-grid-container">
		        	<div className="vs-grid-item vs-grid-item-1">
			        	
								<label>Organization Name</label>
								<input type="text" placeholder="" />
								
								<label>Street Address</label>
								<input type="text" placeholder="" />

								<div className="vs-grid-container-2">
									<div className="vs-grid-item vs-grid-item-1">
										<label>City</label>
										<input type="text" placeholder="" />
									</div>
									<div className="vs-grid-item vs-grid-item-2">
										<label>State</label>
										<select>
										  <option>Select</option>
										</select>
									</div>
									<div className="vs-grid-item vs-grid-item-3">
										<label>Zip</label>
										<input type="text" placeholder="" />
									</div>
								</div>
								
								<label>Country</label>
								<select>
								  <option>Select Country</option>
								</select>
								
								<h2 className="h3">Location Settings</h2>
								
								<label>Functional Currency</label>
        				<select>
								  <option>Select</option>
								</select>
								
								<label>Language</label>
        				<select>
								  <option>Select</option>
								</select>
								
								<label>Date Format</label>
        				<select>
								  <option>Select</option>
								</select>
								
		          	<label>
			          	<input type="checkbox" />
									<span>Limit initial search results to country of location</span>
								</label>
								
								<br />
								<br />
								
		          	<Button type="solid-primary" className="no-gutters">Save</Button>
		          	<Button type="text" className="">Cancel</Button>

		        	</div>
		        	<div className="vs-grid-item vs-grid-item-2">
								<label>Phone Number</label>
								<input type="text" placeholder="" />
								
								<label>Fax</label>
								<input type="text" placeholder="" />
		        	</div>
		        </div>
	        </div>
        </Body>
      </Panel>
      
    </PageContent>
  </div>;

export default Layouts;
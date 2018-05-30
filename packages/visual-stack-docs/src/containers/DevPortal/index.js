import React from 'react';
import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
import { PageHeader, PageTitle } from '@cjdev/visual-stack/lib/components/PageHeader';
import { Table, THead, TBody, Tr, Th, Td } from '@cjdev/visual-stack/lib/components/Table';
import './index.css';
const DevPortal = () =>
<div>
  <PageHeader>
    <PageTitle>Dev Portal</PageTitle>
  </PageHeader>
  <PageContent>

    <div className="container">
      <div className="row">
        <div className="col">

          <h1>foo-spec</h1>
          <p className="lead">The Foo API: <a href="//api.cj.com/foo">api.cj.com/foo</a></p>

          <h2>Queries</h2>

          <h4>commissionsByPostingDate : <span><span>[<span><a href="#Commission">Commission</a>!</span>]</span>!</span></h4>
          <p>Returns commissions whose posting date is between the two supplied posting dates. Since an equivalent call can be made to <code>commissions</code>, this method my be deprecated or simply removed in a future release.</p>
          <table className="vs-table">
            <thead className="vs-thead"><tr className="vs-row"><th className="vs-cell vs-table-header">Argument</th><th className="vs-cell vs-table-header">Type</th><th className="vs-cell vs-table-header">Description</th></tr></thead><tbody className="vs-tbody"><tr className="vs-row"><td className="vs-cell">startDate</td><td className="vs-cell"><span><a href="#String">String</a>!</span></td><td className="vs-cell">ISO 8601 datetime, e.g. "1999-12-31T11:59:59Z"</td></tr><tr className="vs-row"><td className="vs-cell">endDate</td><td className="vs-cell"><span><a href="#String">String</a>!</span></td><td className="vs-cell">ISO 8601 datetime, e.g. "1999-12-31T11:59:59Z"</td></tr></tbody>
          </table>

          <h4 className="">commissions : <span><span>[<span><a href="#Commission">Commission</a>!</span>]</span>!</span></h4>
          <p>Returns commissions, filtered according to the supplied arguments.</p>
          <p>Typical Use Cases:</p>
          <ul>
            <li>Search by commission id <code>this is an example of the code HTML element</code></li>
          </ul>
          <p>Best Practice: in order to optimize performance and throughput, this api uses sensible defaults for date range parameters.</p>
          <p>If you specify only one bound of a date range (e.g. sinceEventDate but not beforeEventDate), then the corresponding bound will default to 24 hours from the specified bound.</p>
          <p>If you specify no arguments, data from the past 24 hours by posting date will be returned.</p>
          <table className="vs-table">
            <thead className="vs-thead">
              <tr className="vs-row"><th className="vs-cell vs-table-header">Argument</th><th className="vs-cell vs-table-header">Type</th><th className="vs-cell vs-table-header">Description</th></tr>
            </thead>
            <tbody className="vs-tbody">
              <tr className="vs-row"><td className="vs-cell">sincePostingDate</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell">ISO 8601 datetime, e.g. "1999-12-31T11:59:59Z". If present, filters results, keeping commissions whose posting date is greater than or equal to the supplied argument.</td></tr><tr className="vs-row"><td className="vs-cell">beforePostingDate</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell">ISO 8601 datetime, e.g. "1999-12-31T11:59:59Z". If present, filters results, keeping commissions whose posting date is less than the supplied argument.</td></tr><tr className="vs-row"><td className="vs-cell">sinceEventDate</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell">ISO 8601 datetime, e.g. "1999-12-31T11:59:59Z". If present, filters results, keeping commissions whose event date is greater than or equal to the supplied argument.</td></tr><tr className="vs-row"><td className="vs-cell">beforeEventDate</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell">ISO 8601 datetime, e.g. "1999-12-31T11:59:59Z". If present, filters results, keeping commissions whose event date is less than the supplied argument.</td></tr><tr className="vs-row"><td className="vs-cell">sinceCommissionId</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell">A commission's unique id. If present, filters results, keeping commissions whose commission id is greater than the supplied argument and whose posting date is greater than or equal to the posting date of the commission corresponding to the supplied argument.</td></tr><tr className="vs-row"><td className="vs-cell">commissionIds</td><td className="vs-cell"><span>[<span><a href="#String">String</a>!</span>]</span></td><td className="vs-cell">List of commission's unique ids. If present, query will return only the specified commissions.</td></tr>
            </tbody>
          </table>

          <h2>Types</h2>
          <h3>Objects</h3>
          <h4 className="">Commission</h4>
          <p>A record of a commissionable event, potentially including items purchased and advertiser-supplied custom attributes.</p>
          <p>Computed fields:</p>
          <ul>
            <li><code>items</code></li>
            <li><code>situations</code></li>
            <li><code>travelPixel</code></li>
          </ul>
          <p>Restricted fields:</p>
          <ul>
            <li><code>advCommissionAmountAdvCurrency</code> (Advertiser only)</li>
            <li><code>advCommissionAmountUsd</code> (Advertiser only)</li>
            <li><code>cjFeeAdvCurrency</code> (Advertiser only)</li>
            <li><code>cjFeeUsd</code> (Advertiser only)</li>
            <li><code>newToFile</code> (Advertiser only)</li>
            <li><code>sid</code> (Publisher only)</li>
          </ul>
          <p>Use the meta-field <code>..commissionFields</code> in your query to request all non-computed, unrestricted fields (such fields may be added manually).</p>

          <h4 id="Item">Item</h4>
          <p>A record of an item that was purchased as part of a commissionable event.</p>
          <p>Computed fields:</p>
          <ul>
            <li><code>situations</code></li>
          </ul>
          <p>Restricted fields: <em>none</em></p>
          <p>Use the meta-field <code>..itemFields</code> in your query to request all non-computed, unrestricted fields (such fields may be added manually).</p>
          <table className="vs-table">
            <thead className="vs-thead">
              <tr className="vs-row"><th className="vs-cell vs-table-header">Field</th><th className="vs-cell vs-table-header">Type</th><th className="vs-cell vs-table-header">Description</th></tr>
            </thead>
            <tbody className="vs-tbody">
              <tr className="vs-row"><td className="vs-cell">commissionItemId</td><td className="vs-cell"><span><a href="#String">String</a>!</span></td><td className="vs-cell">The unique id of the commission that generated this item record.</td></tr><tr className="vs-row"><td className="vs-cell">discountUsd</td><td className="vs-cell"><a href="#Float">Float</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">discountPubCurrency</td><td className="vs-cell"><a href="#Float">Float</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">discountAdvCurrency</td><td className="vs-cell"><a href="#Float">Float</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">pubCommissionAmountAdvCurrency</td><td className="vs-cell"><span><a href="#Float">Float</a>!</span></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">pubCommissionAmountPubCurrency</td><td className="vs-cell"><span><a href="#Float">Float</a>!</span></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">pubCommissionAmountUsd</td><td className="vs-cell"><span><a href="#Float">Float</a>!</span></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">quantity</td><td className="vs-cell"><span><a href="#Int">Int</a>!</span></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">saleAmountAdvCurrency</td><td className="vs-cell"><span><a href="#Float">Float</a>!</span></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">saleAmountPubCurrency</td><td className="vs-cell"><span><a href="#Float">Float</a>!</span></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">saleAmountUsd</td><td className="vs-cell"><span><a href="#Float">Float</a>!</span></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">situations</td><td className="vs-cell"><span><span>[<span><a href="#String">String</a>!</span>]</span>!</span></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">sku</td><td className="vs-cell"><span><a href="#String">String</a>!</span></td><td className="vs-cell"></td></tr>
            </tbody>
          </table>

          <h4 id="TravelPixel">TravelPixel</h4>
          <p>A record of custom travel attributes that the advertiser may have supplied as part of a commissionable event.</p>
          <p>Computed fields: <em>none</em></p>
          <p>Restricted fields: <em>none</em></p>
          <p>Use the meta-field <code>..travelPixelFields</code> in your query to request all non-computed unrestricted scalar fields (such fields may be added manually).</p>
          <table className="vs-table">
            <thead className="vs-thead">
              <tr className="vs-row">
                <th className="vs-cell vs-table-header">Field</th>
                <th className="vs-cell vs-table-header">Type</th>
                <th className="vs-cell vs-table-header">Description</th><
              /tr>
            </thead>
            <tbody className="vs-tbody">
              <tr className="vs-row"><td className="vs-cell">age</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">ancillarySpend</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">bookingDate</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">bookingStatus</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">bookingValuePostTax</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">bookingValuePreTax</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">brand</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">carClass</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">carOptions</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">carPayment</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">confirmationNumber</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">couponDiscount</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">cruiseBrand</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr><tr className="vs-row"><td className="vs-cell">cruiseGuests</td><td className="vs-cell"><a href="#String">String</a></td><td className="vs-cell"></td></tr>
            </tbody>
          </table>

          <h3>Scalars</h3>
          <table className="vs-table">
            <thead className="vs-thead">
              <tr className="vs-row"><th className="vs-cell vs-table-header">Name</th><th className="vs-cell vs-table-header">Description</th></tr>
            </thead>
            <tbody className="vs-tbody">
              <tr className="vs-row"><td className="vs-cell" id="ActionStatus">ActionStatus</td><td className="vs-cell"><div><p>Possible values: Closed, Extended, Locked, New.</p></div></td></tr><tr className="vs-row"><td className="vs-cell" id="ActionType">ActionType</td><td className="vs-cell"><div><p>Possible values: click, imp, item_lead, item_sale, sim_lead, sim_sale.</p></div></td></tr><tr className="vs-row"><td className="vs-cell" id="Instant">Instant</td><td className="vs-cell"><div><p>An ISO 8601 datetime, rendered in JSON as a string.</p></div></td></tr><tr className="vs-row"><td className="vs-cell" id="Boolean">Boolean</td><td className="vs-cell"><div><p>The <code>Boolean</code> scalar type represents <code>true</code> or <code>false</code>.</p></div></td></tr><tr className="vs-row"><td className="vs-cell" id="Float">Float</td><td className="vs-cell"><div><p>The <code>Float</code> scalar type represents signed double-precision fractional values as specified by <a href="http://en.wikipedia.org/wiki/IEEE_floating_point">IEEE 754</a>.</p></div></td></tr><tr className="vs-row"><td className="vs-cell" id="Int">Int</td><td className="vs-cell"><div><p>The <code>Int</code> scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.</p></div></td></tr><tr className="vs-row"><td className="vs-cell" id="String">String</td><td className="vs-cell"><div><p>The <code>String</code> scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.</p></div></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br />

        <div className="row">
          <div className="col-8">

            <section className="page-header">
              <div className="row">
                <div className="col">
                  <h1>Product Feeds</h1>
                </div>
              </div>
            </section>

            <div className="section">
              <h2>Overview</h2>
              <p>CJ’s product feeds functionality allows you to submit feeds of your products and their details to CJ. This enables publishers to find and promote your products on their sites. It also enables you to access rich product-level data about the products you are selling.</p>

              <h2>Eligibility</h2>
              <p>Almost all CJ advertisers are eligible to create and submit a product feed. The only advertisers who are not eligible are those who have a gateway without redirect style integration. This integration is uncommon. However if you are integrated via gateway without redirect and would like to submit a product feed, please contact the CJ Client Integration Team about changing your integration settings.</p>

              <h2>Registering Your Feed</h2>
              <p>To register a new product feed, navigate within your CJ account to Links > Feeds. If this is your first product feed, you will see an introduction page.</p>
              <p>Click the Register Feed button to access the feed registration form. The form has the fields below. All fields are required except for non-registered user emails. Note which fields will not be editable after the feed is created. Complete all fields and click Register Feed to be taken back to the Feeds page.</p>
              <pre>Returns commissions whose posting date is between the two supplied posting
              dates. Since an equivalent call can be made to `commissions`, this method
              my be deprecated or simply removed in a future release.</pre>

              <h2>Managing Your Feeds</h2>
              <p>To view and manage your product feeds, navigate to Links > Feeds. The table on that page displays all of your product feeds including details about each and the last import date for each. Each feed will have a split button with the following options:</p>
              <ul>
                <li><p>Click Edit to open the Edit Feed page and make changes to your feed. Refer to the table above to determine which fields are editable.</p></li>
                <li><p>Click Delete to delete your product feed. Doing so will remove all of the products in that feed from search results and will archive that product feed ad. Publishers may continue to host the links from that feed, but any clicks generated will be redirected to the archive URL you indicated when you registered the feed. Note that it may take up to 24 hours for a product feed to be removed completely from search results.</p></li>
                <li><p>Click View Performance to be directed to a performance report for that feed’s link ID.</p></li>
              </ul>
              <p>To change your CJ SFTP password, click the Reset Password button. The registered users on all of your SFTP subscriptions (product catalog or other) will receive an email with the new credentials.</p>
              <p>Note: Selecting to reset your SFTP password will reset the SFTP password for all of the subscriptions that use SFTP, including those that may not be product feeds. We strongly advise you to review all of the subscriptions under Account > Subscriptions before resetting your password to be sure you are not inadvertently resetting the password for other subscription types. Resetting your password cannot be undone.</p>
              <p>Passwords cannot be retrieved by CJ. If you have forgotten your password you must request a new one.</p>

              <h2>Product Feed Specification</h2>
              <h3>Choosing the Right Feed Spec For You</h3>
              <p>CJ accepts two feed formats: the Shopping (Google format) feed spec and the CJ Travel and Experiences feed spec. The Google Format feed is available now. The Travel and Experiences feed will be released later in 2018.</p>
              <p>The Shopping (Google Format) feed is best-suited for advertisers who are retail-focused. Examples of these advertisers include apparel, electronics, housewares, car parts, cosmetics or software. If you sell physical products with unique SKUs that you ship to a customer after purchase, use this feed.</p>
              <p>The CJ Travel and Experiences feed is best-suited for advertisers who are focused on travel, entertainment, and local products. Examples of these advertisers include hotels, vacations, cruises, concert tickets, restaurants, or local events. If you sell products that depend on a time and/or location, use this feed.</p>

              <h3>Shopping (Google Format)</h3>
              <p>The Shopping (Google Format) feed follows the feed specification used by the Google Merchant Center. If you are already submitting a product feed to your Google Merchant Center account, you should be able to use the same feed in your CJ account.</p>
              <p>The Google feed has the following fields. A brief explanation of each is in the table below. More detailed information follows.</p>
              <Table>
                <THead>
                  <Tr>
                    <Th>Field</Th>
                    <Th>Explanation</Th>
                    <Th>Requirements</Th>
                    <Th>Required</Th>
                  </Tr>
                </THead>
                <TBody>
                  <Tr>
                    <Td>ID</Td>
                    <Td>Your product’s unique identifier. Use SKU where possible.</Td>
                    <Td>Max 50 characters, Must be unique, Valid alphanum.</Td>
                    <Td>Yes</Td>
                  </Tr>
                  <Tr>
                    <Td>title</Td>
                    <Td>Your product’s name.</Td>
                    <Td>Max 150 characters</Td>
                    <Td>Yes</Td>
                  </Tr>
                  <Tr>
                    <Td>description</Td>
                    <Td>Your product’s description.</Td>
                    <Td>Max 5000 characters</Td>
                    <Td>Yes</Td>
                  </Tr>
                  <Tr>
                    <Td>link</Td>
                    <Td>Your product’s landing page.</Td>
                    <Td>Max 2000 characters, Must be value URL.</Td>
                    <Td>Yes</Td>
                  </Tr>
                  <Tr>
                    <Td>image_link</Td>
                    <Td>A link to an image of your product.</Td>
                    <Td>Max 2000 characters, Must be value URL.</Td>
                    <Td>No</Td>
                  </Tr>
                  <Tr>
                    <Td>mobile_link</Td>
                    <Td>Your product’s mobile-optimized landing page when you have a different URL for mobile and desktop traffic.</Td>
                    <Td>Max 2000 characters, Must be value URL.</Td>
                    <Td>No</Td>
                  </Tr>
                  <Tr>
                    <Td>additional_image_link</Td>
                    <Td>Up to ten (10) additional product images, can include product in use.</Td>
                    <Td>Max 2000 characters, Must be valid URL, Comma separated.</Td>
                    <Td>No</Td>
                  </Tr>
                </TBody>
              </Table>

              <h3>Field Details</h3>

              <h4>ID</h4>
              <p>A unique attribute to identify each product. We recommend using SKU. Every product in your feed must have a unique SKU; products that have the same ID in one feed will be removed when you import your feed. You can have the same SKU in separate feeds, for example if you are submitting the same products in feeds for different languages.</p>
              <p>If your CJ integration allows you to pass SKUs in your transaction data (i.e., you have an item-based pixel or batch), you can use the your product feed to populate the performance reports and product lists in your CJ account. In order to do so the ID you pass in your product feed mutch match exactly the SKUs you pass in your pixel or batch. For more details review the section on “Using your feed for item level commissioning.</p>
              <b>Requirements</b>
              <ul>
                <li>Required Field</li>
                <li>Maximum 50 characters</li>
                <li>Must be valid alphanumeric</li>
              </ul>
              <b>Errors</b>
              <ul>
                <li>Products with no valid ID will be rejected</li>
              </ul>

              <hr />

              <h4>Title</h4>
              <p>Your product’s name. Make your product name relevant, clear and specific. Include variation details, for example “Men’s shirt - blue - medium.”</p>
              <b>Requirements</b>
              <ul>
                <li>Required Field</li>
                <li>Maximum 150 characters</li>
              </ul>
              <b>Errors</b>
              <ul>
                <li>Must be valid alphanumeric</li>
              </ul>
            </div>
          </div>

          <div className="col-4">
            <div className="page-nav-container">
              <div className="page-nav">
                <ul>
                  <li><h2 className="page-nav-heading">Sections</h2></li>
                  <li><a className="active" href="#">Overview</a></li>
                  <li><a href="#">Eligibility</a></li>
                  <li><a href="#">Registering Your Feed</a></li>
                  <li><a href="#">Managing Your Feeds</a></li>
                  <li><a href="#">Product Feed Specification</a></li>
                  <li><a href="#">Languages</a></li>
                  <li><a href="#">Transferring Your File</a></li>
                  <li><a href="#">Using Your Product Feed for Item-Level Commissioning</a></li>
                  <li><a href="#">Troubleshooting</a></li>
                  <li><a href="#">Contacting CJ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  </PageContent>
</div>;
export default DevPortal;

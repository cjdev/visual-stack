
import React from 'react';

import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
import { PageHeader, PageTitle } from '@cjdev/visual-stack/lib/components/PageHeader';
import './index.css';


const Forms = () =>
  <div>

    <PageHeader>
      <PageTitle>Forms</PageTitle>
    </PageHeader>
    <PageContent>

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
                  <br />
                  <input className="" type="text" />
                </div>
                <div className="input-container">
                  <label>Street Address</label>
                  <br />
                  <input className="" type="text" />
                </div>
                <div className="input-container">
                  <label>City</label>
                  <br />
                  <input className="" type="text" />
                </div>
                <div className="input-container">
                  <label>State</label>
                  <br />
                  <select>
                    <option>Select State</option>
                  </select>
                </div>
                <div className="input-container">
                  <label>Zip</label>
                  <br />
                  <input className="" type="text" />
                </div>
                <div className="input-container">
                  <br />
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

    </PageContent>

  </div>;

export default Forms;

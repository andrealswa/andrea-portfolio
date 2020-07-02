import React from 'react';
import { Thumbnail } from './Thumbnail';

export const Item = (props) => {
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <div className="text-center">
          <div className="card px-5">
            <div className="row">
              <div className="col-md-4">
                <Thumbnail />
              </div>
              <div className="col-md-8">
                <div className="pt-4 pb-4">
                  <h4>{props.title}</h4>
                  <p>{props.description}</p>
                  <div className="cta-wrapper">
                    <a className="btn cta-btn">
                      Watch my System Interaction Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

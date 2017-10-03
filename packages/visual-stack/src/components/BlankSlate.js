import React from 'react';
import PropTypes from 'prop-types';
import { Button as BaseButton } from './Button';
import './BlankSlate.css';

export const Wrapper = ({ children, title, subTitle, subTitle2, bubbleImg }) => {
  const imgSrc = bubbleImg || require('../images/visual-stack/default-list-bs-img.png');
  const titleText = title || 'You do not have any content.';
  const subTitle2El = subTitle2 && <div className="bs-subtitle">{subTitle2}</div>;
  return (
    <div className="row blankslate">
      <div className="col-xs-2" />
      <div className="blank-slate col-xs-8">
        <div className="blank-slate-img-wrapper">
          <div className="bs-bubble-img">
            <img src={imgSrc} />
          </div>
        </div>
        <div className="blankslate-title">{titleText}</div>
        <div className="bs-subtitle">{subTitle}</div>
        {subTitle2El}
        {children}
      </div>
      <div className="col-xs-2" />
    </div>);
};
Wrapper.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  subTitle2: PropTypes.string,
  bubbleImg: PropTypes.string,
};

export const Button = ({ onClick, text }) =>
  <div className="bs-button-wrapper">
    <div>
      <h2>Get started now!</h2>
      <BaseButton
        className="bs-button"
        size="lg"
        type="primary"
        onClick={onClick}>
        <span className="bs-button-text">{text || 'Create Content'}</span>
      </BaseButton>
    </div>
  </div>;
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default Wrapper;

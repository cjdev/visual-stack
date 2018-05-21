import React from 'react';
import R from 'ramda';
import { parse, trimLeadingWhiteSpace } from './snippetParser';
import './styles.css';

export const InlineSnippet = ({ tag, src }) => {
  const srcTag = R.view(R.lensPath([tag]))(src);
  if (!srcTag) return null;
  return (
    <pre className="inline-snippet">
      <code>
        { trimLeadingWhiteSpace(src[tag]).join(' ') }
      </code>
    </pre>
  );
};

export const Snippet = ({ tag, src }) => {
  const srcTag = R.view(R.lensPath([tag]))(src);
  if (!srcTag) return null;
  return (
    <div className="snippet">
      <pre>
        <code>
          { trimLeadingWhiteSpace(src[tag]).join('\n') }
        </code>
      </pre>
    </div>
  );
};

export class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: {},
      srcFile: props.srcFile,
    };
  }

  componentDidMount() {
    fetch(this.state.srcFile)
      .then(res => res.text())
      .then(src => this.setState({
        src: parse(src),
      }));
  }

  render() {
    return this.props.children(this.state.src);
  }
}

/* eslint-disable */
import React, {Component} from 'react';
import ReactSelect, {components} from 'react-select';
import ReactCreatableSelect from 'react-select/lib/Creatable';
import cn from 'classnames';
import './Select.css';

const createOption = (label) => ({
    label,
    value: label,
});


const Select = ({className, error, disabled, ...otherProps}) => (
  <ReactSelect className={cn({"vs-input-error": error}, "vs-default-react-select", className)}
               classNamePrefix={"vs-react-select"}
               isDisabled={disabled}
               {...otherProps}/>
);

export class CreatableSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            value: [],
        };
    }

    handleChange = (value) => {
        this.setState({ value });
        this.props.handleUpdate(value);
    };

    handleInputChange = (inputValue) => {
        this.setState({ inputValue });
    };

    handleNums = (event) => {
        const { inputValue, value } = this.state;
        if (!inputValue) return;
        const parsedInt = parseInt(inputValue);
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                if(parsedInt) {
                    this.setState({
                        inputValue: '',
                        value: [...value, createOption(parsedInt)],
                    });
                    event.preventDefault();
                    this.props.handleUpdate([...value, createOption(parsedInt)]);
                } else {
                    this.setState({
                        inputValue: ''
                    });
                }
        }

    };

    handleStrings = (event) => {
        const { inputValue, value } = this.state;
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                this.setState({
                    inputValue: '',
                    value: [...value, createOption(inputValue)],
                });
                event.preventDefault();
                this.props.handleUpdate([...value, createOption(inputValue)]);
        }

    };

    handleKeyDown = (event) => {
        if(this.props.handleNums) {
            this.handleNums(event)
        } else{
            this.handleStrings(event)
        }
    };


    render() {
        const { inputValue, value } = this.state;
        return (
            <ReactCreatableSelect
                className={cn("vs-default-react-select", this.props.className)}
                classNamePrefix={"vs-react-select"}
                components={{DropdownIndicator: null}}
                inputValue={inputValue}
                isClearable
                isMulti
                menuIsOpen={false}
                onChange={this.handleChange}
                onInputChange={this.handleInputChange}
                onKeyDown={this.handleKeyDown}
                placeholder={this.props.placeholder}
                value={value}
                {...this.props}
            />
        );
    }
}


export default Select;

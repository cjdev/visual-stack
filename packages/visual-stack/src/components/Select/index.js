/* eslint-disable */
import React, {Component} from 'react';
import ReactSelect from 'react-select';
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

const styles = {
    control: (base) => ({
        ...base,
        boxShadow: "none",
        backgroundColor: "white",
        '&:hover': { borderColor: '#29c3aa' },
        border: '1px solid lightgray',
})
};

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

    handleKeyDown = (event) => {
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

    render() {
        const { inputValue, value } = this.state;
        return (
            <ReactCreatableSelect
                styles={styles}
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

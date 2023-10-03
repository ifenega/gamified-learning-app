


export const customDropDownStyles = {
    control: (provided: any, state: {
        menuIsOpen: any;
        hasValue: any;
        selectProps: any; isFocused: any, isDisabled: any
    }) => ({
        ...provided,
        boxShadow: 'none !important',
        '*': {
            boxShadow: 'none !important',
        },
        borderRadius: "12px",
        padding: '12px',
        background: state.isDisabled ? '#F2F4F7' : "transparent",
        border: state.isFocused ? '1px solid #36BFFA' : '1px solid #EAECF0',
        color: "#344054",
        outline: "none",
        '&:focus': {
            border: state.isFocused ? '1px solid #36BFFA' : (state.menuIsOpen && state.hasValue && state.selectProps.error ? "1px solid #EE615F" : '1px solid #EAECF0'),
        },
    }),
    menu: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: 'white', // set the background color here
        borderRadius: "12px",
        padding: "8px"
    }),
    dropdownIndicator: (provided: any, state: any) => ({
        ...provided,
        color: "#344054",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
        ...provided,
        color: "#344054",
        paddingRight: '10px',
        '& .separator': {
            display: 'none',
        },
    }),
    option: (provided: any, state: { isSelected: any; }) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#F9F9FA' : '#FFFFFF',
        color: '#344054',
        '&:hover': {
            backgroundColor: 'rgb(229 231 235 / 1)',
        },
    }),
    separator: (provided: any, state: any) => ({
        ...provided,
        display: 'none',
    }),
    clearIndicator: (provided: any, state: any) => ({
        ...provided,
        display: 'none',
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: '#1D2939',
    }),
}


export const CustomToast = (type: ToastType, message: string, title?: string, cancel: boolean = false) => {
    const event = new CustomEvent('show-toast', {
        detail: {
            message: message,
            type: type,
            title: title,
            cancel: cancel
        },
    });

    window.dispatchEvent(event);
};


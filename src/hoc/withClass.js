import React from 'react';
const withdraw = (WrappedComponent,className) => {
    return props => (
    <div className={className}>
    <WrappedComponent {...props}/>
    </div>
    );
};

export default withdraw;
import React from 'react';

const withAgeHighlight = (WrappedComponent, ageThreshold) => {
    return (props) => {
        const { user } = props;
        const shouldHighlight = user && user.age > ageThreshold;

        const containerStyle = {
            backgroundColor: shouldHighlight ? 'blue' : 'transparent'
        };

        return (
            <div style={containerStyle}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withAgeHighlight;
